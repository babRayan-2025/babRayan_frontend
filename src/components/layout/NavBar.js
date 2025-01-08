import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/Logo.png";
import deco from "../../assets/PNG/SPLASH.png";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navItems = [
    {
      name: "Nous Connaitre",
      href: "/about",
      hasDropdown: true,
      dropdownItems: [
        { name: "A propos", href: "/about" },
        { name: "Gouvernance", href: "/gouvernance" },
        { name: "Dates clés", href: "/chiffres" }
      ]
    },
    {
      name: "Nos Missions",
      href: "/missions",
      hasDropdown: true,
      dropdownItems: [
        { name: "Protection de l'enfance", href: "/protection" },
        { name: "Education et scolarité", href: "/education" },
        { name: "Formation et insertion", href: "/formation" }
      ]
    },
    {
      name: "Nous soutenir",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Faire un DON", href: "/donation" },
        { name: "Parrainer un enfant", href: "/Parrainage" },
        { name: "Devenir partenaire", href: "/partenaire" },
        { name: "Devenir bénévole", href: "/benevole" }
      ]
    },
    {
      name: "Nous suivre",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Actualités", href: "/blog" },
        { name: "Actions Solidaires", href: "/actions-solidaires" },
        { name: "Presse", href: "/press" },
        { name: "Médiathèque", href: "/mediatheque" }
      ]
    },
    { name: "Nous contacter", href: "#" },
  ];

  return (
    <header className="shadow-md bg-[#cc2229] font-[sans-serif] relative z-50">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24"> 
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image src={logo} alt="Logo" className="w-28 sm:w-36" />
            </Link>
          </div>

          {/* Center - Navigation */}
          <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-8">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.hasDropdown ? (
                    <button
                      onClick={toggleDropdown}
                      className="text-white text-sm group-hover:text-gray-200 flex items-center"
                    >
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
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white text-sm hover:text-gray-200 relative after:absolute after:bg-white after:w-0 hover:after:w-full after:h-0.5 after:bottom--2 after:left-0 after:transition-all after:duration-300"
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.hasDropdown && (
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
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Right side - Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-white text-sm hover:text-gray-200"
            >
              Se Connecter
            </Link>
            <Link
              href="/register"
              className="bg-white px-4 py-2 rounded-md text-[#cc2229] text-sm font-semibold hover:bg-gray-100 transition duration-150"
            >
              S`incrire
            </Link>
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
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden bg-[#cc2229] border-t border-white/10`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={toggleDropdown}
                    className="w-full text-left text-white px-3 py-2 text-base font-medium hover:bg-[#b41e24] rounded-md flex items-center justify-between"
                  >
                    {item.name}
                    <svg
                      className={`ml-1 w-4 h-4 transform transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
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
                  {isDropdownOpen && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block text-white px-3 py-2 text-sm font-medium hover:bg-[#b41e24] rounded-md"
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
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-4 space-y-2 px-3">
            <Link
              href="/login"
              className="block text-white hover:bg-[#b41e24] px-3 py-2 rounded-md"
            >
              Se Connecter
            </Link>
            <Link
              href="/register"
              className="block bg-white text-center px-3 py-2 rounded-md text-[#cc2229] font-medium hover:bg-gray-100"
            >
              S`incrire
            </Link>
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