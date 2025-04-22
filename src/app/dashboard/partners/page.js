"use client";
import React, { useState } from 'react';

export default function Partenaires() {
    const [partenaires, setPartenaires] = useState([
        { id: 1, image: "https://mdbootstrap.com/img/new/standard/city/041.jpg", name: "ABC Corporation", type: "Sponsor Principal", startDate: "2022-01-15", contact: "contact@abccorp.com" },
        { id: 2, image: "https://mdbootstrap.com/img/new/standard/city/042.jpg", name: "XYZ Foundation", type: "Partenaire Technique", startDate: "2022-02-20", contact: "info@xyzfoundation.org" },
        { id: 3, image: "https://mdbootstrap.com/img/new/standard/city/043.jpg", name: "Global Initiatives", type: "Sponsor", startDate: "2022-03-10", contact: "support@globalinitiatives.org" },
        { id: 4, image: "https://mdbootstrap.com/img/new/standard/city/044.jpg", name: "Tech Innovations", type: "Partenaire Technique", startDate: "2022-04-05", contact: "info@techinnovations.com" },
        { id: 5, image: "https://mdbootstrap.com/img/new/standard/city/045.jpg", name: "Community First", type: "Sponsor", startDate: "2022-05-18", contact: "help@communityfirst.org" },
        { id: 6, image: "https://mdbootstrap.com/img/new/standard/city/046.jpg", name: "Future Alliance", type: "Partenaire Stratégique", startDate: "2022-06-22", contact: "alliance@future.com" },
    ]);

    const [searchName, setSearchName] = useState("");
    const [sortAsc, setSortAsc] = useState(false);  // true for ascending, false for descending
    const [currentPage, setCurrentPage] = useState(1);  // Track current page
    const [itemsPerPage, setItemsPerPage] = useState(4); // Number of items per page

    // Sort the partenaires based on start date (ascending or descending)
    const sortedPartenaires = [...partenaires].sort((a, b) => {
        const dateA = new Date(a.startDate);
        const dateB = new Date(b.startDate);
        return sortAsc ? dateA - dateB : dateB - dateA;  // Toggle sort order
    });

    // Filter the sortedPartenaires based on search by name
    const filteredPartenaires = sortedPartenaires.filter(partenaire =>
        partenaire.name.toLowerCase().includes(searchName.toLowerCase())
    );

    // Calculate total pages
    const totalPages = Math.ceil(filteredPartenaires.length / itemsPerPage);

    // Get the current page data
    const currentPartenaires = filteredPartenaires.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
                <button onClick={()=> window.location.href = "/dashboard/partners/add"} className="btn_add px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Ajouter un partenaire
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
                            Date de début
                            <span className="ml-2">
                                <i className={`fa-solid ${sortAsc ? "fa-arrow-up" : "fa-arrow-down"}`} />
                            </span>
                        </th>
                        <th className="px-4 py-2 text-left">Contact</th>
                        <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPartenaires.map(partenaire => (
                        <tr key={partenaire.id}>
                            <td className="px-4 py-2">
                                <div className="flex items-center">
                                    <img 
                                        src={partenaire.image} 
                                        alt="" 
                                        className="w-20 h-12 object-cover rounded-md" 
                                    />
                                </div>
                            </td>
                            <td className="px-4 py-2">
                                <p className="font-medium">{partenaire.name}</p>
                            </td>
                            <td className="px-4 py-2">
                                <p className="font-normal">{partenaire.type}</p>
                            </td>
                            <td className="px-4 py-2">
                                <p className="font-normal">{partenaire.startDate}</p>
                            </td>
                            <td className="px-4 py-2">
                                <p className="font-normal">{partenaire.contact}</p>
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