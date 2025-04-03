"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Partenaires() {
  const institutionnels = [
    { src: "/partenaires/wilaya.PNG", alt: "Logo 1" },
    { src: "/partenaires/ministere.PNG", alt: "Logo 2" },
    { src: "/partenaires/Ministère de l'éducation .png", alt: "Logo 3" },
    { src: "/partenaires/maarif.PNG", alt: "Logo 4" },
    { src: "/partenaires/entraide.PNG", alt: "Logo 5" },
    { src: "/partenaires/indh.PNG", alt: "Logo 6" },
    { src: "/partenaires/Deuxième Lycée militaire royal de Ifrane.png", alt: "Logo 7" },
    { src: "/partenaires/casa.PNG", alt: "Logo 8" },
    { src: "/partenaires/anfa.PNG", alt: "Logo 9" },
    { src: "/partenaires/academie.PNG", alt: "Logo 10" },
    { src: "/partenaires/Capture d'écran 2023-10-06 124831.png", alt: "Logo 10" },
    { src: "/partenaires/Premier Lycée militaire royal de Kenitra.jpg", alt: "Logo 10" },
  ];
  const cfi = [
    { src: "/partenaires/newrest-097.jpg", alt: "Logo 1" },
    { src: "/partenaires/umayya.PNG", alt: "Logo 2" },
    { src: "/partenaires/radisson_hotel_casablanca_la_citadelle_logo.jpeg", alt: "Logo 3" },
    { src: "/partenaires/nori.PNG", alt: "Logo 4" },
    { src: "/partenaires/multi food.PNG", alt: "Logo 5" },
    { src: "/partenaires/aiguebelle.PNG", alt: "Logo 6" },
    { src: "/partenaires/hyatt.PNG", alt: "Logo 7" },
    { src: "/partenaires/croc.PNG", alt: "Logo 8" },
    { src: "/partenaires/cabes.PNG", alt: "Logo 9" },
    { src: "/partenaires/blend.PNG", alt: "Logo 10" },
    { src: "/partenaires/asia.PNG", alt: "Logo 10" },
    { src: "/partenaires/relais.png", alt: "Logo 10" },
  ];
  const prives = [
    { src: "/partenaires/LOGO WB.png", alt: "Logo 1" },
    { src: "/partenaires/alfa.jpg", alt: "Logo 1" },
    { src: "/partenaires/ynov.png", alt: "Logo 1" },
    { src: "/partenaires/Yassir_2023.png", alt: "Logo 1" },
    { src: "/partenaires/AH logos 2024 v3-21.png", alt: "Logo 1" },
    { src: "/partenaires/Untitled-1.png", alt: "Logo 2" },
    { src: "/partenaires/bcg.PNG", alt: "Logo 3" },
    { src: "/partenaires/jumia.png", alt: "Logo 4" },
    { src: "/partenaires/AIESEC-Logo.png", alt: "Logo 5" },
    { src: "/partenaires/afrique orient.png", alt: "Logo 6" },
    { src: "/partenaires/TGCC.PNG", alt: "Logo 7" },
    { src: "/partenaires/teach.png", alt: "Logo 8" },
    { src: "/partenaires/sothema.png", alt: "Logo 9" },
    { src: "/partenaires/somed.PNG", alt: "Logo 10" },
    { src: "/partenaires/soprima.PNG", alt: "Logo 1" },
    { src: "/partenaires/somathes.PNG", alt: "Logo 2" },
    { src: "/partenaires/Groupe S Relais.jpeg", alt: "Logo 3" },
    { src: "/partenaires/soccer center.PNG", alt: "Logo 4" },
    { src: "/partenaires/société générale.PNG", alt: "Logo 5" },
    { src: "/partenaires/newrest-097.jpg", alt: "Logo 6" },
    { src: "/partenaires/nestradis.png", alt: "Logo 7" },
    { src: "/partenaires/art nature.jpeg", alt: "Logo 8" },
    { src: "/partenaires/logo (1) copie.png", alt: "Logo 9" },
    { src: "/partenaires/plastima.png", alt: "Logo 10" },
    { src: "/partenaires/fun place.png", alt: "Logo 1" },
    { src: "/partenaires/fisa-1.jpg", alt: "Logo 2" },
    { src: "/partenaires/institut françcais.PNG", alt: "Logo 3" },
    { src: "/partenaires/lydec f.PNG", alt: "Logo 4" },
    { src: "/partenaires/Filmod.jpg", alt: "Logo 5" },
    { src: "/partenaires/ambassade fr.jpg", alt: "Logo 6" },
    { src: "/partenaires/lfp.jpeg", alt: "Logo 7" },
    { src: "/partenaires/les eaux d'oulmes.PNG", alt: "Logo 8" },
    { src: "/partenaires/king.jpeg", alt: "Logo 9" },
    { src: "/partenaires/kitea.PNG", alt: "Logo 10" },
    { src: "/partenaires/iberma.PNG", alt: "Logo 1" },
    { src: "/partenaires/kettani imm.PNG", alt: "Logo 2" },
    { src: "/partenaires/moulin ma.jpeg", alt: "Logo 3" },
    { src: "/partenaires/grand moulin Berdai.png", alt: "Logo 4" },
    { src: "/partenaires/aluminium maroc.png", alt: "Logo 5" },
    { src: "/partenaires/mutandis.PNG", alt: "Logo 6" },
    { src: "/partenaires/crédit agricol du maroc.PNG", alt: "Logo 7" },
    { src: "/partenaires/mundiapolis.PNG", alt: "Logo 8" },
    { src: "/partenaires/ghandi.PNG", alt: "Logo 9" },
    { src: "/partenaires/cosumar.PNG", alt: "Logo 10" },
    { src: "/partenaires/CAF.PNG", alt: "Logo 1" },
    { src: "/partenaires/centrale danone.PNG", alt: "Logo 2" },
    { src: "/partenaires/Canpackk.PNG", alt: "Logo 3" },
    { src: "/partenaires/cih.PNG", alt: "Logo 4" },
    { src: "/partenaires/casual pant.PNG", alt: "Logo 5" },
    { src: "/partenaires/charles péguy.png", alt: "Logo 6" },
    { src: "/partenaires/CGEM.PNG", alt: "Logo 7" },
    { src: "/partenaires/ciment.PNG", alt: "Logo 8" },
    { src: "/partenaires/ambassade fr.jpg", alt: "Logo 9" },
    { src: "/partenaires/Afriquialogo.png", alt: "Logo 10" },
    { src: "/partenaires/banque alimentaire.png", alt: "Logo 1" },
    { src: "/partenaires/art nature.jpeg", alt: "Logo 2" },
    { src: "/partenaires/Alliances.jpg", alt: "Logo 3" },
    { src: "/partenaires/achraf hakimi.PNG", alt: "Logo 4" },
    { src: "/partenaires/axa.PNG", alt: "Logo 5" },
    { src: "/partenaires/UC-new-vet-2col.jpg", alt: "Logo 6" },
    { src: "/partenaires/ratpdev.PNG", alt: "Logo 7" },
    { src: "/partenaires/ratibecom.png", alt: "Logo 8" },
    { src: "/partenaires/lc building.PNG", alt: "Logo 9" },
    { src: "/partenaires/lenovo.PNG", alt: "Logo 10" },
    { src: "/partenaires/joud.PNG", alt: "Logo 10" },
    { src: "/partenaires/hyatt.PNG", alt: "Logo 10" },
    { src: "/partenaires/damandis.png", alt: "Logo 10" },
    { src: "/partenaires/CGEM.PNG", alt: "Logo 10" },
    { src: "/partenaires/bottu.png", alt: "Logo 10" },
    { src: "/partenaires/bel.png", alt: "Logo 10" },
  ];

    const fadeIn = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    };
  
    const staggerContainer = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    };

  return (
    <main className="">
    <div className="bg-white py-10">
      <h1 className="p-4 text-2xl md:text-4xl font-bold text-center mb-16 relative">
        NOS PARTENAIRES
        <div className="w-24 md:w-48 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
      </h1>

      {/* INSTITUTIONNELS */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-red-700 text-yellow-300 text-3xl font-bold py-2 px-4 rounded-xl inline-block">
          PARTENAIRES INSTITUTIONNELS
        </div>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 py-16 mt-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {institutionnels.map((partner, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center"
              variants={fadeIn}
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={700}
                height={700}
                className="object-contain h-20"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CFI */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-red-700 text-yellow-300 text-3xl font-bold py-2 px-4 rounded-xl inline-block">
          PARTENAIRES CFI
        </div>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 py-16 gap-6 mt-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {cfi.map((partner, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center"
              variants={fadeIn}
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={600}
                height={600}
                className="object-contain h-20"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* PRIVÉS */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-red-700 text-yellow-300 text-3xl font-bold py-2 px-4 rounded-xl inline-block">
          PARTENAIRES PRIVÉS
        </div>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 py-16 gap-6 mt-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {prives.map((partner, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center"
              variants={fadeIn}
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={400}
                height={400}
                className="object-contain h-20"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </main>
  );
}
