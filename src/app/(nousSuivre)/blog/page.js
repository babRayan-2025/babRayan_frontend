"use client";

import SkeletonLoader from "../../../components/SkeletonLoader";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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

export default function Blog() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* {isLoading ? (
                <SkeletonLoader />
            ) : ( */}
                <main className="w-full bg-[url('/BACKGROUNDSCHOOL.png')] bg-center py-16">
                <motion.h1
                  className="p-4 text-2xl md:text-4xl font-bold text-center mb-8 relative"
                  variants={fadeIn} // Apply fadeIn animation
                  initial="initial"
                  animate="animate"
                >
                  ACTUALITÉS
                  <div className="w-24 md:w-48 h-1 bg-yellow-200 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
                </motion.h1>
              
                {/* First News Item */}
                <motion.div
                  className="flex flex-col items-center gap-9 px-4"
                  variants={staggerContainer} // Apply stagger animation to child elements
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
                        src='/blog/1.png'
                        alt="Graduation"
                        width={500}
                        height={400}
                        className="rounded-xl w-full h-auto object-cover"
                      />
                    </motion.div>
              
                    {/* Text Section */}
                    <motion.div className="text-center md:text-left" variants={fadeIn}>
                      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                        Remise des diplômes de la deuxième promotion du CFI
                      </h1>
                      <p className="text-gray-600 mb-4 md:mb-10 text-sm md:text-base">
                        L`Association Bab Rayan a eu l`honneur de célébrer ce 28 Octobre 2024,
                        la réussite de la deuxième promotion de diplômés de son Centre de
                        Formation et d`Insertion. Le CFI propose aux jeunes issus des EPS et
                        en situation de précarité une formation qualifiante dans les métiers
                        de l`hôtellerie et de la restauration. Aujourd`hui, plus de 120 jeunes
                        franchissent une étape clé vers l`emploi, grâce au soutien de nos
                        entreprises partenaires.
                      </p>
                      <motion.button
                        className="inline-block bg-yellow-300 rounded-full text-red-600 font-semibold px-4 py-2 transition hover:bg-yellow-400 "
                        variants={scaleIn} // Apply scaleIn animation
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Découvrir plus
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              
                {/* Second News Item */}
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
                        src='/blog/2.png'
                        alt="Graduation"
                        width={500}
                        height={400}
                        className="rounded-xl w-full h-auto object-cover"
                      />
                    </motion.div>
              
                    {/* Text Section */}
                    <motion.div className="text-center md:text-left" variants={fadeIn}>
                      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                        Convention entre Newrest et le CFI pour offrir une formation en alternance de qualité
                      </h1>
                      <p className="text-gray-600 md:mb-10 mb-4 text-sm md:text-base">
                        Le CFI à Bab Rayan & Newrest s`unissent pour offrir une formation
                        diplômante en restauration, une première qui changera la vie d`une
                        promotion engagée de jeunes en difficulté! D`ici août prochain, ils
                        auront non seulement acquis des compétences, mais aussi trouvé un
                        projet de vie qui leur ouvre les portes d`un avenir prometteur.
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
                {/* 3th News Item */}
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
                        src='/blog/3.png'
                        alt="Graduation"
                        width={500}
                        height={400}
                        className="rounded-xl w-full h-auto object-cover"
                      />
                    </motion.div>
              
                    {/* Text Section */}
                    <motion.div className="text-center md:text-left" variants={fadeIn}>
                      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                        Convention entre Newrest et le CFI pour offrir une formation en alternance de qualité
                      </h1>
                      <p className="text-gray-600 md:mb-10 mb-4 text-sm md:text-base">
                        Le CFI à Bab Rayan & Newrest s`unissent pour offrir une formation
                        diplômante en restauration, une première qui changera la vie d`une
                        promotion engagée de jeunes en difficulté! D`ici août prochain, ils
                        auront non seulement acquis des compétences, mais aussi trouvé un
                        projet de vie qui leur ouvre les portes d`un avenir prometteur.
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
                {/* 4th News Item */}
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
                        src='/blog/4.png'
                        alt="Graduation"
                        width={500}
                        height={400}
                        className="rounded-xl w-full h-auto object-cover"
                      />
                    </motion.div>
              
                    {/* Text Section */}
                    <motion.div className="text-center md:text-left" variants={fadeIn}>
                      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                        Convention entre Newrest et le CFI pour offrir une formation en alternance de qualité
                      </h1>
                      <p className="text-gray-600 md:mb-10 mb-4 text-sm md:text-base">
                        Le CFI à Bab Rayan & Newrest s`unissent pour offrir une formation
                        diplômante en restauration, une première qui changera la vie d`une
                        promotion engagée de jeunes en difficulté! D`ici août prochain, ils
                        auront non seulement acquis des compétences, mais aussi trouvé un
                        projet de vie qui leur ouvre les portes d`un avenir prometteur.
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
                {/* 5th News Item */}
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
                        src='/blog/5.jpg'
                        alt="Graduation"
                        width={500}
                        height={400}
                        className="rounded-xl w-full h-auto object-cover"
                      />
                    </motion.div>
              
                    {/* Text Section */}
                    <motion.div className="text-center md:text-left" variants={fadeIn}>
                      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                        Convention entre Newrest et le CFI pour offrir une formation en alternance de qualité
                      </h1>
                      <p className="text-gray-600 md:mb-10 mb-4 text-sm md:text-base">
                        Le CFI à Bab Rayan & Newrest s`unissent pour offrir une formation
                        diplômante en restauration, une première qui changera la vie d`une
                        promotion engagée de jeunes en difficulté! D`ici août prochain, ils
                        auront non seulement acquis des compétences, mais aussi trouvé un
                        projet de vie qui leur ouvre les portes d`un avenir prometteur.
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
                {/* last News Item */}
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
                        src='/blog/6.jpg'
                        alt="Graduation"
                        width={500}
                        height={400}
                        className="rounded-xl w-full object-cover"
                      />
                    </motion.div>
              
                    {/* Text Section */}
                    <motion.div className="text-center md:text-left" variants={fadeIn}>
                      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                        Convention entre Newrest et le CFI pour offrir une formation en alternance de qualité
                      </h1>
                      <p className="text-gray-600 md:mb-10 mb-4 text-sm md:text-base">
                        Le CFI à Bab Rayan & Newrest s`unissent pour offrir une formation
                        diplômante en restauration, une première qui changera la vie d`une
                        promotion engagée de jeunes en difficulté! D`ici août prochain, ils
                        auront non seulement acquis des compétences, mais aussi trouvé un
                        projet de vie qui leur ouvre les portes d`un avenir prometteur.
                      </p>
                      <motion.button
                        className="inline-block place-content-end bg-yellow-300 rounded-full text-red-600 font-semibold px-4 py-2 transition hover:bg-yellow-400"
                        variants={scaleIn}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Découvrir plus
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </main>
            {/* // )} */}
        </>
     ); 
}
