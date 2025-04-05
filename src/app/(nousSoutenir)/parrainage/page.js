"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contentByAmount = {
  "100": {
    title: 'Parrainage "Sport"',
    description: "Offrez-lui l'opportunité de s'épanouir pleinement :",
    items: [
      {
        label: "Encouragez l'activité physique régulière",
        description: "Pour cultiver son bien-être et sa vitalité.",
      },
      {
        label: "Soutenez la diversité des sports",
        description:
          "Pour découvrir de nouvelles passions et développer ses talents.",
      },
      {
        label: "Offrez un équipement adapté",
        description: "Pour pratiquer en toute sécurité et avec plaisir.",
      },
    ],
  },
  "500": {
    title: 'Parrainage "Essentiel"',
    description: "Apportez un soutien vital à un enfant :",
    items: [
      {
        label: "Alimentation saine",
        description: "Pour lui permettre de bien grandir.",
      },
      {
        label: "Soins médicaux",
        description: "Pour garantir sa bonne santé.",
      },
      {
        label: "Hygiène adaptée",
        description: "Pour préserver sa dignité.",
      },
    ],
  },
  "800": {
    title: 'Parrainage "Education"',
    description: "Investissez dans l'avenir d'un enfant :",
    items: [
      {
        label: "Assurez sa scolarité",
        description: "Pour lui ouvrir les portes du savoir.",
      },
      {
        label: "Proposez des activités extrascolaires",
        description: "Pour enrichir son quotidien.",
      },
      {
        label: "Offrez des sorties sportives et culturelles",
        description: "Pour nourrir son esprit et son corps.",
      },
    ],
  },
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
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png",
    desc: "Faire un don par virement bancaire",
  },
  { id: 5, label: "Carte bancaire", image: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/donation%2Fpayment%20method%2Flogo_cmi.png?alt=media&token=df40be6d-db1b-489a-8d9f-c6a95eb6f23f", desc: "Payer avec CMI" },
];

