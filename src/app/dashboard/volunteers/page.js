"use client";
import React, { useState, useEffect } from 'react';
import { FaEye, FaTrash } from 'react-icons/fa';
import { Popconfirm } from 'antd';

export default function Benevoles() {
    const [benevoles, setBenevoles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchName, setSearchName] = useState("");
    const [sortAsc, setSortAsc] = useState(false);  // true for ascending, false for descending
    const [currentPage, setCurrentPage] = useState(1);  // Track current page
    const [itemsPerPage, setItemsPerPage] = useState(4); // Number of items per page
    const [selectedVolunteer, setSelectedVolunteer] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const imageDefault = "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/dashboard%2Favatar.png?alt=media&token=eb86123a-2582-4770-80cb-c1c63352dbd4"
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api-mmcansh33q-uc.a.run.app/v1/benevolat');
                const result = await response.json();

                if (result.status && result.data) {
                    // Transform the data to match our expected format
                    const formattedData = result.data.map((item, index) => ({
                        id: item.id || index + 1,
                        image: imageDefault, // Placeholder image
                        name: `${item.prenom} ${item.nom}`,
                        role: item.domaine || "Bénévole",
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
            });
            
            if (response.ok) {
                // Remove the deleted volunteer from the state
                setBenevoles(benevoles.filter(benevole => benevole.id !== id));
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

    return (
        <section className="w-full overflow-x-auto">
            <div className="py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div className="w-full sm:w-64">
                    <label className="block mb-2">Rechercher par nom:</label>
                    <input
                        type="text"
                        className="form-input w-full p-2 border rounded"
                        placeholder="Rechercher"
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                    />
                </div>
            </div>

            {loading ? (
                <div className="text-center py-10">
                    <p>Chargement...</p>
                </div>
            ) : (
                <>
                    <div className="overflow-x-auto rounded-md shadow">
                        <table className="min-w-full bg-white rounded-md overflow-hidden">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-2 sm:px-4 py-2 text-left"> </th>
                                    <th className="px-2 sm:px-4 py-2 text-left">Nom</th>
                                    <th className="px-2 sm:px-4 py-2 text-left hidden md:table-cell">Domaine</th>
                                    <th
                                        onClick={() => setSortAsc(!sortAsc)}
                                        style={{ cursor: 'pointer' }}
                                        className="px-2 sm:px-4 py-2 text-left hidden sm:table-cell"
                                    >
                                        Date
                                        <span className="ml-2">
                                            <i className={`fa-solid ${sortAsc ? "fa-arrow-up" : "fa-arrow-down"}`} />
                                        </span>
                                    </th>
                                    <th className="px-2 sm:px-4 py-2 text-left hidden md:table-cell">Contact</th>
                                    <th className="px-2 sm:px-4 py-2 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentBenevoles.map(benevole => (
                                    <tr key={benevole.id} className="hover:bg-gray-50">
                                        <td className="px-2 sm:px-4 py-2">
                                            <div className="flex items-center">
                                                <img
                                                    src={benevole.image}
                                                    alt=""
                                                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-cover rounded-full"
                                                />
                                            </div>
                                        </td>
                                        <td className="px-2 sm:px-4 py-2">
                                            <p className="font-medium text-sm sm:text-base">{benevole.name}</p>
                                            <p className="font-medium text-xs text-gray-500">{benevole.email}</p>
                                            <p className="text-xs sm:text-sm text-gray-500 md:hidden">{benevole.role}</p>
                                            <p className="text-xs text-gray-500 sm:hidden">{benevole.joinDate}</p>
                                        </td>
                                        <td className="px-2 sm:px-4 py-2 hidden md:table-cell">
                                            <p className="font-normal">{benevole.role}</p>
                                        </td>
                                        <td className="px-2 sm:px-4 py-2 hidden sm:table-cell">
                                            <p className="font-normal">{benevole.joinDate}</p>
                                        </td>
                                        <td className="px-2 sm:px-4 py-2 hidden md:table-cell">
                                            <p className="font-normal">{benevole.telephone}</p>
                                        </td>
                                        <td className="px-2 sm:px-4 py-2">
                                            <div className="flex space-x-1 sm:space-x-2">
                                                <button
                                                    type="button"
                                                    className="btn_view px-2 py-1 sm:px-3 sm:py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-xs sm:text-sm"
                                                    onClick={() => handleViewDetails(benevole)}
                                                >
                                                    <FaEye />
                                                </button>
                                                <Popconfirm
                                                    title="Confirmation"
                                                    description="Êtes-vous sûr de vouloir supprimer ce bénévole?"
                                                    onConfirm={() => deleteVolunteer(benevole.id)}
                                                    onCancel={cancelDelete}
                                                    okText="Oui"
                                                    cancelText="Non"
                                                    okType="danger"
                                                >
                                                    <button
                                                        type="button"
                                                        className="text-white px-2 py-1 sm:px-3 sm:py-1 bg-red-500 hover:bg-red-600 rounded-md text-xs sm:text-sm"
                                                    >
                                                        <FaTrash />
                                                    </button>
                                                </Popconfirm>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination controls */}
                    <div className="flex justify-center mt-4">
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => handlePaginationClick(index + 1)}
                                    className={`px-2 sm:px-4 py-1 sm:py-2 rounded-md text-sm ${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
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
                        <div className="flex justify-between items-center mb-4 border-b pb-3">
                            <h2 className="text-lg sm:text-xl font-bold text-blue-600">Détails du Bénévole</h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-red-600 transition-colors duration-200 bg-gray-100 hover:bg-gray-200 rounded-full p-2"
                            >
                                <i className="fa-solid fa-xmark text-xl"></i>
                            </button>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                            <div className="md:w-1/3 flex flex-col items-center">
                                <div className="relative group">
                                    <img
                                        src={selectedVolunteer.image}
                                        alt={selectedVolunteer.name}
                                        className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full mb-3 border-4 border-blue-100 shadow-lg group-hover:border-blue-300 transition-all duration-300"
                                    />
                                    <div className="absolute inset-0 bg-blue-500 bg-opacity-0 rounded-full group-hover:bg-opacity-10 transition-all duration-300"></div>
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-center text-blue-800">{selectedVolunteer.name}</h3>
                                <p className="text-gray-600 text-center bg-blue-50 px-3 py-1 rounded-full text-xs sm:text-sm">{selectedVolunteer.role}</p>
                            </div>

                            <div className="md:w-2/3 mt-4 md:mt-0">
                                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <h4 className="font-semibold text-blue-700 border-b border-blue-100 pb-2 mb-2 text-sm sm:text-base">Informations Personnelles</h4>
                                        <div className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                                            <p className="hover:bg-blue-50 p-1 rounded transition-colors duration-200"><span className="font-medium text-gray-700">Prénom:</span> <span className="text-gray-800">{selectedVolunteer.rawData.prenom}</span></p>
                                            <p className="hover:bg-blue-50 p-1 rounded transition-colors duration-200"><span className="font-medium text-gray-700">Nom:</span> <span className="text-gray-800">{selectedVolunteer.rawData.nom}</span></p>
                                            <p className="hover:bg-blue-50 p-1 rounded transition-colors duration-200"><span className="font-medium text-gray-700">Email:</span> <span className="text-blue-600 break-all">{selectedVolunteer.rawData.email}</span></p>
                                            <p className="hover:bg-blue-50 p-1 rounded transition-colors duration-200"><span className="font-medium text-gray-700">Téléphone:</span> <span className="text-gray-800">{selectedVolunteer.rawData.telephone}</span></p>
                                            <p className="hover:bg-blue-50 p-1 rounded transition-colors duration-200"><span className="font-medium text-gray-700">Date d'inscription:</span> <span className="text-gray-800">{selectedVolunteer.joinDate}</span></p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <h4 className="font-semibold text-blue-700 border-b border-blue-100 pb-2 mb-2 text-sm sm:text-base">Domaine de compétence</h4>
                                        <div className="text-sm sm:text-base">
                                            <p className="p-1 rounded"><span className="font-medium text-gray-700">Domaine principal:</span> <span className="text-gray-800 bg-white px-2 py-1 rounded-md">{selectedVolunteer.rawData.domaine}</span></p>

                                            {selectedVolunteer.rawData.foyer && selectedVolunteer.rawData.foyer.length > 0 && (
                                                <div className="mt-3 bg-white p-2 sm:p-3 rounded-md shadow-sm transform hover:scale-[1.01] transition-transform duration-300">
                                                    <p className="font-medium text-blue-600 text-sm sm:text-base">Activités de foyer:</p>
                                                    <ul className="list-inside mt-1 space-y-1 text-xs sm:text-sm">
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
                                                <div className="mt-3 bg-white p-2 sm:p-3 rounded-md shadow-sm transform hover:scale-[1.01] transition-transform duration-300">
                                                    <p className="font-medium text-blue-600 text-sm sm:text-base">Activités scolaires:</p>
                                                    <ul className="list-inside mt-1 space-y-1 text-xs sm:text-sm">
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
                                                <div className="mt-3 bg-white p-2 sm:p-3 rounded-md shadow-sm transform hover:scale-[1.01] transition-transform duration-300">
                                                    <p className="font-medium text-blue-600 text-sm sm:text-base">Formations:</p>
                                                    <ul className="list-inside mt-1 space-y-1 text-xs sm:text-sm">
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
                                                <div className="mt-3 bg-white p-2 sm:p-3 rounded-md shadow-sm transform hover:scale-[1.01] transition-transform duration-300">
                                                    <p className="font-medium text-blue-600 text-sm sm:text-base">Administration:</p>
                                                    <ul className="list-inside mt-1 space-y-1 text-xs sm:text-sm">
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

                        <div className="mt-4 sm:mt-6 text-right border-t pt-3">
                            <button
                                onClick={closeModal}
                                className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105 text-sm sm:text-base"
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