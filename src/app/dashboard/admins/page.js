"use client";
import React, { useEffect, useState } from 'react';
import '../dashboard.css';
import { FaTrash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Popconfirm, message } from 'antd';

export default function Admins() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(7);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://api-mmcansh33q-uc.a.run.app/v1/users');
            const result = await response.json();
            
            if (result.status && result.data) {
                setUsers(result.data);
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

    // Filter users based on the search query
    const filteredUsers = users.filter(user =>
        (user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.lastName && user.lastName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.email && user.email.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    // Determine if a user is a special user (main admin)
    const isSpecialUser = (user) => {
        return (user.email && user.email.toLowerCase().includes('yassineova')) || 
               (user.name && user.name.toLowerCase().includes('rita')) || 
               (user.email && user.email.toLowerCase().includes('ynov'));
    };

    // Calculate total pages
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

    // Get the current page data
    const currentUsers = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Handle page click
    const handlePaginationClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <section>
            <ToastContainer position="top-right" autoClose={3000} />
            
            <div className="py-5 flex justify-between items-center">
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

            {loading ? (
                <div className="text-center py-10">Chargement des utilisateurs...</div>
            ) : users.length === 0 ? (
                <div className="text-center py-10">Aucun utilisateur trouvé</div>
            ) : (
                <>
                    <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 text-left">Utilisateur</th>
                                <th className="py-2 px-4 text-left">Date d'inscription</th>
                                <th className="py-2 px-4 text-left">Status</th>
                                <th className="py-2 px-4 text-left">Rôle</th>
                                <th className="py-2 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentUsers.map((user) => {
                                const isMainAdmin = isSpecialUser(user);
                                return (
                                <tr key={user.id} className={`border-b my-auto ${isMainAdmin ? 'bg-orange-100' : ''}`}>
                                    <td className="py-3 px-4">
                                        <div className="flex items-center">
                                            <img src={user.pic ? user.pic : "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/dashboard%2Favatar.png?alt=media&token=eb86123a-2582-4770-80cb-c1c63352dbd4"} alt={user.name} className="w-14 h-14 object-cover rounded-full" />
                                            <div className="ml-3">
                                                <p className="font-semibold mb-1">{user.name} {user.lastName}</p>
                                                <p className="text-gray-500 mb-0">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4">{formatDate(user.createdAt)}</td>
                                    <td className="py-3 px-4">
                                        <span className={`py-1 px-3 inline-block rounded-full text-white ${user.isVerified ? 'bg-green-500' : 'bg-yellow-500'}`}>
                                            {user.isVerified ? 'Vérifié' : 'Non vérifié'}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4">
                                        <span className={`py-1 px-3 inline-block rounded-full text-white ${isMainAdmin ? 'bg-orange-500' : 'bg-red-500'}`}>
                                            {isMainAdmin ? 'admin principal' : 'admin'}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4">
                                        {!isMainAdmin && (
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
                                                    className="text-white px-3 py-1 bg-red-500 hover:bg-red-600 rounded-md"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </Popconfirm>
                                        )}
                                    </td>
                                </tr>
                            )})}
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