"use client";
import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { FaEye, FaTrash, FaArrowUp, FaArrowDown } from 'react-icons/fa';

export default function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const imageDefault = "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/dashboard%2Favatar.png?alt=media&token=eb86123a-2582-4770-80cb-c1c63352dbd4"

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);

    // Fetch contacts from the API
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch('https://api-mmcansh33q-uc.a.run.app/v1/contact');
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
                            message: contact.message || ''
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

        fetchContacts();
    }, []);

    const [searchName, setSearchName] = useState("");
    const [sortAsc, setSortAsc] = useState(false);  // true for ascending, false for descending
    const [currentPage, setCurrentPage] = useState(1);  // Track current page
    const [itemsPerPage, setItemsPerPage] = useState(4); // Number of items per page

    // Sort the contacts based on date (ascending or descending)
    const sortedContacts = [...contacts].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortAsc ? dateA - dateB : dateB - dateA;  // Toggle sort order
    });

    // Filter the sortedContacts based on search by name
    const filteredContacts = sortedContacts.filter(contact =>
        contact.name.toLowerCase().includes(searchName.toLowerCase())
    );

    // Calculate total pages
    const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);

    // Get the current page data
    const currentContacts = filteredContacts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Handle page click
    const handlePaginationClick = (page) => {
        setCurrentPage(page);
    };

    // Handle view contact details
    const handleViewContact = (contact) => {
        setSelectedContact(contact);
        setIsModalOpen(true);
    };

    // Handle archive contact
    const handleArchiveContact = (id) => {
        // Implement archive functionality here
        console.log(`Archiving contact with ID: ${id}`);
    };

    return (
        <section>
            <div className="py-5 flex justify-between items-center">
                <div>
                    Rechercher par nom:
                    <input
                        type="text"
                        className="form-input w-full mt-2 p-2 border rounded"
                        placeholder="Rechercher"
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                    />
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
                                                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                                                title="Supprimer"
                                                onClick={() => handleArchiveContact(contact.id)}
                                            >
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="px-4 py-4 text-center">
                                        Aucun contact trouvé
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