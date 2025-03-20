"use client";
import { usePathname } from "next/navigation";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import { FaHandHoldingHeart } from "react-icons/fa";

export default function Template({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname?.includes("/dashboard");
  const isDon = pathname?.includes("/don");
  return (
    <>
      {!isDashboard && <NavBar />}
      <section>{children}</section>
      {!isDashboard && <Footer />}
      {!isDashboard && !isDon && (
        <button
          onClick={() => window.location.href = "donation"}
          className='red_color don_icon_animate'
          title='Faire un DON'
        >
          <FaHandHoldingHeart />
        </button>
      )}
    </>
  );
}