"use client";
import React, { useState } from 'react';

export default function Benevoles() {
    const [benevoles, setBenevoles] = useState([
        { id: 1, image: "https://mdbootstrap.com/img/new/avatars/1.jpg", name: "John Doe", role: "Assistant", joinDate: "2022-01-01", contact: "john.doe@example.com" },
        { id: 2, image: "https://mdbootstrap.com/img/new/avatars/2.jpg", name: "Jane Smith", role: "Organisateur", joinDate: "2022-02-15", contact: "jane.smith@example.com" },
        { id: 3, image: "https://mdbootstrap.com/img/new/avatars/3.jpg", name: "Robert Johnson", role: "Assistant", joinDate: "2022-03-10", contact: "robert.johnson@example.com" },
        { id: 4, image: "https://mdbootstrap.com/img/new/avatars/4.jpg", name: "Emily Davis", role: "Coordinateur", joinDate: "2022-04-05", contact: "emily.davis@example.com" },
        { id: 5, image: "https://mdbootstrap.com/img/new/avatars/5.jpg", name: "Michael Brown", role: "Assistant", joinDate: "2022-05-20", contact: "michael.brown@example.com" },
        { id: 6, image: "https://mdbootstrap.com/img/new/avatars/6.jpg", name: "Sarah Wilson", role: "Organisateur", joinDate: "2022-06-15", contact: "sarah.wilson@example.com" },
    ]);

    const [searchName, setSearchName] = useState("");
    const [sortAsc, setSortAsc] = useState(false);  // true for ascending, false for descending
    const [currentPage, setCurrentPage] = useState(1);  // Track current page
    const [itemsPerPage, setItemsPerPage] = useState(4); // Number of items per page

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
                <button onClick={()=> window.location.href = "/dashboard/volunteers/add"} className="btn_add px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Ajouter un bénévole
                </button>
            </div>

            <table className="table-auto w-full bg-white shadow-lg rounded-md overflow-hidden">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 text-left"> </th>
                        <th className="px-4 py-2 text-left">Nom</th>
                        <th className="px-4 py-2 text-left">Rôle</th>
                        <th 
                            onClick={() => setSortAsc(!sortAsc)} 
                            style={{ cursor: 'pointer' }} 
                            className="px-4 py-2 text-left"
                        >
                            Date d'adhésion
                            <span className="ml-2">
                                <i className={`fa-solid ${sortAsc ? "fa-arrow-up" : "fa-arrow-down"}`} />
                            </span>
                        </th>
                        <th className="px-4 py-2 text-left">Contact</th>
                        <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentBenevoles.map(benevole => (
                        <tr key={benevole.id}>
                            <td className="px-4 py-2">
                                <div className="flex items-center">
                                    <img 
                                        src={benevole.image} 
                                        alt="" 
                                        className="w-12 h-12 object-cover rounded-full" 
                                    />
                                </div>
                            </td>
                            <td className="px-4 py-2">
                                <p className="font-medium">{benevole.name}</p>
                            </td>
                            <td className="px-4 py-2">
                                <p className="font-normal">{benevole.role}</p>
                            </td>
                            <td className="px-4 py-2">
                                <p className="font-normal">{benevole.joinDate}</p>
                            </td>
                            <td className="px-4 py-2">
                                <p className="font-normal">{benevole.contact}</p>
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