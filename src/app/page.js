"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import pic1 from "../../public/PHOTO/1.jpg";
import pic2 from "../../public/PHOTO/2.jpg";
import soleil from "../../public/PNG/SOLEIL.png";
import { Statistic } from 'antd';
import CountUp from 'react-countup';
import React, { useState , useEffect } from 'react';
import { Link, Play } from 'lucide-react';


export default function Home() {

  const formatter = (value) => <CountUp end={value} separator="," duration={8} />;

  const chiffres = [
    { label: 'Enfants pris en charge', value: 450, icon: <i className="fa-solid fa-child"></i> },
    { label: 'Bénévoles', value: 6000, icon: <i className="fa-solid fa-hand-holding-heart"></i> },
    { label: 'Familles accompagnées', value: 1200, icon: <i className="fa-solid fa-house-user"></i> },
    { label: 'Paniers distribués', value: 57000, icon: <i className="fa-solid fa-boxes-stacked"></i> },
  ];
  // Initialize Flowbite carousel on component mount
  useEffect(() => {
    const initCarousel = async () => {
      const { Carousel } = await import("flowbite");
      const carouselElement = document.getElementById("default-carousel");
      if (carouselElement) {
        new Carousel(carouselElement);
      }
    };
    initCarousel();
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = "https://firebasestorage.googleapis.com/v0/b/bab-rayan-87f71.appspot.com/o/video.mp4?alt=media&token=6cc682dc-b7fa-4729-b2d3-ac2ad8d0df87";

  const handlePlayClick = () => {
    setIsPlaying(true);
    // Add your video playing logic here
  };

  return (
    <div>
      {/* main carousel  */}

      <div className="relative">
        {/* Slogan and Button Container */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 z-40 max-w-md text-white">
          <Image
            src={soleil}
            className="relative block w-full"
            alt="Soleil Icon"
            priority
          />
          <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
            CHANGER LE PARCOURS D`UNE VIE
          </h1>
          <p className="mb-6 text-lg drop-shadow-md">
            L`association Bab Rayan agit depuis 2014 pour transformer la vie des
            enfants en difficulté.
          </p>
          <button className="px-6 py-1 bg-[#f3ca31] font-bold rounded-xl hover:bg-[#c19f26] transition duration-300 ease-in-out dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white mr-4 drop-shadow-md hover:text-gray-700 rounded-lg transition-colors">
            En savoir plus
          </button>
        </div>

        {/* Carousel Container */}
        <div
          id="default-carousel"
          className="relative w-full"
          data-carousel="slide"
        >
          <div className="relative h-56 overflow-hidden md:h-[600px]">
            {/* Slide 1 */}
            <div className="duration-700 ease-in-out" data-carousel-item>
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

      {/* Swiper carousel */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className="m-5 flex flex-col md:flex-row items-center  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl overflow-hidden">
  <div className="p-2 gap-1 md:w-1/2 items-center">
    <h1 className="font-sans text-2xl font-bold mb-4 text-gray-900">Education et scolarité</h1>
    <p className="font-sans text-gray-700 mb-6">
      En intégrant ces jeunes dans un parcours éducatif adapté à leurs besoins, 
      nous leur donnons les outils nécessaires pour construire leur avenir.
    </p>
    <button className="px-2 py-1 bg-[#f3ca31] text-white font-semibold rounded-3xl hover:bg-yellow-500 transition duration-300">
      Découvrir l`école Palmier
    </button>
  </div>

  <div className="md:w-1/2">
    <Image
      src={pic2}
      alt="Kids in school"
      className="w-full h-full object-cover"
    />
  </div>
</div>
</SwiperSlide>
        <SwiperSlide>
          <div className="m-5 flex flex-col md:flex-row items-center  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl overflow-hidden">
  <div className="p-2 gap-1 md:w-1/2 items-center">
    <h1 className="font-sans text-2xl font-bold mb-4 text-gray-900">Education et scolarité</h1>
    <p className="font-sans text-gray-700 mb-6">
      En intégrant ces jeunes dans un parcours éducatif adapté à leurs besoins, 
      nous leur donnons les outils nécessaires pour construire leur avenir.
    </p>
    <button className="px-2 py-1 bg-[#f3ca31] text-white font-semibold rounded-2xl   hover:bg-yellow-500 transition duration-300">
      Découvrir l`école Palmier
    </button>
  </div>

  <div className="md:w-1/2">
    <Image
      src={pic2}
      alt="Kids in school"
      className="w-full h-full object-cover"
    />
  </div>
</div>
</SwiperSlide>
        <SwiperSlide>
          <div className="m-5 flex flex-col md:flex-row items-center  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl overflow-hidden">
  <div className="p-2 gap-1 md:w-1/2 items-center">
    <h1 className="font-sans text-2xl font-bold mb-4 text-gray-900">Education et scolarité</h1>
    <p className="font-sans text-gray-700 mb-6">
      En intégrant ces jeunes dans un parcours éducatif adapté à leurs besoins, 
      nous leur donnons les outils nécessaires pour construire leur avenir.
    </p>
    <button className="px-2 py-1 bg-[#f3ca31] text-white font-semibold rounded-lg hover:bg-yellow-500 transition duration-300">
      Découvrir l`école Palmier
    </button>
  </div>

  <div className="md:w-1/2">
    <Image
      src={pic2}
      alt="Kids in school"
      className="w-full h-full object-cover"
    />
  </div>
</div>
</SwiperSlide>
        <SwiperSlide>
          <div className="m-5 flex flex-col md:flex-row items-center  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl overflow-hidden">
  <div className="p-2 gap-1 md:w-1/2 items-center">
    <h1 className="font-sans text-2xl font-bold mb-4 text-gray-900">Education et scolarité</h1>
    <p className="font-sans text-gray-700 mb-6">
      En intégrant ces jeunes dans un parcours éducatif adapté à leurs besoins, 
      nous leur donnons les outils nécessaires pour construire leur avenir.
    </p>
    <button className="px-2 py-1 bg-[#f3ca31] text-white font-semibold rounded-lg hover:bg-yellow-500 transition duration-300">
      Découvrir l`école Palmier
    </button>
  </div>

  <div className="md:w-1/2">
    <Image
      src={pic2}
      alt="Kids in school"
      className="w-full h-full object-cover"
    />
  </div>
</div>
</SwiperSlide>

      </Swiper>


      {/* chiffres */}

         <div className="bg-[#ef2323] py-8 px-5 shadow-inner overflow-hidden">
   <div className="flex flex-wrap justify-center items-center gap-4">
      {chiffres.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center rounded-lg p-6 m-2  transform animate-bounce transition-all duration-1000 hover:scale-105 md:flex-1 md:basis-5/12 xl:basis-1/5"
        >
          <span className="text-[#ffffff] text-5xl">{stat.icon}</span>
          <div className="flex items-center justify-center mt-2">
            <span className="text-[#ffffff] text-3xl font-bold">+</span>
            <Statistic
              className="text-[#ffffff] text-3xl font-bold"
              valueStyle={{ fontSize: 'inherit' }}
              value={stat.value}
              formatter={formatter}
            />
          </div>
          <span className="text-[#ffffff] mt-2">{stat.label}</span>
        </div>
      ))}
    </div>
  </div>

{/* video section  */}
<section className="w-full bg-[url('/public/PNG/BACKGROUND SCHOOL.png')] bg-cover bg-center py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative w-full rounded-3xl overflow-hidden">
          {/* Thumbnail/Preview Image */}
          <div className="relative aspect-video w-full">
            <Image
              src={pic1}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
            
            {/* Play Button Overlay */}
            {!isPlaying && (
              <button
                onClick={handlePlayClick}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/90 group-hover:bg-white transition-colors">
                  <Play className="w-8 h-8 text-gray-900 ml-1" />
                </div>
              </button>
            )}

            {/* Video Player (shown when isPlaying is true) */}
            {isPlaying && (
              <div className="absolute inset-0">
           <video
                  className="w-full h-full"
                  controls
                  autoPlay
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>

          {/* Optional: Decorative Background Pattern */}
          <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-gray-100 to-white" aria-hidden="true" />
        </div>
      </div>
    </section>
  {/* action sol  */}

  <div className="bg-red-500 text-white py-8 px-4 md:px-16 rounded-lg flex flex-col md:flex-row items-center md:items-start">
      <div className="flex-shrink-0">
        <Image
          src={pic1}
          alt="Group of people at Bab Rayan event"
          width={400} // Adjust width based on your needs
          height={300} // Adjust height based on your needs
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="mt-6 md:mt-0 md:ml-10 flex flex-col">

        <h2 className="text-2xl font-bold">ACTIONS SOLIDAIRES</h2>
        <p className="mt-1 text-yellow-300 font-medium">Solidaires ensemble !</p>

        <h3 className="mt-4 text-xl font-bold">Les Ftours Bab Rayan</h3>
        <p className="mt-2 text-sm leading-relaxed">
          L`association Bab Rayan organise chaque année depuis 2015 le Ftour Bab Rayan. Pendant ce mois sacré, la plupart n`ont pas la chance de rompre leur jeûne autour d`une table garnie. Cette action apporte beaucoup de convivialité et de chaleur à leur environnement ; l`esprit de solidarité du Ramadan est alors au rendez-vous, grâce à vos dons !
        </p>

        <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-red-500 font-semibold py-2 px-4 rounded-lg shadow-lg">
          Voir plus
        </button>
      </div>
    </div>

    {/* 3 card of solidarité */}
    <div className="flex gap-7 items-center justify-center">
    <article class="flex flex-col shadow max-w-[400px]">
        <Image src={pic1} alt="article" />
   
    <div class="bg-white flex flex-col justify-start p-6">
        <p class="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
        <p
       class="text-sm pb-3">
            By  Published on October 22nd, 2019
        </p>
        <p class="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu
            iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</p>
        <a href="#" class="uppercase text-gray-800 hover:text-black">
            Continue Reading
        </a>
    </div>
</article>
    <article class="flex flex-col shadow max-w-[400px]">
        <Image src={pic1} alt="article" />
   
    <div class="bg-white flex flex-col justify-start p-6">
        <p class="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
        <p
       class="text-sm pb-3">
            By  Published on October 22nd, 2019
        </p>
        <p class="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu
            iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</p>
        <a href="#" class="uppercase text-gray-800 hover:text-black">
            Continue Reading
        </a>
    </div>
</article>
    <article class="flex flex-col shadow max-w-[400px]">
        <Image src={pic1} alt="article" />
   
    <div class="bg-white flex flex-col justify-start p-6">
        <p class="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
        <p
       class="text-sm pb-3">
            By  Published on October 22nd, 2019
        </p>
        <p class="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu
            iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</p>
        <a href="#" class="uppercase text-gray-800 hover:text-black">
            Continue Reading
        </a>
    </div>
</article>


    </div>

    {/* blog section  */}

<ul class="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
    <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div class="order-1 sm:ml-6 xl:ml-0">
            <h3 class="mb-1 text-slate-900 font-semibold">
                <span class="mb-1 block text-sm leading-6 text-indigo-500">Headless UI</span>Completely unstyled, fully
                accessible UI components
            </h3>
            <div class="prose prose-slate prose-sm text-slate-600">
                <p>Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind
                    CSS.</p>
            </div><a
                class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href="">Learn
                more<span class="sr-only">, Completely unstyled, fully accessible UI components</span>
                <svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path>
                </svg></a>
        </div>
        <Image src={pic1} alt="" class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640"/>
    </li>
    <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div class="order-1 sm:ml-6 xl:ml-0">
            <h3 class="mb-1 text-slate-900 font-semibold">
                <span class="mb-1 block text-sm leading-6 text-purple-500">Heroicons</span>Beautiful hand-crafted SVG
                icons, by the makers of Tailwind CSS.
            </h3>
            <div class="prose prose-slate prose-sm text-slate-600">
                <p>A set of 450+ free MIT-licensed SVG icons. Available as basic SVG icons and via first-party React and
                    Vue libraries.</p>
            </div><a
                class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href="">Learn
                more<span class="sr-only">, Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.</span>
                <svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path>
                </svg></a>
        </div>
        <Image src={pic1} alt="" class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640"/>
    </li>
    <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div class="order-1 sm:ml-6 xl:ml-0">
            <h3 class="mb-1 text-slate-900 font-semibold">
                <span class="mb-1 block text-sm leading-6 text-cyan-500">Hero Patterns</span>Seamless SVG background
                patterns by the makers of Tailwind CSS.
            </h3>
            <div class="prose prose-slate prose-sm text-slate-600">
                <p>A collection of over 100 free MIT-licensed high-quality SVG patterns for you to use in your web
                    projects.</p>
            </div><a
                class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href="">Learn
                more<span class="sr-only">, Seamless SVG background patterns by the makers of Tailwind CSS.</span>
                <svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path>
                </svg></a>
        </div>
        <Image src={pic1} alt="" class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640"/>
    </li>
</ul>
    </div>
  );
}
