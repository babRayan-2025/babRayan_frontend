"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Parrainage() {
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <main>
      <div className="">
        {/* Header */}
        <motion.h1
          className="p-4 text-2xl md:text-4xl font-bold text-center my-10 relative"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          PARRAINER UN ENFANT
          <div className="w-24 md:w-48 h-1 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
        </motion.h1>

        {/* Main section */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Left side - Image */}
          <motion.div
            className=" h-[320px] ml-[-40px] overflow-hidden md:rounded-r-xl"
            variants={fadeIn}
          >
            <Image
              src="/Parrainer/1.jpg"
              alt="Children smiling"
              width={980}
              height={300}
              className="object-cover"
            />
          </motion.div>

          {/* Right side - Text content */}
          <motion.div className="space-y-4 md:mx-4 pr-20" variants={fadeIn}>
            <h2 className="text-5xl font-semibold">
              Pourquoi parrainer <br /> un enfant ?
            </h2>
            <p className="text-gray-600 text-xl ">
              Trop d&apos;enfants souffrent encore... <br /> Le parrainage est
              un moyen efficace pour lutter contre l&apos;abandon.
            </p>
            <p className="text-gray-600 text-xl">
              En parrainant un enfant, vous lui donnez la chance d&apos;accéder
              à ses droits fondamentaux : Éducation, Santé, Nutrition,
              Scolarisation...
            </p>
            <p className="text-gray-600 text-xl">
              L&apos;enfant peut ainsi grandir dans de bonnes conditions et
              acquérir des compétences pour son autonomie future.
            </p>
          </motion.div>
        </motion.div>

        {/* Contribution section */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="w-full p-6 mb-12 ml-12" variants={fadeIn}>
            <h3 className="text-xl font-semibold mb-4">
              Votre contribution mensuelle permettra de donner à un enfant :
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>- Un foyer aimant</li>
              <li>- Un accès à l&apos;éducation</li>
              <li>- Une alimentation saine et équilibrée</li>
              <li>- Une équipe médicale dédiée</li>
              <li>- Des vêtements d&apos;été, d&apos;hiver, des tenues sportives</li>
              <li>
                - Des activités sportives et artistiques tout au long de
                l&apos;année
              </li>
              <li>
                - Un accompagnement personnalisé pour se préparer à sa vie
                d&apos;adulte
              </li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">
              <br /> En tant que parrain, vous recevrez :
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                - Un rapport semestriel sur la scolarité de l&apos;enfant, ses
                progrès
              </li>
              <li>- L&apos;état d&apos;avancement des activités de l&apos;association</li>
              <li>- Des lettres et des dessins de l&apos;enfant</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2">De plus :</h3>
            <p className="text-gray-600">
              - Vous participerez à des événements au sein du Foyer pour
              rencontrer les enfants et partager de bons moments ensemble
            </p>
            <p className="font-semibold">
              <br /> Vous pouvez parrainer selon le montant que vous souhaitez :
            </p>
            <br />
            <p className="text-gray-600 font-semibold">
              Veuillez remplir le formulaire ci-dessous afin que nous puissions
              vous contacter rapidement pour soumettre votre demande de
              parrainage.
            </p>
            <p className="text-gray-600 font-semibold">(voir schéma demande don)</p>
          </motion.div>

          {/* Image grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-2 gap-4 h-[600px] p-4 mr-8"
            variants={staggerContainer}
          >
            {["2.jpg", "3.jpg", "4.jpg", "5.jpg"].map((img, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Image
                  src={`/Parrainer/${img}`}
                  alt="Image description"
                  width={500}
                  height={300}
                  className="rounded-xl h-[300px] w-[500px] shadow-md"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Form section */}
        <motion.div
          className="bg-red-700 p-10"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="max-w-6xl mx-auto">
            <h1 className="text-white text-4xl font-bold mb-2">
              Je parraine un enfant
            </h1>
            <h2 className="text-white text-4xl font-bold mb-8">
              maintenant.
              <div className="w-24 md:w-48 h-1 bg-yellow-300 transform mt-2"></div>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: "nom", type: "text", placeholder: "Nom *" },
                {
                  name: "telephone",
                  type: "tel",
                  placeholder: "Téléphone *",
                },
                { name: "email", type: "email", placeholder: "Email *" },
              ].map((input, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <input
                    {...input}
                    value={formData[input.name]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-full text-gray-700 text-lg"
                  />
                </motion.div>
              ))}
              <motion.div variants={fadeIn}>
                <textarea
                  name="message"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-3xl text-gray-700 text-lg"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <button
                  type="submit"
                  className="px-8 py-2 bg-yellow-300 hover:bg-yellow-100 text-red-700 border border-white rounded-full text-2xl font-bold transition-colors duration-2000"
                >
                  envoyer
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
