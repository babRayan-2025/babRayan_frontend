"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
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
    "100 DH": {
      title: 'Parrainage "Sport"',
      description: "Offrez-lui l'opportunité de s'épanouir pleinement :",
      items: [
        {
          label: "Encouragez l'activité physique régulière :",
          description: "Pour cultiver son bien-être et sa vitalité.",
        },
        {
          label: "Soutenez la diversité des sports :",
          description: "Pour découvrir de nouvelles passions et développer ses talents.",
        },
        {
          label: "•	Offrez un équipement adapté :",
          description: "Pour pratiquer en toute sécurité et avec plaisir.",
        },
      ],
      image: "/donation/Sport.png",
    },
    "200 DH": {
      title: 'Parrainage "Santé"',
      description: "Prenez soin de sa santé, un cadeau pour la vie :",
      items: [
        {
          label: "Assurez l'accès aux soins essentiels :",
          description: "Consultations médicales, vaccins, et bilans réguliers.",
        },
        {
          label: "Offrez des traitements adaptés :",
          description: "Médecins spécialisés, soins dentaires, et suivi personnalisé.",
        },
        {
          label: "Promouvez l'hygiène et le bien-être :",
          description: "Produits d'hygiène, sensibilisation aux bonnes pratiques pour une vie saine.",
        },
      ],
      image: "/donation/santé.png",
    },
    "300 DH": {
      title: 'Parrainage "Habillement"',
      description: "Offrez-lui la dignité et le confort à chaque saison :",
      items: [
        {
          label: "Des vêtements adaptés :",
          description: "À son âge et son environnement.",
        },
        {
          label: "Une tenue pour chaque occasion :",
          description: "Pour se sentir confiant, que ce soit à l'école ou lors d'événements spéciaux.",
        },
      ],
      image: "/donation/Vetements.png",
    },
    "500 DH": {
      title: 'Parrainage "Essentiel"',
      description: "Apportez un soutien vital à un enfant :",
      items: [
        {
          label: "Alimentation saine:",
          description: "Pour lui permettre de bien grandir.",
        },
        {
          label: "Soins médicaux:",
          description: "Pour garantir sa bonne santé.",
        },
        {
          label: "Hygiène adaptée:",
          description: "Pour préserver sa dignité.",
        },
      ],
      image: "/donation/plat.png",
    },
    "800 DH": {
      title: 'Parrainage "Education"',
      description: "Investissez dans l'avenir d'un enfant :",
      items: [
        {
          label: "Assurez sa scolarité:",
          description: "Pour lui ouvrir les portes du savoir.",
        },
        {
          label: "Proposez des activités extrascolaires:",
          description: "Pour enrichir son quotidien.",
        },
        {
          label: "Offrez des sorties sportives et culturelles:",
          description: "Pour nourrir son esprit et son corps.",
        },
      ],
      image: "/donation/edu.png",
    },
    "1900 DH": {
      title: 'Parrainage "Envol"',
      description: "Transformez un mois entier dans la vie d'un enfant :",
      items: [
        {
          label: "Hébergement:",
          description: "Offrez un toit sûr et chaleureux.",
        },
        {
          label: "Alimentation équilibrée:",
          description: "Pour nourrir son corps et sa santé.",
        },
        {
          label: "Soins médicaux et hygiène:",
          description: "Pour veiller à son bien-être.",
        },
        {
          label: "Scolarité:",
          description: "Ouvrez-lui les portes du savoir.",
        },
        {
          label: "Loisirs épanouissants:",
          description: "Pour enrichir son quotidien.",
        },
      ],
      image: "/donation/edd.png",
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
    const selectedPaymentMethod = paymentMethods.find(method => method.id === paymentMethod);

    if ([1, 2, 3].includes(paymentMethod)) {
      setSelectedMethod(selectedPaymentMethod);
      setIsModalOpen(true);
    }else if (!selectedAmount && !customAmount) {
      // Affichez un toast d'erreur si aucun montant n'est sélectionné
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
    title: 'Parrainage "Personnalisé"',
    description: "Soutien personnalisé pour un enfant :",
    items: [
      {
        label: "Montant personnalisé",
        description: "pour répondre à des besoins spécifiques.",
      },
    ],
    image: "/donation/plat.png",
  };

  const paymentMethods = [
    {
      id: 1,
      label: "Virement bancaire",
      image: "/donation/1.png",
      desc: "Payer avec votre carte bancaire",
      popup: "/donation/popUp/2.png",
    },
    {
      id: 2,
      label: "Chèque",
      image: "/donation/2.png",
      desc: "Payer avec votre compte PayPal",
      popup: "/donation/popUp/1.png",

    },
    {
      id: 3,
      label: "Cash",
      image: "/donation/3.png",
      desc: "Faire un don par chèque",
      popup: "/donation/popUp/3.png",

    },
    {
      id: 4,
      label: "PayPal",
      image: "/donation/4.png",
      desc: "Faire un don par virement bancaire",
    },
    {
      id: 5,
      label: "Apple Pay",
      image: "/donation/5.png",
      desc: "Payer avec Apple Pay",
    },
    { id: 6, label: "CMI", image: "/donation/6.png", desc: "Payer avec CMI" },
  ];

  // const amountImages = {
  //   "100 DH": "/donation/amounts/100.png",
  //   "200 DH": "/donation/amounts/200.png",
  //   "300 DH": "/donation/amounts/300.png",
  //   "500 DH": "/donation/amounts/500.png",
  //   "800 DH": "/donation/amounts/800.png",
  //   "1900 DH": "/donation/amounts/1900.png",
  // };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const Modal = ({ method, amount, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={onClose}>
        <div className="bg-white rounded-3xl shadow-lg text-center">
          {method && (
            <>
              <img src={method.popup} alt={method.label} className="w-[70rem] h-[40rem] mx-auto mb-4 rounded-3xl shadow-md" />
              <h3 className="text-xl text-gray-900 font-bold mb-2">{method.label}</h3>
              <p className="text-gray-700">{method.desc}</p>
            </>
          )}
          {amount && (
            <>
              <img src={amountImages[amount]} alt={amount} className="w-32 h-32 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Montant sélectionné</h3>
              <p className="text-gray-700">{amount}</p>
            </>
          )}
          <button
            onClick={onClose}
            className="mt-4 bg-red-700 text-white py-2 mb-4 px-6 rounded-full"
          >
            Fermer
          </button>
        </div>
      </div>
    );
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
              changera la vie d&apos;un enfant.
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
            className="flex flex-col lg:flex-row justify-center gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
          >
            {/* Amount Card */}
            <motion.div
              variants={cardVariants}
              className={`bg-[#cc2229] p-8 rounded-3xl shadow-md border border-gray-500 ${
                showThirdCard ? "w-full lg:w-1/4" : "w-full lg:w-[25rem]"
              }`}
            >
              <h2 className="md:text-4xl text-white font-bold mb-4">
                Choisissez <br /> le montant
              </h2>

              <div className="mb-4 flex justify-center">
                <div className="flex gap-4 mr-3">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className={`py-2 px-11 rounded-full ${
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
                    className={`py-2 px-11 rounded-full ${
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

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                {["100 DH","200 DH","300 DH","500 DH", "800 DH", "1900DH"].map((amount) => (
                  <motion.button
                    key={amount}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className={`py-4 px-4  rounded-2xl text-lg border-2 border-yellow-300 ${
                      selectedAmount === amount
                        ? "bg-[#FCE8F3] text-red-700 font-bold"
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

              <div className="grid grid-cols-3 gap-4 mt-4 justify-center">
                {/* khtaar le choie de paiement */}
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="flex flex-col items-center gap-2"
                  >
                    <motion.button
                      key={method.id}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className={`bg-white p-4  rounded-2xl justify-items-center shadow-md ${
                        paymentMethod === method.id
                          ? "bg-yellow-300 text-red-700 font-bold"
                          : "bg-red-700 text-white font-bold"
                      }`}
                      onClick={() => handlePaymentMethodClick(method.id)}
                    >
                      <img
                        src={method.image}
                        alt={method.label}
                        className={`w-14 h-11  ${
                          method.id == 4 || method.id == 5 || method.id == 6
                            ? ""
                            : "object-cover"
                        }`}
                      />
                    </motion.button>
                    <span className="text-xs block mt-0 text-center text-white">
                      {method.label}
                    </span>
                  </div>
                ))}
              </div>

              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="block mx-auto bg-yellow-300 text-red-700 font-semibold py-3 px-10 rounded-full mt-8 shadow-2xl border-2 border-yellow-400"
                onClick={handleProceedToDonation}
              >
                Procéder au don
              </motion.button>
              {isModalOpen && (
        <Modal
          method={selectedMethod}
          amount={selectedAmount}
          onClose={() => setIsModalOpen(false)}
        />
      )}
            </motion.div>

            {/* Sponsorship Card */}
            {showThirdCard && (
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="bg-[#fdc000] p-4  rounded-3xl shadow-lg w-full lg:w-1/4 shadow-md border border-red-700"
              >
                <h2 className="text-3xl text-red-700 font-extrabold mb-4 text-center">
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
                        src="/donation/check .svg"
                        alt="Check"
                        className="w-8 h-8 mr-0 mt-0"
                      />
                      <span className="mt-0.5">
                        <span className="text-red-700 font-bold ">
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
                  className="mb-4 rounded-3xl h-48 w-full"
                />
                <div className="flex items-center mb-4 justify-end">
                  <span className="text-gray-800 text-xl font-bold mr-2">
                    Type de don
                  </span>
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    className="bg-red-700 text-yellow-300 py-1 px-4 rounded-3xl ml-3 "
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
                    <span className="text-gray-800 text-xl font-bold mr-2">
                      Montant
                    </span>
                    <button className="bg-red-700 text-yellow-300 py-1 px-4 rounded-3xl ml-3 ">
                      {donationDetails.amount}
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {/* Image Card */}
            <motion.div
              variants={cardVariants}
              className={`p-8 rounded-3xl shadow-lg bg-[url('/donation/photo.png')] bg-cover bg-center shadow-md border border-gray-500 min-h-[30rem] ${
                showThirdCard ? "w-full lg:w-1/3" : "w-full lg:w-[50rem]"
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
  className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8"
>
  <div className="justify-center mt-4">
    <ul className="list-none flex flex-col text-sm sm:text-base md:text-lg">
      {[
        {
          icon: "/donation/phone.svg",
          label: "Direction Générale :",
          content: "+212 610 02 35 55",
        },
        {
          icon: "/donation/mail.svg",
          content: "direction@babrayan.ma",
        },
        {
          icon: "/donation/localisation.svg",
          content: "4 rue Bayt Lahm, Quartier Palmier, Casablanca",
        },
      ].map((item, index) => (
        <motion.li
          key={index}
          variants={fadeIn}
          className="flex items-center space-x-2 md:space-x-4 mb-2 md:mb-3"
        >
          <motion.img
            src={item.icon}
            alt={`Contact ${index + 1}`}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
            whileHover={{ scale: 1.1 }}
          />
          <div className="flex flex-col md:flex-row md:items-center">
            {item.label && (
              <span className="text-yellow-300 text-xs sm:text-sm md:text-lg font-medium mr-1 md:mr-2">
                {item.label}
              </span>
            )}
            <span className="text-xs sm:text-sm md:text-lg">{item.content}</span>
          </div>
        </motion.li>
      ))}
    </ul>
  </div>
</motion.div>

      </motion.section>
    </main>
  );
}
