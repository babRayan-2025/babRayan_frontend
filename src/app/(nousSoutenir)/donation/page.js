"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

export default function Donation() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [donationType, setDonationType] = useState("Mensuel");
  const [showThirdCard, setShowThirdCard] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustomAmountSelected, setIsCustomAmountSelected] = useState(false);
  const [donationDetails, setDonationDetails] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  // Content for different amounts
  const contentByAmount = {
    "500 DH": {
      title: "Parrainage \"Essentiel\"",
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
      title: "Parrainage \"Education+\"",
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
      title: "Parrainage \"Envol\"",
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
    console.log("Payment method selected:", method);
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
      toast.error("Veuillez choisir un type de paiement avant de procéder au don.");
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
    title: "Parrainage \"Personnalisé\"",
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
          variants={fadeIn}
          className="p-4 text-3xl md:text-4xl font-bold text-center mb-16 relative"
        >
          FAIRE UN DON
          <motion.div 
            className="w-24 md:w-48 h-1 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8 }}
          />
        </motion.header>

        <motion.header 
          className="text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          <h1 className="text-3xl md:text-6xl font-bold mt-2">
            <span className="text-gray-800">Votre soutien </span>
            <motion.span 
              className="text-yellow-300"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              changera la vie d'un enfant.
            </motion.span>
          </h1>
          <motion.img
            src="/donation/bas.png"
            alt="Gauche"
            className="w-24 h-12 md:w-48 md:h-24 mt-4 self-start"
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.header>

        <section className="flex flex-col gap-10 p-8 mb-5 w-full max-w-full mx-auto">
        <motion.div 
            className="flex flex-col md:flex-row justify-center gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
          >
            {/* Amount Card */}
            <motion.div
              variants={cardVariants}
              className={`bg-red-700 p-8 rounded-3xl shadow-lg border-2 border-black ${
                showThirdCard ? "w-full md:w-1/4" : "w-full md:w-[25rem]"
              }`}
            >
              <h2 className="md:text-4xl text-white font-bold mb-4">
                Choisissez <br/> le montant
              </h2>

              <div className="mb-4">
                <div className="flex gap-4">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className={`py-2 px-4 rounded-full ${
                      donationType === "Mensuel"
                        ? "bg-yellow-300 text-red-700"
                        : "bg-white text-red-700 border border-yellow-300"
                    }`}
                    onClick={() => handleDonationTypeChange("Mensuel")}
                  >
                    Mensuel
                  </motion.button>
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className={`py-2 px-4 rounded-full ${
                      donationType === "Ponctuel"
                        ? "bg-yellow-300 text-red-700"
                        : "bg-white text-red-700 border border-yellow-300"
                    }`}
                    onClick={() => handleDonationTypeChange("Ponctuel")}
                  >
                    Ponctuel
                  </motion.button>
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                {["500 DH", "800 DH", "1900 DH"].map((amount) => (
                  <motion.button
                    key={amount}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className={`py-4 px-4  rounded-2xl text-lg border-2 border-yellow-300 ${
                      selectedAmount === amount
                        ? "bg-yellow-300 text-red-700 font-bold"
                        : "bg-red-700 text-white font-bold"
                    }`}
                    onClick={() => handleAmountChange(amount)}
                  >
                    {amount}
                  </motion.button>
                ))}
              </div>

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="number"
                placeholder="Montant personnalisé en DHS"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="bg-white text-red-700 py-2 px-4 rounded-full w-full mt-4 border-2 border-yellow-300 focus:outline-none focus:border-red-700"
              />

              <div className="flex flex-wrap gap-4 mt-4 justify-center">
                {/* lwasa2iiil  */}
              
                
                <motion.div
                  // variants={buttonVariants}
                  // whileHover="hover"
                  //  whileTap="tap"
                  className='bg-white p-1 rounded-2xl border-2 border-black '>
                  <img
                    src="/donation/1.png"
                    alt="choie de paiement"
                    className="w-16 h-12  object-cover"
                  />
                </motion.div>
                <motion.div
                  // variants={buttonVariants}
                  // whileHover="hover"
                  //  whileTap="tap"
                  className='bg-white p-1 rounded-2xl border-2 border-black '>
                  <img
                    src="/donation/2.png"
                    alt="choie de paiement"
                    className="w-16 h-12  object-cover"
                  />
                </motion.div>
                <motion.div
                  // variants={buttonVariants}
                  // whileHover="hover"
                  //  whileTap="tap"
                  className='bg-white p-1 rounded-2xl border-2 border-black '>
                  <img
                    src="/donation/3.png"
                    alt="choie de paiement"
                    className="w-16 h-12  object-cover"
                  />
                </motion.div>

                {/* khtaar le choie de paiement */}
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className={`bg-white p-1 rounded-2xl border-2 border-black ${
                    paymentMethod === "CMI"
                      ? "bg-yellow-300 text-red-700"
                      : "bg-red-700 text-white"
                  }`}
                  onClick={() => handlePaymentMethodClick("CMI")}
                >
                  <img
                    src="/donation/6.png"
                    alt="CMI"
                    className="w-16 h-12 p-2 object-cover"
                  />
                </motion.button>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className={`bg-white p-1 rounded-2xl border-2 border-black ${
                    paymentMethod === "PayPal"
                      ? "bg-yellow-300 text-red-700"
                      : "bg-red-700 text-white"
                  }`}
                  onClick={() => handlePaymentMethodClick("PayPal")}
                >
                  <img
                    src="/donation/4.png"
                    alt="PayPal"
                    className="w-16 h-12 p-2 "
                  />
                </motion.button>
              </div>

              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="block mx-auto bg-black text-yellow-300 py-2 px-4 rounded-full mt-8 shadow-xl border-2 border-yellow-400"
                onClick={handleProceedToDonation}
              >
                Procéder au don
              </motion.button>
            </motion.div>

            {/* Sponsorship Card */}
            {showThirdCard && (
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="bg-yellow-300 p-8 rounded-3xl shadow-lg w-full md:w-1/3 border-2 border-red-700"
              >
                <h2 className="text-4xl text-red-700 font-extrabold mb-4 text-center">
                  {selectedContent.title}
                </h2>
                <p className="text-gray-800">{selectedContent.description}</p>
                <motion.ul 
                  variants={staggerChildren}
                  initial="hidden"
                  animate="visible"
                  className="list-none ml-5 mb-4"
                >
                  {selectedContent.items.map((item, index) => (
                    <motion.li 
                      key={index} 
                      variants={fadeIn}
                      className="mb-2 flex items-start"
                    >
                      <img
                        src="/donation/check.png"
                        alt="Check"
                        className="w-4 h-4 mr-2 mt-1"
                      />
                      <span>
                        <span className="text-red-700 font-bold">
                          {item.label}
                        </span>{" "}
                        <br /> {item.description}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.img
                  variants={fadeIn}
                  src={selectedContent.image}
                  alt={selectedContent.title}
                  className="mb-4 rounded-3xl h-48"
                />
                <div className="flex items-center mb-4 justify-end">
  <span className="text-gray-800 text-xl font-bold mr-2">Type de don</span>
  <motion.button 
    variants={buttonVariants}
    whileHover="hover"
    className="bg-red-700 text-yellow-300 py-1 px-4 rounded-3xl ml-3 border-2 border-black"
  >
    {donationDetails ? donationDetails.type : "Mensuel"}
  </motion.button>
</div>
{donationDetails?.amount && (
  <div className="flex items-center justify-end">
    <img
      src="/donation/gauche.png"
      alt="Money"
      className="w-16 h-8 mr-2 mb-2"
    />
    <span className="text-gray-800 text-xl font-bold mr-2">Montant</span>
    <button className="bg-red-700 text-yellow-300 py-1 px-4 rounded-3xl ml-3 border-2 border-black">
      {donationDetails.amount}
    </button>
  </div>
)}
</motion.div>
            )}

            {/* Image Card */}
            <motion.div
              variants={cardVariants}
              className={`p-8 rounded-3xl shadow-lg bg-[url('/donation/photo.png')] bg-cover bg-center border-2 border-black min-h-[30rem] ${
                showThirdCard ? "w-full md:w-1/3" : "w-full md:w-[50rem]"
              }`}
            />
          </motion.div>
        </section>
      </div>

      {/* Contact Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        className="text-center bg-red-700 text-white p-8 md:p-20 w-full m-0"
      >
        <h2 className="text-3xl font-bold underline decoration-yellow-300 underline-offset-8 decoration-4">
          CONTACT
        </h2>
        <motion.div
          variants={staggerChildren}
          className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-8"
        >
          <div className="justify-center mt-8">
            <ul className="list-none mb-6 flex flex-col mt-4 text-lg md:text-xl">
              {[
                {
                  icon: "/donation/call.png",
                  label: "La Direction :",
                  content: "+212 610 02 35 55"
                },
                {
                  icon: "/donation/email.png",
                  content: "direction@babrayan.ma"
                },
                {
                  icon: "/donation/local.png",
                  content: "4 rue Bayt Lham, Quartier Palmier, Casablanca"
                }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeIn}
                  className="mb-4 flex items-center"
                >
                  <motion.img
                    src={item.icon}
                    alt={`Contact ${index + 1}`}
                    className="w-14 h-14 mr-4"
                    whileHover={{ scale: 1.1 }}
                  />
                  {item.label && (
                    <span className="text-yellow-300 text-3xl font-medium">{item.label}</span>
                  )}
                  <span className="ml-2 text-3xl">{item.content}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}