"use client";

import SkeletonLoader from "../../../components/SkeletonLoader";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

 const newdata = [
  {
    id: 1,
    image: '/blog/1.png',
    alt: 'Graduation',
    title: 'Remise des diplômes de la deuxième promotion du CFI',
    description: `L'Association Bab Rayan a eu l'honneur de célébrer ce 28 Octobre 2024,
    la réussite de la deuxième promotion de diplômés de son Centre de
    Formation et d'Insertion. Le CFI propose aux jeunes issus des EPS et
    en situation de précarité une formation qualifiante dans les métiers
    de l'hôtellerie et de la restauration. Aujourd'hui, plus de 120 jeunes
    franchissent une étape clé vers l'emploi, grâce au soutien de nos
    entreprises partenaires.`,
    buttonText: 'Découvrir plus',
  },
  {
    id: 2,
    image: '/blog/2.png',
    alt: 'Graduation',
    title: 'Convention entre Newrest et le CFI pour offrir une formation en alternance de qualité',
    description: `Le CFI à Bab Rayan & Newrest s'unissent pour offrir une formation
    diplômante en restauration, une première qui changera la vie d'une
    promotion engagée de jeunes en difficulté! D'ici août prochain, ils
    auront non seulement acquis des compétences, mais aussi trouvé un
    projet de vie qui leur ouvre les portes d'un avenir prometteur.`,
    buttonText: 'Découvrir plus',
  },
  {
    id: 3,
    image: '/blog/3.png',
    alt: 'Training',
    title: 'Une sortie au théâtre pour voir le petit prince',
    description: `Les enfants de Bab Rayan ont assisté au premier spectacle de la saison de l'École du Jeune
Spectateur : Le Petit Prince.
Grâce à la générosité de la Fondation Achraf Hakimi, nos jeunes ont été accueillis au Complexe Culturel Al Hassani, où ils ont plongé dans l'univers magique de cette œuvre intemporelle.`,
    buttonText: 'Découvrir plus',
  },
  {
    id: 4,
    image: '/blog/4.png',
    alt: 'Partnership',
    title: 'Cérémonie d`ouverture de PSG Academy',
    description: `La PSG Academy Maroc a ouvert ses portes le 11 novembre à Casablanca, en présence d'Achraf Hakimi, invité d'honneur.
Les jeunes de Bab Rayan ont eu le privilège de le rencontrer et de jouer un match contre lui.`,
    buttonText: 'Découvrir plus',
  },
  {
    id: 5,
    image: '/blog/5.jpg',
    alt: 'Success',
    title: 'Convention entre Newrest et le CFI pour offrir une formation en alternance de qualité',
    description: `Le CFI à Bab Rayan & Newrest s'unissent pour offrir une formation diplômante en restauration, une première qui changera la vie d'une promotion engagée de jeunes en difficulté !`,
    buttonText: 'Découvrir plus',
  },
  {
    id: 6,
    image: '/blog/6.jpg',
    alt: 'Innovation',
    title: 'Nos enfants partent à la découverte du monde',
    description: `Grâce à des voyages à l'étranger, nos enfants ont eu la chance unique d'élargir leurs horizons, de nourrir leurs rêves et de s'ouvrir à de nouvelles cultures. Ces expériences enrichissantes encouragent la tolérance, renforcent l'estime de soi, et favorisent une meilleure compréhension des autres, tout en contribuant à leur épanouissement personnel.`,
    buttonText: 'Découvrir plus',
  },
];


  return (
    <main className="w-full bg-[url('/BACKGROUNDSCHOOL.png')] bg-center py-16">
      <motion.h1
        className="p-4 text-2xl md:text-4xl font-bold text-center mb-8 relative"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        ACTUALITÉS
        <div className="w-24 md:w-48 h-1 bg-yellow-200 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
      </motion.h1>

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
      <motion.div className="flex-shrink-0 w-full md:w-[45%]" variants={fadeIn}>
        <Image
          src={item.image}
          alt={item.alt}
          width={600}
          height={400}
          className="rounded-xl w-full md:h-[350px] object-cover"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div className="text-center md:text-left" variants={fadeIn}>
        <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
          {item.title}
        </h1>
        <p className="text-gray-600 md:mb-10 mb-4 text-sm md:text-base">
          {item.description}
        </p>
        <motion.button
          className="inline-block bg-yellow-300 rounded-full text-red-600 font-semibold px-6 py-2 transition hover:bg-yellow-400"
          variants={scaleIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.buttonText}
        </motion.button>
      </motion.div>
    </motion.div>
  </motion.div>
))}

    </main>
  );
}