export default function Parrainage() {
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    email: "",
    message: "",
  });
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showUserInfoModal, setShowUserInfoModal] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Always log that the form was submitted, no matter what
    console.log("Form submitted");
    console.log("Current price:", selectedPrice);
    console.log("Current payment method:", selectedMethod ? selectedMethod.label : "None");

    // Then check conditions
    if (!selectedPrice) {
      toast.error('Veuillez choisir une formule de parrainage');
      return;
    }

    if (!selectedMethod) {
      toast.error('Veuillez choisir une méthode de paiement');
      return;
    }

    console.log("Proceeding with submission");

    // Show appropriate modal based on payment method when form is submitted
    if (selectedMethod.id === 4 || selectedMethod.id === 5) { // PayPal or CMI
      setShowUserInfoModal(true);
    } else if (selectedMethod.popup) {
      setShowModal(true);
    }
  };
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const Modal = ({ method, amount, onClose }) => {
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6 z-50"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div className="bg-white rounded-3xl shadow-lg text-center">
          <div className="bg-red-700 text-white py-4 px-6 rounded-t-3xl relative">
            <h2 className="text-2xl font-bold">Parrainage de {amount} DH</h2>
            <p className="text-lg">Paiement par {method.label}</p>
            <button
              onClick={onClose}
              className="absolute top-2 right-3 bg-white bg-opacity-20 text-white hover:bg-opacity-30 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Fermer"
            >
              ✕
            </button>
          </div>
          {method && method.popup && (
            <div className="relative">
              <img
                src={method.popup}
                alt={method.label}
                className="md:w-[70rem] md:h-[35rem] mx-auto shadow-md"
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.3 },
    },
  };

  const handleMethodClick = (method) => {
    setPaymentMethod(method.id);
    setSelectedMethod(method);
    // Remove modal display from here
  };

  const closeModal = () => {
    setShowModal(false);
    setShowUserInfoModal(false);
  };

  const UserInfoModal = ({ onClose, paymentMethod }) => {
    const [userInfo, setUserInfo] = useState({
      fullName: '',
      email: '',
      phone: '',
    });

    const handleChange = (e) => {
      setUserInfo({
        ...userInfo,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmitPayment = (e) => {
      e.preventDefault();
      console.log("Payment form submitted");
      console.log("Email:", userInfo.email);

      if (!userInfo.email) {
        console.log("Email is empty, showing error toast");
        toast.error('Veuillez entrer votre email');
        return;
      }

      console.log("Payment processing... showing success toast");
      toast.success('Paiement effectué avec succès');

      setTimeout(() => {
        userInfo.email = '';
        userInfo.fullName = '';
        userInfo.phone = '';
        setSelectedPrice(null);
        setPaymentMethod(null);
        setSelectedMethod(null);
        onClose();
      }, 2000);
    };

    // Find the payment method object to get the label
    const methodObj = paymentMethods.find(m => m.id === paymentMethod);
    const methodLabel = methodObj ? methodObj.label : '';

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6 z-50"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
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
        <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-xl">
          <div className="bg-red-700 text-white py-4 px-6 rounded-xl mb-6 relative">
            <h2 className="text-xl font-bold">Parrainage de {selectedPrice} DH</h2>
            <p className="text-lg">Paiement par {methodLabel}</p>
            <button
              onClick={onClose}
              className="absolute top-2 right-3 bg-white bg-opacity-20 text-white hover:bg-opacity-30 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Fermer"
            >
              ✕
            </button>
          </div>
          <h3 className="text-xl font-bold text-red-700 mb-6 text-center">
            {paymentMethod === 4 ? 'Payer avec PayPal' : 'Payer avec Carte Bancaire'}
          </h3>
          <form onSubmit={handleSubmitPayment} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email*
              </label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Nom complet
              </label>
              <input
                type="text"
                name="fullName"
                value={userInfo.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                name="phone"
                value={userInfo.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"
              />
            </div>
            <div className="flex justify-center gap-4 pt-4">
              <button type="button" onClick={onClose} className="px-6 py-2 bg-gray-200 rounded-full text-gray-800 font-semibold hover:bg-gray-300">
                Annuler
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-yellow-300 rounded-full text-red-700 font-semibold hover:bg-yellow-400">
                Procéder au paiement
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <main>
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
      <div className="">
        {/* Header */}
        <motion.h1
          className="p-4 text-2xl md:text-4xl font-bold text-center my-10 relative"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          PARRAINER UN ENFANT
          <div className="w-24 md:w-48 h-1 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
        </motion.h1>

        {/* Main section */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 md:mb-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Left side - Image */}
          <motion.div
            className="h-[320px] ml-[-40px] overflow-hidden md:rounded-r-xl"
            variants={fadeIn}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/parrainage%2F11.webp?alt=media&token=0b7b29d7-40fc-4f78-ac6e-437c14bcdef1"
              alt="Children smiling"
              width={980}
              height={300}
              loading="lazy"
              className="object-cover"
            />
          </motion.div>

          {/* Right side - Text content */}
          <motion.div className="space-y-4 md:mx-4 p-4 md:pr-20" variants={fadeIn}>
            <h2 className="text-3xl font-semibold">
              Pourquoi parrainer <br /> un enfant ?
            </h2>
            <p className="text-gray-600 text-xl ">
              Trop d&apos;enfants souffrent encore... <br /> Le parrainage est
              un moyen efficace pour lutter contre l&apos;abandon.
            </p>
            <p className="text-gray-600 text-xl">
              En parrainant un enfant, vous lui donnez la chance d&apos;accéder
              à ses droits fondamentaux : Éducation, Santé, Nutrition,
              Scolarisation...
            </p>
            <p className="text-gray-600 text-xl">
              L&apos;enfant peut ainsi grandir dans de bonnes conditions et
              acquérir des compétences pour son autonomie future.
            </p>
          </motion.div>
        </motion.div>

        {/* Contribution section */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="w-full p-6 md:pl-12 md:mb-1" variants={fadeIn}>
            <h3 className="text-xl font-semibold mb-4">
              Votre contribution mensuelle permettra de donner à un enfant :
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>- Un foyer aimant</li>
              <li>- Un accès à l&apos;éducation</li>
              <li>- Une alimentation saine et équilibrée</li>
              <li>- Une équipe médicale dédiée</li>
              <li>- Des vêtements d&apos;été, d&apos;hiver, des tenues sportives</li>
              <li>
                - Des activités sportives et artistiques tout au long de
                l&apos;année
              </li>
              <li>
                - Un accompagnement personnalisé pour se préparer à sa vie
                d&apos;adulte
              </li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">
              <br /> En tant que parrain, vous recevrez :
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                - Un rapport semestriel sur la scolarité de l&apos;enfant, ses
                progrès
              </li>
              <li>- L&apos;état d&apos;avancement des activités de l&apos;association</li>
              <li>- Des lettres et des dessins de l&apos;enfant</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2">De plus :</h3>
            <p className="text-gray-600">
              - Vous participerez à des événements au sein du Foyer pour
              rencontrer les enfants et partager de bons moments ensemble
            </p>
            <p className="font-semibold">
              <br /> Vous pouvez parrainer selon le montant que vous souhaitez :
            </p>
            <br />
            <p className="text-gray-600 font-semibold">
              Veuillez remplir le formulaire ci-dessous afin que nous puissions
              vous contacter rapidement pour soumettre votre demande de
              parrainage.
            </p>
            <p className="text-gray-600 font-semibold">(voir schéma demande don)</p>
          </motion.div>

          {/* Image grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-2 gap-4 h-[600px] p-4 md:mr-8"
            variants={staggerContainer}
          >
            {["https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/parrainage%2F2.webp?alt=media&token=2de4472b-396c-4602-9890-a4c10c8570a5",
              "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/parrainage%2F3.webp?alt=media&token=6a7f3445-93a8-4523-9a2b-ff8746addfd3",
              "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/parrainage%2F4.webp?alt=media&token=9740baf6-bcef-438f-8e22-610cff203047",
              "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/parrainage%2F5.webp?alt=media&token=a69040ed-499b-449f-9f29-b8d319d7390e"].map((img, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <img
                    src={img}
                    alt="Image description"
                    width={500}
                    height={300}
                    loading="lazy"
                    className="rounded-2xl h-[300px] w-[500px] shadow-md object-cover"
                  />
                </motion.div>
              ))}
          </motion.div>
        </motion.div>

        {/* Form section */}
        <motion.div
          className="bg-red-700 p-10"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="max-w-6xl mx-auto">
            <h1 className="text-white text-4xl font-bold mb-2">
              Je parraine un enfant
            </h1>
            <h2 className="text-white text-4xl font-bold mb-8">
              maintenant.
              <div className="w-24 md:w-48 h-1 bg-yellow-300 transform mt-2"></div>
            </h2>
            <h3 className="text-white text-2xl font-bold mb-8">Je choisis ma formule de parrainage</h3>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {Object.entries(contentByAmount).map(([price, content], index) => {
                  const isPopular = price === "500";
                  const isSelected = selectedPrice === parseInt(price);
                  return (
                    <div
                      key={index}
                      className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-300 h-full cursor-pointer flex flex-col ${isSelected
                        ? "border-2 border-yellow-300 shadow-xl transform scale-105 z-10"
                        : "hover:shadow-xl hover:scale-102"
                        } ${isPopular ? "relative" : ""}`}
                      onClick={() => setSelectedPrice(parseInt(price))}
                    >
                      {isPopular && (
                        <div className="absolute top-0 right-0 bg-yellow-300 text-red-700 px-3 py-1 rounded-bl-lg font-bold">
                          Populaire
                        </div>
                      )}
                      <div className="mt-4">
                        <h4 className="text-xl font-bold text-red-700 mb-3">{content.title}</h4>
                        <p className="text-gray-700 text-sm mb-4">{content.description}</p>
                        <motion.ul
                          initial="hidden"
                          animate="visible"
                          className="list-none mb-4"
                        >
                          {content.items.map((item, index) => (
                            <motion.li key={index} variants={fadeIn} className="mb-2 flex items-start" >
                              <img
                                src="/donation/check .svg"
                                alt="Check"
                                className="w-8 h-8 mr-0 mt-0"
                              />
                              <span className="mt-0.5">
                                <span className="text-red-700 font-bold">{item.label}</span>
                              </span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                      <div className="mt-auto">
                        <div className="text-2xl font-bold text-yellow-500 mb-4">{price} DH</div>
                        <p className={`w-full py-2 px-4 rounded-full text-center transition-colors duration-300 ${isSelected
                          ? "bg-yellow-300 text-red-700"
                          : "bg-red-700 text-white hover:bg-red-800"
                          }`} >
                          Choisir cette formule
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-10">
                <h3 className="text-white text-xl font-bold mb-4">Méthode de paiement</h3>
                <div className="max-w-5xl mx-auto flex justify-center gap-8 flex-wrap">
                  {/* Choix de paiement */}
                  {paymentMethods.map((method) => (
                    <div key={method.id} className="flex flex-col items-center">
                      <motion.p
                        key={`btn-${method.id}`}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className={`w-24 h-20 cursor-pointer p-4 rounded-2xl flex items-center justify-center shadow-md transition-colors ${paymentMethod === method.id
                          ? "bg-yellow-300"
                          : "bg-white hover:bg-gray-100"
                          }`}
                        onClick={() => handleMethodClick(method)}
                      >
                        <img
                          src={method.image}
                          alt={method.label}
                          className={`max-w-full max-h-full ${method.id === 4 || method.id === 5
                            ? "object-contain"
                            : "object-cover"
                            }`}
                        />
                      </motion.p>
                      <span className="text-xs font-medium mt-2 text-center text-white">
                        {method.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="mt-8 bg-yellow-300 hover:bg-yellow-400 cursor-pointer text-red-700 font-bold py-3 px-8 rounded-full text-xl mx-auto block"
              >
                Parrainer maintenant
              </button>
            </form>

            {showModal && selectedMethod && (
              <Modal
                method={selectedMethod}
                amount={selectedPrice}
                onClose={closeModal}
              />
            )}

            {showUserInfoModal && selectedMethod && (
              <UserInfoModal
                paymentMethod={selectedMethod.id}
                onClose={closeModal}
              />
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
