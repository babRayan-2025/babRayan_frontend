"use client";

import { motion } from "framer-motion";

export default function sorry() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between p-5 bg-[url('/donation/background.png')] bg-cover">
        <div className="flex flex-col items-center p-24 justify-center leading-relaxed">
          {/* <img src="/donation/erreur.png" alt="erreur" className="w-1/2" /> */}
          <h1 className="text-8xl font-bold text-gray-900 mb-8">OUPS...</h1>
          <p className="text-gray-900 font-bold mb-8 text-3xl">
            IL SEMBLE Y AVOIR UN PROBLÈME !
          </p>
          <p className="text-gray-900 font-bold text-3xl text-center mb-14 leading-relaxed">
            NOUS SOMMES DÉSOLÉS, VOTRE DON N’A PAS PU ÊTRE TRAITÉ. MAIS NE VOUS
            INQUIÉTEZ PAS, PLUSIEURS SOLUTIONS S’OFFRENT À VOUS :
          </p>

          <div className="leading-loose mb-12">
            <li className="mb-8 flex items-start">
              <img
                src="/donation/check .svg"
                alt="Check"
                className="w-10 h-10 mr-0 mt-0"
              />
              <span className="mt-0.5 text-gray-800  text-3xl font-bold ">
                Vérifiez vos informations de paiement et réessayez.
              </span>
            </li>
            <li className="mb-8 flex items-start">
              <img
                src="/donation/check .svg"
                alt="Check"
                className="w-10 h-10 mr-0 mt-0"
              />
              <span className="mt-0.5 text-gray-800  text-3xl font-bold ">
                Essayez un autre mode de paiement, comme le virement ou le
                chèque.
              </span>
            </li>
            <li className="mb-8 flex items-start">
              <img
                src="/donation/check .svg"
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
            </li>
          </div>

          <p className="text-gray-900 font-bold text-3xl text-center leading-relaxed">
            CHAQUE DON COMPTE ET NOUS VOUS REMERCIONS POUR VOTRE GÉNÉROSITÉ.
            N’HÉSITEZ PAS À RÉESSAYER, VOTRE SOUTIEN EST PRÉCIEUX !
          </p>
        </div>
        <div className="flex flex-row gap-10 items-center mb-16 justify-center">
          <a
            href="/donation"
            className="bg-red-700 text-white text-lg font-semibold px-5 py-3 rounded-xl"
          >
            Réessayer le paiement
          </a>
          <a
            href="/contact_us"
            className="bg-red-700 text-white text-lg font-semibold px-14 py-3 rounded-xl"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </main>
  );
}
