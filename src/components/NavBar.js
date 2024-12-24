import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Logo.png";
import { FaCircleUser } from "react-icons/fa6";

export default function NavBar() {
  return (
    <header className="flex shadow-md py-3 px-4 sm:px-10 bg-[#cc2229] font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between lg:gap-y-4 gap-y-6 gap-x-4 w-full">
        {/* Logo Section */}
        <Link href="/">
          <Image src={logo} alt="Logo" className="w-36" />
        </Link>

        {/* Navigation Menu */}
        <div
          id="collapseMenu"
          className="max-lg:hidden lg:block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              />
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              />
            </svg>
          </button>

          <ul className="lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <Link href="/">
                <Image src={logo} alt="Logo" className="w-36" />
              </Link>
            </li>
            {[
              "Nous Connaitre",
              "Nos Missions",
              "Nous soutenir",
              "Nous suivre",
              "Nous contacter",
            ].map((item, index) => (
              <li
                key={index}
                className="max-lg:border-b max-lg:py-3 max-lg:px-3 relative lg:hover:after:absolute lg:after:bg-black lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:top-7 lg:after:transition-all lg:after:duration-300"
              >
                <Link href="#" className="text-white block text-[15px]">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

          {/* register login ... botton */}
          <div class="hidden items-center justify-center gap-6 md:flex">
            <a href="/login" class="font-dm text-sm font-medium text-[#ffffff]">Se Connecter</a>
            <a href="/register"
                class="rounded-md bg-[#ffffff] px-3 py-1.5 font-dm text-sm font-medium text-[#cc2229] shadow-md shadow-gray-100/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]">
                  S`incrire                
            </a>
            <a href="/donation"
                class="rounded-md bg-[#f3ca31] px-3 py-1.5 font-dm text-sm font-medium text-[#cc2229] shadow-md shadow-gray-100/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]">
                  Faire un don                
            </a>

            {/* / Mobile Menu Toggle / */}
            
          <button id="toggleOpen" className="lg:hidden ml-7">
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Profile & Menu Toggle */}
        {/* <div className="flex items-center max-sm:ml-auto space-x-6">
          <ul>
            <li
              id="profile-dropdown-toggle"
              className="relative px-1 after:absolute after:bg-black after:w-full after:h-[2px] after:block after:top-8 after:left-0 after:transition-all after:duration-300"
            >
         
                <FaCircleUser  className="cursor-pointer hover:fill-black"
                />
            
              <div
                id="profile-dropdown-menu"
                className="bg-white block z-20 shadow-lg py-6 px-6 rounded sm:min-w-[320px] max-sm:min-w-[250px] absolute right-0 top-10"
              >
                <h6 className="font-semibold text-[15px]">Welcome</h6>
                <p className="text-sm text-gray-500 mt-1">
                  To access account and manage orders
                </p>
                <button
                  type="button"
                  className="bg-transparent border border-gray-300 hover:border-black rounded px-4 py-2 mt-4 text-sm text-black"
                >
                  LOGOUT
                </button>
                <hr className="border-b-0 my-4" />
                <ul className="space-y-1.5">
                  {[ "Contact Us"].map(
                    (link, index) => (
                      <li key={index}>
                        <Link href="#" className="text-sm text-gray-500 hover:text-black">
                          {link}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
                <hr className="border-b-0 my-4" />
                <ul className="space-y-1.5">
                  {[
                    
                    "Contact Us",
                    "Settings",
                  ].map((link, index) => (
                    <li key={index}>
                      <Link href="#" className="text-sm text-gray-500 hover:text-black">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>

          / Mobile Menu Toggle /
          <button id="toggleOpen" className="lg:hidden ml-7">
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div> */}
      </div>
    </header>
  );
}
