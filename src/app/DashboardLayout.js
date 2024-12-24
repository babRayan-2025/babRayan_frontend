"use client";

import { useRouter } from "next/navigation"; // Import Next.js navigation hook
import { useEffect, useState, useRef } from "react"; // React hooks for state, effect, and refs
import "./globals.css"; // Global styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import { TfiMenu } from "react-icons/tfi"; // Import the TfiMenu icon
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { PiUsersFourFill } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
export default function DashboardLayout({ children }) {
    const router = useRouter(); // Initialize the router for navigation
    const sidebarToggleRef = useRef(null); // Reference for the sidebar toggle button

    useEffect(() => {
        // Authentication check
        const userId = localStorage.getItem("userId");
        const isAdmin = localStorage.getItem("isAdmin") === "true";

        // Uncomment the following block to enable authentication redirection
        // if (!userId || !isAdmin) {
        //   router.push("/login"); // Redirect to login if not authenticated
        // }
    }, [router]);

    const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

    const handleToggleSidebar = () => {
        // Toggle sidebar open/close state
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const toggleSidebar = (event) => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        };

        // Add event listener
        if (sidebarToggleRef.current) {
            sidebarToggleRef.current.addEventListener('click', toggleSidebar);
        }

        // Clean up event listener on unmount
        return () => {
            if (sidebarToggleRef.current) {
                sidebarToggleRef.current.removeEventListener('click', toggleSidebar);
            }
        };
    }, []);

    const menuItems = [
        { name: 'Dashboard', icon: <MdOutlineSpaceDashboard />, path: '/' },
        { name: 'Actualités', icon: <ImNewspaper />, path: '/news' },
        { name: 'Users', icon: <FaUsers />, path: '/profile' },
        { name: 'Members', icon: <PiUsersFourFill />, path: '/members' },
        { name: 'Settings', icon: <IoSettingsSharp />, path: '/settings' },
    ];
    return (
        <section className="dashboard">
            <div className="d-flex" id="wrapper">
                {/* Sidebar */}
                <div className="border-end " id="sidebar-wrapper">
                    <div className="image_dashbord">
                        <img src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-87f71.appspot.com/o/Logo.png?alt=media&token=8c99c671-8d02-4c25-8180-71f0e394fabb" alt="Logo" />
                    </div>
                    <div className="sidebar-heading border-bottodm ">Admin Bab Rayan</div>
                    <div className="list-group list-group-flush d-flex">
                        {menuItems.map(
                            (menuItem, index) => (
                                <a className="p-3" key={index} href={`/dashboard${menuItem.path}`}><span className='me-2'>{menuItem.icon}</span> {menuItem.name} </a>
                            ))}
                    </div>

                </div>

                {/* Main Content */}
                <div id="page-content-wrapper">
                    <nav className={`navbar navbar-expand-lg navbar_dashbord border-bottom ${isOpen ? "ps-5" : ""}`}>
                        <div className="container-fluid">
                            {/* Sidebar toggle button */}
                            <button
                                className="btn"
                                ref={sidebarToggleRef}
                                id="sidebarToggle"
                                onClick={handleToggleSidebar} // Add toggle functionality
                            >
                                <span className="text-white fw-bold"><TfiMenu /></span>
                            </button>

                            {/* Navbar Content */}
                            <div className="text-center">
                                👋🏻 Bonjour, Mr{" "}
                                <b style={{ color: "#F77F00" }}>
                                    {/* {userInfo ? `${userInfo.name} ${userInfo.lastName}` : "none"} */}
                                    dz
                                </b>
                            </div>


                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                    {/* Navbar links */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">
                                            <span>
                                                <i className="fa-solid fa-angle-left"></i>
                                            </span>{" "}
                                            Revenir au siteweb
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link deconnexion" href="#!">
                                            <span>
                                                <i className="fa-solid fa-right-from-bracket"></i>
                                            </span>{" "}
                                            Déconnexion
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className={`content-children ${isOpen ? "ms-4" : ""}`}>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}
