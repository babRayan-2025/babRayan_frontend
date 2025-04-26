"use client";
import React, { useState, useEffect } from 'react';
import { FaEye, FaTrash, FaTimes } from 'react-icons/fa';
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
        <section className="w-full px-2 sm:px-4 py-4">
            <div className="py-3 sm:py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div className="w-full sm:w-64">
                    <label className="block mb-1 sm:mb-2 text-sm sm:text-base">Rechercher par nom:</label>
                    <input
                        type="text"
                        className="form-input w-full p-2 border rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
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
                                    <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm"> </th>
                                    <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm">Nom</th>
                                    <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm hidden md:table-cell">Domaine</th>
                                    <th
                                        onClick={() => setSortAsc(!sortAsc)}
                                        style={{ cursor: 'pointer' }}
                                        className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm hidden sm:table-cell"
                                    >
                                        Date
                                        <span className="ml-2">
                                            <i className={`fa-solid ${sortAsc ? "fa-arrow-up" : "fa-arrow-down"}`} />
                                        </span>
                                    </th>
                                    <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm hidden md:table-cell">Contact</th>
                                    <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentBenevoles.map(benevole => (
                                    <tr key={benevole.id} className="hover:bg-gray-50 border-b border-gray-100">
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
                                            <p className="font-medium text-xs text-gray-500 truncate max-w-[120px] sm:max-w-[200px]">{benevole.email}</p>
                                            <p className="text-xs sm:text-sm text-gray-500 md:hidden">{benevole.role}</p>
                                            <p className="text-xs text-gray-500 sm:hidden">{benevole.joinDate}</p>
                                        </td>
                                        <td className="px-2 sm:px-4 py-2 hidden md:table-cell text-sm">
                                            <p className="font-normal">{benevole.role}</p>
                                        </td>
                                        <td className="px-2 sm:px-4 py-2 hidden sm:table-cell text-sm">
                                            <p className="font-normal">{benevole.joinDate}</p>
                                        </td>
                                        <td className="px-2 sm:px-4 py-2 hidden md:table-cell text-sm">
                                            <p className="font-normal truncate max-w-[120px]">{benevole.telephone}</p>
                                        </td>
                                        <td className="px-2 sm:px-4 py-2">
                                            <div className="flex space-x-1 sm:space-x-2">
                                                <button
                                                    type="button"
                                                    className="btn_view px-2 py-1 sm:px-3 sm:py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-xs sm:text-sm flex items-center justify-center"
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
                                                        className="text-white px-2 py-1 sm:px-3 sm:py-1 bg-red-500 hover:bg-red-600 rounded-md text-xs sm:text-sm flex items-center justify-center"
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
                                    className={`px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm ${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
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
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-xl sm:text-2xl font-bold">Détails du Bénévole</h2>
                            <button
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                                onClick={closeModal}
                            >
                                <FaTimes className="text-lg sm:text-xl" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                                <img
                                    src={selectedVolunteer.image}
                                    alt={selectedVolunteer.name}
                                    className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                                />
                                <div className="space-y-2 text-center md:text-left">
                                    <h3 className="text-lg sm:text-xl font-semibold">{selectedVolunteer.name}</h3>
                                    <p className="text-sm sm:text-base text-gray-600">{selectedVolunteer.role}</p>
                                    <p className="text-sm text-gray-500">A rejoint le {selectedVolunteer.joinDate}</p>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <h4 className="text-base sm:text-lg font-medium mb-2">Informations de contact</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
                                    <div>
                                        <p className="font-medium">Email:</p>
                                        <p className="text-gray-600 break-words">{selectedVolunteer.email}</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">Téléphone:</p>
                                        <p className="text-gray-600">{selectedVolunteer.telephone}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <h4 className="text-base sm:text-lg font-medium mb-2">Informations personnelles</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
                                    {selectedVolunteer.rawData && (
                                        <>
                                            <div>
                                                <p className="font-medium">Âge:</p>
                                                <p className="text-gray-600">{selectedVolunteer.rawData.age || 'Non spécifié'}</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Ville:</p>
                                                <p className="text-gray-600">{selectedVolunteer.rawData.ville || 'Non spécifié'}</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Disponible:</p>
                                                <p className="text-gray-600">{selectedVolunteer.rawData.disponible ? 'Oui' : 'Non'}</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
} 