"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";

export default function Benevole() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (item) => {
    setSelectedButton(item);
  };
  return (
    <main className="">
      <motion.div
        className="bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="p-4 text-2xl md:text-4xl font-bold text-center mt-8 relative"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          DEVENIR BÉNÉVOLE
          <motion.div
            className="w-24 md:w-56 h-1 bg-yellow-200 absolute left-1/2 transform -translate-x-1/2 mt-2"
            layoutId="underline"
          ></motion.div>
        </motion.h1>

        {/* Image */}
        <motion.div
          className="place-content-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Image
            src="/benevole/benevole.png"
            alt="Child smiling"
            width={1900}
            height={1900}
            className="object-cover"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          className="md:mx-16 mx-6 text-center text-gray-700 text-base md:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Quelle que soit votre formation, votre âge, votre expérience ou vos
          envies,
          <br /> remplissez le formulaire et contactez-nous. Nous trouverons
          ensemble la mission qui vous <br />
          convient le mieux : soutien scolaire, activités culturelles,
          sportives, artistiques, de loisirs…
        </motion.p>

        {/* Contact Section */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-2xl font-bold text-center place-content-center text-gray-800 mb-4">
            CONTACT
            <motion.div
              className="w-24 md:w-28 h-1  bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"
              layoutId="contact-underline"
            ></motion.div>
          </h2>
          <div className="flex  justify-center m-10 gap-6">
            {/* <Image
              src="/benevole/flech-partenaire.png"
              alt="flech-partenaire"
              width={100}
              height={50}
              className="init-block -left-48 md:left-[550px]"
            /> */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-2 font-semibold text-lg md:text-2xl text-red-600 border-2 border-red-600 p-4 rounded-3xl shadow-md cursor-pointer"
              title="Call us at +212 6 181 81 806"
              aria-label="Call us"
            >
            <div className='flex flex-row items-center gap-2'>
            <Image
                src="/benevole/contact.png"
                alt="call"
                width={50}
                height={50}
                className="object-cover ml-3"
              />
              <span className="content-center">+212 6 181 81 806</span>

            </div>
             <div className='flex flex-row items-center gap-2'>
             <Image
                src="/benevole/mail.png"
                alt="mail"
                width={70}
                height={70}
                className="object-cover"
              />
              <span className='content-center'>contact@babrayan.ma</span>
             </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Form Section */}
      <motion.div
      className="w-full bg-[url('/benevole/bg-benevole.png')] bg-cover bg-center py-16 md:px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
    >
      <h1 className="text-white text-6xl md:text-4xl font-bold mx-auto pl-8">
        Formulaire
        <div className="w-44 md:w-44 h-1 bg-yellow-300 mt-2"></div>
      </h1>
      <div className="mx-auto p-8">
        {/* Form Fields */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 text-gray-800 gap-6 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <input
            type="text"
            placeholder="Nom *"
            className="p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <input
            type="email"
            placeholder="Email *"
            className="p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <input
            type="text"
            placeholder="Prénom *"
            className="p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <input
            type="tel"
            placeholder="Téléphone *"
            className="p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <input
            type="text"
            placeholder="Domaine de compétence *"
            className="p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 col-span-full"
          />
        </motion.div>

        {/* Categories */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 text-white gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
        >
          {/* Foyer */}
          <div>
            <h2 className="text-xl font-bold text-center bg-black border border-white text-white py-4 mb-4 rounded-full">
              FOYER
            </h2>
            <div className="space-y-2 grid text-base grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-2">
              {[
                "Soutien Scolaire",
                "Accompagnement des enfants",
                "Organisations d’évènements",
                "Coaching professionnel",
                "Animation des ateliers",
                "Autres (texte libre)",
              ].map((item, index) => (
                <motion.button
                  key={index}
                  className={`w-full text-left p-4 rounded-full border ${
                    selectedButton === item
                      ? "bg-yellow-300 border-black text-2xl font-medium text-center text-red-600"
                      : "border-yellow-300 text-2xl font-medium text-center bg-red-600 text-white-300"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleButtonClick(item)}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>

          {/* École */}
          <div>
            <h2 className="text-xl font-bold text-center bg-black border border-white text-white py-4 mb-4 rounded-full">
              ÉCOLE
            </h2>
            <div className="space-y-2 grid sm:text-base grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-2">
              {[
                "Soutien Scolaire",
                "Soutien administratif",
                "Animation Ateliers",
                "Suivi psychologique",
                "Coaching professionnel",
                "Formation pédagogique",
                "Autres (texte libre)",
              ].map((item, index) => (
                <motion.button
                  key={index}
                  className={`w-full text-center text-2xl font-medium p-4 rounded-full border ${
                    selectedButton === item
                      ? "bg-yellow-300 border-black text-red-600"
                      : "bg-red-600 border-yellow-300 text-white-300"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleButtonClick(item)}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Centre de formation et d'insertion */}
          <div>
            <h2 className="text-xl font-bold text-center bg-black border border-white text-white py-4 mb-4 rounded-full">
              CENTRE DE FORMATION ET D’INSERTION
            </h2>
            <div className="space-y-2 grid text-base grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-2">
              {[
                "Coaching pédagogique",
                "Cours de communication et soft-skills",
                "Formation en métiers d’hôtellerie",
                "Autres (texte libre)",
              ].map((item, index) => (
                <motion.button
                  key={index}
                  className={`w-full text-2xl font-medium p-4 rounded-full text-center border ${
                    selectedButton === item
                      ? "bg-yellow-300 border-black text-red-600"
                      : "bg-red-600 border-yellow-300 text-white-300"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleButtonClick(item)}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.button
          className="bg-black text-2xl font-semibold text-white border border-white-300 py-4 px-8 mt-8 rounded-full shadow-md hover:bg-gray-700 transition"
          whileHover={{ scale: 1.1, backgroundColor: "#333333" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 2 }}
        >
          envoyer
        </motion.button>
      </div>
    </motion.div>
    </main>
  );
}
