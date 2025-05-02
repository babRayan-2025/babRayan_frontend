"use client";
import React, { useEffect, useState } from 'react';
import '../dashboard.css';
import { FaTrash, FaCheck, FaTimes, FaExchangeAlt } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Popconfirm, message } from 'antd';
import Link from 'next/link';

export default function Admins() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(7);
    const [unverifiedCount, setUnverifiedCount] = useState(0);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://api-mmcansh33q-uc.a.run.app/v1/users');
            const result = await response.json();

            if (result.status && result.data) {
                // Count unverified users
                const unverified = result.data.filter(user => !user.isVerified).length;
                setUnverifiedCount(unverified);

                // Only display verified users in the admin panel
                const verifiedUsers = result.data.filter(user => user.isVerified);
                setUsers(verifiedUsers);
            } else {
                toast.error("Erreur lors du chargement des utilisateurs");
            }
        } catch (error) {
            console.error("Error fetching users:", error);
            toast.error("Erreur lors du chargement des utilisateurs");
        } finally {
            setLoading(false);
        }
    };

    const unverifyUser = async (user) => {
        try {

            const response = await fetch(`https://api-mmcansh33q-uc.a.run.app/v1/users/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ isVerified: false }),
            });

            const result = await response.json();

            if (result.status) {
                toast.success("Utilisateur suspendu");
                fetchUsers(); // Refresh the list
            } else {
                toast.error("Erreur lors de la mise à jour");
            }
        } catch (error) {
            console.error("Error updating user:", error);
            toast.error("Erreur lors de la mise à jour");
        }
    };

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`https://api-mmcansh33q-uc.a.run.app/v1/users/${id}`, {
                method: 'DELETE',
            });

            const result = await response.json();

            if (result.status) {
                toast.success("Utilisateur supprimé avec succès");
                fetchUsers(); // Refresh the list
            } else {
                toast.error("Erreur lors de la suppression");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            toast.error("Erreur lors de la suppression");
        }
    };

    const cancelDelete = () => {
        message.error('Suppression annulée');
    };

    const formatDate = (timestamp) => {
        if (!timestamp) return 'Date inconnue';

        // Convert Firestore timestamp to JS Date
        const date = new Date(timestamp._seconds * 1000);
        return date.toLocaleDateString('fr-FR');
    };

    // Determine if a user is a special user (main admin)
    const isSpecialUser = (user) => {
        const specialEmails = ['yassineova','mounir.baali@ynov.com', 'ynovadmin', 'hzrita@hotmail.com'];
        return specialEmails.some(email => user.email?.toLowerCase().includes(email));
    };

    // Filter users based on the search query
    const filteredUsers = users.filter(user =>
        (user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.lastName && user.lastName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.email && user.email.toLowerCase().includes(searchQuery.toLowerCase()))
    )
        // Sort users to display main admins at the top
        .sort((a, b) => {
            const isAMainAdmin = isSpecialUser(a);
            const isBMainAdmin = isSpecialUser(b);

            if (isAMainAdmin && !isBMainAdmin) return -1;
            if (!isAMainAdmin && isBMainAdmin) return 1;
            return 0;
        });

    // Calculate total pages
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

    // Get the current page data
    const currentUsers = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Handle page click
    const handlePaginationClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <section className="px-2 sm:px-4">
            <ToastContainer position="top-right" autoClose={3000} />

            <div className="py-5 flex flex-col md:flex-row justify-between gap-4 md:items-center">
                <div className="w-full md:w-1/3">
                    <label className="block text-sm mb-1">Rechercher par nom ou email:</label>
                    <input
                        type="text"
                        className="form-input w-full p-2 border rounded"
                        placeholder="Rechercher"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex items-center">
                        <label htmlFor="itemsPerPage" className="mr-2 text-sm whitespace-nowrap">Éléments par page:</label>
                        <select
                            id="itemsPerPage"
                            className="p-2 border rounded"
                            value={itemsPerPage}
                            onChange={(e) => {
                                setItemsPerPage(Number(e.target.value));
                                setCurrentPage(1);
                            }}
                        >
                            <option value={5}>5</option>
                            <option value={7}>7</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                        </select>
                    </div>
                    <Link href="/dashboard/admins/verification" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center w-full sm:w-auto justify-center sm:justify-start">
                        <span className="whitespace-nowrap">Vérification des utilisateurs</span>
                        {unverifiedCount > 0 && (
                            <span className="ml-2 bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                                {unverifiedCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>

            {loading ? (
                <div className="text-center py-10">Chargement des utilisateurs...</div>
            ) : users.length === 0 ? (
                <div className="text-center py-10">Aucun utilisateur trouvé</div>
            ) : (
                <>
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="py-2 px-4 text-left">Utilisateur</th>
                                    <th className="py-2 px-4 text-left hidden sm:table-cell">Date d&apos;inscription</th>
                                    <th className="py-2 px-4 text-left hidden sm:table-cell">Status</th>
                                    <th className="py-2 px-4 text-left hidden sm:table-cell">Rôle</th>
                                    <th className="py-2 px-4 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentUsers.map((user) => {
                                    const isMainAdmin = isSpecialUser(user);
                                    return (
                                        <tr key={user.id} className={`border-b my-auto ${isMainAdmin ? 'bg-orange-100' : ''}`}>
                                            <td className="py-3 px-4">
                                                <div className="flex flex-col sm:flex-row sm:items-center">
                                                    <img src={user.pic ? user.pic : "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/dashboard%2Favatar.png?alt=media&token=eb86123a-2582-4770-80cb-c1c63352dbd4"} alt={user.name} className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-full mx-auto sm:mx-0" />
                                                    <div className="ml-0 sm:ml-3 mt-2 sm:mt-0 text-center sm:text-left">
                                                        <p className="font-semibold mb-1">{user.name} {user.lastName}</p>
                                                        <p className="text-gray-500 mb-0 text-sm">{user.email}</p>

                                                        {/* Mobile-only info */}
                                                        <div className="sm:hidden mt-1 space-y-1">
                                                            <p className="text-xs text-gray-600">
                                                                <span className="font-medium">Date: </span>
                                                                {formatDate(user.createdAt)}
                                                            </p>
                                                            <p className="text-xs">
                                                                <span className="py-1 px-2 inline-block rounded-full text-white bg-green-500 text-xs mr-1">
                                                                    Vérifié
                                                                </span>
                                                                <span className={`py-1 px-2 inline-block rounded-full text-white text-xs ${isMainAdmin ? 'bg-orange-500' : 'bg-red-500'}`}>
                                                                    {isMainAdmin ? 'admin principal' : 'admin'}
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-3 px-4 hidden sm:table-cell">{formatDate(user.createdAt)}</td>
                                            <td className="py-3 px-4 hidden sm:table-cell">
                                                <span className="py-1 px-3 inline-block rounded-full text-white bg-green-500">
                                                    Vérifié
                                                </span>
                                            </td>
                                            <td className="py-3 px-4 hidden sm:table-cell">
                                                <span className={`py-1 px-3 inline-block rounded-full text-white ${isMainAdmin ? 'bg-orange-500' : 'bg-red-500'}`}>
                                                    {isMainAdmin ? 'admin principal' : 'admin'}
                                                </span>
                                            </td>
                                            <td className="py-3 px-4">
                                                <div className="flex flex-col sm:flex-row gap-2">
                                                    {!isMainAdmin && (
                                                        <>
                                                            <button
                                                                onClick={() => unverifyUser(user)}
                                                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm w-full sm:w-auto"
                                                                title="Envoyer à la vérification"
                                                            >
                                                                Suspendre
                                                            </button>
                                                            <Popconfirm
                                                                title="Confirmation"
                                                                description="Êtes-vous sûr de vouloir supprimer cet utilisateur?"
                                                                onConfirm={() => deleteUser(user.id)}
                                                                onCancel={cancelDelete}
                                                                okText="Oui"
                                                                cancelText="Non"
                                                                okType="danger"
                                                            >
                                                                <button
                                                                    type="button"
                                                                    className="text-white px-2 sm:px-3 py-1 bg-red-500 hover:bg-red-600 rounded-md text-xs sm:text-sm w-full sm:w-auto flex justify-center"
                                                                >
                                                                    <FaTrash />
                                                                </button>
                                                            </Popconfirm>
                                                        </>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination controls */}
                    <div className="flex justify-center mt-6 mb-4 overflow-x-auto">
                        <div className="flex flex-wrap gap-2 justify-center">
                            {totalPages > 5 ? (
                                <>
                                    <button
                                        onClick={() => handlePaginationClick(1)}
                                        className={`px-3 sm:px-4 py-2 rounded-md ${1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                                    >
                                        1
                                    </button>

                                    {currentPage > 3 && (
                                        <span className="px-3 py-2">...</span>
                                    )}

                                    {Array.from({ length: 3 }, (_, i) => {
                                        let pageNum;
                                        if (currentPage <= 2) {
                                            pageNum = i + 2; // Show 2, 3, 4
                                        } else if (currentPage >= totalPages - 1) {
                                            pageNum = totalPages - 4 + i; // Show last 4 pages minus first and last
                                        } else {
                                            pageNum = currentPage - 1 + i; // Show current and adjacent
                                        }

                                        if (pageNum > 1 && pageNum < totalPages) {
                                            return (
                                                <button
                                                    key={pageNum}
                                                    onClick={() => handlePaginationClick(pageNum)}
                                                    className={`px-3 sm:px-4 py-2 rounded-md ${pageNum === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                                                >
                                                    {pageNum}
                                                </button>
                                            );
                                        }
                                        return null;
                                    })}

                                    {currentPage < totalPages - 2 && (
                                        <span className="px-3 py-2">...</span>
                                    )}

                                    <button
                                        onClick={() => handlePaginationClick(totalPages)}
                                        className={`px-3 sm:px-4 py-2 rounded-md ${totalPages === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                                    >
                                        {totalPages}
                                    </button>
                                </>
                            ) : (
                                Array.from({ length: totalPages }, (_, index) => (
                                    <button
                                        key={index + 1}
                                        onClick={() => handlePaginationClick(index + 1)}
                                        className={`px-3 sm:px-4 py-2 rounded-md ${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                                    >
                                        {index + 1}
                                    </button>
                                ))
                            )}
                        </div>
                    </div>
                </>
            )}
        </section>
    );
}