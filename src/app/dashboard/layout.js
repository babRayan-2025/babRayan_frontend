"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./dashboard.css";
import { TfiMenu } from "react-icons/tfi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(null); // Start as null
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 768);
    };

    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.role === "admin") {
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }


    handleResize(); 

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isSidebarOpen === null || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const menuItems = [
    { name: 'Dashboard', icon: <MdOutlineSpaceDashboard />, path: '/' },
    { name: 'Actualités', icon: <ImNewspaper />, path: '/news' },
    { name: 'Donations', path: '/news' },
    { name: 'Administateurs', icon: <FaUsers />, path: '/admins' },
    { name: 'Settings', icon: <IoSettingsSharp />, path: '/settings' },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/login");
  };

  return (
    <section className='dashboard'>
      <div className="fledx min-h-screen">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 w-64  transition-transform duration-300 
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`} >
          <div className="d-fldex" id="wrapper">
            <div className="p-4 border-end " id="sidebar-wrapper">
              <div className="image_dashbord">
                <img src='https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/Logo.png?alt=media&token=e5f5173e-6170-4f2f-9037-955c7c199481' alt="Logo" />
              </div>
              <div className="list-group list-group-flush">
                {menuItems.map(
                  (menuItem, index) => (
                    <a className="p-3" key={index} href={`/dashboard${menuItem.path}`}><span className='me-2'>{menuItem.icon}</span> {menuItem.name} </a>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={`flex-1 transition-margin duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"
          }`}>
          {/* Header */}
          <header className="navbar_dashbord shadow p-4 flex items-center justify-between">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded" style={{ backgroundColor: "#F77F00" }}
            >
              <span className="text-white fw-bold" > <TfiMenu /></span >
            </button>
            <h1 className="text-xl text-center font-bold">👋🏻 Bonjour, Mr <b style={{ color: "#F77F00" }}>XX</b></h1>

            <div className="flex items-center gap-4" id="navbarSupportedContent">
              <div>
                <Link href="/"> <span>⬅</span> Revenir au siteweb </Link>
              </div>
              <div>
                <a className="p-2 deconnexion" href="/login" onClick={handleLogout}> Déconnexion </a>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <section className="p-4 ">{children}</section>
        </div>
      </div>
    </section >
  );
}