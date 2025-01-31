"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify"; // Importez React Toastify
import "react-toastify/dist/ReactToastify.css"; // Importez le CSS de React Toastify

export default function Donation() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [donationType, setDonationType] = useState("Mensuel");
  const [showThirdCard, setShowThirdCard] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustomAmountSelected, setIsCustomAmountSelected] = useState(false);
  const [donationDetails, setDonationDetails] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  // Contenu différent pour chaque montant
  const contentByAmount = {
    "500 DH": {
      title: "Parrainage 'Essentiel'",
      description: "Apportez un soutien vital à un enfant :",
      items: [
        {
          label: "Alimentation saine",
          description: "pour lui permettre de bien grandir.",
        },
        {
          label: "Soins médicaux",
          description: "pour garantir sa bonne santé.",
        },
        {
          label: "Hygiène adaptée",
          description: "pour préserver sa dignité.",
        },
      ],
      image: "/donation/Parrainage1.png",
    },
    "800 DH": {
      title: "Parrainage 'Education+'",
      description: "Investissez dans l'avenir d'un enfant :",
      items: [
        {
          label: "Assurez sa scolarité",
          description: "pour lui ouvrir les portes du savoir.",
        },
        {
          label: "Proposez des activités extrascolaires",
          description: "pour enrichir son quotidien.",
        },
        {
          label: "Offrez des sorties sportives et culturelles",
          description: "pour nourrir son esprit et son corps.",
        },
      ],
      image: "/donation/Parrainage1.png",
    },
    "1900 DH": {
      title: "Parrainage 'Envol'",
      description: "Transformez un mois entier dans la vie d'un enfant :",
      items: [
        {
          label: "Hébergement :",
          description: "Offrez un toit sûr et chaleureux.",
        },
        {
          label: "Alimentation équilibrée :",
          description: "pour nourrir son corps et sa santé.",
        },
        {
          label: "Soins médicaux et hygiène",
          description: "pour veiller à son bien-être.",
        },
        {
          label: "Scolarité",
          description: "ouvrez-lui les portes du savoir.",
        },
        {
          label: "Loisirs épanouissants",
          description: "pour enrichir son quotidien.",
        },
      ],
      image: "/donation/Parrainage1.png",
    },
  };

  const handleAmountChange = (amount) => {
    setSelectedAmount(amount);
    setIsCustomAmountSelected(false);
    setCustomAmount("");
    updateDonationDetails(amount, donationType);
    setShowThirdCard(true);
  };

  const handleDonationTypeChange = (type) => {
    setDonationType(type);
    updateDonationDetails(selectedAmount || customAmount, type);
    setShowThirdCard(true);
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    setIsCustomAmountSelected(value !== "");
    updateDonationDetails(value, donationType);
    setShowThirdCard(true);
  };

  const handlePaymentMethodClick = (method) => {
    setPaymentMethod(method);
    console.log("Méthode de paiement sélectionnée :", method);
  };

  const updateDonationDetails = (amount, type) => {
    const details = {
      amount: amount,
      type: type,
    };
    setDonationDetails(details);
  };

  const handleProceedToDonation = () => {
    if (!paymentMethod) {
      // Affichez un toast d'erreur si aucune méthode de paiement n'est sélectionnée
      toast.error("Veuillez choisir un type de paiement avant de procéder au don.");
      return;
    }

    // Affichez un toast de succès
    toast.success("Merci pour votre don !");

    // Réinitialisez les états après le don
    setSelectedAmount(null);
    setCustomAmount("");
    setIsCustomAmountSelected(false);
    setDonationDetails(null);
    setPaymentMethod(null);
    setShowThirdCard(false);
  };

  // Récupérer le contenu en fonction du montant sélectionné
  const selectedContent = contentByAmount[selectedAmount] || {
    title: "Parrainage 'Personnalisé'",
    description: "Soutien personnalisé pour un enfant :",
    items: [
      {
        label: "Montant personnalisé",
        description: "pour répondre à des besoins spécifiques.",
      },
    ],
    image: "/donation/Parrainage1.png",
  };

  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between p-5 bg-[url('/donation/background.png')] bg-cover">
        {/* ToastContainer pour afficher les toasts */}
        <ToastContainer
          position="top-right"
          autoClose={3000} // Fermer automatiquement après 3 secondes
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

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
            {/* Carte des montants */}
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
                    className={`py-2 px-4 rounded-full ${
                      donationType === "Mensuel"
                        ? "bg-yellow-400 text-red-700"
                        : "bg-white text-red-700 border border-yellow-400"
                    }`}
                    onClick={() => handleDonationTypeChange("Mensuel")}
                  >
                    Mensuel
                  </button>
                  <button
                    className={`py-2 px-4 rounded-full ${
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
                    className={`py-0 px-5 rounded-lg border-2 border-yellow-400 ${
                      selectedAmount === amount
                        ? "bg-yellow-400 text-red-700"
                        : "bg-red-700 text-white"
                    }`}
                    onClick={() => handleAmountChange(amount)}
                    disabled={isCustomAmountSelected}
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
                className="bg-black text-yellow-400 py-2 px-4 rounded-full w-full mt-4 border-2 border-yellow-400"
                onClick={handleProceedToDonation}
              >
                Procéder au don
              </button>
            </div>

            {/* Section jaune (Parrainage) */}
            {showThirdCard && (
              <div className="bg-yellow-400 p-8 rounded-lg shadow-lg w-full md:w-1/3 border-2 border-red-700">
                <h2 className="text-3xl text-red-700 font-semibold mb-4 text-center">
                  {selectedContent.title}
                </h2>
                <p className="text-gray-800">{selectedContent.description}</p>
                <ul className="list-none ml-5 mb-4">
                  {selectedContent.items.map((item, index) => (
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
                  src={selectedContent.image}
                  alt={selectedContent.title}
                  className="mb-4 rounded-lg h-48"
                />
                <div className="flex items-center mb-4 justify-end">
                  <span className="text-gray-800 font-bold mr-2">Type de don</span>
                  <button className="bg-red-700 text-yellow-400 py-1 px-4 rounded-lg ml-3 border-2 border-yellow-400">
                    {donationDetails ? donationDetails.type : "Mensuel"}
                  </button>
                </div>
                {donationDetails?.amount && (
                  <div className="flex items-center justify-end">
                    <img
                      src="/donation/gauche.png"
                      alt="Money"
                      className="w-16 h-8 mr-2 "
                    />
                    <span className="text-gray-800 font-bold mr-2">Montant</span>
                    <button className="bg-red-700 text-yellow-400 py-1 px-4 rounded-lg ml-3 border-2 border-yellow-400">
                      {donationDetails.amount}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Carte de l'image */}
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

      {/* Section Contact */}
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