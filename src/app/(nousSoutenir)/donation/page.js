"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Donation() {
  const [selectedAmount, setSelectedAmount] = useState("1900 DH");
  const [donationType, setDonationType] = useState("Mensuel");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showThirdCard, setShowThirdCard] = useState(false); // Masquée par défaut
  const [customAmount, setCustomAmount] = useState(""); // État pour gérer le montant personnalisé
  const [isCustomAmountSelected, setIsCustomAmountSelected] = useState(false); // État pour désactiver les boutons de montant
  const [donationDetails, setDonationDetails] = useState(null); // État pour afficher les détails du don
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handleAmountChange = (amount) => {
    setSelectedAmount(amount);
    setIsCustomAmountSelected(false); // Réactiver les boutons de montant si un montant prédéfini est sélectionné
    setCustomAmount(""); // Réinitialiser l'input
  };

  const handleDonationTypeChange = (type) => {
    setDonationType(type);
  };

  const handleDonation = () => {
    // Afficher la troisième carte après le clic sur "Procéder au don"
    setShowThirdCard(true);
    setShowSuccessMessage(true);

    // Enregistrer les détails du don
    const amount = isCustomAmountSelected ? customAmount : selectedAmount;
    const details = {
      amount: amount,
      type: donationType,
    };
    setDonationDetails(details);

    // Afficher les détails du don dans la console
    console.log("Détails du don:", details);

    // Réinitialiser l'input et les boutons
    setCustomAmount("");
    setIsCustomAmountSelected(false);
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    setIsCustomAmountSelected(value !== ""); // Désactiver les boutons de montant si un montant personnalisé est saisi
  };

  const handlePaymentMethodClick = (method) => {
    setPaymentMethod(method);
    console.log("Méthode de paiement sélectionnée :", method);
  };

  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between p-5 bg-[url('/donation/background.png')] bg-cover">
        <motion.header
          initial="hidden"
          whileInView="visible"
          className="p-4 text-2xl md:text-4xl font-bold text-center mb-16 relative"
        >
          FAIRE UN DON
          <div className="w-24 md:w-48 h-2 bg-yellow-400 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
        </motion.header>

        <header className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold mt-2">
            <span className="text-gray-800">Votre soutien </span>
            <span className="text-yellow-400">
              changera la vie d'un enfant.
            </span>
          </h1>
          <img
            src="/donation/bas.png"
            alt="Gauche"
            className="w-24 h-12 md:w-48 md:h-24 mt-4 self-start"
          />
        </header>

        <section className="flex flex-col gap-10 p-8 rounded-lg mb-5 max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Carte des montants (30% de la largeur avant l'affichage de la carte jaune) */}
            <div
    className={`bg-red-700 p-8 rounded-lg shadow-lg border-2 border-black ${
      showThirdCard ? "w-full md:w-1/3" : "w-full md:w-[20rem]"
    }`}
  >
              <h2 className="text-3xl text-white font-semibold mb-4">
                Choisissez le montant
              </h2>

              <div className="mb-4">
                <div className="flex gap-4">
                  <button
                    className={`py-2 px-4 rounded-lg ${
                      donationType === "Mensuel"
                        ? "bg-yellow-400 text-red-700"
                        : "bg-white text-red-700 border border-yellow-400"
                    }`}
                    onClick={() => handleDonationTypeChange("Mensuel")}
                  >
                    Mensuel
                  </button>
                  <button
                    className={`py-2 px-4 rounded ${
                      donationType === "Ponctuel"
                        ? "bg-yellow-400 text-red-700"
                        : "bg-white text-red-700 border border-yellow-400"
                    }`}
                    onClick={() => handleDonationTypeChange("Ponctuel")}
                  >
                    Ponctuel
                  </button>
                </div>
              </div>

              <div className="flex gap-4 mb-4">
                {["500 DH", "800 DH", "1900 DH"].map((amount) => (
                  <button
                    key={amount}
                    className={`py-2 px-4 rounded border-2 border-yellow-400 ${
                      selectedAmount === amount
                        ? "bg-yellow-400 text-red-700"
                        : "bg-red-700 text-white"
                    }`}
                    onClick={() => handleAmountChange(amount)}
                    disabled={isCustomAmountSelected} // Désactiver les boutons si un montant personnalisé est saisi
                  >
                    {amount}
                  </button>
                ))}
              </div>

              {/* Input pour le montant personnalisé */}
              <input
                type="number"
                placeholder="Montant personnalisé en DHS"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="bg-white text-red-700 py-2 px-4 rounded w-full mt-4 border-2 border-yellow-400 focus:outline-none focus:border-red-700"
              />

              {showSuccessMessage && (
                <p className="text-green-500 mt-4">Merci pour votre don!</p>
              )}

