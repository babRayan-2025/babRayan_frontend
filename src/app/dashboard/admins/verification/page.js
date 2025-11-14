"use client";
import React, { useEffect, useState } from 'react';
import '../../dashboard.css';
import { FaCheck, FaTrash, FaArrowLeft } from 'react-icons/fa6';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { Popconfirm, message } from 'antd';

export default function Verification() {
    const router = useRouter();

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(7);
    const token = localStorage.getItem("token");
    useEffect(() => {
        fetchNonVerifiedUsers();
    }, []);

    const fetchNonVerifiedUsers = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://api-vevrjfohcq-uc.a.run.app/v1/users', {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });
            const result = await response.json();

            if (result.status && result.data) {
                // Filter to only show non-verified users
                const nonVerifiedUsers = result.data.filter(user => user.role === 'user');
                setUsers(nonVerifiedUsers);
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

    const verifyUser = async (user) => {
        try {

            const response = await fetch(`https://api-vevrjfohcq-uc.a.run.app/v1/users/make_admin/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`,
                },
            });

            const result = await response.json();

            console.log(result);
            if (result.status) {
                toast.success(`Utilisateur vérifié avec succès`);
                fetchNonVerifiedUsers(); // Refresh the list
            } else {
                toast.error("Erreur lors de la mise à jour");
            }
        } catch (error) {
            console.error("Error updating user:", error);
            toast.error("Erreur lors de la mise à jour");
        }
    };

    const formatDate = (timestamp) => {
        if (!timestamp) return 'Date inconnue';

        // Convert Firestore timestamp to JS Date
        const date = new Date(timestamp._seconds * 1000);
        return date.toLocaleDateString('fr-FR');
    };

    // Filter users based on the search query
    const filteredUsers = users.filter(user =>
        (user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.lastName && user.lastName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.email && user.email.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    // Calculate total pages
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

    // Get the current page data
    const currentUsers = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Handle page click
    const handlePaginationClick = (page) => {
        setCurrentPage(page);
    };

    const cancelDelete = () => {
        message.error('Suppression annulée');
    };

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`https://api-vevrjfohcq-uc.a.run.app/v1/users/${id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });

            const result = await response.json();

            if (result.status) {
                toast.success("Utilisateur supprimé avec succès");
                fetchNonVerifiedUsers(); // Refresh the list
            } else {
                toast.error("Erreur lors de la suppression");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            toast.error("Erreur lors de la suppression");
        }
    };
    return (
        <section className="px-2 sm:px-4 py-4">
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
            <div className="flex items-center mb-6">
                <button
                    onClick={() => router.push('/dashboard/admins')}
                    className="flex items-center mr-4 text-blue-600 hover:text-blue-800"
                >
                    <FaArrowLeft className="mr-2" /> Retour
                </button>
                <h1 className="text-2xl font-bold text-center w-full">
                    Vérification des utilisateurs
                </h1>
            </div>
            <div className="py-5">
                <p className="mb-4">Cette page affiche uniquement les utilisateurs non 'ADMIN' en attente de vérification.</p>

                <div className="flex justify-between items-center mb-4">
                    <div>
                        Rechercher par nom ou email:
                        <input
                            type="text"
                            className="form-input w-full mt-2 p-2 border rounded"
                            placeholder="Rechercher"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-4">
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
                                <option value={5}>5</option>
                                <option value={7}>7</option>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                                <option value={20}>20</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {loading ? (
                <div className="text-center py-10">Chargement des utilisateurs...</div>
            ) : users.length === 0 ? (
                <div className="text-center py-10">Aucun utilisateur non vérifié trouvé</div>
            ) : (
                <>
                    <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 text-left">Utilisateur</th>
                                <th className="py-2 px-4 text-left">Date d'inscription</th>
                                <th className="py-2 px-4 text-left">Status</th>
                                <th className="py-2 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentUsers.map((user) => (
                                <tr key={user.id} className="border-b">
                                    <td className="py-3 px-4">
                                        <div className="flex items-center">
                                            <img
                                                src={user.pic ? user.pic : "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/avatar%20user.png?alt=media&token=96fd3b25-26e0-4ae8-92b6-fe1548f42685"}
                                                alt={user.name}
                                                className="w-14 h-14 object-cover rounded-full"
                                            />
                                            <div className="ml-3">
                                                <p className="font-semibold mb-1">{user.name} {user.lastName}</p>
                                                <p className="text-gray-500 mb-0">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4">{formatDate(user.createdAt)}</td>
                                    <td className="py-3 px-4">
                                        <span className="py-1 px-3 inline-block rounded-full text-white bg-yellow-500">
                                            Non vérifié
                                        </span>
                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="flex flex-col sm:flex-row gap-2">                                        <button
                                            onClick={() => verifyUser(user)}
                                            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md mr-2"
                                            title="Vérifier l'utilisateur"
                                        >
                                            <FaCheck />
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
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination controls */}
                    <div className="flex justify-center mt-6 mb-4">
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
                </>
            )}
        </section>
    );
} 