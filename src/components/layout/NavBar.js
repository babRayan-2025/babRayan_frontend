import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import deco from "../../assets/PNG/SPLASH.png";
import { DownOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const getLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
  return null;
};

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [userID, setUserID] = useState(null);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    setUserID(getLocalStorage("userID"));
    setUserName(getLocalStorage("userName"));
  }, []); // ✅ Now updates when component mounts


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null); // Close all dropdowns when menu toggles
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index); // Open/close specific dropdown
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null); // Close menu and dropdowns
  };


  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const navItems = [
    {
      name: "Nous connaître",
      href: "/about",
      hasDropdown: true,
      dropdownItems: [
        { name: "À propos", href: "/about" },
        { name: "Gouvernance", href: "/gouvernance" },
        { name: "Dates clés", href: "/dateCles" },
      ],
    },
    {
      name: "Nos missions",
      href: "/missions",
      hasDropdown: true,
      dropdownItems: [
        { name: "Protection de l'enfance", href: "/protection" },
        { name: "Education et scolarité", href: "/education" },
        { name: "Formation et insertion", href: "/formation" },
      ],
    },
    {
      name: "Nous soutenir",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Faire un DON", href: "/donation" },
        { name: "Parrainer un enfant", href: "/parrainage" },
        { name: "Devenir partenaire", href: "/devenir_partenaire" },
        { name: "Devenir bénévole", href: "/benevole" },
        { name: "Partenaires", href: "/partenaires" },
      ],
    },
    {
      name: "Nous suivre",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Actualités", href: "/blog" },
        { name: "Actions Solidaires", href: "/actions-solidaires" },
        { name: "Kit Média et Presse", href: "/media-press" },
      ],
    },
    { name: "Nous contacter", href: "/contact_us" },
  ];


  return (
    <header className="shadow-md bg-[#cc2229] font-[sans-serif] relative z-50">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/Logo.png?alt=media&token=e5f5173e-6170-4f2f-9037-955c7c199481" alt="Logo" className="w-28 sm:w-36" />
            </Link>
            <div className="absolute left-1/2 transform -translate-x-1/2 lg:hidden">
            {userID && (
              <>
                <Dropdown
                  menu={{
                    items: [
                      {
                        key: '1',
                        onClick: () => window.location.href = '/dashboard',
                        label: 'Admin Dashboard',
                        icon: <SettingOutlined />,
                      },
                      {
                        key: '2',
                        label: 'Déconnexion',
                        onClick: handleLogout,
                        icon: <LogoutOutlined />,
                      }
                    ],
                  }}
                >
                  <a
                    className="px-4 py-2 rounded-md text-white text-sm font-semibold hover:bg-red-700 transition duration-150"
                    style={{ cursor: 'pointer' }} onClick={(e) => e.preventDefault()}>
                    <Space>
                      Hi, {userName}
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </>
            )}
            </div>
          </div>

          {/* Center - Navigation */}
          <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-8">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button className="text-white text-sm group-hover:text-gray-200 flex items-center">
                        {item.name}
                        <svg
                          className="ml-1 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="py-1">
                          {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white text-sm hover:text-gray-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>
          {/* Right side - Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {userID ? (
              <>
                <Dropdown
                  menu={{
                    items: [
                      {
                        key: '1',
                        onClick: () => window.location.href = '/dashboard',
                        label: 'Admin Dashboard',
                        icon: <SettingOutlined />,
                      },
                      {
                        key: '2',
                        label: 'Déconnexion',
                        onClick: handleLogout,
                        icon: <LogoutOutlined />,
                      }
                    ],
                  }}
                >
                  <a
                    className=" px-4 py-2 rounded-md text-white text-sm font-semibold hover:bg-red-700 transition duration-150"

                    style={{ cursor: 'pointer' }} onClick={(e) => e.preventDefault()}>
                    <Space>
                      Hi,{userName}
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>

              </>
            ) : (
              <>
                {/* <Link
                  href="/login"
                  // className="text-white text-sm hover:text-gray-200"
                  className="bg-white px-4 py-2 rounded-md text-[#cc2229] text-sm font-semibold hover:bg-gray-100 transition duration-150"
                >
                  Espace Admin
                </Link> */}
                {/* <Link
                  href="/register"
                  className="bg-white px-4 py-2 rounded-md text-[#cc2229] text-sm font-semibold hover:bg-gray-100 transition duration-150"
                >
                  S’inscrire
                </Link> */}
              </>
            )}
            <Link
              href="/donation"
              className="bg-[#f3ca31] px-4 py-2 rounded-md text-[#cc2229] text-sm font-semibold hover:bg-[#e5b82c] transition duration-150"
            >
              Faire un don
            </Link>
            {/* Decorative sign */}
            <Image
              src={deco}
              className="w-5 md:w-10 absolute top-[-5%] md:top-[-2%] left-[95%] md:left-[95%]"
              alt="Les Ftours Bab Rayan"
            />

          </div>
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"
          } lg:hidden bg-[#cc2229] border-t border-white/10`}
      >
        
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="w-full text-left text-white px-3 py-2 text-base font-medium hover:bg-[#b41e24] rounded-md flex items-center justify-between"
                  >
                    {item.name}
                    <svg
                      className={`ml-1 w-4 h-4 transform transition-transform ${openDropdown === index ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openDropdown === index && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block text-white px-3 py-2 text-sm font-medium hover:bg-[#b41e24] rounded-md"
                          onClick={closeMenu}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-white block px-3 py-2 text-base font-medium hover:bg-[#b41e24] rounded-md"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          
          <div className="mt-4 space-y-2 px-3">
            <Link
              href="/donation"
              className="block bg-[#f3ca31] text-center px-3 py-2 rounded-md text-[#cc2229] font-medium hover:bg-[#e5b82c]"
            >
              Faire un don
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}