<div className="flex flex-wrap gap-4 mt-4 justify-center">
                <button
                  className="bg-white border-2 border-yellow-400 p-1 rounded-lg"
                  onClick={() => handlePaymentMethodClick("CMI")}
                >
                  <img
                    src="/donation/6.png"
                    alt="CMI"
                    className="w-16 h-12"
                  />
                </button>
                <button
                  className="bg-white border-2 border-yellow-400 p-1 rounded-lg"
                  onClick={() => handlePaymentMethodClick("PayPal")}
                >
                  <img
                    src="/donation/4.png"
                    alt="PayPal"
                    className="w-16 h-12"
                  />
                </button>
              </div>

              <button
                className="bg-red-700 text-yellow-400 py-2 px-4 rounded-full w-full mt-4 border-2 border-yellow-400"
                onClick={handleDonation}
              >
                Procéder au don
              </button>
            </div>

            {/* Section jaune (Parrainage) - Affichée après le clic sur "Procéder au don" */}
            {showThirdCard && (
              <div className="bg-yellow-400 p-8 rounded-lg shadow-lg w-full md:w-1/3 border-2 border-red-700">
                <h2 className="text-3xl text-red-700 font-semibold mb-4 text-center">
                  Parrainage "Essentiel"
                </h2>
                <p className="text-gray-800">Apportez un soutien vital à un enfant :</p>
                <ul className="list-none ml-5 mb-4">
                  {[
                    {
                      label: "Alimentation saine",
                      description: "pour lui permettre de bien grandir.",
                    },
                    {
                      label: "Soin médicaux",
                      description: "pour garantir sa bonne santé.",
                    },
                    {
                      label: "Hygiène adaptée",
                      description: "pour préserver sa dignité.",
                    },
                  ].map((item, index) => (
                    <li key={index} className="mb-2 flex items-start">
                      <img
                        src="/donation/check.png"
                        alt="Check"
                        className="w-4 h-4 mr-2 mt-1"
                      />
                      <span>
                        <span className="text-red-700 font-bold">
                          {item.label} :
                        </span>{" "}
                        <br /> {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
                <img
                  src="/donation/Parrainage1.png"
                  alt="Essentiel"
                  className="mb-4 rounded-lg h-48"
                />
                <div className="flex items-center mb-4 justify-end">
                  <span className="text-gray-800 font-bold mr-2">Type de don</span>
                  <button className="bg-red-700 text-yellow-400 py-1 px-4 rounded-lg ml-3 border-2 border-yellow-400">
                    {donationType}
                  </button>
                </div>
                <div className="flex items-center justify-end">
                  <img
                    src="/donation/gauche.png"
                    alt="Money"
                    className="w-16 h-8 mr-2 "
                  />
                  <span className="text-gray-800 font-bold mr-2">Montant</span>
                  <button className="bg-red-700 text-yellow-400 py-1 px-4 rounded-lg ml-3 border-2 border-yellow-400">
                    {donationDetails ? donationDetails.amount : "500 DH"}
                  </button>
                </div>
              </div>
            )}

            {/* Carte de l'image (70% de la largeur avant l'affichage de la carte jaune) */}
            <div
    className={`p-8 rounded-lg shadow-lg bg-[url('/donation/photo.png')] bg-cover bg-center border-2 border-black min-h-[30rem] ${
      showThirdCard ? "w-full md:w-1/3" : "w-full md:w-[50rem]"
    }`}
  >
              {/* Content for Contact Section */}
            </div>
          </div>
        </section>
      </div>

      <section className="text-center bg-red-700 text-white p-10 md:p-20 w-full m-0">
        <h2 className="text-3xl font-bold underline decoration-yellow-400 underline-offset-8 decoration-4">
          CONTACT
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-8">
          <div className="justify-center">
            <ul className="list-none mb-6 flex flex-col mt-4 text-lg md:text-xl">
              <li className="mb-4 flex items-center">
                <img
                  src="/donation/call.png"
                  alt="Contact 1"
                  className="w-8 h-8 mr-4"
                />
                <span className="text-yellow-400 font-medium">
                  La Direction :
                </span>
                <span className="ml-2">+212 610 02 35 55</span>
              </li>
              <li className="mb-4 flex items-center">
                <img
                  src="/donation/email.png"
                  alt="Contact 2"
                  className="w-8 h-8 mr-4"
                />
                direction@babrayan.ma
              </li>
              <li className="mb-4 flex items-center">
                <img
                  src="/donation/local.png"
                  alt="Contact 3"
                  className="w-8 h-8 mr-4"
                />
                <span>4 rue Bayt Lham, Quartier Palmier, Casablanca</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}