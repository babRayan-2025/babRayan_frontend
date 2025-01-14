"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaChild,
  FaHandHoldingHeart,
  FaHouseUser,
  FaBox,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import caros1 from "../assets/PHOTO/caroussel/1.jpg";
import caros2 from "../assets/PHOTO/caroussel/11.jpg";
import caros3 from "../assets/PHOTO/caroussel/bab rayan 2.jpeg";
import caros4 from "../assets/PHOTO/caroussel/bab rayan 3.jpeg";

// import pic2 from "../assets/PHOTO/2.jpg";
import pic3 from "../assets/PHOTO/3.jpg";
import pic4 from "../assets/PHOTO/4.jpg";
import pic5 from "../assets/PHOTO/5.jpg";
import pic6 from "../assets/PHOTO/6.jpg";
import pic7 from "../assets/PHOTO/7.jpg";
import pic8 from "../assets/PHOTO/8.jpg";
import pic9 from "../assets/PHOTO/9.jpg";
import pic10 from "../assets/PNG/ETOILERAMADAN.png";
import pic11 from "../assets/PNG/LANTERNE.png";
import soleil from "../assets/PNG/SOLEIL.png";
import CountUp from "react-countup";
import React, { useState } from "react";
import { Play } from "lucide-react";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const slideIn = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.8 },
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);


  const caroussel = [
    {
      image: caros2,
      picto: soleil, // Adding the soleil icon
      title: "CHANGER LE PARCOURS D'UNE VIE",
      description: "L'association Bab Rayan agit depuis 2014 pour transformer la vie des enfants en difficulté.",
    },
    {
      image: caros3,
      picto: soleil,
      title: "ENSEMBLE POUR UN AVENIR MEILLEUR",
      description: "Nous travaillons main dans la main pour offrir un soutien durable et efficace.",
    },
    {
      image: caros4,
      picto: soleil,
      title: "UNE ÉDUCATION POUR TOUS",
      description: "L'éducation est la clé pour briser le cycle de la pauvreté et créer un avenir prometteur.",
    },
    {
      image: pic7,
      picto: soleil,
      title: "DONNER ESPOIR, CHANGER DES DESTINS",
      description: "Grâce à votre soutien, nous redonnons de l'espoir à ceux qui en ont le plus besoin.",
    },
  ];

  const slidesData = [
    {
      title: "Protection de l'enfance",
      description:
      "Depuis 2014, Bab Rayan se consacre a la protection de l'enfanco, assurant un anvvoroment sur ot bonvallant pour les enfants vuinérables.",
      buttonText: "Découvrir le foyer Bab Rayan",
      image: '/2girls.jpg',
    },
    {
      title: "Éducation et scolarité",
      description:
      "En intégrant ces jeunes dans un parcours éducatif adapté à leurs besoins, nous leur donnons les outils nécessaires pour construire leur avenir.",
      buttonText: "Découvrir l'ecole Palemier",
      image: '/2.jpg',
    },
    {
      title: "Formation et insertion professionnelle",
      description:
        "Des formations ofertes dos des secteurs varlés tels que /hotalario-restauration ot los mátiors du digital pour accompagner ces jeunes vers une insertion professiannelle réussie.",
      buttonText: "Découvrir le CFI",
      image: '/cfi.jpg',
    },
  ];

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

  const videoUrl =
    "https://firebasestorage.googleapis.com/v0/b/bab-rayan-87f71.appspot.com/o/video.mp4?alt=media&token=6cc682dc-b7fa-4729-b2d3-ac2ad8d0df87";

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <>
          {/* Main Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Main Carousel Section */}
            <motion.div variants={{}} className="relative w-full">
      {/* Swiper Container */}
      <div className="swiper-container relative w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full"
        >
          {caroussel.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[400px] sm:h-[500px] md:h-[700px] lg:h-[850px]">
                {/* Background Image */}
                <Image
                  src={slide.image}
                  className="absolute block w-full h-full object-cover"
                  alt={`Slide ${index + 1}`}
                  priority={index === 0}
                  fill
                />

                {/* Text Content */}
                <motion.div
                  variants={{}}
                  className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-40 max-w-[280px] md:max-w-md text-white p-4 md:p-0"
                >
                  {/* Icon */}
                  {slide.picto && (
                    <div className="hidden md:block">
                      <Image
                        src={slide.picto}
                        className="relative w-[200px] md:w-[250px] h-[100px] md:h-[150px]"
                        alt="Soleil Icon"
                        priority
                      />
                    </div>
                  )}
                  <motion.h1
                    variants={{}}
                    className="text-xl md:text-3xl font-bold mb-2 md:mb-4 drop-shadow-lg"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    variants={{}}
                    className="mb-4 md:mb-6 text-xl italic md:text-md drop-shadow-md"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 md:px-6 py-1 bg-[#f42020] font-bold text-sm md:text-base rounded-xl hover:bg-[#ab2222] duration-300 ease-in-out dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white mr-4 drop-shadow-md hover:text-gray-700 transition-colors"
                  >
                    En savoir plus
                  </motion.button>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="swiper-button-prev absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full cursor-pointer z-10 transition-colors"
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6"
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
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="swiper-button-next absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full cursor-pointer z-10 transition-colors"
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6"
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
        </motion.button>

        <div className="swiper-pagination absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"></div>
      </div>
    </motion.div>

            {/* Secondary Carousel Section */}
            <div className="space-y-12">
  <motion.div variants={fadeIn} className="p-5 md:p-11">
    <Swiper
      slidesPerView={2.5} 
      spaceBetween={20} // Ajoute un espace entre les cartes
      pagination={{ clickable: true }}
      modules={[Pagination]}
      breakpoints={{
        320: { slidesPerView: 1 }, // 1.5 cartes visibles sur les petits écrans
        768: { slidesPerView: 2 }, // 2 cartes visibles sur les écrans moyens
        1024: { slidesPerView: 2.5 }, // 2.5 cartes visibles sur les grands écrans
      }}
      className="mySwiper"
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="m-3 flex flex-col md:flex-row items-center bg-white shadow-md rounded-xl duration-500 hover:shadow-xl overflow-hidden"
          >
            <div className="p-4 gap-4 md:w-1/2">
              <h1 className="text-xl sm:text-4xl font-bold mb-4 text-gray-900">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-base italic text-gray-700 mb-6">
                {slide.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-2 bg-[#f3ca31] text-white font-medium rounded-xl hover:bg-yellow-500 transition duration-300"
              >
                {slide.buttonText}
              </motion.button>
            </div>
            <div className="md:w-1/2">
              <Image
                src={slide.image}
                alt={slide.title}
                className="w-[434px] h-[500px] object-cover"
                width={500}
                height={500}
              />
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </motion.div>
</div>


            {/* Statistics Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-[#ef2323] py-8 px-5 shadow-inner overflow-hidden"
            >
              <div className="flex flex-wrap justify-center items-center gap-4">
                {chiffres.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center text-center rounded-lg p-3 m-2 md:flex-1 md:basis-5/12 xl:basis-1/5"
                  >
                    <span className="text-[#ffffff] text-6xl text-center">
                      {stat.icon}
                    </span>
                    <motion.div
                      className="flex items-center justify-center mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 * index }}
                    >
                      <span className="text-[#ffffff] text-6xl font-bold">
                        +
                      </span>
                      <CountUp
                        end={stat.value}
                        duration={2}
                        className="text-white text-5xl font-bold"
                      />
                    </motion.div>
                    <span className="text-[#ffffff] mt-2">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Video Section */}
            <motion.section
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="w-full bg-[url('/BACKGROUNDSCHOOL.png')] bg-cover bg-center py-16"
            >
              <div className="max-w-6xl mx-auto px-4">
                <motion.div
                  variants={scaleIn}
                  className="relative w-full rounded-3xl overflow-hidden"
                >
                  <div className="relative aspect-video w-full">
                    <Image
                      src={pic3}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover"
                    />

                    {!isPlaying && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handlePlayClick}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                      >
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/90 group-hover:bg-white transition-colors">
                          <Play className="w-8 h-8 text-gray-900 ml-1" />
                        </div>
                      </motion.button>
                    )}

                    {isPlaying && (
                      <div className="absolute inset-0">
                        <video className="w-full h-full" controls autoPlay>
                          <source src={videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.section>
            {/* action sol  */}

            <div className="">
              <div className="bg-red-700 py-12 relative">
                {/* Header Section */}
                <h1 className="text-white text-center text-2xl md:text-3xl font-bold mb-6 py-2 rounded-t-lg">
                  ACTIONS SOLIDAIRES
                  <br />
                  <span className="text-sm font-light">
                    Solidaires ensemble !
                  </span>
                  <div className="w-20 md:w-32 h-0.5 bg-yellow-200 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
                </h1>
                {/* Decorative Image */}
                <Image
                  src={pic11}
                  className="hidden lg:block w-24 md:w-52 absolute top-0 left-[70%]"
                  alt="solidaire"
                />

                {/* Content Section */}
                <div className="rounded-lg flex flex-wrap lg:flex-nowrap items-center gap-6 lg:gap-28">
                  {/* Image Section */}
                  <div className="w-full lg:w-[50%]">
                    <Image
                      src={pic4}
                      alt="Les Ftours Bab Rayan"
                      className="w-full h-[40vh] lg:h-[49vh] rounded-r-lg lg:rounded-r-3xl object-cover"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="p-6 flex-1">
                    <h2 className="text-white text-2xl md:text-4xl font-semibold mb-4">
                      Les Ftours Bab Rayan
                    </h2>
                    <p className="text-gray-200 mb-4 italic text-sm md:text-lg w-full lg:w-[33vw]">
                      L`association Bab Rayan organise chaque année depuis 2015
                      le Ftour Bab Rayan. Pendant ce mois sacré, la plupart
                      n`ont pas la chance de rompre leur jeûne autour d`une
                      table garnie. Cette action apporte beaucoup de
                      convivialité et de chaleur à leur environnement&nbsp;;
                      l`esprit de solidarité du Ramadan est alors au
                      rendez-vous, grâce à vos dons !
                    </p>
                    <button className="inline-block bg-yellow-400 text-red-600 font-bold px-5 md:px-7 py-2 rounded-xl hover:bg-yellow-500 transition">
                      Voir plus
                    </button>

                    {/* Decorative Image */}
                    <Image
                      src={pic10}
                      className="w-20 md:w-40 absolute bottom-[-5%] md:bottom-[-2%] left-[75%] md:left-[86%]"
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
                        Mecenat culturel : Eveiller les talents et les passions
                        de nos jeunes
                      </p>
                      {/* <p className="text-sm pb-3 text-center">
                  By Published on October 22nd, 2019
                </p> */}
                      <p className="pb-6 text-center">
                        l`Association Bab rayan donne a ses jeunes la chance de
                        decouvrir le monde fascinant di la culture ...
                      </p>
                      <div className="p-6 flex items-center justify-center">
                        <a
                          href="/blog"
                          className="rounded-sm bg-yellow-300 px-4 py-2 text-xl font-medium text-white shadow-sm transition-transform duration-200 ease-in-out hover:scale-105"
                        >
                          Voir Plus 
                        </a>
                      </div>
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
                        La Digitalisation au cœur des projets de Bab Rayan{" "}
                      </p>
                      <p className="text-sm pb-3 text-center">
                        By Published on October 22nd, 2019
                      </p>
                      <p className="pb-6 text-center">
                        Aujourd`hui, plusieurs projets de l`association Bab
                        Rayan integrent la digitalisation comme levier ...
                      </p>
                      <div className="p-6 flex items-center justify-center">
                        <a
                          href="/blog"
                          className="rounded-sm bg-yellow-300 px-4 py-2 text-xl font-medium text-white shadow-sm transition-transform duration-200 ease-in-out hover:scale-105"
                        >
                          Voir Plus 
                        </a>
                      </div>
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
                        ForsaTech : Une porte d`entree vers les metiers de
                        numerique{" "}
                      </p>
                      {/* <p className="text-sm pb-3 text-center">
                  By Published on October 22nd, 2019
                </p> */}
                      <p className="pb-6 text-center">
                        Cree pour repondre aux besoins croissant du marche
                        digital, ForsaTech propose des formations ...
                      </p>
                      <div className="p-6 flex items-center justify-center">
                        <a
                          href="/blog"
                          className="rounded-sm bg-yellow-300 px-4 py-2 text-xl font-medium text-white shadow-sm transition-transform duration-200 ease-in-out hover:scale-105"
                        >
                          Voir Plus 
                        </a>
                      </div>
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>

            {/* /Actualites/ */}

            <div className="">
              <h1 className="p-4 text-2xl md:text-4xl font-bold text-center mb-8 relative">
                ACTUALITÉS
                <div className="w-24 md:w-48 h-1 bg-yellow-200 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
              </h1>

              {/* First News Item */}
              <div className="flex flex-col items-center bg-pink-100 gap-9 px-4">
                <div className="p-6 rounded-lg flex flex-col md:flex-row gap-7 items-center justify-center w-full max-w-[90%] md:max-w-[70%]">
                  {/* Image Section */}
                  <div className="flex-shrink-0 w-full md:w-[45%]">
                    <Image
                      src={pic8}
                      alt="Graduation"
                      className="rounded-xl w-full h-auto object-cover"
                    />
                  </div>
                  {/* Text Section */}
                  <div className="text-center md:text-left">
                    <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
                      Remise des diplômes <br /> de la deuxième promotion du CFI
                    </h1>
                    <p className="text-gray-700 mb-4 italic text-sm md:text-base">
                      L`Association Bab Rayan a eu l`honneur de célébrer ce 28
                      Octobre 2024, la réussite de la deuxième promotion de
                      diplômés de son Centre de Formation et d`Insertion.<br /> Le CFI
                      propose aux jeunes issus des EPS et en situation de
                      précarité une formation qualifiante dans les métiers de
                      l`hôtellerie et de la restauration. Aujourd`hui, plus de
                      120 jeunes franchissent une étape clé vers l`emploi, grâce
                      au soutien de nos entreprises partenaires.
                    </p>
                    <button className="inline-block bg-yellow-300 rounded-full text-red-500 font-semibold px-4 py-2 transition hover:bg-yellow-400">
                      Découvrir plus
                    </button>
                  </div>
                </div>
              </div>

              {/* Second News Item */}
              <div className="flex flex-col items-center gap-9 px-4">
                <div className="p-6 rounded-lg flex flex-col md:flex-row gap-7 items-center justify-center w-full max-w-[90%] md:max-w-[70%]">
                  {/* Image Section */}
                  <div className="flex-shrink-0 w-full md:w-[45%]">
                    <Image
                      src={pic9}
                      alt="Graduation"
                      className="rounded-xl w-full h-auto object-cover"
                    />
                  </div>
                  {/* Text Section */}
                  <div className="text-center md:text-left">
                    <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
                    Convention entre Newrest et le CFI <br /> pour offrir une formation <br /> en alternance de qualité 
                    </h1>
                    <p className="text-gray-700 mb-4 italic text-sm md:text-base">
                    Le CFI à Bab Rayan & Newrest s`unissent pour offrir une formation diplômante en restauration, une première qui changera la vie d`une promotion engagée de jeunes en difficulté !<br />
                    D`ici août prochain, ils auront non seulement acquis d`es compétences, mais aussi trouvé un projet de vie qui leur ouvre les portes d`un avenir prometteur
                    </p>
                    <button className="inline-block bg-yellow-300 rounded-full text-white font-semibold px-4 py-2 transition hover:bg-yellow-400">
                      Découvrir plus
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6 flex items-center justify-center">
                <a
                  href="/blog"
                  className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white shadow-md transition-transform duration-200 ease-in-out hover:scale-105"
                >
                  Voir toutes les Actualités
                </a>
              </div>
            </div>
          </motion.div>
        {/* </>
      )} */}
    </>
  );
}
