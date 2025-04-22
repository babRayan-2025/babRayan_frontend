"use client";
import React, { useState } from 'react';

export default function Contacts() {
    const [contacts, setContacts] = useState([
        { id: 1, image: "https://mdbootstrap.com/img/new/avatars/1.jpg", name: "Ahmed Mahmoud", type: "Client", date: "2022-01-05", email: "ahmed@example.com", phone: "+212 611223344" },
        { id: 2, image: "https://mdbootstrap.com/img/new/avatars/2.jpg", name: "Fatima Zahra", type: "Prospect", date: "2022-02-10", email: "fatima@example.com", phone: "+212 622334455" },
        { id: 3, image: "https://mdbootstrap.com/img/new/avatars/3.jpg", name: "Mohammed Ali", type: "Fournisseur", date: "2022-03-15", email: "mohammed@example.com", phone: "+212 633445566" },
        { id: 4, image: "https://mdbootstrap.com/img/new/avatars/4.jpg", name: "Leila Benali", type: "Partenaire", date: "2022-04-20", email: "leila@example.com", phone: "+212 644556677" },
        { id: 5, image: "https://mdbootstrap.com/img/new/avatars/5.jpg", name: "Karim Hassan", type: "Client", date: "2022-05-25", email: "karim@example.com", phone: "+212 655667788" },
        { id: 6, image: "https://mdbootstrap.com/img/new/avatars/6.jpg", name: "Samira Omar", type: "Prospect", date: "2022-06-30", email: "samira@example.com", phone: "+212 666778899" },
    ]);

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
                <button onClick={()=> window.location.href = "/dashboard/contacts/add"} className="btn_add px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Ajouter un contact
                </button>
            </div>

            <table className="table-auto w-full bg-white shadow-lg rounded-md overflow-hidden">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 text-left"> </th>
                        <th className="px-4 py-2 text-left">Nom</th>
                        <th className="px-4 py-2 text-left">Type</th>
                        <th 
                            onClick={() => setSortAsc(!sortAsc)} 
                            style={{ cursor: 'pointer' }} 
                            className="px-4 py-2 text-left"
                        >
                            Date d'ajout
                            <span className="ml-2">
                                <i className={`fa-solid ${sortAsc ? "fa-arrow-up" : "fa-arrow-down"}`} />
                            </span>
                        </th>
                        <th className="px-4 py-2 text-left">Email</th>
                        <th className="px-4 py-2 text-left">Téléphone</th>
                        <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentContacts.map(contact => (
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
                                    className="btn_edit px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                                >
                                    <i className="fa-solid fa-pen-to-square" />
                                </button>
                                <button 
                                    type="button" 
                                    className="btn_delete px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 ml-2"
                                >
                                    <i className="fa-solid fa-trash" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination controls */}
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
        </section>
    );
} 