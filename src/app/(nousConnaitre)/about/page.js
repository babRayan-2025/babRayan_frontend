"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import cookingImage from "../../../assets/PHOTO/12.jpg";
// import presidentImage from "../../../assets/PHOTO/members/Fatima Zohra Ratibe.jpeg";
import groupPhoto from "../../../assets/PHOTO/6.jpg";
import lampe from "../../../assets/PNG/lampe.png";
import sign from "../../../assets/PNG/flaiche.png";
import soleil from "../../../assets/PNG/SOLEIL.png";
import cloud from "../../../assets/PNG/cloud.png";
import pen from "../../../assets/PNG/pen.png";
import book from "../../../assets/PNG/book.png";
import star from "../../../assets/PNG/yellow_star.png";
import {
  FaHandsHelping,
  FaFistRaised,
  FaBalanceScale,
  FaHeart,
  FaLightbulb,
} from "react-icons/fa";
//i3adat nadar

export default function About() {
  const [showMore, setShowMore] = useState(false);

  const values = [
    { icon: "./about/solidariter.png", title: "SOLIDARITÉ" },
    { icon: "../about/engagemennnt.png", title: "ENGAGEMENT" },
    { icon: "../about/egalite.png", title: "ÉGALITÉ DES CHANCES" },
    {
      icon: "./about/responsabilité.png",
      title: "RESPONSABILITÉ SOCIALE ET DURABLE",
    },
    { icon: "./about/inovation.png", title: "INNOVATION ET ADAPTABILITÉ" },
  ];
  return (
    <main>
      {/* first section: nous connaitre */}
      <motion.div
        className="relative w-full h-[750px] bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={cookingImage}
            alt="Cooking Activity"
            layout="fill"
            objectFit="cover"
            className="opacity-80 "
          />
        </div>
        <motion.div
          className="relative z-5 flex items-center justify-end h-full p-8"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="p-6 max-w-xl text-left absolute bottom-6 right-8">
            <h2 className="text-4xl font-bold mb-4">NOUS CONNAÎTRE</h2>
            <p className="text-md italic leading-relaxed">
              L’association Bab Rayan, reconnue d’utilité publique, accompagne
              depuis 2014 les enfants vulnérables vers un avenir prometteur. Par
              la protection, l’éducation, la formation et l’insertion
              professionnelle, elle les aide à devenir des citoyens autonomes et
              responsables.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* mot de presidente */}
      <div className="w-full bg-[url('/white_back.png')] bg-cover bg-center py-16 px-6">
        <h1 className="p-4 text-2xl md:text-4xl font-bold text-center mb-8 relative">
          MOT DE LA PRÉSIDENTE
          <div className="w-24 md:w-48 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
        </h1>
        <motion.div
          className="max-w-7xl mx-auto flex flex-col items-center pt-8 md:flex-row md:items-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex-shrink-0 mb-6 md:mb-0 md:mr-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-80 h-60 rounded-xl border-3 border-red-500 overflow-hidden">
              <Image
                src="/members/presedente.jpeg"
                alt="Présidente"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-center mt-4 text-xl font-bold text-red-600">
              FATIMA ZAHRA HAMROUDI RATIBE
            </h3>
            <p className="text-center text-sm text-red-600">
              Fondatrice présidente de l’association BAB RAYAN
            </p>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-800 text-lg font-semibold leading-relaxed mb-4">
              Au cours de cette décennie, notre dévouement inébranlable envers
              la protection, l&apos;éducation, la formation, et l&apos;insertion
              professionnelle des enfants en difficulté a été la pierre
              angulaire de notre action à Bab Rayan. <br /> Guidés par des
              valeurs nobles, notre boussole morale reste ferme, et nous sommes
              fiers de reconnaître Sa Majesté le Roi Mohammed VI comme une
              source inépuisable d&apos;inspiration et de motivation.
            </p>
            <p className="text-gray-800 text-lg font-semibold leading-relaxed mb-6">
              Les initiatives de Bab Rayan ont évolué, démontrant notre
              engagement croissant envers la construction d&apos;un avenir
              prometteur pour les enfants que nous servons.
            </p>
            {showMore && (
              <motion.p
                className="text-gray-800 text-lg font-semibold leading-relaxed mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Nous avons tracé une trajectoire ascendante, passant d&apos;un
                simple projet de protection à un modèle de vie holistique,
                méticuleusement conçu pour façonner des citoyens marocains
                productifs et fiers. En rendant hommage à nos partenaires
                publics et privés, nous contemplons avec satisfaction les
                réussites passées tout en tournant résolument notre regard vers
                l&apos;avenir. Nous sommes convaincus que des miracles attendent
                ces enfants qui méritent un avenir meilleur. En unissant nos
                forces, nous continuerons d&apos;inscrire des chapitres positifs
                dans l&apos;histoire de Bab Rayan. Ensemble, nous formons une
                communauté déterminée à faire une différence durable. Merci à
                chacun de vous pour votre engagement et votre soutien continu.
              </motion.p>
            )}
            <motion.button
              className="bg-yellow-300 hover:bg-yellow-500 text-red-600 font-bold py-2 px-4 rounded-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Voir moins" : "Voir plus"}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      {/* Vision Section */}
      <motion.div
        className="relative bg-pink-100 py-12 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Decorative Image */}
        <Image
          src={star}
          className="w-20 md:w-60 absolute buttom-[-2%] md:buttom-[-2%] left-[80%] md:left-[80%] md:hidden lg:block"
          alt="Les Ftours Bab Rayan"
        />
        <Image
          src={book}
          className="w-40 md:w-60 absolute buttom-[-2%] md:buttom-[-2%] right-[70%] md:right-[86%]"
          alt="Les Ftours Bab Rayan"
        />
        <Image
          src={pen}
          className="w-20 md:w-40 absolute top-[20%] md:top-[40%] left-[80%] md:left-[86%] md:hidden lg:block"
          alt="Les Ftours Bab Rayan"
        />
        <Image
          src={cloud}
          className="w-30 md:w-44 absolute top-[20%] md:top-[35%] right-[65%] md:right-[78%]"
          alt="Les Ftours Bab Rayan"
        />
        <Image
          src={soleil}
          className="w-36 md:w-48 absolute top-[100%] md:top-[40%] left-[60%] md:left-[60%]"
          alt="Les Ftours Bab Rayan"
        />

        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Vision Section */}
            <div className="mb-12">
              <p className="p-4 text-2xl md:text-4xl font-bold text-center mb-8 relative">
                NOTRE VISION
                <div className="w-24 md:w-48 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
              </p>
              <p className="text-xl md:text-3xl font-bold text-gray-800 italic">
                « Parce que chaque enfant mérite un bon départ dans la vie »
              </p>
            </div>

            {/* Mission Section */}
            <div className="mt-12">
              <h1 className="p-4 text-2xl md:text-4xl font-bold text-center mb-8 relative">
                MISSION GLOBALE
                <div className="w-24 md:w-48 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
              </h1>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                {/* Left Side: Image */}
                <motion.div
                  className="flex justify-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={groupPhoto}
                      alt="Group of children"
                      width={500}
                      height={300}
                      objectFit="cover"
                    />
                  </div>
                </motion.div>

                {/* Right Side: Text */}
                <motion.div
                  className="text-left pt-16 md:my-auto"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-800 text-xl md:text-2xl italic font-bold leading-relaxed">
                    Notre mission est de protéger, d’éduquer et de former les
                    enfants et jeunes en difficulté pour leur offrir un avenir
                    digne, autonome et enrichissant. Grâce à nos programmes
                    holistiques, nous les accompagnons sur la voie de la
                    réussite personnelle et professionnelle.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Nos Valeurs Section */}
      <motion.div
        className="bg-red-600 py-12 px-6 text-white relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="p-4 text-2xl md:text-4xl font-bold text-center mb-8 relative">
            NOS VALEURS
            <div className="w-24 md:w-48 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h1>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center space-y-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-yellow-300 text-6xl">
                  <img src={value.icon} className="w-36 h-36" alt="" />{" "}
                </p>
                <p className="text-xl font-semibold text-center">
                  {value.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Decorative Background Arrow */}
        <Image
          src={sign}
          className="w-30 md:w-80 absolute top-[4%] md:top-[1%] right-[65%] md:right-[84%]"
          alt="Les Ftours Bab Rayan"
        />

        <Image
          src={lampe}
          className="w-20 md:w-40 absolute top-[2%] md:top-[2%] left-[80%] md:hidden lg:block  md:left-[80%]"
          alt="Les Ftours Bab Rayan"
        />
      </motion.div>
    </main>
  );
}
