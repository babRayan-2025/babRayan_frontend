"use client";
import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { FaEye, FaTrash, FaArrowUp, FaArrowDown, FaArchive, FaInbox, FaUndoAlt } from 'react-icons/fa';

export default function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const imageDefault = "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/avatar%20user.png?alt=media&token=96fd3b25-26e0-4ae8-92b6-fe1548f42685"

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    
    // Filter state
    const [showArchived, setShowArchived] = useState(false);
    const [isTogglingVisibility, setIsTogglingVisibility] = useState(false);

    // Fetch contacts from the API
    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://api-vevrjfohcq-uc.a.run.app/v1/contact');
            const result = await response.json();
            
            if (result.status && result.data) {
                // Transform API data to match our table format
                const formattedContacts = result.data.map((contact, index) => {
                    // Convert timestamp to readable date
                    const date = contact.createdAt?._seconds 
                        ? new Date(contact.createdAt._seconds * 1000).toISOString().split('T')[0]
                        : 'N/A';
                    
                    return {
                        id: contact.id || index + 1,
                        image: imageDefault, // Default image
                        name: contact.nom || 'N/A',
                        type: "Contact Us", // Default type
                        date: date,
                        email: contact.email || 'N/A',
                        phone: contact.telephone || 'N/A',
                        message: contact.message || '',
                        visible: contact.visible !== false // If visible is not explicitly false, consider it visible
                    };
                });
                
                setContacts(formattedContacts);
            }
        } catch (err) {
            console.error("Error fetching contacts:", err);
            setError("Impossible de charger les contacts");
        } finally {
            setLoading(false);
        }
    };

    // Handle view contact details
    const handleViewContact = (contact) => {
        setSelectedContact(contact);
        setIsModalOpen(true);
    };

    // Handle toggle visibility
    const handleToggleVisibility = async (id) => {
        try {
            setIsTogglingVisibility(true);
            
            // Get the current visibility state
            const currentContact = contacts.find(contact => contact.id === id);
            const isCurrentlyVisible = currentContact ? currentContact.visible : true;
            
            // Update the contact in the state immediately for better UX
            setContacts(prevContacts => 
                prevContacts.map(contact => 
                    contact.id === id 
                        ? { ...contact, visible: !isCurrentlyVisible } 
                        : contact
                )
            );
            
            // Make the API call using PATCH with mode: 'no-cors' to bypass CORS restrictions
            // Note: This will make the response opaque, but state has already been updated optimistically
            try {
                await fetch(`https://api-vevrjfohcq-uc.a.run.app/v1/contact/${id}/visibility`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                
                // Since we can't read the response with no-cors mode, we assume success
                console.log(isCurrentlyVisible 
                    ? "Contact archivé avec succès" 
                    : "Contact restauré avec succès");
            } catch (fetchError) {
                console.error("API request error:", fetchError);
                throw fetchError; // Rethrow to be caught by the outer try/catch
            }
        } catch (err) {
            console.error("Error toggling visibility:", err);
            
            // Revert the visibility change on error
            const currentContact = contacts.find(contact => contact.id === id);
            const isCurrentlyVisible = currentContact ? currentContact.visible : true;
            
            setContacts(prevContacts => 
                prevContacts.map(contact => 
                    contact.id === id 
                        ? { ...contact, visible: isCurrentlyVisible } 
                        : contact
                )
            );
        } finally {
            setIsTogglingVisibility(false);
        }
    };

    const [searchName, setSearchName] = useState("");
    const [sortAsc, setSortAsc] = useState(false);  // true for ascending, false for descending
    const [currentPage, setCurrentPage] = useState(1);  // Track current page
    const [itemsPerPage, setItemsPerPage] = useState(8); // Number of items per page

    // Sort the contacts based on date (ascending or descending)
    const sortedContacts = [...contacts].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortAsc ? dateA - dateB : dateB - dateA;  // Toggle sort order
    });

    // Filter the sortedContacts based on search by name and archived status
    const filteredContacts = sortedContacts.filter(contact =>
        contact.name.toLowerCase().includes(searchName.toLowerCase()) && 
        (showArchived ? !contact.visible : contact.visible)
    );

    // Calculate total pages
    const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);

    // Get the current page data
    const currentContacts = filteredContacts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Handle page click
    const handlePaginationClick = (page) => {
        setCurrentPage(page);
    };

    // Toggle archived view
    const toggleArchivedView = () => {
        setShowArchived(!showArchived);
        setCurrentPage(1); // Reset to first page when switching views
    };

    return (
        <section>
            <div className="py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="w-full md:w-auto">
                    Rechercher par nom: 
                    <input 
                        type="text" 
                        className="form-input w-full mt-2 p-2 border rounded" 
                        placeholder="Rechercher" 
                        value={searchName} 
                        onChange={(e) => setSearchName(e.target.value)} 
                    />
                </div>
                
                <div className="flex items-center">
                    <button 
                        className={`px-4 py-2 rounded-md mr-2 ${showArchived 
                            ? 'bg-gray-200 text-gray-700' 
                            : 'bg-blue-500 text-white'}`}
                        onClick={toggleArchivedView}
                        disabled={loading}
                    >
                        <FaInbox className="inline mr-2" /> Actifs
                    </button>
                    <button 
                        className={`px-4 py-2 rounded-md ${showArchived 
                            ? 'bg-red-500 text-white' 
                            : 'bg-gray-200 text-gray-700'}`}
                        onClick={toggleArchivedView}
                        disabled={loading}
                    >
                        <FaArchive className="inline mr-2" /> Archivés
                    </button>
                </div>
            </div>

            {loading ? (
                <div className="text-center py-4">Chargement des contacts...</div>
            ) : error ? (
                <div className="text-center text-red-500 py-4">{error}</div>
            ) : (
                <>
                    <table className="table-auto w-full bg-white shadow-lg rounded-md overflow-hidden">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left"> </th>
                                <th className="px-4 py-2 text-left">Nom</th>
                                <th className="px-4 py-2 text-left">Type</th>
                                <th 
                                    onClick={() => setSortAsc(!sortAsc)} 
                                    style={{ cursor: 'pointer' }} 
                                    className="px-4 py-2 text-left flex items-center"
                                >
                                    Date d'envoi
                                    <span className="ml-2">
                                        {sortAsc ? <FaArrowUp /> : <FaArrowDown />}
                                    </span>
                                </th>
                                <th className="px-4 py-2 text-left">Email</th>
                                <th className="px-4 py-2 text-left">Téléphone</th>
                                <th className="px-4 py-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentContacts.length > 0 ? (
                                currentContacts.map(contact => (
                                    <tr key={contact.id}>
                                        <td className="px-4 py-2">
                                            <div className="flex items-center">
                                                <img 
                                                    src={contact.image} 
                                                    alt="" 
                                                    className="w-12 h-12 object-cover rounded-full" 
                                                />
                                            </div>
                                        </td>
                                        <td className="px-4 py-2">
                                            <p className="font-medium">{contact.name}</p>
                                        </td>
                                        <td className="px-4 py-2">
                                            <p className="font-normal">{contact.type}</p>
                                        </td>
                                        <td className="px-4 py-2">
                                            <p className="font-normal">{contact.date}</p>
                                        </td>
                                        <td className="px-4 py-2">
                                            <p className="font-normal">{contact.email}</p>
                                        </td>
                                        <td className="px-4 py-2">
                                            <p className="font-normal">{contact.phone}</p>
                                        </td>
                                        <td className="px-4 py-2">
                                            <button 
                                                type="button" 
                                                className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2"
                                                onClick={() => handleViewContact(contact)}
                                                title="Voir les détails"
                                            >
                                                <FaEye />
                                            </button>
                                            <button 
                                                type="button" 
                                                className={`px-3 py-1 ${contact.visible 
                                                    ? 'bg-red-500 hover:bg-red-600' 
                                                    : 'bg-green-500 hover:bg-green-600'} text-white rounded-md`}
                                                title={contact.visible ? "Archiver" : "Restaurer"}
                                                onClick={() => handleToggleVisibility(contact.id)}
                                                disabled={isTogglingVisibility}
                                            >
                                                {contact.visible ? <FaTrash /> : <FaUndoAlt />}
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="px-4 py-4 text-center">
                                        {showArchived 
                                            ? "Aucun contact archivé trouvé" 
                                            : "Aucun contact actif trouvé"}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    {/* Pagination controls */}
                    {totalPages > 0 && (
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

                    {/* Contact Details Modal */}
                    <Modal
                        title="Détails du contact"
                        open={isModalOpen}
                        onCancel={() => setIsModalOpen(false)}
                        footer={[
                            <button 
                                key="close" 
                                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Fermer
                            </button>
                        ]}
                        width={600}
                    >
                        {selectedContact && (
                            <div className="p-4">
                                <div className="flex items-center mb-6">
                                    <img 
                                        src={selectedContact.image} 
                                        alt="" 
                                        className="w-16 h-16 object-cover rounded-full mr-4" 
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold">{selectedContact.name}</h3>
                                        <p className="text-gray-500">{selectedContact.email}</p>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="font-semibold mb-1">Téléphone:</p>
                                        <p className="text-gray-700">{selectedContact.phone}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold mb-1">Date d'envoi:</p>
                                        <p className="text-gray-700">{selectedContact.date}</p>
                                    </div>
                                </div>
                                
                                <div className="mt-6">
                                    <p className="font-semibold mb-2">Message:</p>
                                    <div className="p-3 bg-gray-100 rounded-md">
                                        <p className="text-gray-700">{selectedContact.message || "Aucun message"}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Modal>
                </>
            )}
        </section>
    );
} 