"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      title: "Parrainage “Essentiel”",
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
      title: "Parrainage “Education+”",
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
      title: "Parrainage “Envol”",
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
    setSelectedAmount(null);
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
    if (!selectedAmount && !customAmount) {
      toast.error("Veuillez choisir un montant avant de procéder au don.");
      return;
    } else if (!paymentMethod) {
      toast.error(
        "Veuillez choisir un type de paiement avant de procéder au don."
      );
      return;
    }

    toast.success("Merci pour votre don !");
    setSelectedAmount(null);
    setCustomAmount("");
    setIsCustomAmountSelected(false);
    setDonationDetails(null);
    setPaymentMethod(null);
    setShowThirdCard(false);
  };

  const selectedContent = contentByAmount[selectedAmount] || {
    title: "Parrainage “Personnalisé”",
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

        <motion.header
          initial="hidden"
          whileInView="visible"
          className="p-4 text-2xl md:text-4xl font-bold text-center mb-16 relative"
        >
          FAIRE UN DON
          <div className="w-24 md:w-48 h-2 bg-[#f3ca31] absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
        </motion.header>

        <header className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold mt-2">
            <span className="text-[#161618]">Votre soutien </span>
            <span className="text-[#f3ca31]">changera la vie d'un enfant.</span>
          </h1>
          <img
            src="/donation/bas.png"
            alt="Gauche"
            className="w-24 h-12 md:w-48 md:h-24 mt-4 self-start"
          />
        </header>

        <section className="flex flex-col gap-10 p-8 rounded-lg mb-5 max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            <div
              className={`bg-[#cc2229] p-8 rounded-lg shadow-lg border-2 border-black ${
                showThirdCard ? "w-full md:w-1/3" : "w-full md:w-[20rem]"
              }`}
            >
              <h2 className="text-3xl text-white font-semibold mb-4">
                Choisissez votre périodicité et montant
              </h2>

              <div className="mb-4">
                <div className="flex gap-4">
                  <button
                    className={`py-2 px-4 rounded-full ${
                      donationType === "Mensuel"
                        ? "bg-[#f3ca31] text-[#cc2229]"
                        : "bg-white text-[#cc2229] border border-[#f3ca31]"
                    }`}
                    onClick={() => handleDonationTypeChange("Mensuel")}
                  >
                    Mensuel
                  </button>
                  <button
                    className={`py-2 px-4 rounded-full ${
                      donationType === "Ponctuel"
                        ? "bg-[#f3ca31] text-[#cc2229]"
                        : "bg-white text-[#cc2229] border border-[#f3ca31]"
                    }`}
                    onClick={() => handleDonationTypeChange("Ponctuel")}
                  >
                    Ponctuel
                  </button>
                </div>
              </div>

              <div className="flex gap-3 mb-4">
                {["500 DH", "800 DH", "1900 DH"].map((amount) => (
                  <button
                    key={amount}
                    className={`py-2 px-1 rounded-lg border-2 border-[#f3ca31] w-52  ${
                      selectedAmount === amount
                        ? "bg-[#f3ca31] text-[#cc2229]"
                        : "bg-[#cc2229] text-white"
                    }`}
                    onClick={() => handleAmountChange(amount)}
                  >
                    {amount}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Montant personnalisé en DHS"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="bg-white text-[#cc2229] py-2 px-4 rounded-full w-full mt-4 border-2 border-[#f3ca31] focus:outline-none focus:border-[#cc2229]"
              />

              <div className="flex flex-wrap gap-4 mt-4 justify-center">
                <button
                  className={`bg-white p-2 rounded-lg border-2 border-[#f3ca31] flex items-center justify-center ${
                    paymentMethod === "CMI"
                      ? "bg-[#f3ca31] text-[#cc2229]"
                      : "bg-[#cc2229] text-white"
                  }`}
                  onClick={() => handlePaymentMethodClick("CMI")}
                >
                  <img src="/donation/6.png" alt="CMI" className="w-12 h-8" />
                </button>
                <button
                  className={`bg-white p-2 rounded-lg border-2 border-[#f3ca31] flex items-center justify-center ${
                    paymentMethod === "PayPal"
                      ? "bg-[#f3ca31] text-[#cc2229]"
                      : "bg-[#cc2229] text-white"
                  onClick={() => handlePaymentMethodClick("PayPal")}
                >
                  <img
                    src="/donation/4.png"
                    alt="PayPal"
                    className="w-12 h-8"

                  />
                </button>
              </div>

              <button
                className="bg-black text-[#f3ca31] py-2 px-4 rounded-full w-full mt-4 border-2 border-[#f3ca31]"

                onClick={handleProceedToDonation}
              >
                Procéder au don
              </button>
            </div>

            {showThirdCard && (
              <div className="bg-[#f3ca31] p-8 rounded-lg shadow-lg w-full md:w-1/3 border-2 border-[#cc2229]">
                <h2 className="text-3xl text-[#cc2229] font-semibold mb-4 text-center">
                  {selectedContent.title}
                </h2>
                <p className="text-[#161618]">{selectedContent.description}</p>

                <ul className="list-none ml-5 mb-4">
                  {selectedContent.items.map((item, index) => (
                    <li key={index} className="mb-2 flex items-start">
                      <img
                        src="/donation/check.png"
                        alt="Check"
                        className="w-4 h-4 mr-2 mt-1"
                      />
                      <span>
                        <span className="text-[#cc2229] font-bold">

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
                  <span className="text-[#161618] font-bold mr-2">
                    Type de don
                  </span>
                  <button className="bg-[#cc2229] text-[#f3ca31] py-1 px-4 rounded-lg ml-3 border-2 border-[#f3ca31]">

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
                    <span className="text-[#161618] font-bold mr-2">
                      Montant
                    </span>
                    <button className="bg-[#cc2229] text-[#f3ca31] py-1 px-4 rounded-lg ml-3 border-2 border-[#f3ca31]">

                      {donationDetails.amount}
                    </button>
                  </div>
                )}
              </div>
            )}
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

      <section className="text-center bg-[#cc2229] text-white p-10 md:p-20 w-full m-0">
        <h2 className="text-2xl font-bold underline decoration-[#f3ca31] underline-offset-8 decoration-4">

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
                <span className="text-[#f3ca31] font-medium">
                  La Direction Générale :
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
