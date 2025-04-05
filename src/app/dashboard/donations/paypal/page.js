"use client";
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { FaTrash, FaSort, FaSortUp, FaSortDown, FaTimes } from 'react-icons/fa';

export default function PaypalPage() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [donationToDelete, setDonationToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAsc, setSortAsc] = useState(false);
  const [sortBy, setSortBy] = useState('date');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const response = await fetch('https://api-mmcansh33q-uc.a.run.app/v1/don/get-paypal');
      const data = await response.json();
      setDonations(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching donations:', error);
      toast.error('Failed to fetch donations');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://api-mmcansh33q-uc.a.run.app/v1/don/delete-paypal/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        toast.success('Paypal Donation supprimée avec succès');
        fetchDonations();
        setShowDeleteModal(false);
      } else {
        toast.error('Erreur lors de la suppression de la donation Paypal');
      }
    } catch (error) {
      console.error('Error deleting donation:', error);
      toast.error('Erreur lors de la suppression de la donation Paypal');
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = new Date(timestamp._seconds * 1000);
    return date.toLocaleDateString();
  };

  const filteredDonations = donations.filter(donation =>
    donation.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donation.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedDonations = [...filteredDonations].sort((a, b) => {
    if (sortBy === 'date') {
      const dateA = new Date(a.createdAt._seconds * 1000);
      const dateB = new Date(b.createdAt._seconds * 1000);
      return sortAsc ? dateA - dateB : dateB - dateA;
    } else if (sortBy === 'status') {
      const statusOrder = { 'pending': 0, 'paid': 1, 'canceled': 2 };
      return sortAsc
        ? statusOrder[a.status] - statusOrder[b.status]
        : statusOrder[b.status] - statusOrder[a.status];
    } else if (sortBy === 'amount') {
      return sortAsc
        ? a.montant - b.montant
        : b.montant - a.montant;
    } else if (sortBy === 'type') {
      const typeOrder = { 'Ponctuel': 0, 'Mensuel': 1 };
      return sortAsc
        ? typeOrder[a.typeDon] - typeOrder[b.typeDon]
        : typeOrder[b.typeDon] - typeOrder[a.typeDon];
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedDonations.length / itemsPerPage);
  const currentDonations = sortedDonations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="p-6">
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
      <div className="mb-6 flex justify-between items-center">
        <div>
          <input
            type="text"
            placeholder="Recherche par nom ou email"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nom Complet
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSortBy('amount');
                  setSortAsc(!sortAsc);
                }}
              >
                <div className="flex items-center">
                  Prix
                  {sortBy === 'amount' ? (
                    sortAsc ? <FaSortUp className="ml-1" /> : <FaSortDown className="ml-1" />
                  ) : (
                    <FaSort className="ml-1 text-gray-400" />
                  )}
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSortBy('type');
                  setSortAsc(!sortAsc);
                }}
              >
                <div className="flex items-center">
                  Type
                  {sortBy === 'type' ? (
                    sortAsc ? <FaSortUp className="ml-1" /> : <FaSortDown className="ml-1" />
                  ) : (
                    <FaSort className="ml-1 text-gray-400" />
                  )}
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSortBy('date');
                  setSortAsc(!sortAsc);
                }}
              >
                <div className="flex items-center">
                  Date <br />(MM/DD/YYYY)
                  {sortBy === 'date' ? (
                    sortAsc ? <FaSortUp className="ml-1" /> : <FaSortDown className="ml-1" />
                  ) : (
                    <FaSort className="ml-1 text-gray-400" />
                  )}
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSortBy('status');
                  setSortAsc(!sortAsc);
                }}
              >
                <div className="flex items-center">
                  Status
                  {sortBy === 'status' ? (
                    sortAsc ? <FaSortUp className="ml-1" /> : <FaSortDown className="ml-1" />
                  ) : (
                    <FaSort className="ml-1 text-gray-400" />
                  )}
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentDonations.map((donation) => (
              <tr key={donation.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{donation.nom}</div>
                  <div className="text-sm text-gray-500">{donation.email}</div>
                  <div className="text-sm text-gray-500">{donation.telephone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 font-semibold">{donation.montant} MAD</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                    {donation.typeDon}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(donation.createdAt)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${donation.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    donation.status === 'paid' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                    {donation.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => {
                      setDonationToDelete(donation);
                      setShowDeleteModal(true);
                    }}
                    className="text-red-600 hover:text-red-900"
                    title="Delete"
                  >
                    <FaTrash className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`mx-1 px-3 py-1 rounded ${currentPage === i + 1
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
            <p>Are you sure you want to delete this donation?</p>
            <div className="mt-4 flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(donationToDelete.id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
