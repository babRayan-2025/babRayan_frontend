"use client";

import { motion } from "framer-motion";

export default function Sorry() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between p-5 bg-[url('/sorry/bg.png')] bg-cover">
        <motion.div
          className="flex flex-col items-center pb-24 px-24 justify-center leading-relaxed"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="/sorry/tri.png"
            alt="erreur"
            className="w-1/2 w-[400px] h-[400px]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.h1
            className="text-8xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            OUPS...
          </motion.h1>
          <motion.p
            className="text-gray-900 font-bold mb-8 text-md md:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            IL SEMBLE Y AVOIR UN PROBLÈME !
          </motion.p>
          <motion.p
            className="text-gray-900 font-bold text-3xl text-center mb-14 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            NOUS SOMMES DÉSOLÉS, VOTRE DON N’A PAS PU ÊTRE TRAITÉ. MAIS NE VOUS
            INQUIÉTEZ PAS, PLUSIEURS SOLUTIONS S’OFFRENT À VOUS :
          </motion.p>

          <motion.div
            className="leading-loose mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.li
              className="mb-8 flex items-start"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <img
                src="/sorry/check.png"
                alt="Check"
                className="w-10 h-10 mr-0 mt-0"
              />
              <span className="mt-0.5 text-gray-800  text-3xl font-bold ">
                Vérifiez vos informations de paiement et réessayez.
              </span>
            </motion.li>
            <motion.li
              className="mb-8 flex items-start"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <img
                src="/sorry/check.png"
                alt="Check"
                className="w-10 h-10 mr-0 mt-0"
              />
              <span className="mt-0.5 text-gray-800  text-3xl font-bold ">
                Essayez un autre mode de paiement, comme le virement ou le
                chèque.
              </span>
            </motion.li>
            <motion.li
              className="mb-8 flex items-start"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <img
                src="/sorry/check.png"
                alt="Check"
                className="w-10 h-10 mr-0 mt-0"
              />
              <span className="mt-0.5 text-gray-800  text-3xl font-bold leading-relaxed">
                <span>
                  Contactez-nous à{" "}
                  <span className="text-blue-600">direction@babrayan.ma</span>
                </span>
                <br /> ou <span className="text-red-700">+212 610 023 555</span>{" "}
                pour toute assistance.
              </span>
            </motion.li>
          </motion.div>

          <motion.p
            className="text-gray-900 font-bold text-3xl text-center leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            CHAQUE DON COMPTE ET NOUS VOUS REMERCIONS POUR VOTRE GÉNÉROSITÉ.
            N’HÉSITEZ PAS À RÉESSAYER, VOTRE SOUTIEN EST PRÉCIEUX !
          </motion.p>
        </motion.div>
        <motion.div
          className="flex flex-row gap-10 items-center mb-16 justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.a
            href="/donation"
            className="bg-red-700 text-white text-lg font-semibold px-5 py-3 rounded-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Réessayer le paiement
          </motion.a>
          <motion.a
            href="/contact_us"
            className="bg-red-700 text-white text-lg font-semibold px-14 py-3 rounded-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Nous contacter
          </motion.a>
        </motion.div>
      </div>
    </main>
  );
}