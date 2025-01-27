"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Press() {
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
    <main className="">
      <div className="w-full bg-[url('/press/BG.png')] bg-center py-16">
        <motion.h1
          className="p-4 text-2xl md:text-4xl font-bold text-center mb-8 relative"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          Medias et Press
          <div className="w-24 md:w-48 h-1 bg-yellow-200 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
        </motion.h1>
        <div className="justify-center">
          <div className="text-red-600 text-center font-medium text-2xl md:text-4xl">
          {/* <Image
              src="/benevole/flech-partenaire.png"
              alt="flech-partenaire"
              width={100}
              height={50}
              className=""
            /> */}
            <span className="">Kit media</span>
            
          </div>
          <h1 className="text-center text-2xl md:text-5xl font-semibold">
            de l&apos;Association Bab Rayan
          </h1>
        </div>
        <div className=" grid md:grid-cols-2 justify-center gap-8 p-6 md:p-10 text-gray-800 mx-8">
          {/* Logos  Section */}
          <div className=" bg-red-600 border border-gray-600 rounded-3xl text-center md:text-center place-content-center mb-6 md:mb-0 p-8">
            <h2 className="text-5xl font-medium text-white mb-4 flex items-center justify-center">
              <span className="mr-2"></span> Logos
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
            <div className="space-y-3 grid md:grid-cols-2 gap-4 text-white text-2xl font-medium">
            <div className="flex items-center space-x-2">
            <Image
              src="/press/telecharger.png"
              alt="download"
              width={60}
              height={40}
              className=""
            />              <span>L&apos;association Bab Rayan</span>
            </div>
            <div className="flex items-center space-x-2">
            <Image
              src="/press/telecharger.png"
              alt="download"
              width={60}
              height={40}
              className=""
            />              <span>École Palmier</span>
            </div>
            <div className="flex items-center space-x-2">
            <Image
              src="/press/telecharger.png"
              alt="download"
              width={60}
              height={40}
              className=""
            />              <span>Ftour Bab Rayan</span>
            </div>
          </div>
               </div>
          </div>

          {/* Presentaions */}
                    <div className="items-center  bg-red-600 border border-gray-600 rounded-3xl place-content-center p-8">
            <h2 className="text-5xl font-medium text-white mb-8 text-center flex items-center justify-center ">
              <span className="mr-2 "></span> Presentations
            </h2>
            <div className="space-y-3 grid md:grid-cols-2 gap-4 text-white text-2xl font-medium">
            <div className="flex items-center space-x-2">
            <Image
              src="/press/telecharger.png"
              alt="download"
              width={60}
              height={40}
              className=""
            />              <span>L&apos;association Bab Rayan</span>
            </div>
            <div className="flex items-center space-x-2">
            <Image
              src="/press/telecharger.png"
              alt="download"
              width={60}
              height={40}
              className=""
            />              <span>École Palmier</span>
            </div>
            <div className="flex items-center space-x-2">
            <Image
              src="/press/telecharger.png"
              alt="download"
              width={60}
              height={40}
              className=""
            />              <span>Ftour Bab Rayan</span>
            </div>
            <div className="flex items-center space-x-2">
            <Image
              src="/press/telecharger.png"
              alt="download"
              width={60}
              height={40}
              className=""
            />              <span>Brochure parrainage Bab Rayan</span>
            </div>
          </div>
          </div>
        </div>
        {/* album--------- */}
        <div className="items-center  bg-red-600 border border-gray-600 rounded-3xl place-content-center mx-16 mb-6 p-8">
            <h2 className="text-5xl font-medium text-white mb-8 text-center flex items-center justify-center ">
            <Image
              src="/benevole/flech-partenaire.png"
              alt="flech-partenaire"
              width={100}
              height={50}
              className="init-block -left-48 md:left-[550px]"
            />
              <span className="mr-2 mt-8 ">Albums Photos</span> 
            </h2>
            <div className="flex flex-wrap m-4 gap-4 justify-center">
            <Image
              src="/press/Le-Foyer-bab-rayan.png"
              alt="action"
              width={450}
              height={450}
              className="init-block -left-48 md:left-[550px]"
            />
            <Image
              src="/press/activités-extrascolaires.png"
              alt="action"
              width={450}
              height={450}
              className="init-block -left-48 md:left-[550px]"
            />
            <Image
              src="/press/CFI.png"
              alt="action"
              width={450}
              height={450}
              className="init-block -left-48 md:left-[550px]"
            />
            <Image
              src="/press/ecole-palmier.png"
              alt="action"
              width={450}
              height={450}
              className="init-block -left-48 md:left-[550px]"
            />
            <Image
              src="/press/ftour-bab-rayan.png"
              alt="action"
              width={450}
              height={450}
              className="init-block -left-48 md:left-[550px]"
            />
            <Image
              src="/press/action-solidaire.png"
              alt="action"
              width={450}
              height={450}
              className="init-block -left-48 md:left-[550px]"
            />
            </div>
          </div>

        {/* press--------- */}
        <div className="items-center  bg-yellow-300 border border-gray-600 rounded-3xl place-content-center mx-16 p-8">
            <h2 className="text-5xl font-medium text-black mb-8 text-center flex items-center justify-center ">
            <Image
              src="/benevole/flech-partenaire.png"
              alt="flech-partenaire"
              width={100}
              height={50}
              className="init-block -left-48 md:left-[550px]"
            />
              <span className="mr-2 mt-8">Ils parlent de nous</span> 
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
                <Image
                                src="/press/1.png"
                                alt="call"
                                width={250}
                                height={250}
                                className="object-cover"
                              />
                <Image
                                src="/press/2.png"
                                alt="call"
                                width={250}
                                height={250}
                                className="object-cover"
                              />
                <Image
                                src="/press/3.png"
                                alt="call"
                                width={250}
                                height={250}
                                className="object-cover"
                              />
                <Image
                                src="/press/4.png"
                                alt="call"
                                width={250}
                                height={250}
                                className="object-cover"
                              />
                <Image
                                src="/press/5.png"
                                alt="call"
                                width={250}
                                height={250}
                                className="object-cover"
                              />
            </div>
          </div>
      </div>

      {/* Form section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-red-700 p-8"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-yellow-300 text-4xl font-bold mb-2">
            Besoin de plus <br /> d&apos;informations ?
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
                className="px-8 py-2 border border-cyan-50 bg-yellow-300 hover:bg-yellow-450 text-red-600 rounded-full text-xl font-bold transition-colors duration-200"
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
