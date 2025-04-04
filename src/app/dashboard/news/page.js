"use client";
import React, { useState } from 'react';

export default function Actualite() {
    const [actualites, setActualites] = useState([
        { id: 1, image: "https://mdbootstrap.com/img/new/avatars/7.jpg", title: "Actualité 1", datePublication: "2022-01-01", contenu: "Contenu de l'actualité 1" },
        { id: 2, image: "https://mdbootstrap.com/img/new/avatars/7.jpg", title: "Actualité 2", datePublication: "2022-01-02", contenu: "Contenu de l'actualité 2" },
        { id: 3, image: "https://mdbootstrap.com/img/new/avatars/7.jpg", title: "Actualité 3", datePublication: "2022-01-03", contenu: "Contenu de l'actualité 3" },
        { id: 4, image: "https://mdbootstrap.com/img/new/avatars/7.jpg", title: "Actualité 4", datePublication: "2022-01-04", contenu: "Contenu de l'actualité 4" },
        { id: 5, image: "https://mdbootstrap.com/img/new/avatars/7.jpg", title: "Actualité 5", datePublication: "2022-01-05", contenu: "Contenu de l'actualité 5" },
        { id: 6, image: "https://mdbootstrap.com/img/new/avatars/7.jpg", title: "Actualité 6", datePublication: "2022-01-06", contenu: "Contenu de l'actualité 6" },
    ]);

    const [searchTitle, setSearchTitle] = useState("");
    const [sortAsc, setSortAsc] = useState(false);  // true for ascending, false for descending
    const [currentPage, setCurrentPage] = useState(1);  // Track current page
    const [itemsPerPage, setItemsPerPage] = useState(4); // Number of items per page

    // Sort the actualites based on date of publication (ascending or descending)
    const sortedActualites = [...actualites].sort((a, b) => {
        const dateA = new Date(a.datePublication);
        const dateB = new Date(b.datePublication);
        return sortAsc ? dateA - dateB : dateB - dateA;  // Toggle sort order
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

    return (
        <section>
            <div className="py-5 flex justify-between items-center">
                <div>
                    Rechercher par titre: 
                    <input 
                        type="text" 
                        className="form-input w-full mt-2 p-2 border rounded" 
                        placeholder="Rechercher" 
                        value={searchTitle} 
                        onChange={(e) => setSearchTitle(e.target.value)} 
                    />
                </div>
                <button onClick={()=> window.location.href = "/dashboard/news/add"} className="btn_add px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Ajouter un nouvel article
                </button>
            </div>

            <table className="table-auto w-full bg-white shadow-lg rounded-md overflow-hidden">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 text-left"> </th>
                        <th className="px-4 py-2 text-left">Titre</th>
                        <th 
                            onClick={() => setSortAsc(!sortAsc)} 
                            style={{ cursor: 'pointer' }} 
                            className="px-4 py-2 text-left"
                        >
                            Date de publication
                            <span className="ml-2">
                                <i className={`fa-solid ${sortAsc ? "fa-arrow-up" : "fa-arrow-down"}`} />
                            </span>
                        </th>
                        <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentActualites.map(actualite => (
                        <tr key={actualite.id}>
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
                            <td className="px-4 py-2">
                                <p className="font-normal">{actualite.datePublication}</p>
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