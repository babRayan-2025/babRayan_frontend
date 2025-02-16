"use client";
import React, { useEffect, useState } from 'react';
import '../dashboard.css';

export default function Users() {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', tel: "066666666", email: "email@gmail.com", age: 25, pic: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 2, name: 'Jane Doe', tel: "066666666", email: "email@gmail.com", age: 30, pic: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 3, name: 'Bob Smith', tel: "066666666", email: "email@gmail.com", age: 35, pic: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 4, name: 'Alice Johnson', tel: "066666666", email: "email@gmail.com", age: 28, pic: "https://randomuser.me/api/portraits/men/1.jpg" },
    ]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch(`http://127.0.0.1:5001/babrayanlocal/us-central1/api/users/`)
            .then(response => response.json())
            .then(data => {
                setUsers(data.data);
            })
    }, []);

    // Filter users based on the search query
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section>
            <div className="mb-4 flex justify-between items-center">
                <input
                    type="text"
                    className="p-2 border rounded-md w-1/4"
                    placeholder="Search by name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-2 px-4 text-left">Nom</th>
                        <th className="py-2 px-4 text-left">Age</th>
                        <th className="py-2 px-4 text-left">Téléphone</th>
                        <th className="py-2 px-4 text-left">Rôle</th>
                        <th className="py-2 px-4 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.id} className="border-b my-auto">
                            <td className="py-3 px-4">
                                <div className="flex items-center">
                                    <img src={user.pic ? user.pic : "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/dashboard%2Favatar.png?alt=media&token=eb86123a-2582-4770-80cb-c1c63352dbd4"} alt={user.name} className="w-14 h-14 object-cover rounded-full" />
                                    <div className="ml-3">
                                        <p className="font-semibold mb-1">{user.name}</p>
                                        <p className="text-gray-500 mb-0">{user.email}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 px-4">{user.age ? user.age : <i>non spécifié</i>}</td>
                            <td className="py-3 px-4">{user.tel ? user.tel : <i>non spécifié</i>}</td>
                            <td className="py-3 px-4">
                                <span className={'py-1 px-3 inline-block rounded-full text-white bg-red-500'}>
                                    admin
                                </span>
                            </td>
                            <td className="py-3 px-4 ">
                                {/* Remove delete button for admin users */}
                                {user.role !== 'admin' && (
                                    <button type="button" className="text-red-500 hover:text-red-700">
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
