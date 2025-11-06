"use client";
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { FaTrash, FaSort, FaSortUp, FaSortDown, FaFileExcel } from 'react-icons/fa';
import * as XLSX from 'xlsx';

export default function CmiPage() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [donationToDelete, setDonationToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAsc, setSortAsc] = useState(false);
  const [sortBy, setSortBy] = useState('date');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('all');
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [statusSortMode, setStatusSortMode] = useState('Failed'); // Track custom sort for status
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const response = await fetch('https://api-vevrjfohcq-uc.a.run.app/v1/cmi/get-cmi', {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setDonations(data.data || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching donations:', error);
      toast.error('Failed to fetch donations');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://api-vevrjfohcq-uc.a.run.app/v1/cmi/delete-cmi/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('CMI Donation supprimée avec succès');
        fetchDonations();
        setShowDeleteModal(false);
      } else {
        console.log(data);
        toast.error('Erreur lors de la suppression de la donation CMI');
      }
    } catch (error) {
      console.error('Error deleting donation:', error);
      toast.error('Erreur lors de la suppression de la donation CMI');
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  const formatHoraire = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleTimeString();
  };

  const filterDonationsByStatus = (donations) => {
    if (activeTab === 'all') return donations;
    return donations.filter(donation =>
      activeTab === 'pending' ? donation.status === 'Pending' :
        activeTab === 'paid' ? donation.status === 'Paid' :
          activeTab === 'Failed' ? donation.status === 'Failed' : true
    );
  };

  const filteredBySearchDonations = donations.filter(donation =>
    donation.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donation.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredDonations = filterDonationsByStatus(filteredBySearchDonations);

  const sortedDonations = [...filteredDonations].sort((a, b) => {
    if (sortBy === 'date') {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortAsc ? dateA - dateB : dateB - dateA;
    } else if (sortBy === 'status') {
      // Cycle through sort: Failed first, then Pending, then Paid
      const cycle = {
        'Failed': ['Failed', 'Pending', 'Paid'],
        'Pending': ['Pending', 'Paid', 'Failed'],
        'Paid': ['Paid', 'Failed', 'Pending'],
      };
      const currOrder = cycle[statusSortMode] || ['Failed', 'Pending', 'Paid'];
      const statusToIndex = status => currOrder.indexOf(status);
      // Sort primarily by custom order, then by time (descending, newest first)
      const idxA = statusToIndex(a.status);
      const idxB = statusToIndex(b.status);
      if (idxA !== idxB) return idxA - idxB;
      // If same status, sort by date desc
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA;
    } else if (sortBy === 'amount') {
      return sortAsc
        ? parseFloat(a.amount) - parseFloat(b.amount)
        : parseFloat(b.amount) - parseFloat(a.amount);
    } else if (sortBy === 'type') {
      const typeOrder = { 'Ponctuel': 0, 'Mensuel': 1 };
      return sortAsc
        ? typeOrder[a.type] - typeOrder[b.type]
        : typeOrder[b.type] - typeOrder[a.type];
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedDonations.length / itemsPerPage);
  const currentDonations = sortedDonations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const exportToExcel = () => {
    try {
      const dataToExport = sortedDonations.map(donation => ({
        'Nom Complet': donation.fullname,
        'Email': donation.email,
        'Téléphone': donation.telephone || 'N/A',
        'Montant': parseFloat(donation.amount).toFixed(2) + ' MAD',
        'Type': donation.type,
        'Date': formatDate(donation.createdAt),
        'Horaire': formatHoraire(donation.createdAt),
        'Status': donation.status
      }));

      const worksheet = XLSX.utils.json_to_sheet(dataToExport);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, `CMI_Donations_${activeTab}`);

      // Save the file
      XLSX.writeFile(workbook, `CMI_Donations_${activeTab}_${new Date().toISOString().split('T')[0]}.xlsx`);

      toast.success('Export réussi');
    } catch (error) {
      console.error('Error exporting to Excel:', error);
      toast.error('Échec de l\'export');
    }
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  console.log(donations);
  return (
    <div className="p-3 sm:p-6">
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
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="w-full sm:w-auto">
          <input
            type="text"
            placeholder="Recherche par nom ou email"
            className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div >
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-700">Afficher:</label>
            <select
              className="border border-gray-300 rounded px-3 py-1 text-sm bg-white w-20"
              value={String(itemsPerPage)}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={7}>7</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>
          <button
            onClick={exportToExcel}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 text-sm"
          >
            <FaFileExcel /> Exporter {activeTab === 'all' ? 'Toutes' : activeTab === 'pending' ? 'En attente' : activeTab === 'paid' ? 'Payées' : 'Échouées'}
          </button>
        </div>
      </div>

      {/* Status Filter Tabs */}
      <div className="flex overflow-x-auto mb-4 border-b">
        <button
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'all' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => { setActiveTab('all'); setCurrentPage(1); }}
        >
          Toutes ({donations.length})
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'pending' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => { setActiveTab('pending'); setCurrentPage(1); }}
        >
          En attente ({donations.filter(d => d.status === 'Pending').length})
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'paid' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => { setActiveTab('paid'); setCurrentPage(1); }}
        >
          Payées ({donations.filter(d => d.status === 'Paid').length})
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'Failed' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => { setActiveTab('Failed'); setCurrentPage(1); }}
        >
          Échouées ({donations.filter(d => d.status === 'Failed').length})
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nom Complet
                </th>
                <th
                  className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
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
                  className="hidden sm:table-cell px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
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
                  className="hidden md:table-cell px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setSortBy('date');
                    setSortAsc(!sortAsc);
                  }}
                >
                  <div className="flex items-center">
                    Date
                    {sortBy === 'date' ? (
                      sortAsc ? <FaSortUp className="ml-1" /> : <FaSortDown className="ml-1" />
                    ) : (
                      <FaSort className="ml-1 text-gray-400" />
                    )}
                  </div>
                </th>
                <th
                  className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setSortBy('status');
                    setSortAsc(false); // always descending
                    setStatusSortMode((prev) =>
                      prev === 'Failed' ? 'Pending' : prev === 'Pending' ? 'Paid' : 'Failed'
                    );
                  }}
                >
                  <div className="flex items-center">
                    Status
                    {sortBy === 'status' ? (
                      <>
                        <span className="ml-2 text-xs font-medium">{statusSortMode}</span>
                        <FaSortDown className="ml-1" />
                      </>
                    ) : (
                      <FaSort className="ml-1 text-gray-400" />
                    )}
                  </div>
                </th>
                <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentDonations.map((donation) => (
                <tr key={donation.id} className="hover:bg-gray-50">
                  <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                    <div className="text-xs sm:text-sm font-medium text-gray-900">{donation.fullname}</div>
                    <div className="text-xs sm:text-sm text-gray-500 truncate max-w-[120px] sm:max-w-full">{donation.email}</div>
                    <div className="text-xs sm:text-sm text-gray-500 ">{donation.telephone}</div>
                    <div className="sm:hidden text-xs">
                      <span className="inline-block mt-1">{formatDate(donation.createdAt)}</span> <br />
                      <span className="inline-block mt-1">{formatHoraire(donation.createdAt)}</span>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                    <div className="text-xs sm:text-sm text-gray-900 font-semibold">{parseFloat(donation.amount).toFixed(2)} MAD</div>
                  </td>
                  <td className="hidden sm:table-cell px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${donation.type === 'Ponctuel' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                      {donation.type}
                    </span>
                  </td>
                  <td className="hidden md:table-cell px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                    {formatDate(donation.createdAt)} <br /> {formatHoraire(donation.createdAt)}
                  </td>
                  <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${donation.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      donation.status === 'Paid' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                      {donation.status}
                    </span>
                  </td>
                  <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => {
                        setDonationToDelete(donation);
                        setShowDeleteModal(true);
                      }}
                      className="text-red-600 hover:text-red-900 flex items-center justify-center"
                      title="Delete"
                    >
                      <FaTrash className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty state message */}
      {sortedDonations.length === 0 && (
        <div className="text-center p-6 bg-gray-50 rounded-lg mt-4">
          <p className="text-gray-500">Aucune donation trouvée</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 0 && (
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-1 sm:gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm rounded-md transition-colors ${
                  currentPage === i + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-4 sm:p-6 max-w-sm w-full">
            <h3 className="text-lg sm:text-xl font-medium mb-4">Confirmer la suppression</h3>
            <p className="mb-4 text-sm sm:text-base">
              Êtes-vous sûr de vouloir supprimer cette donation de <strong>{donationToDelete.fullname}</strong> pour le montant de <strong>{parseFloat(donationToDelete.amount).toFixed(2)} MAD</strong>?
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none text-xs sm:text-sm"
              >
                Annuler
              </button>
              <button
                onClick={() => handleDelete(donationToDelete.id)}
                className="px-3 py-1 sm:px-4 sm:py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none text-xs sm:text-sm"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
