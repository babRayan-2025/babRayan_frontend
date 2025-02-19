"use client";

import SkeletonLoader from "../../../components/SkeletonLoader";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";


// Animation Variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
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

// News Item Component
const NewsItem = ({ imageSrc, title, description }) => (
  <motion.div
    className="flex flex-col items-center gap-9 px-4"
    variants={staggerContainer}
    initial="initial"
    animate="animate"
  >
    <motion.div
      className="p-6 rounded-lg flex flex-col md:flex-row gap-7 items-center justify-center w-full max-w-[90%] md:max-w-[70%]"
      variants={fadeIn}
    >
      {/* Image Section */}
      <motion.div className="flex-shrink-0 w-full md:w-[45%]" variants={fadeIn}>
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={400}
          className="rounded-xl w-full h-auto object-cover"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div className="text-center md:text-left" variants={fadeIn}>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        <p className="text-gray-600 mb-4 md:mb-10 text-sm md:text-base">
          {description}
        </p>
        <motion.button
          className="inline-block bg-yellow-300 rounded-full text-red-600 font-semibold px-4 py-2 transition hover:bg-yellow-400"
          variants={scaleIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Découvrir plus
        </motion.button>
      </motion.div>
    </motion.div>
  </motion.div>
);

export default function Blog() {
  const [isLoading, setIsLoading] = useState(true);

  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl =
  "https://firebasestorage.googleapis.com/v0/b/bab-rayan-87f71.appspot.com/o/video.mp4?alt=media&token=6cc682dc-b7fa-4729-b2d3-ac2ad8d0df87";

const handlePlayClick = () => {
  setIsPlaying(true);
};

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const newdata = [
    {
      id: 1,
      // image: "https://www.youtube.com/watch?v=1SatrIi9WB0&t=71s ",
      alt: "Graduation",
      title: "TelQuel parle de nous !",
      description: `L’association Bab Rayan a récemment été mise en lumière par TelQuel à travers un reportage poignant, révélant avec justesse et sensibilité l’impact de ses actions en faveur des enfants en situation de précarité.
Avec un regard bienveillant et un talent incontestable, l’équipe de TelQuel a su capturer l’essence de notre mission : protéger, éduquer et accompagner vers l’autonomie les enfants et jeunes issus des milieux les plus vulnérables. De notre foyer d’accueil à notre école inclusive en passant par notre centre de formation et d’insertion professionnelle, chaque image, chaque témoignage reflète l’engagement quotidien de Bab Rayan pour offrir à ces jeunes un avenir digne et porteur d’espoir.
Ce reportage est bien plus qu’un simple témoignage : c’est une fenêtre ouverte sur les parcours de résilience, de courage et de transformation que nous avons la chance d’accompagner chaque jour.
Un immense merci à TelQuel pour cette mise en lumière précieuse qui rappelle combien chaque enfant mérite une chance, un soutien et un avenir.`,
      buttonText: "Découvrir plus",
      href: "https://www.youtube.com/watch?v=1SatrIi9WB0&t=71s",
    },
    {
      id: 2,
      image: "/blog/1.png",
      alt: "Graduation",
      title: "Remise des diplômes de la deuxième promotion du CFI",
      description: `L'Association Bab Rayan a eu l'honneur de célébrer ce 28 Octobre 2024,
    la réussite de la deuxième promotion de diplômés de son Centre de
    Formation et d'Insertion. Le CFI propose aux jeunes issus des EPS et
    en situation de précarité une formation qualifiante dans les métiers
    de l'hôtellerie et de la restauration. Aujourd'hui, plus de 120 jeunes
    franchissent une étape clé vers l'emploi, grâce au soutien de nos
    entreprises partenaires.`,
      buttonText: "Découvrir plus",
    },
    {
      id: 3,
      image: "/blog/2.png",
      alt: "Graduation",
      title:
        "Convention entre Newrest et le CFI pour offrir une formation en alternance de qualité",
      description: `Le CFI à Bab Rayan & Newrest s'unissent pour offrir une formation
    diplômante en restauration, une première qui changera la vie d'une
    promotion engagée de jeunes en difficulté! D'ici août prochain, ils
    auront non seulement acquis des compétences, mais aussi trouvé un
    projet de vie qui leur ouvre les portes d'un avenir prometteur.`,
      buttonText: "Découvrir plus",
    },
    {
      id: 4,
      image: "/blog/3.png",
      alt: "Training",
      title: "Une sortie au théâtre pour voir le petit prince",
      description: `Les enfants de Bab Rayan ont assisté au premier spectacle de la saison de l'École du Jeune
Spectateur : Le Petit Prince.
Grâce à la générosité de la Fondation Achraf Hakimi, nos jeunes ont été accueillis au Complexe Culturel Al Hassani, où ils ont plongé dans l'univers magique de cette œuvre intemporelle.`,
      buttonText: "Découvrir plus",
    },
    {
      id: 5,
      image: "/blog/4.png",
      alt: "Partnership",
      title: "Cérémonie d`ouverture de PSG Academy",
      description: `La PSG Academy Maroc a ouvert ses portes le 11 novembre à Casablanca, en présence d'Achraf Hakimi, invité d'honneur.
Les jeunes de Bab Rayan ont eu le privilège de le rencontrer et de jouer un match contre lui.`,
      buttonText: "Découvrir plus",
    },
    {
      id: 6,
      image: "/blog/5.jpg",
      alt: "Success",
      title:
        "Convention entre Newrest et le CFI pour offrir une formation en alternance de qualité",
      description: `Le CFI à Bab Rayan & Newrest s'unissent pour offrir une formation diplômante en restauration, une première qui changera la vie d'une promotion engagée de jeunes en difficulté !`,
      buttonText: "Découvrir plus",
    },
    {
      id: 7,
      image: "/blog/6.jpg",
      alt: "Innovation",
      title: "Nos enfants partent à la découverte du monde",
      description: `Grâce à des voyages à l'étranger, nos enfants ont eu la chance unique d'élargir leurs horizons, de nourrir leurs rêves et de s'ouvrir à de nouvelles cultures. Ces expériences enrichissantes encouragent la tolérance, renforcent l'estime de soi, et favorisent une meilleure compréhension des autres, tout en contribuant à leur épanouissement personnel.`,
      buttonText: "Découvrir plus",
    },
  ];

  return (
    <>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <main className="w-full bg-[url('/BG-actualité.png')] bg-center py-16">
          <motion.h1
            className="p-4 text-2xl md:text-4xl font-bold text-center mb-8 relative"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            ACTUALITÉS
            <div className="w-24 md:w-48 h-1 bg-yellow-200 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
          </motion.h1>

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
                {/* <Image
                  src={pic3}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                /> */}

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
                  {/* bloooog ---------- */}
          {newdata.map((item) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center gap-9 px-4"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="md:p-6 pt-6 rounded-lg flex flex-col md:flex-row gap-7 items-center justify-center w-full max-w-[100%] md:max-w-[80%]"
                variants={fadeIn}
              >
                {/* Image Section */}
                <motion.div
                  className="flex-shrink-0 w-full md:w-[45%]"
                  variants={fadeIn}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={600}
                    height={400}
                    className="rounded-xl w-full md:h-[350px] object-cover"
                  />
                </motion.div>

                {/* Text Section */}
                <motion.div
                  className="text-start p-2 md:text-left"
                  variants={fadeIn}
                >
                  <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h1>
                  <p className="text-gray-600 md:mb-10 mb-4 text-sm md:text-base">
                    {item.description}
                  </p>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      className="inline-block bg-yellow-300 rounded-full text-red-600 font-semibold px-6 py-2 justify-end transition hover:bg-yellow-400"
                      variants={scaleIn}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.buttonText}
                    </motion.button>
                  </a>
                  
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </main>
      )}
    </>
  );
}
