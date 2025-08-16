"use client";
import React, { useState, useEffect } from 'react';
import { FaEye, FaTrash, FaTimes, FaFileExport } from 'react-icons/fa';
import { Popconfirm } from 'antd';
import * as XLSX from 'xlsx';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Benevoles() {
    const [benevoles, setBenevoles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchName, setSearchName] = useState("");
    const [sortAsc, setSortAsc] = useState(false);  // true for ascending, false for descending
    const [currentPage, setCurrentPage] = useState(1);  // Track current page
    const [itemsPerPage, setItemsPerPage] = useState(8); // Number of items per page
    const [selectedVolunteer, setSelectedVolunteer] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const imageDefault = "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/dashboard%2Favatar.png?alt=media&token=eb86123a-2582-4770-80cb-c1c63352dbd4"
    const [exporting, setExporting] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api-mmcansh33q-uc.a.run.app/v1/benevolat', {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
                const result = await response.json();

                if (result.status && result.data) {
                    // Transform the data to match our expected format
                    const formattedData = result.data.map((item, index) => ({
                        id: item.id || index + 1,
                        name: `${item.prenom} ${item.nom}`,
                        role: item.domaine || "Bénévole",
                        disponibilites: item.dispo || "N/A",
                        joinDate: formatFirebaseTimestamp(item.createdAt),
                        email: item.email || "N/A",
                        telephone: item.telephone || "N/A",
                        // Store the original data for the modal
                        rawData: item
                    }));

                    setBenevoles(formattedData);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Function to format Firebase timestamp
    const formatFirebaseTimestamp = (timestamp) => {
        if (!timestamp) return "N/A";

        try {
            const date = new Date(timestamp._seconds * 1000);
            return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
        } catch (error) {
            return "N/A";
        }
    };

    // Sort the benevoles based on join date (ascending or descending)
    const sortedBenevoles = [...benevoles].sort((a, b) => {
        const dateA = new Date(a.joinDate);
        const dateB = new Date(b.joinDate);
        return sortAsc ? dateA - dateB : dateB - dateA;  // Toggle sort order
    });

    // Filter the sortedBenevoles based on search by name
    const filteredBenevoles = sortedBenevoles.filter(benevole =>
        benevole.name.toLowerCase().includes(searchName.toLowerCase())
    );

    // Calculate total pages
    const totalPages = Math.ceil(filteredBenevoles.length / itemsPerPage);

    // Get the current page data
    const currentBenevoles = filteredBenevoles.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Handle page click
    const handlePaginationClick = (page) => {
        setCurrentPage(page);
    };

    // Handle view details
    const handleViewDetails = (benevole) => {
        setSelectedVolunteer(benevole);
        setShowModal(true);
    };

    // Close modal
    const closeModal = () => {
        setShowModal(false);
        setSelectedVolunteer(null);
    };

    // Delete volunteer function
    const deleteVolunteer = async (id) => {
        try {
            const response = await fetch(`https://api-mmcansh33q-uc.a.run.app/v1/benevolat/${id}`, {
                method: 'DELETE',                
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (response.ok) {
                // Remove the deleted volunteer from the state
                setBenevoles(benevoles.filter(benevole => benevole.id !== id));
                toast.success('Bénévole supprimé avec succès');
            } else {
                console.error("Failed to delete volunteer");
            }
        } catch (error) {
            console.error("Error deleting volunteer:", error);
        }
    };

    // Cancel delete action
    const cancelDelete = () => {
        console.log('Delete cancelled');
    };

    // Add styles for animations
    const modalOverlayStyles = showModal
        ? "fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out opacity-100"
        : "fixed inset-0 bg-black bg-opacity-0 backdrop-blur-none flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none";

    const modalContentStyles = showModal
        ? "bg-white rounded-lg p-6 w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl transform transition-transform duration-300 ease-in-out scale-100"
        : "bg-white rounded-lg p-6 w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl transform transition-transform duration-300 ease-in-out scale-95 opacity-0";

    // Add export to Excel function
    const exportToExcel = () => {
        setExporting(true);
        try {
            // Prepare the data for export
            const exportData = benevoles.map(benevole => ({
                'Nom': benevole.name,
                'Email': benevole.email,
                'Téléphone': benevole.telephone,
                'Domaine': benevole.role,
                'Disponibilités': benevole.disponibilites,
                'Date d\'inscription': benevole.joinDate,
                'Activités Foyer': benevole.rawData.foyer?.join(', ') || '',
                'Activités École': benevole.rawData.ecole?.join(', ') || '',
                'Formations': benevole.rawData.formations?.join(', ') || '',
                'Administration': benevole.rawData.administration?.join(', ') || ''
            }));

            // Create worksheet
            const ws = XLSX.utils.json_to_sheet(exportData);

            // Create workbook
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Bénévoles");

            // Generate Excel file
            XLSX.writeFile(wb, "benevoles.xlsx");

            toast.success('Export réussi');
        } catch (error) {
            console.error("Error exporting to Excel:", error);
            toast.error('Échec de l\'export');
        } finally {
            setExporting(false);
        }
    };

    // Handle items per page change
    const handleItemsPerPageChange = (e) => {
        const newItemsPerPage = parseInt(e.target.value);
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1); // Reset to first page when changing items per page
    };

    return (
        <section className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="py-3 sm:py-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <label className="block mb-1 text-sm sm:text-base">Rechercher par nom:</label>
                    <input
                        type="text"
                        className="form-input w-full p-2 border rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Rechercher"
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto md:items-end">
                    <div className="flex flex-col w-full sm:w-auto">
                        <label className="block mb-1 text-sm sm:text-base">Éléments par page:</label>
                        <select
                            value={itemsPerPage}
                            onChange={handleItemsPerPageChange}
                            className="form-select p-2 border rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-auto"
                        >
                            <option value="4">4</option>
                            <option value="8">8</option>
                            <option value="12">12</option>
                            <option value="16">16</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                    <button
                        onClick={exportToExcel}
                        disabled={exporting}
                        className="w-full sm:w-auto px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        <FaFileExport />
                        {exporting ? 'Exportation...' : 'Exporter en Excel'}
                    </button>
                </div>
            </div>

            {loading ? (
                <div className="text-center py-10">
                    <p>Chargement...</p>
                </div>
            ) : (
                <>
                    <div className="overflow-x-auto rounded-md shadow mt-2">
                        <table className="min-w-full bg-white rounded-md overflow-hidden text-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-2 sm:px-4 py-2 text-left">Nom</th>
                                    <th className="px-2 sm:px-4 py-2 text-left hidden md:table-cell">Domaine</th>
                                    <th className="px-2 sm:px-4 py-2 text-left hidden lg:table-cell">Disponibilités</th>
                                    <th
                                        onClick={() => setSortAsc(!sortAsc)}
                                        style={{ cursor: 'pointer' }}
                                        className="px-2 sm:px-4 py-2 text-left hidden sm:table-cell"
                                    >
                                        Date
                                        <span className="ml-2">
                                            {sortAsc ? "↑" : "↓"}
                                        </span>
                                    </th>
                                    <th className="px-2 sm:px-4 py-2 text-left hidden md:table-cell">Contact</th>
                                    <th className="px-2 sm:px-4 py-2 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentBenevoles.map(benevole => (
                                    <tr key={benevole.id} className="hover:bg-gray-50 border-b border-gray-100">
                                        <td className="px-2 sm:px-4 py-2 align-top">
                                            <p className="font-medium text-sm sm:text-base">{benevole.name}</p>
                                            <p className="font-medium text-xs text-gray-500 truncate max-w-[120px] sm:max-w-[200px]">{benevole.email}</p>
                                            <p className="text-xs sm:text-sm text-gray-500 md:hidden">{benevole.role}</p>
                                            <p className="text-xs text-gray-500 sm:hidden">{benevole.joinDate}</p>
                                            <p className="text-xs text-gray-500 md:hidden">{benevole.telephone}</p>
                                        </td>
                                        <td className="px-2 sm:px-4 py-2 hidden md:table-cell align-top">
                                            <p className="font-normal">{benevole.role}</p>
                                        </td>
                                        <td className="px-2 sm:px-4 py-2 hidden lg:table-cell align-top">
                                            <p className="font-normal">{benevole.disponibilites}</p>
                                        </td>
                                        <td className="px-2 sm:px-4 py-2 hidden sm:table-cell align-top">
                                            <p className="font-normal">{benevole.joinDate}</p>
                                        </td>
                                        <td className="px-2 sm:px-4 py-2 hidden md:table-cell align-top">
                                            <p className="font-normal truncate max-w-[120px]">{benevole.telephone}</p>
                                        </td>
                                        <td className="px-2 sm:px-4 py-2 align-top">
                                            <div className="flex space-x-2">
                                                <button
                                                    type="button"
                                                    className="btn_view px-2 py-1 sm:px-3 sm:py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-xs sm:text-sm flex items-center justify-center"
                                                    onClick={() => handleViewDetails(benevole)}
                                                >
                                                    <FaEye />
                                                </button>
                                                <div className="relative inline-block">
                                                    <button
                                                        type="button"
                                                        className="text-white px-2 py-1 sm:px-3 sm:py-1 bg-red-500 hover:bg-red-600 rounded-md text-xs sm:text-sm flex items-center justify-center"
                                                        onClick={() => deleteVolunteer(benevole.id)}
                                                    >
                                                        <FaTrash />
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination controls */}
                    <div className="flex justify-center mt-4 mb-4">
                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => handlePaginationClick(index + 1)}
                                    className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold transition-colors duration-200
                                        ${index + 1 === currentPage
                                            ? 'bg-blue-600 text-white shadow'
                                            : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}

            {/* Detail Modal */}
            <div className={modalOverlayStyles} onClick={closeModal}>
                {selectedVolunteer && (
                    <div
                        className={modalContentStyles}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="fle">
                            <div className=" mt-4 lg:mt-0">
                                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                                    <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <h4 className="font-semibold text-blue-700 border-b border-blue-100 pb-2 mb-3 text-sm sm:text-base">Informations Personnelles</h4>
                                        <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                                            <p className="hover:bg-blue-50 p-2 rounded transition-colors duration-200"><span className="font-medium text-gray-700">Prénom:</span> <span className="text-gray-800">{selectedVolunteer.rawData.prenom}</span></p>
                                            <p className="hover:bg-blue-50 p-2 rounded transition-colors duration-200"><span className="font-medium text-gray-700">Nom:</span> <span className="text-gray-800">{selectedVolunteer.rawData.nom}</span></p>
                                            <p className="hover:bg-blue-50 p-2 rounded transition-colors duration-200"><span className="font-medium text-gray-700">Email:</span> <span className="text-blue-600 break-all">{selectedVolunteer.rawData.email}</span></p>
                                            <p className="hover:bg-blue-50 p-2 rounded transition-colors duration-200"><span className="font-medium text-gray-700">Téléphone:</span> <span className="text-gray-800">{selectedVolunteer.rawData.telephone}</span></p>
                                            <p className="hover:bg-blue-50 p-2 rounded transition-colors duration-200"><span className="font-medium text-gray-700">Date d'inscription:</span> <span className="text-gray-800">{selectedVolunteer.joinDate}</span></p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <h4 className="font-semibold text-blue-700 border-b border-blue-100 pb-2 mb-3 text-sm sm:text-base">Domaine de compétence</h4>
                                        <div className="text-sm sm:text-base">
                                            <p className="p-2 rounded"><span className="font-medium text-gray-700">Domaine principal:</span> <span className="text-gray-800 bg-white px-3 py-1 rounded-md">{selectedVolunteer.rawData.domaine}</span></p>
                                            <p className="p-2 rounded"><span className="font-medium text-gray-700">Disponibilités:</span> <span className="text-gray-800 bg-white px-3 py-1 rounded-md">{selectedVolunteer.rawData.dispo}</span></p>
                                            {selectedVolunteer.rawData.foyer && selectedVolunteer.rawData.foyer.length > 0 && (
                                                <div className="mt-4 bg-white p-3 sm:p-4 rounded-md shadow-sm transform hover:scale-[1.01] transition-transform duration-300">
                                                    <p className="font-medium text-blue-600 text-sm sm:text-base">Activités de foyer:</p>
                                                    <ul className="list-inside mt-2 space-y-2 text-xs sm:text-sm">
                                                        {selectedVolunteer.rawData.foyer.map((item, index) => (
                                                            <li key={index} className="flex items-baseline text-gray-700">
                                                                <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                                                                <span className="break-words">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {selectedVolunteer.rawData.ecole && selectedVolunteer.rawData.ecole.length > 0 && (
                                                <div className="mt-4 bg-white p-3 sm:p-4 rounded-md shadow-sm transform hover:scale-[1.01] transition-transform duration-300">
                                                    <p className="font-medium text-blue-600 text-sm sm:text-base">Activités scolaires:</p>
                                                    <ul className="list-inside mt-2 space-y-2 text-xs sm:text-sm">
                                                        {selectedVolunteer.rawData.ecole.map((item, index) => (
                                                            <li key={index} className="flex items-baseline text-gray-700">
                                                                <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                                                                <span className="break-words">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {selectedVolunteer.rawData.formations && selectedVolunteer.rawData.formations.length > 0 && (
                                                <div className="mt-4 bg-white p-3 sm:p-4 rounded-md shadow-sm transform hover:scale-[1.01] transition-transform duration-300">
                                                    <p className="font-medium text-blue-600 text-sm sm:text-base">Formations:</p>
                                                    <ul className="list-inside mt-2 space-y-2 text-xs sm:text-sm">
                                                        {selectedVolunteer.rawData.formations.map((item, index) => (
                                                            <li key={index} className="flex items-baseline text-gray-700">
                                                                <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                                                                <span className="break-words">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {selectedVolunteer.rawData.administration && selectedVolunteer.rawData.administration.length > 0 && (
                                                <div className="mt-4 bg-white p-3 sm:p-4 rounded-md shadow-sm transform hover:scale-[1.01] transition-transform duration-300">
                                                    <p className="font-medium text-blue-600 text-sm sm:text-base">Administration:</p>
                                                    <ul className="list-inside mt-2 space-y-2 text-xs sm:text-sm">
                                                        {selectedVolunteer.rawData.administration.map((item, index) => (
                                                            <li key={index} className="flex items-baseline text-gray-700">
                                                                <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                                                                <span className="break-words">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 text-right border-t pt-4">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105 text-sm sm:text-base"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
} 