"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
export default function Remerciement() {
  return (
    <main>
      <div className="bg-[url('/donation/background.png')] bg-cover bg-center h-screen max-h-full md:max-h-3/4 ">
        <motion.header
          initial="hidden"
          whileInView="visible"
          className="p-4 text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 relative"
        >
          FAIRE UN DON
          <div className="w-20 md:w-48 h-2 bg-[#f3ca31] absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
        </motion.header>
        <header className="text-center px-4">
          <div className="flex items-center justify-center flex-wrap">
            <img
              src="/donation/merci.png"
              alt="Gauche"
              className="w-8 h-10 md:w-10 md:h-16 mt-6 self-start"
            />
            <h1 className="text-2xl md:text-4xl font-bold mt-1 md:mt-2">
              <span className="text-[#161618]">Merci pour votre soutien !</span>
            </h1>
          </div>
        </header>

        <section className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-4 md:p-8 border border-[#0d0d0d] mt-2 ">
          <motion.div variants={fadeIn} initial="initial" animate="animate">
            <div className="flex items-center justify-center flex-wrap px-2">
              <h1 className="text-xl md:text-3xl font-bold text-center text-[#d32a2a] mr-1">
                Votre générosité transforme des vies.
              </h1>
              <img
                src="/donation/etoile.png"
                alt="Gauche"
                className="w-8 h-8 md:w-10 md:h-10 mt-1 md:mt-2 self-start"
              />
            </div>
            <h1 className="text-xl md:text-3xl font-bold text-center text-[#d32a2a] mb-4">
              Grâce à vous :
            </h1>
            <ul
              className="list-none font-semibold text-[#1d1d1d] text-lg md:text-xl ml-5 mb-8"
              style={{ lineHeight: "1.2" }}
            >
              <li className="flex items-center mb-3">
                <img
                  src="/donation/checkred.png"
                  alt="Check"
                  className="w-4 h-4 mr-2 mt-0"
                />
                Des enfants vulnérables trouvent un foyer sécurisé.
              </li>
              <li className="flex items-center mb-3">
                <img
                  src="/donation/checkred.png"
                  alt="Check"
                  className="w-4 h-4 mr-2 mt-0"
                />
                Une éducation adaptée leur ouvre de nouvelles perspectives.
              </li>
              <li className="flex items-center mb-3">
                <img
                  src="/donation/checkred.png"
                  alt="Check"
                  className="w-4 h-4 mr-2 mt-0"
                />
                Des jeunes accèdent à des formations et un avenir professionnel.
              </li>
            </ul>
            <p className="text-center text-[#cc2229] italic text-xl md:text-3xl font-bold mt-2 md:mt-4 leading-normal p-4">
              “ Parce que chaque enfant <br /> mérite un
              bon départ dans la vie ”
            </p>
          </motion.div>
        </section>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-red-700 p-5 "
      >
        <section className="text-center text-white max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold underline decoration-[#f3ca31] underline-offset-4 md:underline-offset-8 decoration-2 md:decoration-4">
            CONTACT
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-8">
            <div className="justify-center">
              <ul className="list-none mb-6 flex flex-col mt-2 md:mt-4 text-base md:text-lg">
                <li className="mb-3 md:mb-4 flex items-center">
                  <img
                    src="/donation/call.png"
                    alt="Contact 1"
                    className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-4"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                  />
                  <span className="text-[#f3ca31] font-medium">
                    La Direction Générale :
                  </span>
                  <span className="ml-1 md:ml-2">+212 610 02 35 55</span>
                </li>
                <li className="mb-3 md:mb-4 flex items-center">
                  <img
                    src="/donation/email.png"
                    alt="Contact 2"
                    className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-4"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                  />
                  direction@babrayan.ma
                </li>
                <li className="mb-3 md:mb-4 flex items-center">
                  <img
                    src="/donation/local.png"
                    alt="Contact 3"
                    className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-1.7"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                  />
                  <span>4 rue Bayt Lham, Quartier Palmier, Casablanca</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </motion.div>
    </main>
  );
}
