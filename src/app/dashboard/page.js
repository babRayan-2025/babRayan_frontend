"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { FaUsers, FaDollarSign, FaHandshake, FaChild } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function DashboardPage() {
  // Placeholder values for the dashboard stats
  const [userCount, setUserCount] = useState(120); // Total Users
  const [donationData, setDonationData] = useState([2000, 3000, 2500, 4000, 3500, 5000]); // Donations over months
  const [enfantsCount, setEnfantsCount] = useState(50); // Total Children Sponsored
  const [partnershipsCount, setPartnershipsCount] = useState(10); // Total Partnerships

  // Example chart data for donations
  const donationChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Months
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
          <p className="card_value text-3xl font-bold">{donationData.reduce((acc, curr) => acc + curr, 0)} MAD</p>
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
      <div className="mt-32 flex justify-center">
        <div className="p-3 rounded-lg shadow-lg w-full max-w-4xl">
          <h4 className="text-center mb-4 text-xl font-semibold">Donation Chart</h4>
          <Line
            data={donationChartData}
            options={{
              responsive: true,
            }}
            height={100} // Adjust height as needed
            width={600}  // Adjust width as needed
          />
        </div>
      </div>

    </div>
  );
} 