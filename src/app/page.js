"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';
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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Button, Modal } from 'antd';

import pic3 from "../assets/PHOTO/3.jpg";
import pic4 from "../assets/PHOTO/4.jpg";
// import pic5 from "../assets/PHOTO/5.jpg";
// import pic6 from "../assets/PHOTO/6.jpg";
// import pic7 from "../assets/PHOTO/7.jpg";
import pic8 from "../assets/PHOTO/remiseDiplome.jpg";
import pic9 from "../assets/PHOTO/newrest.jpg";
import pic10 from "../assets/PNG/ETOILERAMADAN.png";
import pic11 from "../assets/PNG/LANTERNE.png";
// import soleil from "../assets/PNG/SOLEIL.png";
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
      image: '/caroussel/children.jpg',
      picto: '/caroussel/sun.png',
      title: "CHANGER LE PARCOURS D'UNE VIE",
      description: "L'association Bab Rayan agit depuis 2014 pour transformer la vie des enfants en difficulté.",
      link: "/protection"
    },
    {
      image: '/caroussel/patisserie.png',
      picto: '/caroussel/fleche.png',
      title: "FORMER ET INTÉGRER",
      description: "Le Centre de Formation et d'Insertion prépare nos jeunes à devenir des citoyens autonomes et engagés.",
      link: "/formation"
    },
    {
      image: '/caroussel/jeux.png',
      picto: '/caroussel/main.png',
      title: "PROTÉGER, ÉDUQUER, ACCOMPAGNER",
      description: "Bab Rayan défend les droits des enfants en leur offrant un foyer sécurisant et une éducation de qualité.",
      link: "/education"
    },
    {
      image: '/caroussel/slide1.png',
      // picto: '/caroussel/main.png',
      title: "UN ENGAGEMENT QUI A DU SENS",
      description: "Rejoignez le combat pour la protection de l’enfance, engagez-vous en devenant donateur, partenaire ou bénévole.",
      link: "/devenir_partenaire"
    },
  ];


  const slidesData = [
    {
      title: "Protection de l'enfance",
      description: "Depuis 2014, Bab Rayan se consacre à la protection de l'enfance, assurant un environnement sûr et bienveillant pour les enfants vulnérables.",
      buttonText: "Découvrir le foyer Bab Rayan",
      image: '/2girls.jpg',
      link: '/protection'
    },
    {
      title: "Éducation et scolarité",
      description: "En intégrant ces jeunes dans un parcours éducatif adapté à leurs besoins, nous leur donnons les outils nécessaires pour construire leur avenir.",
      buttonText: "Découvrir l'école Palmier",
      image: '/fille.jpg',
      link: '/education'
    },
    {
      title: "Formation et insertion professionnelle",
      description: "Des formations offertes dans des secteurs variés tels que l'hôtellerie-restauration et les métiers du digital pour accompagner ces jeunes vers une insertion professionnelle réussie.",
      buttonText: "Découvrir le CFI",
      image: '/cfi.jpg',
      link: '/formation',
    }
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

  const articles = [
    {
      title: "Mécénat culturel : Éveiller les talents et les passions de nos jeunes",
      shortDesc: "L'Association Bab Rayan donne à ses jeunes la chance de découvrir le monde fascinant de la culture ...",
      fullDesc: "l’Association Bab Rayan donne à ses jeunes la chance de découvrir le monde fascinant de la culture et de l’art. À travers le programme de l’école du jeune spectateur, de nombreuses sorties au théâtre sont organisées, offrant aux enfants et adolescents une immersion unique dans l’univers des arts vivants. Au-delà du théâtre, nos jeunes participent activement à des expositions d’art, explorant les œuvres et les histoires qu’elles racontent. Des ateliers de peinture et d’expression artistique leur permettent également de développer leur sensibilité, leur créativité et leur confiance en eux. Ces initiatives culturelles sont bien plus que des moments de loisir : elles nourrissent l’imaginaire, ouvrent de nouveaux horizons et encouragent chacun de nos jeunes à croire en ses talents. Nous remercions chaleureusement tous nos partenaires pour leur engagement à rendre l’art et la culture accessibles à tous.",
      img: "/3cards/5.jpg",
    },
    {
      title: "La Digitalisation au cœur des projets de Bab Rayan",
      shortDesc: "Aujourd'hui, plusieurs projets de l'association Bab Rayan intègrent la digitalisation comme levier d’apprentissage et d’insertion professionnelle. À l’école élémentaire ...",
      fullDesc: "Aujourd’hui, plusieurs projets de l’association Bab Rayan intègrent la digitalisation comme levier d’apprentissage et d’insertion professionnelle. À l’école élémentaire, nous sensibilisons dès le plus jeune âge à l’informatique à travers des programmes de codage interactifs, spécialement conçus pour éveiller l’intérêt des enfants pour les métiers de l’IT. Au niveau du Centre de Formation et d’Insertion (CFI), un module dédié aux outils bureautiques (Microsoft Office) a été intégré au curriculum pour renforcer les compétences techniques essentielles. En parallèle, le CFI a lancé un projet pilote ambitieux : ForsaTech.",
      img: "/3cards/6.jpg",
    },
    {
      title: "ForsaTech : Une porte d'entrée vers les métiers du numérique",
      shortDesc: "Créé pour répondre aux besoins croissant du marché digital, ForsaTech propose des formations ...",
      fullDesc: "Créé pour répondre aux besoins croissants du marché digital, ForsaTech propose des formations accélérées aux jeunes en difficulté, axées sur les compétences numériques les plus demandées. Conçu en collaboration avec des entreprises partenaires, ce programme garantit une employabilité directe grâce à une sélection rigoureuse des modules et des candidats. Forts de notre expertise dans les métiers de l’hôtellerie et de la restauration, et inspirés par le succès de ce modèle, nous sommes déterminés à élargir notre impact en ouvrant de nouvelles perspectives dans le secteur numérique. Avec ces initiatives, Bab Rayan continue de transformer les défis de la jeunesse en opportunités durables, en bâtissant un pont solide entre éducation, technologie et insertion professionnelle.",
      img: "/3cards/7.jpg",
    },
  ];

  const blogs = [
    {
      id: 1,
      img: pic8,
      title: "Remise des diplômes de la deuxième promotion du CFI",
      description: "L&apos;Association Bab Rayan a eu l&apos;honneur de célébrer ce 28 Octobre 2024, la réussite de la deuxième promotion de diplômés de son Centre de Formation et d&apos;Insertion. Le CFI propose aux jeunes issus des EPS et en situation de précarité une formation qualifiante dans les métiers de l&apos;hôtellerie et de la restauration. Aujourd&apos;hui, plus de 120 jeunes franchissent une étape clé vers l&apos;emploi, grâce au soutien de nos entreprises partenaires. <br /> Nous avons été honorés par la présence de Mr le Wali, le Gouverneur et Mme la Maire de Casablanca.",
      text: "L'Association Bab Rayan a eu l'honneur de célébrer le 28 Octobre la réussite de la deuxième promotion de diplômés de son Centre de Formation et d'Insertion. Le CFI propose aux jeunes issus des établissements de protection sociale (EPS) et en situation de précarité une formation qualifiante dans les métiers de l’hôtellerie et de la restauration. Aujourd'hui, plus de 120 jeunes franchissent une étape clé vers l'emploi, grâce au soutien de nos entreprises partenaires. Ce diplôme, délivré en partenariat avec l'Entraide Nationale, témoigne de leur persévérance et marque le début d'une carrière prometteuse. Nous avons été honorés par la présence de personnalités de marque : le Wali de Casablanca, le Gouverneur des arrondissements de Casablanca-Anfa, Mme la Maire de Casablanca. Merci infiniment à nos partenaires et à la communauté Bab Rayan pour leur soutien indéfectible."
    },
    {
      id: 2,
      img: pic9,
      title: "Convention entre Newrest et le CFI pour offrir une formation en alternance de qualité",
      description: "Le CFI à Bab Rayan & Newrest s'unissent pour offrir une formation diplômante en restauration, une première qui changera la vie d'une promotion engagée de jeunes en difficulté! D'ici août prochain, ils auront non seulement acquis des compétences, mais aussi trouvé un projet de vie qui leur ouvre les portes d'un avenir prometteur.",
    },
  ]
  const videoUrl =
    "https://firebasestorage.googleapis.com/v0/b/bab-rayan-87f71.appspot.com/o/video.mp4?alt=media&token=6cc682dc-b7fa-4729-b2d3-ac2ad8d0df87";

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [modal2Open, setModal2Open] = useState(false);
  const [blogModal, setBlogModal] = useState(false);
  return (
    <>
      {/* Main Content */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Main Carousel Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full"
        >      {/* Swiper Container */}
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
                  <div className="relative h-[400px] sm:h-[500px] md:h-[650px] lg:h-[800px]">
                    {/* Background Image */}
                    <Image
                      src={slide.image}
                      className="absolute block w-full h-full"
                      // loading="lazy"
                      alt={`Slide ${index + 1}`}
                      priority={index === 0}
                      fill
                    />

                    {/* Text Content */}
                    <motion.div
                      variants={{}}
                      className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-40 max-w-[300px] md:max-w-xl text-white p-4 md:p-0"
                    >
                      {/* Icon */}
                      {slide.picto && (
                        <div className="hidden md:block">
                          <Image
                            src={slide.picto}
                            className="relative w-[200px] md:w-[550px] h-[100px] md:h-[280px] mb-4"
                            width={300}
                            height={200}
                            alt="Picto"

                            priority
                          />
                        </div>
                      )}

                      <motion.h1
                        variants={{}}
                        className="text-xl md:text-5xl font-bold mb-2 md:mb-4 drop-shadow-lg"
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        variants={{}}
                        className="mb-4 md:mb-6 text-xl italic md:text-md drop-shadow-md"
                      >
                        {slide.description}
                      </motion.p>

                      <Link href={slide.link} passHref>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 md:px-14 py-1 bg-[#fd1111f3] font-bold text-sm md:text-2xl rounded-xl hover:bg-[#ab2222] duration-300 ease-in-out dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white mr-4 drop-shadow-md hover:text-white-700 transition-colors"
                        >
                          En savoir plus
                        </motion.button>
                      </Link>
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
                    className="m-2 flex flex-col md:flex-row items-center bg-white border- border-b-5 border-red-300 shadow-md rounded-md duration-500 hover:shadow-xl overflow-hidden"
                  >
                    <div className="p-4 gap-4 xl:w-1/2">
                      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
                        {slide.title}
                      </h1>
                      <p className="text-sm sm:text-base italic text-gray-700 mb-6">
                        {slide.description}
                      </p>
                      <Link href={slide.link} passHref>
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-1 py-2 bg-[#f3ca31] text-white font-medium rounded-xl hover:bg-yellow-500 transition duration-300 cursor-pointer"
                        >
                          {slide.buttonText}
                        </motion.a>
                      </Link>
                    </div>
                    <div className="xl:w-1/2">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        className="w-[434px] h-[400px] object-cover"
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
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4">
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
          <motion.div
            className="bg-red-700 py-12 relative"
            variants={staggerContainer} // Apply stagger effect to children
            initial="initial"
            animate="animate"
          >
            {/* Header Section */}
            <motion.h1
              className="text-white text-center text-2xl md:text-3xl font-bold mb-6 py-2 rounded-t-lg"
              variants={fadeIn} // Apply fadeIn animation
            >
              ACTIONS SOLIDAIRES
              <br />
              <span className="text-sm font-light">Solidaires ensemble !</span>
              <div className="w-20 md:w-32 h-0.5 bg-yellow-200 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
            </motion.h1>

            {/* Decorative Image */}
            <motion.div variants={fadeIn} initial="initial" animate="animate">
              <Image
                src={pic11}
                className="hidden lg:block w-24 md:w-52 absolute top-0 left-[70%]"
                alt="solidaire"
              />
            </motion.div>

            {/* Content Section */}
            <div className="rounded-lg flex flex-wrap lg:flex-nowrap items-center gap-6 lg:gap-28">
              {/* Image Section */}
              <motion.div
                className="w-full lg:w-[50%]"
                variants={slideIn} // Apply slideIn animation
                initial="initial"
                animate="animate"
              >
                <Image
                  src={pic4}
                  alt="Les Ftours Bab Rayan"
                  className="w-full h-[40vh] lg:h-[49vh] rounded-r-lg lg:rounded-r-3xl object-cover"
                />
              </motion.div>

              {/* Text Section */}
              <motion.div
                className="p-6 flex-1"
                variants={fadeIn} // Apply fadeIn animation
                initial="initial"
                animate="animate"
              >
                <motion.h2
                  className="text-white text-2xl md:text-4xl font-semibold mb-4"
                  variants={fadeIn} // Apply fadeIn animation
                >
                  Les Ftours Bab Rayan
                </motion.h2>
                <motion.p
                  className="text-gray-200 mb-4 italic text-sm md:text-lg w-full lg:w-[33vw]"
                  variants={fadeIn} // Apply fadeIn animation
                >
                  L&apos;association Bab Rayan organise chaque année depuis 2015
                  le Ftour Bab Rayan. Pendant ce mois sacré, la plupart
                  n&apos;ont pas la chance de rompre leur jeûne autour d&apos;une
                  table garnie. Cette action apporte beaucoup de
                  convivialité et de chaleur à leur environnement&nbsp;;
                  l&apos;esprit de solidarité du Ramadan est alors au
                  rendez-vous, grâce à vos dons !
                </motion.p>
                <Link href="/actions-solidaires" passHref> {/* Add the link to the "Actions Solidaires" page */}
                  <motion.button
                    variants={scaleIn} // Apply scaleIn animation
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-yellow-400 text-red-600 font-bold px-5 md:px-7 py-2 rounded-xl hover:bg-yellow-500 transition cursor-pointer"
                  >
                    Voir plus
                  </motion.button>
                </Link>

                {/* Decorative Image */}
                <motion.div
                  variants={fadeIn} // Apply fadeIn animation
                  initial="initial"
                  animate="animate"
                >
                  <Image
                    src={pic10}
                    className="w-20 md:w-40 absolute bottom-[-5%] md:bottom-[-2%] left-[75%] md:left-[86%]"
                    alt="Les Ftours Bab Rayan"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* 3 card of solidarité */}

        <motion.div className="p-6 container mx-auto py-8">
          <motion.h1 className="p-4 text-4xl font-bold text-center mb-8">
            NOTRE IMPACT
            <div className="w-56 h-1 bg-yellow-200 absolute left-1/2 -translate-x-1/2 mt-2"></div>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {articles.map((article, index) => (
              <motion.div key={index} className="bg-white rounded-lg shadow-lg">
                <Image src={article.img} className="h-[45vh] object-cover" alt={article.title} width={500} height={300} />
                <div className="p-6">
                  <p className="text-3xl font-bold text-center pb-4">{article.title}</p>
                  <p className="pb-6 text-center">{article.shortDesc}</p>
                  <div className="p-6 flex items-center justify-center">
                    <motion.button
                      className="rounded-sm bg-yellow-300 px-4 py-2 text-xl font-medium text-white shadow-sm hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => { setSelectedArticle(article); setModal2Open(true) }}
                    >
                      Voir plus
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {selectedArticle && (
            <Modal
              title={<h2 className="text-center w-full text-xl font-semibold">{selectedArticle.title}</h2>}
              centered
              open={modal2Open}
              onCancel={() => setModal2Open(false)}
              width={800} // Increased width for better display
              bodyStyle={{ padding: "20px", maxHeight: "80vh", overflowY: "auto" }} // Scrollable content
              footer={null} // Removes the OK button
            >
              <div className="flex flex-col items-center">
                {/* Styled Image */}
                <Image
                  src={selectedArticle.img}
                  className="w-full h-auto max-h-[300px] object-cover rounded-lg mb-4 shadow-md"
                  alt={selectedArticle.title}
                  width={500}
                  height={300}
                />

                {/* Content Section */}
                <div className="max-h-[60vh] overflow-y-auto px-4 text-gray-700 leading-relaxed text-lg">
                  <p>{selectedArticle.fullDesc}</p>
                </div>
              </div>
            </Modal>
          )}


        </motion.div>

        {/* /Actualites/ */}

        <div className="">
          <motion.h1
            className="p-4 text-2xl md:text-4xl font-bold text-center mb-8 relative"
            variants={fadeIn} // Apply fadeIn animation
            initial="initial"
            animate="animate"
          >
            ACTUALITÉS
            <div className="w-24 md:w-48 h-1 bg-yellow-200 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
          </motion.h1>

          {blogs.map((article, index) => (
            <motion.div
              className="flex flex-col items-center bg-pink-100 gap-9 px-4"
              variants={staggerContainer} 
              key={index}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="p-6 rounded-lg flex flex-col md:flex-row gap-7 items-center justify-center w-full max-w-[90%] md:max-w-[70%]" variants={fadeIn} >
                {/* Image Section */}
                <motion.div className="flex-shrink-0 w-full md:w-[45%]" variants={fadeIn}>
                  <Image src={article.img} alt="Graduation" className="rounded-xl w-full h-auto object-cover" />
                </motion.div>

                {/* Text Section */}
                <motion.div className="text-center md:text-left" variants={fadeIn}>
                  <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
                    {article.title}
                  </h1>
                  <p className="text-gray-700 mb-4 italic text-sm md:text-base" dangerouslySetInnerHTML={{ __html: article.description }}>
                  </p>
                  <motion.button onClick={() => { setSelectedBlog(article); setBlogModal(true) }}
                    className="inline-block bg-yellow-300 rounded-full text-red-500 font-semibold px-4 py-2 transition hover:bg-yellow-400"
                    variants={scaleIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} >
                    Découvrir plus
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}


          {selectedBlog && (
            <Modal title={<h2 className="text-center w-full text-xl font-semibold">{selectedBlog.title}</h2>} centered open={blogModal} onCancel={() => setBlogModal(false)} width={800} bodyStyle={{ padding: "20px", maxHeight: "80vh", overflowY: "auto" }} footer={null} >
              <div className="flex flex-col items-center">
                {/* Styled Image */}
                <Image src={selectedBlog.img} className="w-full h-auto max-h-[300px] object-cover rounded-lg mb-4 shadow-md" alt={selectedBlog.title} width={500} height={300} />

                {/* Content Section */}
                <div className="max-h-[60vh] overflow-y-auto px-4 text-gray-700 leading-relaxed text-lg">
                  <p dangerouslySetInnerHTML={{ __html: selectedBlog.text ? selectedBlog.text : selectedBlog.description }}></p>
                </div>
              </div>
            </Modal>
          )}

          {/* Link to All News */}
          <div className="p-6 flex items-center justify-center">
            <motion.a href="/blog" variants={scaleIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white shadow-md transition-transform duration-200 ease-in-out hover:scale-105" >
              Voir toutes les Actualités
            </motion.a>
          </div>
        </div>
      </motion.div>
      {/* </>
      )} */}
    </>
  );
}
