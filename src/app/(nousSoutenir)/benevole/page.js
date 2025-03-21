"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Benevole() {
  const [selectedFoyer, setSelectedFoyer] = useState([]);
  const [selectedFormations, setSelectedFormations] = useState([]);
  const [selectedEcole, setSelectedEcole] = useState([]);



  const toggleFoyer = (item) => {
    setSelectedFoyer((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const toggleEcole = (item) => {
    setSelectedEcole((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const toggleFormation = (item) => {
    setSelectedFormations((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = () => {
    console.log("Submit button clicked");
    console.log("Selected Foyer:", selectedFoyer);
    console.log("Selected Ecole:", selectedEcole);
    console.log("Selected Formations:", selectedFormations);
  
    const formData = {
      nom: document.querySelector('input[placeholder="Nom *"]').value.trim(),
      email: document.querySelector('input[placeholder="Email *"]').value.trim(),
      prenom: document.querySelector('input[placeholder="Prénom *"]').value.trim(),
      telephone: document.querySelector('input[placeholder="Téléphone *"]').value.trim(),
      domaine: document.querySelector('input[placeholder="Domaine de compétence *"]').value.trim(),
      foyer: selectedFoyer,
      ecole: selectedEcole,
      formations: selectedFormations,
    };
  
    console.log("Form Data Collected:", formData);
  
    // Validate form data
    if (!formData.nom) {
      toast.error("Veuillez remplir le champ Nom.");
      return;
    }
    if (!formData.email) {
      toast.error("Veuillez remplir le champ Email.");
      return;
    }
    if (!formData.prenom) {
      toast.error("Veuillez remplir le champ Prénom.");
      return;
    }
    if (!formData.telephone) {
      toast.error("Veuillez remplir le champ Téléphone.");
      return;
    }
    if (!formData.domaine) {
      toast.error("Veuillez remplir le champ Domaine de compétence.");
      return;
    }
    if (formData.foyer.length === 0) {
      toast.error("Veuillez sélectionner au moins une option dans Foyer.");
      return;
    }
    if (formData.ecole.length === 0) {
      toast.error("Veuillez sélectionner au moins une option dans École.");
      return;
    }
    if (formData.formations.length === 0) {
      toast.error("Veuillez sélectionner au moins une option dans Centre de Formation.");
      return;
    }
  
    // If all validations pass
    console.log("Form Data Collected:", formData);
    toast.success("Votre demande a bien été envoyée !");
  };

    return (
      <main className="">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
              src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/benevole%2Fbenevole.webp?alt=media&token=dbd4d2c7-f3a3-4404-b932-9cf21e8eb9f4"
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
            <div className="flex  justify-center my-10 gap-6">
              <div
                className="grid grid-cols-1 md:grid-cols-2 items-center gap-2 font-semibold text-md md:text-2xl text-red-600 border-2 border-red-600 p-4 rounded-3xl shadow-md cursor-pointer"
                title="Call us at +212 6 181 81 806"
                aria-label="Call us"
              >
                <div className='flex flex-row items-center gap-2'>
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/benevole%2Fcontact.webp?alt=media&token=36de36ea-009b-4e8f-a143-7e4be349afcd"
                    alt="call"
                    width={50}
                    height={50}
                    className="object-cover ml-3"
                  />
                  <span className="content-center">+212 6 181 81 806</span>

                </div>
                <div className='flex flex-row items-center gap-2'>
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/benevole%2Fmail.webp?alt=media&token=f246f27d-9d4f-43ef-906d-a977bf3a8ae2"
                    alt="mail"
                    width={70}
                    height={70}
                    className="object-cover "
                  /><span className="content-center">contact@babrayan.ma</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="w-full bg-[url('https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/benevole%2Fbg-benevole.webp?alt=media&token=7335c25a-8f38-4acd-99ff-e514014a07a7')] bg-cover bg-center py-16 md:px-16"
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
                      className={`w-full p-4 rounded-full border text-md lg:text-xl m-auto p-auto font-medium text-center ${selectedFoyer.includes(item)
                        ? "bg-yellow-300 border-black text-red-600"
                        : "border-yellow-300 bg-red-600 text-white-300"
                        }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleFoyer(item)}
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
                      className={`w-full text-center text-md lg:text-xl w-auto m-auto p-auto font-medium p-4 rounded-full border ${selectedEcole.includes(item)
                        ? "bg-yellow-300 border-black text-red-600"
                        : "bg-red-600 border-yellow-300 text-white-300"
                        }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleEcole(item)}
                    >
                      {item}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Centre de formation et d'insertion */}
              <div>
                <h2 className="text-md font-bold text-center bg-black border border-white text-white py-4 mb-4 rounded-full">
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
                      className={`w-full text-md lg:text-xl w-auto m-auto p-auto font-medium p-4 rounded-full text-center border ${selectedFormations.includes(item)
                        ? "bg-yellow-300 border-black text-red-600"
                        : "bg-red-600 border-yellow-300 text-white-300"
                        }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleFormation(item)}
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
              onClick={handleSubmit}
            >
              envoyer
            </motion.button>
          </div>
        </motion.div>
      </main>
    );
  }
