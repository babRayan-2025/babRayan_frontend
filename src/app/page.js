"use client";
import { useEffect } from "react";
import Image from "next/image";
import pic1 from "../../public/PHOTO/1.jpg";
import pic2 from "../../public/PHOTO/3.jpg";

export default function Home() {
  // Initialize carousel on component mount
  useEffect(() => {
    const initCarousel = async () => {
      const { Carousel } = await import('flowbite');
      const carousel = new Carousel(document.getElementById('default-carousel'));
    };
    initCarousel();
  }, []);

  return (
   
    <div className="relative">
      {/* Slogan and Button Container */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 z-40 max-w-md text-white">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
          CHANGER LE PARCOURS D`UNE 
           VIE
        </h1>
        <p className="mb-6 text-lg drop-shadow-md">
          `L`association Bab Rayan agit depuis 2014 pour transformer la vie des enfans en difficulte. </p>
        <button className="px-6 py-3 bg-[#f3ca31] font-bold  rounded-full hover:bg-[#c19f26] transition duration-300 ease-in-out dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white mr-4 drop-shadow-md hover:text-gray-700 rounded-lg transition-colors">
          En savoir plus
        </button>
      </div>

      {/* Carousel Container */}
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <div className="relative h-56 overflow-hidden md:h-[600px]">
          {/* Slide 1 */}
          <div className=" duration-700 ease-in-out" data-carousel-item>
            <Image
              src={pic1}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Image 1 description"
              priority
            />
          </div>
          {/* Slide 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image
              src={pic2}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Image 2 description"
            />
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
        </div>

        {/* Previous Button */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1L1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        {/* Next Button */}
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 9l4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}