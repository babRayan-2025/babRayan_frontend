"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaCheck, FaTimes, FaArrowLeft } from 'react-icons/fa6';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ExaminePartenaire() {
    const router = useRouter();
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedPartner, setSelectedPartner] = useState(null);
    const imageDefault = "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/dashboard%2Favatar.png?alt=media&token=eb86123a-2582-4770-80cb-c1c63352dbd4";
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchPendingPartners = async () => {
            try {
                const response = await fetch('https://api-vevrjfohcq-uc.a.run.app/v1/partenaire', {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
                const result = await response.json();

                if (result.status && result.data) {
                    // Transform the data to match our expected format and filter for non-approved partners
                    const formattedData = result.data
                        .filter(partner => !partner.approuve) // Only include non-approved partners
                        .map(partner => ({
                            id: partner.id,
                            image: imageDefault,
                            name: partner.nom,
                            profession: partner.profession,
                            joinDate: formatDate(partner.createdAt._seconds * 1000),
                            email: partner.email,
                            message: partner.message,
                            telephone: partner.telephone,
                            approuve: false,
                            rawData: partner
                        }));

                    setPartners(formattedData);
                } else {
                    setError('Failed to fetch partners data');
                }
            } catch (err) {
                setError('Error fetching partners: ' + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPendingPartners();
    }, []);

    // Format Firebase timestamp
    const formatDate = (timestamp) => {
        if (!timestamp) return "N/A";

        try {
            const date = new Date(timestamp);
            return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
        } catch (error) {
            return "N/A";
        }
    };

    // Handle approving a partner
    const handleApprovePartner = async (id) => {
        try {
            const response = await fetch(`https://api-vevrjfohcq-uc.a.run.app/v1/partenaire/${id}/approuve`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`,
                },

            });

            if (!response.ok) {
                toast.error('Erreur lors de l\'approbation du partenaire');
                throw new Error('Erreur lors de l\'approbation du partenaire');
            }

            toast.success('Partenaire approuvé avec succès');

            // Remove the approved partner from the list
            setPartners(prevPartners => prevPartners.filter(partner => partner.id !== id));

            if (selectedPartner && selectedPartner.id === id) {
                setSelectedPartner(null);
            }
        } catch (err) {
            console.error("Error approving partner:", err);
        }
    };

    // Handle selecting a partner for detailed view
    const selectPartner = (partner) => {
        setSelectedPartner(partner);
    };

    // Return to list view
    const backToList = () => {
        setSelectedPartner(null);
    };

    // Return to partners dashboard
    const goToPartnersDashboard = () => {
        router.push('/dashboard/partners');
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-lg">Chargement des partenaires en attente...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-lg text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <section className="px-2 sm:px-4 py-4">
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

            <div className="flex items-center mb-6">
                <button
                    onClick={selectedPartner ? backToList : goToPartnersDashboard}
                    className="flex items-center mr-4 text-blue-600 hover:text-blue-800"
                >
                    <FaArrowLeft className="mr-2" />
                    {selectedPartner ? "Retour à la liste" : "Retour"}
                </button>
                <h1 className="text-2xl font-bold text-center w-full">
                    {selectedPartner ? 'Examen du Partenaire' : 'Partenaires en Attente d\'Approbation'}
                </h1>
            </div>

            {!selectedPartner ? (
                <>
                    {partners.length === 0 ? (
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <p className="text-lg text-gray-600">Aucun partenaire en attente d'approbation.</p>
                            <button
                                onClick={goToPartnersDashboard}
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                            >
                                Retour au tableau de bord
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {partners.map(partner => (
                                <div key={partner.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="p-4 border-b">
                                        <div className="flex items-center">
                                            <img
                                                src={partner.image}
                                                alt=""
                                                className="w-12 h-12 object-cover rounded-full mr-4"
                                            />
                                            <div>
                                                <h3 className="font-semibold text-lg">{partner.name}</h3>
                                                <p className="text-sm text-gray-600">{partner.profession}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="mb-3">
                                            <p className="text-sm text-gray-500">Email: {partner.email}</p>
                                            <p className="text-sm text-gray-500">Téléphone: {partner.telephone}</p>
                                            <p className="text-sm text-gray-500">Date: {partner.joinDate}</p>
                                        </div>
                                        <div className="flex justify-between mt-3">
                                            <button
                                                onClick={() => selectPartner(partner)}
                                                className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                                            >
                                                Détails
                                            </button>
                                            <button
                                                onClick={() => handleApprovePartner(partner.id)}
                                                className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                                            >
                                                Approuver
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
                                <img
                                    src={selectedPartner.image}
                                    alt={selectedPartner.name}
                                    className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue-100"
                                />
                                <h2 className="text-xl font-bold text-center">{selectedPartner.name}</h2>
                                <p className="text-gray-600 text-center">{selectedPartner.profession}</p>
                                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mt-2">
                                    En attente d'approbation
                                </span>
                            </div>

                            <div className="md:w-2/3 md:pl-6">
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2 text-blue-600 border-b pb-2">Informations de Contact</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-medium text-gray-700">Email:</p>
                                            <p className="text-gray-800">{selectedPartner.email}</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-700">Téléphone:</p>
                                            <p className="text-gray-800">{selectedPartner.telephone}</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-700">Date d'inscription:</p>
                                            <p className="text-gray-800">{selectedPartner.joinDate}</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2 text-blue-600 border-b pb-2">Message</h3>
                                    <div className="bg-gray-50 p-4 rounded-md">
                                        <p className="text-gray-800">{selectedPartner.message || "Aucun message fourni"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end border-t pt-4">
                            <button
                                onClick={backToList}
                                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 mr-3"
                            >
                                Retour
                            </button>
                            <button
                                onClick={() => handleApprovePartner(selectedPartner.id)}
                                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center"
                            >
                                <FaCheck className="mr-2" /> Approuver ce partenaire
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
} 