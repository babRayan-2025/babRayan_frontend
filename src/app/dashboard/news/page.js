"use client";
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEdit, FaTrash, FaArrowUp, FaArrowDown, FaEye, FaFileExcel } from 'react-icons/fa';
import { Popconfirm, message } from 'antd';
import * as XLSX from 'xlsx';

export default function Actualite() {
    const [actualites, setActualites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTitle, setSearchTitle] = useState("");
    const [sortAsc, setSortAsc] = useState(false);  // true for ascending, false for descending
    const [currentPage, setCurrentPage] = useState(1);  // Track current page
    const [itemsPerPage, setItemsPerPage] = useState(7); // Number of items per page
    const [sortField, setSortField] = useState('createdAt'); // Track which field to sort by, default to createdAt
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [actualiteToDelete, setActualiteToDelete] = useState(null);

    useEffect(() => {
        fetchNews();
    }, []);

    const formatDate = (timestamp) => {
        if (!timestamp) return 'Date inconnue';

        // Convert Firestore timestamp to JS Date
        const date = new Date(timestamp._seconds * 1000);
        return date.toLocaleDateString('fr-FR');
    };

    // Store the original timestamp for accurate sorting
    const formatNewsData = (data) => {
        return data.map(item => ({
            id: item.id,
            image: item.pic,
            title: item.title,
            datePublication: formatDate(item.createdAt),
            contenu: item.content,
            likes: item.likes,
            rawTimestamp: item.createdAt // Store the original timestamp
        }));
    };

    const fetchNews = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://api-mmcansh33q-uc.a.run.app/v1/news');
            const result = await response.json();

            if (result.status && result.data) {
                // Transform data to match our format
                const formattedData = formatNewsData(result.data);
                setActualites(formattedData);
            } else {
                toast.error("Erreur lors du chargement des actualités");
            }
        } catch (error) {
            console.error("Error fetching news:", error);
            toast.error("Erreur lors du chargement des actualités");
        } finally {
            setLoading(false);
        }
    };

    const deleteNews = async (id) => {
        try {
            const response = await fetch(`https://api-mmcansh33q-uc.a.run.app/v1/news/${id}`, {
                method: 'DELETE',
            });

            const result = await response.json();

            if (result.status) {
                toast.success("Actualité supprimée avec succès");
                fetchNews(); // Refresh the list
            } else {
                toast.error("Erreur lors de la suppression");
            }
        } catch (error) {
            console.error("Error deleting news:", error);
            toast.error("Erreur lors de la suppression");
        }
    };

    const cancelDelete = () => {
        message.error('Suppression annulée');
    };

    // Sort the actualites based on date of publication (ascending or descending)
    const sortedActualites = [...actualites].sort((a, b) => {
        if (sortField === 'createdAt') {
            // Use raw timestamp for precise sorting including time
            const getTimestamp = (item) => {
                if (item.rawTimestamp && item.rawTimestamp._seconds) {
                    return item.rawTimestamp._seconds * 1000 +
                        (item.rawTimestamp._nanoseconds || 0) / 1000000;
                }
                return new Date(item.datePublication).getTime();
            };

            const timeA = getTimestamp(a);
            const timeB = getTimestamp(b);

            return sortAsc ? timeA - timeB : timeB - timeA;  // Toggle sort order
        }
        return 0;
    });

    // Filter the sortedActualites based on search by title
    const filteredActualites = sortedActualites.filter(actualite =>
        actualite.title.toLowerCase().includes(searchTitle.toLowerCase())
    );

    // Calculate total pages
    const totalPages = Math.ceil(filteredActualites.length / itemsPerPage);

    // Get the current page data
    const currentActualites = filteredActualites.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Handle page click
    const handlePaginationClick = (page) => {
        setCurrentPage(page);
    };

    

    const handleDeleteActualite = async () => {
        if (actualiteToDelete) {
            try {
                const response = await fetch(`https://api-mmcansh33q-uc.a.run.app/v1/news/${actualiteToDelete.id}`, {
                    method: 'DELETE',
                });

                const result = await response.json();

                if (result.status) {
                    toast.success("Actualité supprimée avec succès");
                    fetchNews(); // Refresh the list
                    setShowDeleteModal(false);
                } else {
                    toast.error("Erreur lors de la suppression");
                }
            } catch (error) {
                console.error("Error deleting news:", error);
                toast.error("Erreur lors de la suppression");
            }
        }
    };

    const handleExportToExcel = () => {
        try {
            // Prepare data for export
            const exportData = filteredActualites.map(item => ({
                'Titre': item.title,
                'Date de publication': item.datePublication,
                'Contenu': item.contenu,
                'Likes': item.likes
            }));

            // Create worksheet
            const ws = XLSX.utils.json_to_sheet(exportData);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Actualités");

            // Generate Excel file
            XLSX.writeFile(wb, "actualites.xlsx");
            toast.success("Export réussi!");
        } catch (error) {
            console.error("Error exporting to Excel:", error);
            toast.error("Erreur lors de l'export");
        }
    };

    return (
        <section>
            <ToastContainer position="top-right" autoClose={3000} />

            <div className="py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div className="w-full sm:w-auto">
                    <label className="block mb-1 font-medium" htmlFor="searchTitle">Rechercher par titre:</label>
                    <input
                        id="searchTitle"
                        type="text"
                        className="form-input w-full sm:w-64 p-2 border rounded"
                        placeholder="Rechercher"
                        value={searchTitle}
                        onChange={(e) => setSearchTitle(e.target.value)}
                    />
                </div>
                <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-4 w-full sm:w-auto">
                    <button 
                        onClick={handleExportToExcel}
                        className="btn_export flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 h-10"
                    >
                        <FaFileExcel /> Exporter en Excel
                    </button>
                    <div className="flex items-center gap-2 bg-white rounded px-2 h-10 border">
                        <label htmlFor="itemsPerPage" className="text-sm font-medium whitespace-nowrap">Éléments par page:</label>
                        <select
                            id="itemsPerPage"
                            className="p-2 rounded outline-none min-w-[60px] text-black"
                            value={itemsPerPage}
                            onChange={(e) => {
                                setItemsPerPage(Number(e.target.value));
                                setCurrentPage(1); // Reset to first page when changing items per page
                            }}
                        >
                            <option value={5}>5</option>
                            <option value={7}>7</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                        </select>
                    </div>
                    <button onClick={() => window.location.href = "/dashboard/news/add"} className="btn_add px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 h-10">
                        Ajouter un nouvel article
                    </button>
                </div>
            </div>

            {loading ? (
                <div className="text-center py-10">Chargement des actualités...</div>
            ) : actualites.length === 0 ? (
                <div className="text-center py-10">Aucune actualité trouvée</div>
            ) : (
                <>
                    <table className="table-auto w-full bg-white shadow-lg rounded-md overflow-hidden">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left"> </th>
                                <th className="px-4 py-2 text-left">Titre</th>
                                <th
                                    onClick={() => {
                                        setSortField('createdAt');
                                        setSortAsc(!sortAsc);
                                    }}
                                    style={{ cursor: 'pointer' }}
                                    className="px-4 py-2 text-left flex items-center min-w-[200px]"
                                >
                                    Date de publication
                                    {sortField === 'createdAt' && (
                                        <span className="ml-2">
                                            {sortAsc ? <FaArrowUp /> : <FaArrowDown />}
                                        </span>
                                    )}
                                </th>
                                <th className="px-4 py-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentActualites.map(actualite => (
                                <tr key={actualite.id} className='hover:bg-gray-100 '>
                                    <td className="px-4 py-2">
                                        <div className="flex items-center">
                                            <img
                                                src={actualite.image}
                                                alt=""
                                                className="w-20 h-12 object-cover rounded-md"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-4 py-2">
                                        <p className="font-medium">{actualite.title}</p>
                                    </td>
                                    <td className="px-4 py-2 min-w-[200px]">
                                        <p className="font-normal">{actualite.datePublication}</p>
                                    </td>
                                    <td className="py-4 flex space-x-2">
                                        <button
                                            type="button"
                                            className="bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center justify-center"
                                            onClick={() => window.location.href = `/dashboard/news/${actualite.id}`}
                                            title="View"
                                        >
                                            <FaEye />
                                        </button>
                                        <button
                                            onClick={() => {
                                                setActualiteToDelete(actualite);
                                                setShowDeleteModal(true);
                                            }}
                                            className="p-2 text-red-600 hover:text-red-900 flex items-center justify-center"
                                            title="Delete"
                                        >
                                            <FaTrash className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination controls */}
                    {totalPages > 1 && (
                        <div className="flex justify-center mt-4">
                            <div className="flex gap-2">
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <button
                                        key={index + 1}
                                        onClick={() => handlePaginationClick(index + 1)}
                                        className={`px-4 py-2 rounded-md ${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg p-4 sm:p-6 max-w-sm w-full">
                        <h3 className="text-lg sm:text-xl font-medium mb-4">Confirmer la suppression</h3>
                        <p className="mb-4 text-sm sm:text-base">
                            Êtes-vous sûr de vouloir supprimer l'actualité <strong>{actualiteToDelete.title}</strong>?
                        </p>
                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none text-xs sm:text-sm"
                            >
                                Annuler
                            </button>
                            <button
                                onClick={handleDeleteActualite}
                                className="px-3 py-1 sm:px-4 sm:py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none text-xs sm:text-sm"
                            >
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}