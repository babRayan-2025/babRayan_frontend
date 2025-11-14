"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    email: "",
    message: "",
  });
  const [captchaValue, setCaptchaValue] = useState(null);
  const token = localStorage.getItem("token");
  useEffect(() => {
    // Add reCAPTCHA script
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Add the callback function to window object
    window.onCaptchaChange = (response) => {
      setCaptchaValue(response);
    };

    return () => {
      document.body.removeChild(script);
      delete window.onCaptchaChange;
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      toast.error("Veuillez compléter le captcha.");
      return;
    }
    try {
      const response = await fetch('https://api-vevrjfohcq-uc.a.run.app/v1/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          nom: formData.nom,
          telephone: formData.telephone,
          email: formData.email,
          message: formData.message
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      toast.success("Message envoyé avec succès");
      setFormData({
        nom: "",
        telephone: "",
        email: "",
        message: "",
      });
      setCaptchaValue(null);
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <head>
        <title>Contactez-nous</title>
      </head>
      <main className="bg-[url('/devenirPartenaire/background-partenaire.png')] bg-cover bg-center">
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
        <motion.h1 className="p-4 text-2xl md:text-4xl font-bold text-center my-8 relative" variants={fadeIn} initial="initial" animate="animate">
          NOUS CONTACTER
          <div className="w-24 md:w-48 h-1 bg-yellow-200 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
        </motion.h1>
        <div className="w-full flex flex-wrap justify-center gap-8 p-6 md:p-10 text-gray-800">
          {/* Address Section */}
          <div className=" bg-yellow-300 border border-gray-600 rounded-3xl text-center md:text-center place-content-center mb-6 md:mb-0 p-8">
            <h2 className="text-5xl font-bold text-red-700 mb-4 flex items-center justify-center">
              <span className="mr-2">
                <Image src="/contact/localisation.svg" alt="call" width={70} height={70} className="object-cover" />
              </span>{" "}
              Adresse
            </h2>
            <p className="text-gray-800 text-xl font-medium">
              4 rue Bayt Lham, quartier Palmier, Casablanca
            </p>

            <h2 className="text-5xl font-bold text-red-700 mt-6 mb-4 flex items-center justify-center ">
              <span className="mr-2">
                <Image src="/contact/appel.svg" alt="call" width={60} height={60} className="object-cover" />
              </span>{" "}
              Téléphone
            </h2>
            <p className="text-gray-800 text-xl font-medium">
              Direction Générale
              <br />
              <span className="strong"> +212 610 023 555</span>
            </p>

            <div className="text-5xl font-bold text-red-700 mt-6 mb-4 flex items-center justify-center">
              <Image src="/contact/mail.svg" alt="call" width={60} height={60} className="object-cover" />
              <span className="mr-2"></span> Mail
            </div>
            <p className="text-gray-800 text-xl font-medium">
              Affaires générales <br /> contact@babrayan.ma
              <br />
              Presse <br /> communication@babrayan.ma
            </p>
          </div>

          {/* Location Map Section */}
          <div className="items-center  bg-yellow-300 border border-gray-600 rounded-3xl place-content-center pt-6 md:p-8">
            <h2 className="text-5xl font-bold text-red-700 mb-8 text-center flex items-center justify-center ">
              <span className="mr-2 ">
                <Image src="/contact/localisation.svg" alt="call" width={70} height={70} className="object-cover" />
              </span>{" "}
              Localisation
            </h2>
            <div className="w-full max-w-sm md:max-w-md bg-white border border-gray-600 rounded-lg shadow-md overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.846981346241!2d-7.632492684855834!3d33.592882980730195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM1JzM0LjQiTiA3wrAzNyc1Ny4wIlc!5e0!3m2!1sen!2sma!4v1635789876543!5m2!1sen!2sma"
                width={600} height={400} style={{ border: 0 }} allowFullScreen="" loading="lazy" className="rounded-lg" ></iframe>
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
                  required
                  className="w-full px-4 py-3 rounded-3xl text-gray-700 text-lg"
                />
              </div>


              <div className="mt-6 flex">
                <div
                  className="g-recaptcha"
                  data-sitekey="6LePYC0rAAAAAPYanTVgTBqhAvppr3j2MyICOgQZ"
                  data-callback="onCaptchaChange"
                ></div>
              </div>
              <div>
                <button type="submit" className="px-8 py-2 border border-cyan-50 bg-yellow-300 hover:bg-yellow-400 text-red-600 rounded-full text-xl font-bold transition-colors duration-200">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </main>
    </>
  );
}
