"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

export default function Contact() {

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

      
    return (
        <main className="bg-[url('/devenirPartenaire/background-partenaire.png')] bg-cover bg-center">
            <motion.h1
                                      className="p-4 text-2xl md:text-4xl font-bold text-center my-8 relative"
                                      variants={fadeIn} // Apply fadeIn animation
                                      initial="initial"
                                      animate="animate"
                                    >
                                      NOUS CONTACTER
                                      <div className="w-24 md:w-48 h-1 bg-yellow-200 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
                                    </motion.h1>
                  <div   
                  className="w-full flex flex-wrap justify-center gap-8 p-6 md:p-10 text-gray-800"
                  >
                     
      {/* Address Section */}
      <div className=" bg-yellow-300 border border-gray-600 rounded-3xl text-center md:text-center place-content-center mb-6 md:mb-0 p-8">
        <h2 className="text-5xl font-bold text-red-600 mb-4 flex items-center justify-center md:justify-start">
          <span className="mr-2">📍</span> Adresse
        </h2>
        <p className="text-gray-800 text-xl font-medium">
          4 rue Bayt Lham, quartier Palmier, Casablanca
        </p>

        <h2 className="text-5xl font-bold text-red-600 mt-6 mb-4 flex items-center justify-center md:justify-start">
          <span className="mr-2">☎️</span> Téléphone
        </h2>
        <p className="text-gray-800 text-xl font-medium">
          Direction Générale<br />
            <span className="strong">  +212 610 023 555
            </span>
        </p>

        <h2 className="text-5xl font-bold text-red-600 mt-6 mb-4 flex items-center justify-center md:justify-start">
          <span className="mr-2">📧</span> Mail
        </h2>
        <p className="text-gray-800 text-xl font-medium">
          Affaires générales <br/> contact@babrayan.ma<br />
          Presse <br/> communication@babrayan.ma
        </p>
      </div>

      {/* Location Map Section */}
      <div className="items-center  bg-yellow-300 border border-gray-600 rounded-3xl place-content-center p-8">
      <h2 className="text-5xl font-bold text-red-600 mb-4 text-center flex items-center justify-center md:justify-start">
          <span className="mr-2">📍</span> Localisation
        </h2>
        <div className="w-full max-w-md bg-white border border-gray-600 rounded-lg shadow-md overflow-hidden">
          <Image
            src="/map.png" 
            alt="Association Bab Rayan Location"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
{/* Form section */}
<motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
       className="bg-red-700 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-yellow-300 text-4xl font-bold mb-2">
            Besoin de plus  <br/> d&apos;informations ?
          </h1>
          <h2 className="text-white text-4xl font-bold mb-8">
            Contactez-nous.
            <div className="w-24 md:w-48 h-1 bg-yellow-300 mt-2"></div>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="nom"
                placeholder="Nom *"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-full text-gray-700 text-lg"
              />
            </div>

            <div>
              <input
                type="tel"
                name="telephone"
                placeholder="Téléphone *"
                value={formData.telephone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-full text-gray-700 text-lg"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-full text-gray-700 text-lg"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-3xl text-gray-700 text-lg"
              />
            </div>

            <div>
              <button
                type="submit"
                className="px-8 py-2 border border-cyan-50 bg-yellow-300 hover:bg-yellow-400 text-red-700 rounded-full text-xl font-bold transition-colors duration-200"
              >
                envoyer
              </button>
            </div>
          </form>
        </div>
      </motion.div>
       </main>
    );
}