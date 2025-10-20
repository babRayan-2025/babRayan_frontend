"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Button, Modal } from 'antd';

import pic3 from "../assets/PHOTO/3.jpg";
import pic10 from "../assets/PNG/ETOILERAMADAN.png";
import pic11 from "../assets/PNG/LANTERNE.png";
import CountUp from "react-countup";
import React, { useState, useEffect } from "react";
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
  const [newsfetched, setNewsfetched] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogModal, setBlogModal] = useState(false);
  const [infoSwiper, setInfoSwiper] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("https://api-vevrjfohcq-uc.a.run.app/v1/news");
        const data = await response.json();
        if (data.status && data.data) {
          // Sort by createdAt in descending order (newest first) and take only the first 3
          const sortedNews = data.data.sort((a, b) => {
            const dateA = a.createdAt?._seconds || 0;
            const dateB = b.createdAt?._seconds || 0;
            return dateB - dateA;
          }).slice(0, 3);
          setNewsfetched(sortedNews);
        } else {
          setNewsfetched([]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setNewsfetched([]);
      }
    }
    fetchNews();
  }, []);

  const caroussel = [
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/landing%2FSlide2.webp?alt=media&token=e28cc389-80af-493a-95aa-5e95b6326083',
      picto: '/caroussel/sun.png',
      title: "CHANGER LE PARCOURS D'UNE VIE",
      description: "L'association Bab Rayan agit depuis 2014 pour transformer la vie des enfants en difficulté.",
      link: "/protection"
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/landing%2FSlide%203.webp?alt=media&token=bd1b4ccd-f410-4bad-b948-d50e204818fe',
      picto: '/caroussel/main.png',
      title: "PROTÉGER, ÉDUQUER, ACCOMPAGNER",
      description: "Bab Rayan défend les droits des enfants en leur offrant un foyer sécurisant et une éducation de qualité.",
      link: "/education"
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/landing%2Fslide4.webp?alt=media&token=2ad12cfa-af2b-4c85-a40c-10aaeecc66a1',
      picto: '/caroussel/fleche.png',
      title: "FORMER ET INTÉGRER",
      description: "Le Centre de Formation et d'Insertion prépare nos jeunes à devenir des citoyens autonomes et engagés.",
      link: "/formation"
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/landing%2Fslide1_optimized_2000.webp?alt=media&token=afef0b38-a7b9-45ce-b299-7d03461f9e3f',
      picto: '/caroussel/etoile.svg',
      title: "UN ENGAGEMENT QUI A DU SENS",
      description: "Rejoignez le combat pour la protection de l'enfance, engagez-vous en devenant donateur, partenaire ou bénévole.",
      link: "/devenir_partenaire"
    },
  ];


  const slidesData = [
    {
      title: "Protection de l'enfance",
      description: "Depuis 2014, Bab Rayan se consacre à la protection de l'enfance, assurant un environnement sûr et bienveillant pour les enfants vulnérables.",
      buttonText: "Découvrir le foyer Bab Rayan",
      image: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/landing%2FProtection%20de%20l'enfance.webp?alt=media&token=aa705d8c-9d7a-4f4b-b210-266396bd9bc7",
      link: '/protection'
    },
    {
      title: "Éducation et scolarité",
      description: "En intégrant ces jeunes dans un parcours éducatif adapté à leurs besoins, nous leur donnons les outils nécessaires pour construire leur avenir.",
      buttonText: "Découvrir l'école Palmier",
      image: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/landing%2Feducation%20et%20scolarite.webp?alt=media&token=3fd3945b-552d-4c6f-bf84-fd5d190e11d1',
      link: '/education'
    },
    {
      title: "Formation et insertion professionnelle",
      description: "Des formations offertes dans des secteurs variés tels que l'hôtellerie-restauration et les métiers du digital pour accompagner ces jeunes vers une insertion professionnelle réussie.",
      buttonText: "Découvrir le CFI",
      image: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/landing%2Fformation%20et%20insertion.jpg?alt=media&token=a7769358-1994-453e-924b-ed0337947bd2',
      link: '/formation',
    }
  ];

  const chiffres = [
    {
      label: "Enfants pris en charge",
      value: 450,
      icon: "/chiffres/3.png",
    },
    {
      label: "Bénévoles",
      value: "6 000",
      icon: "/chiffres/1.png",
    },
    {
      label: "Familles bénéficiaires",
      value: "1 500",
      icon: "/chiffres/2.png",
    },
    {
      label: "repas offerts à la cantine",
      value: "230 000",
      icon: "/chiffres/repats.png",
    },
    {
      label: "Ftours servis",
      value: "31 200" ,
      icon: "/chiffres/ftour.png",
    },
  ];

  const articles = [
    {
      title: "Mécénat culturel : Éveiller les talents et les passions de nos jeunes",
      shortDesc: "L'Association Bab Rayan donne à ses jeunes la chance de découvrir le monde fascinant de la culture ...",
      fullDesc: "l'Association Bab Rayan donne à ses jeunes la chance de découvrir le monde fascinant de la culture et de l'art. À travers le programme de l'école du jeune spectateur, de nombreuses sorties au théâtre sont organisées, offrant aux enfants et adolescents une immersion unique dans l'univers des arts vivants. Au-delà du théâtre, nos jeunes participent activement à des expositions d'art, explorant les œuvres et les histoires qu'elles racontent. Des ateliers de peinture et d'expression artistique leur permettent également de développer leur sensibilité, leur créativité et leur confiance en eux. Ces initiatives culturelles sont bien plus que des moments de loisir : elles nourrissent l'imaginaire, ouvrent de nouveaux horizons et encouragent chacun de nos jeunes à croire en ses talents. Nous remercions chaleureusement tous nos partenaires pour leur engagement à rendre l'art et la culture accessibles à tous.",
      img: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/landing%2FM%C3%A9c%C3%A9nat%20culturel%20%20%C3%89veiller%20les%20talents%20et%20les%20passions%20de%20nos%20jeunes.jpg?alt=media&token=a97fafde-d4ea-4e63-a997-219034dab752",
    },
    {
      title: "La Digitalisation au cœur des projets de Bab Rayan",
      shortDesc: "Aujourd'hui, plusieurs projets de l'association Bab Rayan intègrent la digitalisation comme levier d'apprentissage et d'insertion professionnelle. À l'école élémentaire ...",
      fullDesc: "Aujourd'hui, plusieurs projets de l'association Bab Rayan intègrent la digitalisation comme levier d'apprentissage et d'insertion professionnelle. À l'école élémentaire, nous sensibilisons dès le plus jeune âge à l'informatique à travers des programmes de codage interactifs, spécialement conçus pour éveiller l'intérêt des enfants pour les métiers de l'IT. Au niveau du Centre de Formation et d'Insertion (CFI), un module dédié aux outils bureautiques (Microsoft Office) a été intégré au curriculum pour renforcer les compétences techniques essentielles. En parallèle, le CFI a lancé un projet pilote ambitieux : ForsaTech.",
      img: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/landing%2FLa%20Digitalisation%20au%20c%C5%93ur%20des%20projets%20de%20Bab%20Rayan.webp?alt=media&token=33345520-e4a7-4364-b86e-9d9ef972c3fa",
    },
    {
      title: "ForsaTech : Une porte d'entrée vers les métiers du numérique",
      shortDesc: "Créé pour répondre aux besoins croissant du marché digital, ForsaTech propose des formations ...",
      fullDesc: "Créé pour répondre aux besoins croissants du marché digital, ForsaTech propose des formations accélérées aux jeunes en difficulté, axées sur les compétences numériques les plus demandées. Conçu en collaboration avec des entreprises partenaires, ce programme garantit une employabilité directe grâce à une sélection rigoureuse des modules et des candidats. Forts de notre expertise dans les métiers de l'hôtellerie et de la restauration, et inspirés par le succès de ce modèle, nous sommes déterminés à élargir notre impact en ouvrant de nouvelles perspectives dans le secteur numérique. Avec ces initiatives, Bab Rayan continue de transformer les défis de la jeunesse en opportunités durables, en bâtissant un pont solide entre éducation, technologie et insertion professionnelle.",
      img: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/landing%2FForsaTech%20%20Une%20porte%20d'entr%C3%A9e%20vers%20les%20m%C3%A9tiers%20du%20num%C3%A9rique.webp?alt=media&token=05dd4e07-0709-4ea7-a10c-c481051d9165",
    },
  ];

  const blogv = [
    {
      id: 1,
      img: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/landing%2Ftelequel.webp?alt=media&token=343743a6-98af-4e61-98c7-c437ca36bf0b",
      title: "TelQuel parle de nous !",
      description: "L'association Bab Rayan a récemment été mise en lumière par TelQuel à travers un reportage poignant, révélant avec justesse et sensibilité l'impact de ses actions en faveur des enfants en situation de précarité. Avec un regard bienveillant et un talent incontestable, l'équipe de TelQuel a su capturer l'essence de notre mission : protéger, éduquer et accompagner vers l'autonomie les enfants et jeunes issus des milieux les plus vulnérables. De notre foyer d'accueil à notre école inclusive en passant par notre centre de formation et d'insertion professionnelle, chaque image, chaque témoignage reflète l'engagement quotidien de Bab Rayan pour offrir à ces jeunes un avenir digne et porteur d'espoir." ,
      text: "L'association Bab Rayan a récemment été mise en lumière par TelQuel à travers un reportage poignant, révélant avec justesse et sensibilité l'impact de ses actions en faveur des enfants en situation de précarité. Avec un regard bienveillant et un talent incontestable, l'équipe de TelQuel a su capturer l'essence de notre mission : protéger, éduquer et accompagner vers l'autonomie les enfants et jeunes issus des milieux les plus vulnérables. De notre foyer d'accueil à notre école inclusive en passant par notre centre de formation et d'insertion professionnelle, chaque image, chaque témoignage reflète l'engagement quotidien de Bab Rayan pour offrir à ces jeunes un avenir digne et porteur d'espoir. Ce reportage est bien plus qu'un simple témoignage : c'est une fenêtre ouverte sur les parcours de résilience, de courage et de transformation que nous avons la chance d'accompagner chaque jour. Un immense merci à TelQuel pour cette mise en lumière précieuse qui rappelle combien chaque enfant mérite une chance, un soutien et un avenir."
    },
  ]

  const blogs = [
    {
      id: 1,
      img: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/landing%2FRemise%20des%20dipl%C3%B4mes%20de%20la%20deuxi%C3%A8me%20promotion%20du%20CFI.jpg?alt=media&token=a6788bf7-919e-48f2-96ca-5468a7d86176",
      title: "Remise des diplômes de la deuxième promotion du CFI",
      description: "L&apos;Association Bab Rayan a eu l&apos;honneur de célébrer ce 28 Octobre 2024, la réussite de la deuxième promotion de diplômés de son Centre de Formation et d&apos;Insertion. Le CFI propose aux jeunes issus des EPS et en situation de précarité une formation qualifiante dans les métiers de l&apos;hôtellerie et de la restauration. Aujourd&apos;hui, plus de 120 jeunes franchissent une étape clé vers l&apos;emploi, grâce au soutien de nos entreprises partenaires. <br /> Nous avons été honorés par la présence de Mr le Wali, le Gouverneur et Mme la Maire de Casablanca.",
      text: "L'Association Bab Rayan a eu l'honneur de célébrer le 28 Octobre la réussite de la deuxième promotion de diplômés de son Centre de Formation et d'Insertion. Le CFI propose aux jeunes issus des établissements de protection sociale (EPS) et en situation de précarité une formation qualifiante dans les métiers de l'hôtellerie et de la restauration. Aujourd'hui, plus de 120 jeunes franchissent une étape clé vers l'emploi, grâce au soutien de nos entreprises partenaires. Ce diplôme, délivré en partenariat avec l'Entraide Nationale, témoigne de leur persévérance et marque le début d'une carrière prometteuse. Nous avons été honorés par la présence de personnalités de marque : le Wali de Casablanca, le Gouverneur des arrondissements de Casablanca-Anfa, Mme la Maire de Casablanca. Merci infiniment à nos partenaires et à la communauté Bab Rayan pour leur soutien indéfectible."
    },
    {
      id: 2,
      img: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/landing%2FConvention%20entre%20Newrest%20et%20le%20CFI%20pour%20offrir%20une%20formation%20en%20alternance%20de%20qualit%C3%A9%20(2).webp?alt=media&token=d0a016ca-770e-444f-b8c1-28fd3d4840cf",
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
  const [modal2Open, setModal2Open] = useState(false);
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
                      className="absolute block w-full h-full object-cover loading='lazy'"
                      // loading="lazy"
                      alt={`Slide ${index + 1}`}
                      priority={index === 0}
                      fill
                    />

                    {/* Text Content */}
                    <motion.div
                      variants={{}}
                      className="absolute right-4 md:right-10 top-2/3 md:top-1/2 -translate-y-1/2 z-40 max-w-[300px] md:max-w-xl text-white p-4 md:p-0"
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
              modules={[Pagination, Mousewheel]}
              mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
              grabCursor={true}
              centeredSlides={true}
              centeredSlidesBounds={true}
              onSwiper={setInfoSwiper}
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
                    onMouseEnter={() => { if (infoSwiper) { infoSwiper.slideTo(index) } }}
                    className="m-2 flex flex-col md:flex-row items-center bg-white border- border-b-5 border-red-300 shadow-md rounded-md duration-500 hover:shadow-xl overflow-hidden"
                  >
                    <div className="p-4 gap-4 xl:w-1/2">
                      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
                        {slide.title}
                      </h1>
                      <p className="text-sm sm:text-base italic text-gray-700 mb-6">
                        {slide.description}
                      </p>
                      <Link href={slide.link}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-1 py-2 bg-[#f3ca31] text-white font-medium rounded-xl hover:bg-yellow-500 transition duration-300 cursor-pointer"
                        >
                          {slide.buttonText}
                        </motion.button>
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
          <motion.h1
                      className="p-4 text-xl md:text-3xl font-bold text-white text-center mb-8 relative uppercase"
                      variants={fadeIn}
                      initial="initial"
                      animate="animate"
                    >
                      Chiffres clés annuels
                      <div className="w-24 md:w-48 h-1 bg-yellow-200 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
                    </motion.h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-center items-center gap-4">
            {chiffres.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center rounded-lg p-3 m-2 md:flex-1 md:basis-5/12 xl:basis-1/5"
              >
                <span className="text-[#ffffff] text-6xl text-center">
                <img src={stat.icon} className="w-44 h-36" alt="" />
                </span>
                <motion.div
                  className="flex items-center justify-center mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 * index }}
                >
                  <span className="text-[#ffffff] text-3xl md:text-4xl font-extrabold">
                    + {stat.value}
                  </span>
                  {/* <CountUp
                    end={stat.value}
                    duration={2}
                    className="text-white text-5xl font-bold"
                  /> */}
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
                <img
                src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/landing%2FLes%20Ftours%20Bab%20Rayan.jpg?alt=media&token=38f45e82-7380-47db-a2bf-4c82c65ec2dc"
                  alt="Les Ftours Bab Rayan"
                  className="w-full h-[40vh] lg:h-[49vh] rounded-r-lg lg:rounded-r-3xl shadow-lg object-cover"
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
                <Link href="/actions-solidaires" passHref> 
                  <motion.button
                    variants={scaleIn} // Apply scaleIn animation
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-yellow-300 text-red-600 font-bold px-5 mr-4 md:px-7 py-2 rounded-xl hover:bg-yellow-400 transition cursor-pointer"
                  >
                    Voir Plus
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {articles.map((article, index) => (
              <motion.div key={index} className="bg-white rounded-lg shadow-lg">
                <img src={article.img} className="h-[45vh] object-cover" alt={article.title} style={{ width: '100%' }} height={300} loading="lazy" />
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
              styles={{ body: { padding: "20px", maxHeight: "80vh", overflowY: "auto" } }} // Scrollable content
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

        <div>
          <motion.h1
            className="p-4 text-2xl md:text-4xl font-bold text-center my-8 relative"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            ACTUALITÉS
            <div className="w-24 md:w-48 h-1 bg-yellow-200 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
          </motion.h1>

          {/* Show fetched news first */}
          {newsfetched.slice(0, 3).map((item) => (
            <motion.div
              className="flex flex-col items-center gap-9 md:px-4"
              variants={staggerContainer}
              key={item.id}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="md:px-6 py-6 rounded-lg flex flex-col lg:flex-row gap-7 items-center justify-center w-full max-w-[90%] md:max-w-7xl"
                variants={fadeIn}
              >
                {/* Image Section */}
                <motion.div className="flex-shrink-0 w-full lg:w-[45%]" variants={fadeIn} loading="lazy">
                  <img src={item.pic} alt={item.title} className="rounded-xl w-full md:h-[310px] object-cover" />
                </motion.div>

                {/* Text Section */}
                <motion.div className="text-center md:text-left" variants={fadeIn}>
                  <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h1>
                  <p className="text-gray-700 mb-4 italic text-sm md:text-base" dangerouslySetInnerHTML={{ __html: item.shortContent }}>
                  </p>
                  <motion.button
                    onClick={() => { setSelectedBlog(item); setBlogModal(true) }}
                    className="inline-block bg-yellow-300 rounded-full text-red-500 font-semibold px-4 py-2 transition hover:bg-yellow-400"
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Découvrir plus
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}

          {/* Show TelQuel video blog next if we have less than 3 fetched news */}
          {newsfetched.length < 3 && blogv.map((articlev, index) => (
            <motion.div
              className="flex flex-col items-center gap-9 md:px-4"
              variants={staggerContainer}
              key={index}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="md:px-6 py-6 rounded-lg flex flex-col lg:flex-row gap-7 items-center justify-center w-full max-w-[90%] md:max-w-7xl"
                variants={fadeIn}
              >
                {/* Video Section */}
                <motion.div className="flex-shrink-0 w-full lg:w-[45%]" variants={fadeIn} loading="lazy">
                <img src={articlev.img} alt="Graduation" className="rounded-xl w-full md:h-[310px] object-cover" />
                  
                </motion.div>

                {/* Text Section */}
                <motion.div className="text-center md:text-left" variants={fadeIn}>
                  <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
                    {articlev.title}
                  </h1>
                  <p className="text-gray-700 mb-4 italic text-sm md:text-base" dangerouslySetInnerHTML={{ __html: articlev.description }}>
                  </p>
                  <motion.button
                    onClick={() => { window.open('https://www.youtube.com/watch?v=1SatrIi9WB0&t=71s', '_blank') }}
                    className="inline-block bg-yellow-300 rounded-full text-red-500 font-semibold px-4 py-2 transition hover:bg-yellow-400"
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Découvrir plus
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}

          {/* Show static blogs only if we have less than 3 total blogs */}
          {newsfetched.length + blogv.length < 3 && blogs.slice(0, 3 - (newsfetched.length + blogv.length)).map((article, index) => (
            <motion.div
              className="flex flex-col items-center gap-9 md:px-4"
              variants={staggerContainer}
              key={index}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="md:px-6 py-6 rounded-lg flex flex-col lg:flex-row gap-7 items-center justify-center w-full max-w-[90%] md:max-w-7xl"
                variants={fadeIn}
              >
                {/* Image Section */}
                <motion.div className="flex-shrink-0 w-full lg:w-[45%]" variants={fadeIn} loading="lazy">
                  <img src={article.img} alt="Graduation" className="rounded-xl w-full md:h-[310px] object-cover" />
                </motion.div>

                {/* Text Section */}
                <motion.div className="text-center md:text-left" variants={fadeIn}>
                  <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
                    {article.title}
                  </h1>
                  <p className="text-gray-700 mb-4 italic text-sm md:text-base" dangerouslySetInnerHTML={{ __html: article.description }}>
                  </p>
                  <motion.button
                    onClick={() => { setSelectedBlog(article); setBlogModal(true) }}
                    className="inline-block bg-yellow-300 rounded-full text-red-500 font-semibold px-4 py-2 transition hover:bg-yellow-400"
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Découvrir plus
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}

          {selectedBlog && (
            <Modal
              title={<h2 className="text-center w-full text-xl font-semibold">{selectedBlog.title}</h2>}
              centered
              open={blogModal}
              onCancel={() => setBlogModal(false)}
              width={800}
              styles={{ body: { padding: "20px", maxHeight: "80vh", overflowY: "auto" } }}
              footer={null}
            >
              <div className="flex flex-col items-center">
                {/* Styled Image */}
                <Image
                  src={selectedBlog.pic || selectedBlog.img}
                  className="w-full h-auto max-h-[300px] object-cover rounded-lg mb-4 shadow-md"
                  alt={selectedBlog.title}
                  width={500}
                  height={300}
                />

                {/* Content Section */}
                <div className="max-h-[60vh] overflow-y-auto px-4 text-gray-700 leading-relaxed text-lg">
                  <p dangerouslySetInnerHTML={{ __html: selectedBlog.text || selectedBlog.description }}></p>
                </div>
              </div>
            </Modal>
          )}

          {/* Link to All News */}
          <div className="p-6 flex items-center md:my-4 justify-center">
            <Link href="/blog">
              <motion.button
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white shadow-md transition-transform duration-200 ease-in-out hover:scale-105"
              >
                Voir toutes les Actualités
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
