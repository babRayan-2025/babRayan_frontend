"use client";
import React, { useState, useEffect } from 'react';
import { Modal, Popconfirm } from 'antd';
import { FaEye, FaTrash, FaPenToSquare, FaArrowUp, FaArrowDown, FaCheck, FaFileExcel } from 'react-icons/fa6';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as XLSX from 'xlsx';

export default function Partenaires() {
    const [partenaires, setPartenaires] = useState([]);
    const [pendingPartenairesCount, setPendingPartenairesCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [exporting, setExporting] = useState(false);

    const [searchName, setSearchName] = useState("");
    const [sortAsc, setSortAsc] = useState(false);  // true for ascending, false for descending
    const [currentPage, setCurrentPage] = useState(1);  // Track current page
    const [itemsPerPage, setItemsPerPage] = useState(4); // Number of items per page
    const imageDefault = "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/avatar%20user.png?alt=media&token=96fd3b25-26e0-4ae8-92b6-fe1548f42685";
    const token = localStorage.getItem("token");

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPartenaire, setSelectedPartenaire] = useState(null);

    useEffect(() => {
        const fetchPartenaires = async () => {
            try {
                const response = await fetch('https://api-vevrjfohcq-uc.a.run.app/v1/partenaire', {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
                const result = await response.json();

                if (result.status && result.data) {
                    // Transform the API data to match our UI format
                    const formattedData = result.data.map(partner => ({
                        id: partner.id,
                        image: imageDefault,
                        name: partner.nom,
                        profession: partner.profession,
                        startDate: formatDate(partner.createdAt._seconds * 1000),
                        email: partner.email,
                        message: partner.message,
                        telephone: partner.telephone,
                        approuve: partner.approuve || false // Add approval status
                    }));

                    setPartenaires(formattedData);

                    // Count pending partners (not approved)
                    const pendingCount = result.data.filter(partner => !partner.approuve).length;
                    setPendingPartenairesCount(pendingCount);
                } else {
                    setError('Failed to fetch partners data');
                }
            } catch (err) {
                setError('Error fetching partners: ' + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPartenaires();
    }, []);

    // Format timestamp to YYYY-MM-DD
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toISOString().split('T')[0];
    };

    // Handle view partner details
    const handleViewPartenaire = (partenaire) => {
        setSelectedPartenaire(partenaire);
        setIsModalOpen(true);
    };

    // Handle delete partner
    const handleDeletePartenaire = async (id) => {
        try {
            // Make API call to delete the partner
            const response = await fetch(`https://api-vevrjfohcq-uc.a.run.app/v1/partenaire/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                toast.error('Erreur lors de la suppression du partenaire');
                throw new Error('Erreur lors de la suppression du partenaire');
            }

            toast.success('Partenaire supprimé avec succès');


            // Remove from local state after successful API call
            setPartenaires(prevPartenaires =>
                prevPartenaires.filter(partenaire => partenaire.id !== id)
            );
        } catch (err) {
            console.error("Error deleting partner:", err);
        }
    };

    // Handle approve partner
    const handleApprovePartenaire = async (id) => {
        try {
            // Make API call to approve the partner
            const response = await fetch(`https://api-vevrjfohcq-uc.a.run.app/v1/partenaire/${id}/approuve`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`,
                }
            });

            if (!response.ok) {
                toast.error('Erreur lors de l\'approbation du partenaire');
                throw new Error('Erreur lors de l\'approbation du partenaire');
            }

            toast.success('Partenaire approuvé avec succès');

            // Update the partner's status in the local state
            setPartenaires(prevPartenaires =>
                prevPartenaires.map(partenaire =>
                    partenaire.id === id
                        ? { ...partenaire, approuve: true }
                        : partenaire
                )
            );

            // If the modal is open, update the selected partner
            if (selectedPartenaire && selectedPartenaire.id === id) {
                setSelectedPartenaire({ ...selectedPartenaire, approuve: true });
            }
        } catch (err) {
            console.error("Error approving partner:", err);
        }
    };

    // Sort the partenaires based on start date (ascending or descending)
    const sortedPartenaires = [...partenaires].sort((a, b) => {
        const dateA = new Date(a.startDate);
        const dateB = new Date(b.startDate);
        return sortAsc ? dateA - dateB : dateB - dateA;  // Toggle sort order
    });

    // Filter the sortedPartenaires based on search by name and approval status
    const filteredPartenaires = sortedPartenaires.filter(partenaire =>
        partenaire.name.toLowerCase().includes(searchName.toLowerCase()) &&
        partenaire.approuve === true
    );

    // Calculate total pages
    const totalPages = Math.ceil(filteredPartenaires.length / itemsPerPage);

    // Get the current page data
    const currentPartenaires = filteredPartenaires.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Handle page click
    const handlePaginationClick = (page) => {
        setCurrentPage(page);
    };

    // Handle items per page change
    const handleItemsPerPageChange = (e) => {
        const newItemsPerPage = parseInt(e.target.value);
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1); // Reset to first page when changing items per page
    };

    // Add export to Excel function
    const exportToExcel = () => {
        setExporting(true);
        try {
            // Prepare the data for export
            const exportData = filteredPartenaires.map(partenaire => ({
                'Nom': partenaire.name,
                'Email': partenaire.email,
                'Type': partenaire.profession,
                'Téléphone': partenaire.telephone,
                'Date de début': partenaire.startDate,
            }));

            // Create worksheet
            const ws = XLSX.utils.json_to_sheet(exportData);

            // Create workbook
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Partenaires");

            // Generate Excel file
            XLSX.writeFile(wb, `partenaires_${new Date().toISOString().split('T')[0]}.xlsx`);
            toast.success('Export réussi');
        } catch (error) {
            console.error("Error exporting to Excel:", error);
            toast.error('Échec de l\'export');
        } finally {
            setExporting(false);
        }
    };

    if (loading) {
        return <div className="flex justify-center items-center h-64">
            <p className="text-lg">Chargement des partenaires...</p>
        </div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-64">
            <p className="text-lg text-red-500">{error}</p>
        </div>;
    }

    return (
        <section className="px-2 sm:px-4">
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
            />                 {/* Search and Controls */}
            <div className="py-4 flex flex-col sm:flex-row justify-between gap-4">
                <div className="w-full sm:w-64">
                    <label htmlFor="searchName" className="block text-sm font-medium mb-1">
                        Rechercher par nom:
                    </label>
                    <input
                        id="searchName"
                        type="text"
                        className="form-input w-full p-2 border rounded"
                        placeholder="Rechercher"
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex items-center">
                        <label htmlFor="itemsPerPage" className="mr-2 text-sm font-medium">Éléments par page:</label>
                        <select
                            id="itemsPerPage"
                            className="p-2 border rounded"
                            value={itemsPerPage}
                            onChange={(e) => {
                                setItemsPerPage(Number(e.target.value));
                                setCurrentPage(1);
                            }}
                        >
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                        </select>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={exportToExcel}
                            disabled={exporting}
                            className="btn_examine w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
                        >
                            <FaFileExcel className="mr-2" />
                            {exporting ? 'Exportation...' : 'Exporter en Excel'}
                        </button>
                        <button
                            onClick={() => window.location.href = "/dashboard/partners/examine"}
                            className="btn_examine w-full sm:w-auto px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center"
                        >
                            Examiner les partenaires
                            {pendingPartenairesCount > 0 && (
                                <span className="ml-2 bg-white text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                                    {pendingPartenairesCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto">
                <table className="table-auto w-full bg-white shadow-lg rounded-md overflow-hidden">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-2 sm:px-4 py-2 text-left"> </th>
                            <th className="px-2 sm:px-4 py-2 text-left">Nom</th>
                            <th className="px-2 sm:px-4 py-2 text-left hidden md:table-cell">Type</th>
                            <th
                                onClick={() => setSortAsc(!sortAsc)}
                                style={{ cursor: 'pointer' }}
                                className="px-4 py-2 text-left flex items-center min-w-[200px]"
                            >
                                Date de début <span className="ml-2">{sortAsc ? <FaArrowUp /> : <FaArrowDown />}</span>
                            </th>
                            <th className="px-2 sm:px-4 py-2 text-left hidden sm:table-cell">Contact</th>
                            <th className="px-2 sm:px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPartenaires.length > 0 ? (
                            currentPartenaires.map(partenaire => (
                                <tr key={partenaire.id}>
                                    <td className="px-2 sm:px-4 py-2">
                                        <div className="flex items-center">
                                            <img
                                                src={partenaire.image}
                                                alt={partenaire.name}
                                                className="w-14 sm:w-20 h-10 sm:h-12 object-cover rounded-md"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-2 sm:px-4 py-2">
                                        <p className="font-medium">{partenaire.name}</p>
                                        <p className="text-xs text-gray-500">{partenaire.email}</p>
                                    </td>
                                    <td className="px-2 sm:px-4 py-2 hidden md:table-cell">
                                        <p className="font-normal">{partenaire.profession}</p>
                                    </td>
                                    <td className="px-2 sm:px-4 py-2 hidden md:table-cell">
                                        <p className="font-normal">{partenaire.startDate}</p>
                                    </td>
                                    <td className="px-2 sm:px-4 py-2 hidden sm:table-cell">
                                        <p className="font-normal">{partenaire.telephone}</p>
                                    </td>
                                    <td className="px-2 sm:px-4 py-2">
                                        <div className="flex flex-row gap-2">
                                            <button
                                                type="button"
                                                className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                                onClick={() => handleViewPartenaire(partenaire)}
                                                title="Voir les détails"
                                            >
                                                <FaEye />
                                            </button>
                                            {!partenaire.approuve && (
                                                <button
                                                    type="button"
                                                    className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                                                    onClick={() => handleApprovePartenaire(partenaire.id)}
                                                    title="Approuver le partenaire"
                                                >
                                                    <FaCheck />
                                                </button>
                                            )}
                                            <div className="relative inline-block">
                                                <button
                                                    type="button"
                                                    className="text-white px-2 py-1 sm:px-3 sm:py-1 bg-red-500 hover:bg-red-600 rounded-md text-xs sm:text-sm flex items-center justify-center"
                                                    onClick={() => handleDeletePartenaire(partenaire.id)}
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>


                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="px-4 py-6 text-center">
                                    Aucun partenaire trouvé
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination controls */}
            {filteredPartenaires.length > 0 && (
                <div className="flex flex-col sm:flex-row justify-center items-center mt-4 gap-4">
                    <div className="flex flex-wrap justify-center gap-2">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePaginationClick(index + 1)}
                                className={`px-3 sm:px-4 py-1 sm:py-2 rounded-md ${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Partner Details Modal */}
            <Modal
                title="Détails du partenaire"
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={[
                    <div key="buttons" className="flex justify-between">
                        <div>
                            {selectedPartenaire && !selectedPartenaire.approuve && (
                                <button
                                    key="approve"
                                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 mr-2"
                                    onClick={() => handleApprovePartenaire(selectedPartenaire.id)}
                                >
                                    Approuver
                                </button>
                            )}
                        </div>
                        <button
                            key="close"
                            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Fermer
                        </button>
                    </div>
                ]}
                width={600}
            >
                {selectedPartenaire && (
                    <div className="p-4">
                        <div className="flex items-center mb-6">
                            <img
                                src={selectedPartenaire.image}
                                alt=""
                                className="w-16 h-16 object-cover rounded-full mr-4"
                            />
                            <div>
                                <h3 className="text-xl font-semibold">{selectedPartenaire.name}</h3>
                                <p className="text-gray-500">{selectedPartenaire.email}</p>
                                {selectedPartenaire.approuve && (
                                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mt-1">
                                        Approuvé
                                    </span>
                                )}
                                {!selectedPartenaire.approuve && (
                                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mt-1">
                                        En attente d'approbation
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="font-semibold mb-1">Téléphone:</p>
                                <p className="text-gray-700">{selectedPartenaire.telephone || 'Non disponible'}</p>
                            </div>
                            <div>
                                <p className="font-semibold mb-1">Type:</p>
                                <p className="text-gray-700">{selectedPartenaire.profession}</p>
                            </div>
                            <div>
                                <p className="font-semibold mb-1">Date de début:</p>
                                <p className="text-gray-700">{selectedPartenaire.startDate}</p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="font-semibold mb-2">Message:</p>
                            <div className="p-3 bg-gray-100 rounded-md">
                                <p className="text-gray-700">{selectedPartenaire.message || "Aucun message"}</p>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
} 