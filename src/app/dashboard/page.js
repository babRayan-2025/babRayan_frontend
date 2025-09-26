"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { FaUsers, FaDollarSign, FaHandshake, FaChild } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function DashboardPage() {
  // State for dashboard stats
  const [users, setUsers] = useState(0);
  const [paidCmiDonations, setPaidCmiDonations] = useState([]);
  const [paidPaypalDonations, setPaidPaypalDonations] = useState([]);
  const [donationData, setDonationData] = useState([]);
  const [donationMonths, setDonationMonths] = useState([]);
  const [enfantsCount, setEnfantsCount] = useState(0);
  const [partnershipsCount, setPartnershipsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalDonations, setTotalDonations] = useState(0);
  const [totalCmiDonations, setTotalCmiDonations] = useState(0);
  const [totalPaypalDonations, setTotalPaypalDonations] = useState(0);
  const token = localStorage.getItem("token");

  // ✅ Helper: logout if token expired
  const handleLogout = () => {
    localStorage.clear();
    router.push("/login"); // redirect to login
  };



  // ✅ Helper: check API response for expired token
  const checkTokenExpired = (data) => {
    if (data?.error === "Invalid or expired token") {
      handleLogout();
      return true; // stop further execution
    }
    return false;
  };

  useEffect(() => {
    // Function to fetch all dashboard data
    const fetchDashboardData = async () => {
      try {
        setLoading(true);

        // Fetch users count
        const usersResponse = await fetch('https://api-vevrjfohcq-uc.a.run.app/v1/users');
        const usersData = await usersResponse.json();
        if (usersData.status) {
          setUsers(usersData.data);
        }

        // Fetch CMI donations - only paid ones
        const cmiResponse = await fetch('https://api-vevrjfohcq-uc.a.run.app/v1/cmi/get-cmi', {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
        const cmiData = await cmiResponse.json();


        if (checkTokenExpired(cmiData)) return; // ⬅️ logout if expired
        const paidCmi = (cmiData.data || []).filter(donation =>
          donation.status === "Paid" || donation.status === "paid"
        );
        setPaidCmiDonations(paidCmi);

        // Fetch PayPal donations - only paid ones
        const paypalResponse = await fetch('https://api-vevrjfohcq-uc.a.run.app/v1/don/get-paypal', {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
        const paypalData = await paypalResponse.json();
        if (checkTokenExpired(paypalData)) return; // ⬅️ logout if expired
        const paidPaypal = (paypalData || []).filter(donation =>
          donation.status === "paid"
        );
        setPaidPaypalDonations(paidPaypal);

        // Calculate total donations - convert to numbers properly before adding
        const cmiTotal = paidCmi.reduce((sum, donation) => sum + (parseFloat(donation.amount) || 0), 0);
        const paypalTotal = paidPaypal.reduce((sum, donation) => sum + (parseFloat(donation.montant) || 0), 0);
        setTotalCmiDonations(cmiTotal);
        setTotalPaypalDonations(paypalTotal);
        setTotalDonations(cmiTotal + paypalTotal);

        // Process donations data for chart
        processDonationsData(paidCmi, paidPaypal);


        // total partenaires
        const partnershipsResponse = await fetch('https://api-vevrjfohcq-uc.a.run.app/v1/partenaire', {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
        const partnershipsData = await partnershipsResponse.json();
        if (partnershipsData.status) {
          const approuvedPartnerships = (partnershipsData.data || []).filter(partnership =>
            partnership.approuve === true
          );
          setPartnershipsCount(approuvedPartnerships.length);
        }


      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setError("Échec du chargement des données du tableau de bord. Utilisation des valeurs par défaut. Veuillez vous déconnecter puis vous reconnecter pour continuer.");

      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Process donations data for chart and calculate total
  const processDonationsData = (cmiDonations, paypalDonations) => {
    try {
      // Get last 6 months for chart
      const months = [];
      const monthlyCmiTotals = {};
      const monthlyPaypalTotals = {};
      const now = new Date();

      // Initialize last 6 months data structure
      for (let i = 5; i >= 0; i--) {
        const month = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const monthKey = `${month.getFullYear()}-${month.getMonth() + 1}`;
        const monthName = month.toLocaleString('default', { month: 'short' });
        months.push(monthName);
        monthlyCmiTotals[monthKey] = 0;
        monthlyPaypalTotals[monthKey] = 0;
      }

      // Process CMI donations
      cmiDonations.forEach(donation => {
        const amount = parseFloat(donation.amount) || 0;

        // Add to monthly totals for chart
        if (donation.createdAt) {
          const date = new Date(donation.createdAt);
          const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
          if (monthlyCmiTotals[monthKey] !== undefined) {
            monthlyCmiTotals[monthKey] += amount;
          }
        }
      });

      // Process PayPal donations
      paypalDonations.forEach(donation => {
        const amount = parseFloat(donation.montant) || 0;

        // Add to monthly totals for chart
        if (donation.createdAt) {
          // Handle different date formats
          let date;
          if (donation.createdAt._seconds) {
            date = new Date(donation.createdAt._seconds * 1000);
          } else {
            date = new Date(donation.createdAt);
          }
          const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
          if (monthlyPaypalTotals[monthKey] !== undefined) {
            monthlyPaypalTotals[monthKey] += amount;
          }
        }
      });

      // Convert monthlyTotals objects to arrays for chart
      const cmiChartData = Object.values(monthlyCmiTotals);
      const paypalChartData = Object.values(monthlyPaypalTotals);
      const totalChartData = cmiChartData.map((cmi, index) => cmi + paypalChartData[index]);

      setDonationData({
        total: totalChartData,
        cmi: cmiChartData,
        paypal: paypalChartData
      });
      setDonationMonths(months);

    } catch (error) {
      console.error("Erreur de traitement des données de dons:", error);
      // Use fallback data
      const fallbackData = [0, 0, 0, 0, 0, 0];
      setDonationData({
        total: fallbackData,
        cmi: fallbackData,
        paypal: fallbackData
      });
      setDonationMonths(['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin']);
    }
  };

  // Chart data for donations
  const donationChartData = {
    labels: donationMonths,
    datasets: [
      {
        label: 'Total Dons (MAD)',
        data: donationData?.total || [],
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(66, 165, 245, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Dons CMI (MAD)',
        data: donationData?.cmi || [],
        borderColor: '#FF9800',
        backgroundColor: 'rgba(255, 152, 0, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Dons PayPal (MAD)',
        data: donationData?.paypal || [],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        tension: 0.4,
      },
    ],
  };
  return (
    <div className="home_dashboard container mx-auto px-4 mt-5">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <p className="text-xl">Chargement des données du tableau de bord...</p>
          </div>
        </div>
      ) : (
        <>
          {error && (
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
              <p>{error}</p>
              <button
                onClick={handleLogout}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Se reconnecter
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-center">
            {/* Users Card */}
            <div className="dashboard_card users_card p-3 sm:p-4 rounded-lg shadow-lg animate__animated animate__fadeInLeft">
              <div className="flex justify-center items-center">
                <div className="icon_container">
                  <FaUsers />
                </div>
                <h3 className="card_title ml-2 text-base sm:text-lg font-semibold">Admins</h3>
              </div>
              <p className="card_value text-2xl sm:text-3xl font-bold">{users.length}</p>
              <p className="card_description text-xs sm:text-sm text-gray-500">Total Admins</p>
            </div>

            {/* Enfants Sponsorisés Card */}
            {/* <div className="dashboard_card enfants_card p-4 rounded-lg shadow-lg animate__animated animate__fadeInUp">
              <div className="flex justify-center items-center">
                <div className="icon_container">
                  <FaChild />
                </div>
                <h3 className="card_title ml-2 text-lg font-semibold">Enfants</h3>
              </div>
              <p className="card_value text-3xl font-bold">{enfantsCount}</p>
              <p className="card_description text-sm text-gray-500">Total Enfants</p>
            </div> */}


            {/* Partnerships Card */}
            <div className="dashboard_card partnerships_card p-3 sm:p-4 rounded-lg shadow-lg animate__animated animate__fadeInLeft">
              <div className="flex justify-center items-center">
                <div className="icon_container">
                  <FaHandshake />
                </div>
                <h3 className="card_title ml-2 text-base sm:text-lg font-semibold">Partenariats</h3>
              </div>
              <p className="card_value text-2xl sm:text-3xl font-bold">{partnershipsCount}</p>
              <p className="card_description text-xs sm:text-sm text-gray-500">Total Partenariats</p>
            </div>

            {/* Donations Card */}
            <div className="dashboard_card donations_card p-3 sm:p-4 rounded-lg shadow-lg animate__animated animate__fadeInRight">
              <div className="flex justify-center items-center">
                <div className="icon_container">
                  <FaDollarSign />
                </div>
                <h3 className="card_title ml-2 text-base sm:text-lg font-semibold">Dons</h3>
              </div>
              <p className="card_value text-2xl sm:text-3xl font-bold">{totalDonations} MAD</p>
              <p className="card_description text-xs sm:text-sm text-gray-500">Total Dons</p>
            </div>
          </div>

          {/* Donation Trend Chart */}
          <div className="mt-8 sm:mt-16 flex justify-center">
            <div className="p-2 sm:p-3 rounded-lg shadow-lg w-full">
              <h4 className="text-center mb-2 sm:mb-4 text-lg sm:text-xl font-semibold">Graphique des Dons</h4>
              <div className="w-full h-[250px] sm:h-[300px] md:h-[350px]">
                <Line
                  data={donationChartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: true,
                        position: 'top',
                      },
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        ticks: {
                          font: {
                            size: window.innerWidth < 768 ? 8 : 12
                          }
                        }
                      },
                      x: {
                        ticks: {
                          font: {
                            size: window.innerWidth < 768 ? 8 : 12
                          }
                        }
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Donation Statistics */}
          <div className="mt-10 flex justify-center">
            <div className="p-5 rounded-lg shadow-lg w-full max-w-7xl">
              <h4 className="text-center mb-4 text-xl font-semibold">Statistiques des Dons</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* CMI Donations */}
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-semibold mb-2 text-blue-800">Dons CMI (Payés Uniquement)</h5>
                  <p className="text-lg"><span className="font-bold">{paidCmiDonations.length}</span> dons</p>
                  <p className="text-lg"><span className="font-bold">{totalCmiDonations.toFixed(2)}</span> MAD total</p>
                </div>

                {/* PayPal Donations */}
                <div className="p-4 bg-green-50 rounded-lg">
                  <h5 className="font-semibold mb-2 text-green-800">Dons PayPal (Payés Uniquement)</h5>
                  <p className="text-lg"><span className="font-bold">{paidPaypalDonations.length}</span> dons</p>
                  <p className="text-lg"><span className="font-bold">{totalPaypalDonations.toFixed(2)}</span> MAD total</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
} 