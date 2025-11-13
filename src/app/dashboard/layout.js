'use client';

import { useAuth } from '@/hooks/withAuth';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from "next/link";
import "./dashboard.css";
import { TfiMenu } from "react-icons/tfi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
// import '@fortawesome/fontawesome-free/css/all.min.css';

export default function DashboardLayout({ children }) {
  const { authenticated, loading, isAllowedUser, userRole } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showDonationsSubmenu, setShowDonationsSubmenu] = useState(false);
  const [userName, setUserName] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    if (typeof window !== 'undefined') {
      setUserName(localStorage.getItem('userName'));
      handleResize();
    }

    // Only allow access if user is authenticated and allowed (role=admin/member)
    if (
      !loading && (!authenticated || !isAllowedUser)
      && typeof window !== 'undefined' 
      && window.location.pathname !== '/login'
    ) {
      router.replace('/login');
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [authenticated, loading, router, isAllowedUser]);

  useEffect(() => {
    if (loading || !userRole) {
      return;
    }
    if (userRole === 'member') {
      const allowedPrefixes = ['/dashboard/news', '/dashboard/settings'];
      const isAllowedPath = allowedPrefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
      if (!isAllowedPath) {
        router.replace('/dashboard/news');
      }
    }
  }, [loading, userRole, pathname, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Deny rendering if not allowed, unless already on /login
  if ((!authenticated || !isAllowedUser) && (typeof window !== 'undefined' && window.location.pathname !== '/login')) {
    return null;
  }

  const menuItems = [
    { name: 'Dashboard', icon: <MdOutlineSpaceDashboard />, path: '', rolesAllowed: ['admin'] },
    { name: 'Actualités', icon: <ImNewspaper />, path: '/news', rolesAllowed: ['admin', 'member'] },
    {
      name: 'Donations',
      icon: <FaHandHoldingHeart />,
      path: '/donations',
      rolesAllowed: ['admin'],
      submenu: [
        { name: 'PayPal', path: '/donations/paypal' },
        { name: 'CMI', path: '/donations/cmi' }
      ]
    },
    { name: 'Bénévoles', icon: <FaHandsHelping />, path: '/volunteers', rolesAllowed: ['admin'] },
    { name: 'Contacts', icon: <FaAddressBook />, path: '/contacts', rolesAllowed: ['admin'] },
    { name: 'Partenaires', icon: <FaHandshake />, path: '/partners', rolesAllowed: ['admin'] },
    { name: 'Utilisateurs', icon: <FaUsers />, path: '/admins', rolesAllowed: ['admin'] },
    { name: 'Settings', icon: <IoSettingsSharp />, path: '/settings', rolesAllowed: ['admin', 'member'] },
  ];

  const allowedMenuItems = menuItems.filter((item) => {
    if (!item.rolesAllowed) {
      return true;
    }
    if (!userRole) {
      return false;
    }
    return item.rolesAllowed.includes(userRole);
  });

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.clear();
      document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 dashboard-container">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-0 left-0 z-40 p-4">
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded bg-[#F77F00] text-white"
        >
          <TfiMenu />
        </button>
      </div>

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 w-64 bg-[#003049] text-white transition-transform duration-300 ease-in-out transform z-30 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-800">
            <div onClick={() => window.location.href = '/dashboard'} className="cursor-pointer">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/Logo.png?alt=media&token=1d4af563-f0f7-466b-9184-77d005204d7a"
                alt="Logo"
                className="mx-auto max-w-full h-auto"
              />
            </div>
          </div>

          <div className="py-4 overflow-y-auto flex-1">
            <nav className="px-2">
              {allowedMenuItems.map((item, index) => (
                <div key={index} className="mb-1">
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => setShowDonationsSubmenu(!showDonationsSubmenu)}
                        className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-[#F77F00] hover:text-[#003049] rounded transition-colors"
                      >
                        <div className="flex items-center">
                          <span className="mr-3">{item.icon}</span>
                          <span>{item.name}</span>
                        </div>
                        <span>{showDonationsSubmenu ? '▼' : '▶'}</span>
                      </button>
                      
                      {showDonationsSubmenu && (
                        <div className="pl-10 mt-1">
                          {item.submenu.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={`/dashboard${subItem.path}`}
                              className="block px-4 py-2 text-white hover:bg-[#0d3e58] rounded transition-colors"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={`/dashboard${item.path}`}
                      className="flex items-center px-4 py-2 text-white hover:bg-[#F77F00] hover:text-[#003049] rounded transition-colors"
                    >
                      <span className="mr-3">{item.icon}</span>
                      <span>{item.name}</span>
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : ''}`}>
        {/* Header for Small/Medium screens */}
        <header className="bg-[#003049] text-white shadow sticky top-0 z-20 md:hidden">
          <div className="px-6 py-3 flex justify-between items-center">
            {/* Left - Toggle button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-0 bg-transparent"
            >
              <span className="w-8 h-8 rounded bg-[#F77F00] text-white flex items-center justify-center">
                <TfiMenu />
              </span>
            </button>
            
            {/* Right - Nav links */}
            <div className="flex items-center">
              <Link href="/" className="text-white hover:text-[#F77F00] transition-colors flex items-center whitespace-nowrap mr-3">
                <span>⬅</span>&nbsp;Siteweb
              </Link>
              <button
                onClick={handleLogout}
                className="py-1 px-3 bg-[#D62828] text-white rounded hover:bg-opacity-80 transition-colors text-sm"
              >
                Déconnexion
              </button>
            </div>
          </div>
          
          {/* Second row - Greeting centered */}
          <div className="text-center pb-3">
            <span className="text-lg font-bold whitespace-nowrap">👋🏻 Bonjour, Mr &nbsp;<span className="text-[#F77F00]">{userName}</span></span>
          </div>
        </header>
        
        {/* Header for Large screens */}
        <header className="bg-[#003049] text-white shadow py-4 px-6 sticky top-0 z-20 hidden lg:flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-0 bg-transparent mr-4"
            >
              <span className="w-8 h-8 rounded bg-[#F77F00] text-white flex items-center justify-center">
                <TfiMenu />
              </span>
            </button>
            <span className="text-xl font-bold flex items-center whitespace-nowrap">👋🏻 Bonjour, Mr &nbsp;<span className="text-[#F77F00]">{userName}</span></span>
          </div>
          
          <div className="flex items-center">
            <Link href="/" className="text-white hover:text-[#F77F00] transition-colors flex items-center whitespace-nowrap mr-4">
              <span>⬅</span>&nbsp;Revenir au siteweb
            </Link>
            <button
              onClick={handleLogout}
              className="py-2 px-4 bg-[#D62828] text-white rounded hover:bg-opacity-80 transition-colors"
            >
              Déconnexion
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
} 