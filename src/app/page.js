"use client";

import Image from "next/image";
import {
  FaChild,
  FaHandHoldingHeart,
  FaHouseUser,
  FaBox,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import pic1 from "../../public/PHOTO/1.jpg";
import pic2 from "../../public/PHOTO/2.jpg";
import pic4 from "../../public/PHOTO/4.jpg";
import pic5 from "../../public/PHOTO/5.jpg";
import pic6 from "../../public/PHOTO/6.jpg";
import pic7 from "../../public/PHOTO/7.jpg";
import pic8 from "../../public/PHOTO/8.jpg";
import pic9 from "../../public/PHOTO/9.jpg";
import pic10 from "../../public/PNG/ETOILERAMADAN.png";
import pic11 from "../../public/PNG/LANTERNE.png";
import soleil from "../../public/PNG/SOLEIL.png";
// import { Statistic } from "antd";
import CountUp from "react-countup";
import React, { useState, useEffect } from "react";
import { Link, Play } from "lucide-react";

export default function Home() {
  const formatter = (value) => (
    <CountUp end={value} separator="," duration={8} />
  );

  const chiffres = [
    {
      label: "Enfants pris en charge",
      value: 450,
      icon: <FaChild />,
    },
    {
      label: "Bénévoles",
      value: 6000,
      icon: <FaHandHoldingHeart />,
    },
    {
      label: "Familles accompagnées",
      value: 1200,
      icon: <FaHouseUser />,
    },
    {
      label: "Paniers distribués",
      value: 57000,
      icon: <FaBox />,
    },
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

  const videoUrl =
    "https://firebasestorage.googleapis.com/v0/b/bab-rayan-87f71.appspot.com/o/video.mp4?alt=media&token=6cc682dc-b7fa-4729-b2d3-ac2ad8d0df87";

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
            className="relative block w-[300px] h-[200px]" 
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
          <button className="px-6 py-1 bg-[#f3ca31] font-bold rounded-xl hover:bg-[#c19f26] duration-300 ease-in-out dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white mr-4 drop-shadow-md hover:text-gray-700 transition-colors">
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
      <div className="p-11">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide>
            <div className="m-5 flex flex-col md:flex-row items-center  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl overflow-hidden">
              <div className="p-2 gap-1 md:w-1/2 items-center">
                <h1 className="font-sans text-2xl font-bold mb-4 text-gray-900">
                  Education et scolarité
                </h1>
                <p className="font-sans text-gray-700 mb-6">
                  En intégrant ces jeunes dans un parcours éducatif adapté à
                  leurs besoins, nous leur donnons les outils nécessaires pour
                  construire leur avenir.
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
                <h1 className="font-sans text-2xl font-bold mb-4 text-gray-900">
                  Education et scolarité
                </h1>
                <p className="font-sans text-gray-700 mb-6">
                  En intégrant ces jeunes dans un parcours éducatif adapté à
                  leurs besoins, nous leur donnons les outils nécessaires pour
                  construire leur avenir.
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
                <h1 className="font-sans text-2xl font-bold mb-4 text-gray-900">
                  Education et scolarité
                </h1>
                <p className="font-sans text-gray-700 mb-6">
                  En intégrant ces jeunes dans un parcours éducatif adapté à
                  leurs besoins, nous leur donnons les outils nécessaires pour
                  construire leur avenir.
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
                <h1 className="font-sans text-2xl font-bold mb-4 text-gray-900">
                  Education et scolarité
                </h1>
                <p className="font-sans text-gray-700 mb-6">
                  En intégrant ces jeunes dans un parcours éducatif adapté à
                  leurs besoins, nous leur donnons les outils nécessaires pour
                  construire leur avenir.
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
      </div>

      {/* chiffres */}

      <div className="bg-[#ef2323] py-8 px-5 shadow-inner overflow-hidden">
        <div className="flex flex-wrap justify-center items-center gap-4">
          {chiffres.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center rounded-lg p-6 m-2   hover:scale-105 md:flex-1 md:basis-5/12 xl:basis-1/5"
            >
              <span className="text-[#ffffff] text-6xl text-center">
                {stat.icon}
              </span>
              <div className="flex items-center justify-center mt-2">
                <span className="text-[#ffffff] text-6xl font-bold">+</span>
                {/* <Statistic
                  className="text-white text-3xl font-bold"
                  valueStyle={{ fontSize: "inherit" }}
                  value={stat.value}
                  formatter={formatter}
                /> */}
                <span className="text-white text-5xl font-bold">
                  {stat.value}
                </span>
              </div>
              <span className="text-[#ffffff] mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* video section  */}
      <section className="w-full bg-[url('/PNG/BACKGROUNDSCHOOL.png')] bg-cover bg-center py-16">
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
                  <video className="w-full h-full" controls autoPlay>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>

            {/* Optional: Decorative Background Pattern */}
            <div
              className="absolute -z-10 inset-0 bg-gradient-to-tr from-gray-100 to-white"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>
      {/* action sol  */}

      <div className="">
        <div className="bg-red-700 py-12 relative">
          <h1 className=" text-white text-center text-3xl font-bold mb-4  py-2 rounded-t-lg">
            ACTIONS SOLIDAIRES
            <br />
            <span className="text-sm font-light">Solidaires ensemble !</span>
            <div className="w-32 h-1 bg-yellow-200 absolute left-1/2 -translate-x-1/2 mt-2"></div>
          </h1>
          <Image
            src={pic11}
            className="w-52 absolute top-0 left-[65%]"
            alt="solidaire"
          />
          {/* Container */}
          <div className="   rounded-lg  flex  items-center  gap-28">
            {/* Image Section */}
            <div className="w-[50vw]">
              <Image
                src={pic4}
                alt="Les Ftours Bab Rayan"
                className="w-[100%] h-[49vh] rounded-r-3xl  object-cover"
              />
            </div>
            {/* Text Section */}
            <div className="p-6 flex-1">
              <h2 className="text-white text-4xl font-semibold mb-4">
                Les Ftours Bab Rayan
              </h2>
              <p className="text-gray-200 mb-4 italic w-[33vw] text-lg">
                L`association Bab Rayan organise chaque année depuis 2015 le
                Ftour Bab Rayan. Pendant ce mois sacré, la plupart n`ont pas la
                chance de rompre leur jeûne autour d`une table garnie. Cette
                action apporte beaucoup de convivialité et de chaleur à leur
                environnement&nbsp;; l`esprit de solidarité du Ramadan est alors
                au rendez-vous, grâce à vos dons !
              </p>
              <button
                href="#"
                className="inline-block bg-yellow-400 text-red-600 font-bold px-7 py-2 rounded-lg hover:bg-yellow-500 transition"
              >
                Voir plus
              </button>

              <Image
                src={pic10}
                className="w-40 absolute bottom-[-2%] left-[86%]"
                alt="Les Ftours Bab Rayan"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3 card of solidarité */}

      <div className="bg-white-100">
        {" "}
        <div className="p-6 container mx-auto py-8">
          {" "}
          <h1 className=" p-4 text-4xl  font-bold text-center mb-8">
            NOTRE IMPACT
            <div className="w-56 h-1 bg-yellow-200 absolute left-1/2 -translate-x-1/2 mt-2"></div>
          </h1>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {" "}
            {/* Left Section */}{" "}
            <div className="bg-white  rounded-lg shadow-lg">
              <Image
                src={pic5}
                className="h-[45vh] object-cover"
                alt="article"
              />{" "}
              <div className="bg-white flex flex-col justify-start p-6">
                <p className="text-3xl font-bold hover:text-gray-700 pb-4 text-center">
                  Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
                </p>
                <p className="text-sm pb-3 text-center">
                  By Published on October 22nd, 2019
                </p>
                <p className="pb-6 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula
                  lacus, quis iaculis dui porta volutpat. In sit amet posuere
                  magna..
                </p>
                <a
                  href="#"
                  className="uppercase text-gray-800 hover:text-black text-center"
                >
                  Continue Reading
                </a>
              </div>
            </div>{" "}
            {/* Middle Section */}{" "}
            <div className="bg-white  rounded-lg shadow-lg">
              {" "}
              <Image
                src={pic6}
                className="h-[45vh] object-cover "
                alt="article"
              />{" "}
              <div className="bg-white flex flex-col justify-start p-6">
                <p className="text-3xl font-bold hover:text-gray-700 pb-4 text-center">
                  Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
                </p>
                <p className="text-sm pb-3 text-center">
                  By Published on October 22nd, 2019
                </p>
                <p className="pb-6 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula
                  lacus, quis iaculis dui porta volutpat. In sit amet posuere
                  magna..
                </p>
                <a
                  href="#"
                  className="uppercase text-gray-800 hover:text-black text-center"
                >
                  Continue Reading
                </a>
              </div>
            </div>{" "}
            {/* Right Section */}{" "}
            <div className="bg-white  rounded-lg shadow-lg ">
              {" "}
              <Image
                src={pic7}
                className="h-[45vh] object-cover"
                alt="article"
              />{" "}
              <div className="bg-white flex flex-col justify-start p-6">
                <p className="text-3xl font-bold hover:text-gray-700 pb-4 text-center">
                  Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
                </p>
                <p className="text-sm pb-3 text-center">
                  By Published on October 22nd, 2019
                </p>
                <p className="pb-6 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula
                  lacus, quis iaculis dui porta volutpat. In sit amet posuere
                  magna..
                </p>
                <a
                  href="#"
                  className="uppercase text-gray-800 hover:text-black text-center"
                >
                  Continue Reading
                </a>
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>

      {/* /Actualites/ */}

      <div className="">
        <h1 className="p-4 text-4xl font-bold text-center mb-8 relative">
          ACTUALITÉS
          <div className="w-48 h-1 bg-yellow-200 absolute left-1/2 -translate-x-1/2 mt-2"></div>
        </h1>

        <div className="flex bg-pink-100 flex-col items-center justify-centergap-7">
          <div className="  p-6 rounded-lg flex gap-7 items-center justify-center  space-x-6 w-[70vw] ">
            {/* Image Section */}
            <div className="flex-shrink-0">
              <Image
                src={pic8}
                alt="Graduation"
                className="rounded-lg w-[30vw] h-auto object-cover "
              />
            </div>
            {/* Text Section */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Remise des diplômes <br></br> de la deuxième promotion du CFI
              </h1>
              <p className="text-gray-700 mb-4 italic">
                L`Association Bab Rayan a eu l`honneur de célébrer ce 28 Octobre
                2024, la réussite de la deuxième promotion de diplômés de son
                Centre de Formation et d`Insertion. Le CFI propose aux jeunes
                issus des EPS et en situation de précarité une formation
                qualifiante dans les métiers de l`hôtellerie et de la
                restauration. Aujourd`hui, plus de 120 jeunes franchissent une
                étape clé vers l`emploi, grâce au soutien de nos entreprises
                partenaires.
              </p>
              <button className="inline-block bg-yellow-300 rounded-full  text-red-500 font-semibold px-4 py-2 ">
                Découvrir plus
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-centergap-7">
          <div className=" p-6 rounded-lg flex items-center gap-7 space-x-6 w-[70vw] ">
            {/* Image Section */}
            <div className="flex-shrink-0">
              <Image
                src={pic9}
                alt="Graduation"
                className="rounded-lg w-[30vw]  object-cover "
              />
            </div>
            {/* Text Section */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4 ">
                Remise des diplômes <br></br> de la deuxième promotion du CFI
              </h1>
              <p className="text-gray-700 mb-4 italic">
                L`Association Bab Rayan a eu l`honneur de célébrer ce 28 Octobre
                2024, la réussite de la deuxième promotion de diplômés de son
                Centre de Formation et d`Insertion. Le CFI propose aux jeunes
                issus des EPS et en situation de précarité une formation
                qualifiante dans les métiers de l`hôtellerie et de la
                restauration. Aujourd`hui, plus de 120 jeunes franchissent une
                étape clé vers l`emploi, grâce au soutien de nos entreprises
                partenaires.
              </p>
              <button className="inline-block bg-yellow-300 rounded-full font-semibold  text-white px-4 py-2 ">
                Découvrir plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
