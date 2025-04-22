"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { FaUsers, FaDollarSign, FaHandshake, FaChild } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// API base URL
const API_BASE_URL = 'https://api-mmcansh33q-uc.a.run.app/v1';

export default function DashboardPage() {
  // State for dashboard stats
  const [userCount, setUserCount] = useState(0);
  const [donationData, setDonationData] = useState([]);
  const [donationMonths, setDonationMonths] = useState([]);
  const [enfantsCount, setEnfantsCount] = useState(0);
  const [partnershipsCount, setPartnershipsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch all dashboard data
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        
        // Fetch users count
        const usersResponse = await axios.get(`${API_BASE_URL}/users/count`);
        if (usersResponse.data) {
          setUserCount(usersResponse.data.count || 0);
        }
        
        // Fetch donations data
        const donationsResponse = await axios.get(`${API_BASE_URL}/donations/monthly`);
        if (donationsResponse.data && Array.isArray(donationsResponse.data)) {
          // Extract months and amounts
          const months = donationsResponse.data.map(item => item.month);
          const amounts = donationsResponse.data.map(item => item.amount);
          setDonationMonths(months.length > 0 ? months : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']);
          setDonationData(amounts.length > 0 ? amounts : [0, 0, 0, 0, 0, 0]);
        }
        
        // Fetch children sponsored count
        const childrenResponse = await axios.get(`${API_BASE_URL}/children/sponsored/count`);
        if (childrenResponse.data) {
          setEnfantsCount(childrenResponse.data.count || 0);
        }
        
        // Fetch partnerships count
        const partnershipsResponse = await axios.get(`${API_BASE_URL}/partnerships/count`);
        if (partnershipsResponse.data) {
          setPartnershipsCount(partnershipsResponse.data.count || 0);
        }
        
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setError("Failed to fetch dashboard data. Using fallback values.");
        
        // Set fallback values if API fails
        setUserCount(120);
        setDonationData([2000, 3000, 2500, 4000, 3500, 5000]);
        setDonationMonths(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']);
        setEnfantsCount(50);
        setPartnershipsCount(10);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Calculate total donations
  const totalDonations = donationData.reduce((acc, curr) => acc + curr, 0);

  // Chart data for donations
  const donationChartData = {
    labels: donationMonths,
    datasets: [
      {
        label: 'Donations (MAD)',
        data: donationData,
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(66, 165, 245, 0.2)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="home_dashboard container mt-5">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <p className="text-xl">Loading dashboard data...</p>
          </div>
        </div>
      ) : (
        <>
          {error && (
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
              <p>{error}</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {/* Users Card */}
            <div className="dashboard_card users_card p-4 rounded-lg shadow-lg animate__animated animate__fadeInLeft">
              <div className="flex justify-center items-center">
                <div className="icon_container">
                  <FaUsers />
                </div>
                <h3 className="card_title ml-2 text-lg font-semibold">Users</h3>
              </div>
              <p className="card_value text-3xl font-bold">{userCount}</p>
              <p className="card_description text-sm text-gray-500">Total Users</p>
            </div>

            {/* Enfants Sponsorisés Card */}
            <div className="dashboard_card enfants_card p-4 rounded-lg shadow-lg animate__animated animate__fadeInUp">
              <div className="flex justify-center items-center">
                <div className="icon_container">
                  <FaChild />
                </div>
                <h3 className="card_title ml-2 text-lg font-semibold">Enfants Sponsorisés</h3>
              </div>
              <p className="card_value text-3xl font-bold">{enfantsCount}</p>
              <p className="card_description text-sm text-gray-500">Total Children Sponsored</p>
            </div>

            {/* Donations Card */}
            <div className="dashboard_card donations_card p-4 rounded-lg shadow-lg animate__animated animate__fadeInRight">
              <div className="flex justify-center items-center">
                <div className="icon_container">
                  <FaDollarSign />
                </div>
                <h3 className="card_title ml-2 text-lg font-semibold">Donations</h3>
              </div>
              <p className="card_value text-3xl font-bold">{totalDonations} MAD</p>
              <p className="card_description text-sm text-gray-500">Total Donations</p>
            </div>

            {/* Partnerships Card */}
            <div className="dashboard_card partnerships_card p-4 rounded-lg shadow-lg animate__animated animate__fadeInLeft">
              <div className="flex justify-center items-center">
                <div className="icon_container">
                  <FaHandshake />
                </div>
                <h3 className="card_title ml-2 text-lg font-semibold">Partenariats</h3>
              </div>
              <p className="card_value text-3xl font-bold">{partnershipsCount}</p>
              <p className="card_description text-sm text-gray-500">Total Partnerships</p>
            </div>
          </div>

          {/* Donation Trend Chart */}
          <div className="mt-24 flex justify-center">
            <div className="p-3 rounded-lg shadow-lg w-full max-w-7xl">
              <h4 className="text-center mb-4 text-xl font-semibold">Donation Chart</h4>
              <Line
                data={donationChartData}
                options={{
                  responsive: true,
                }}
                height={100}
                width={600}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
} 