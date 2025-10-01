"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DevenirPartenaire() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    nom: "",
    profession: "",
    telephone: "",
    email: "",
    message: "",
  });
  const [captchaValue, setCaptchaValue] = useState(null);

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
    console.log("Form submitted:", formData);

    try {
      const response = await fetch("https://api-vevrjfohcq-uc.a.run.app/v1/partenaire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response Data:", data);
        toast.success("Votre demande a bien été envoyée !");
        setFormData({
          nom: "",
          profession: "",
          telephone: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("Une erreur est survenue lors de l'envoi de votre demande.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setCaptchaValue(null);
    if (window.grecaptcha) {
      window.grecaptcha.reset();
    }
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sponsors = [
    { src: "/partenaires/mundiapolis.PNG", alt: "11 Logo" },
    { src: "/partenaires/Afriquialogo.png", alt: "Logo 10" },
    { src: "/partenaires/banque alimentaire.png", alt: "Logo 1" },
    { src: "/partenaires/casa.PNG", alt: "Logo 2" },
    { src: "/partenaires/Alliances.jpg", alt: "Logo 3" },
    { src: "/partenaires/TGCC.PNG", alt: "TGCC Logo" },
    { src: "/partenaires/Ministère de l'éducation .png", alt: "Societe Generale Logo" },
  ];

  const visibleItems = 5;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sponsors.length - visibleItems : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= sponsors.length - visibleItems ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <main>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="w-full bg-white bg-[url('https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/devenirPartenaire%2Fbackground-partenaire.webp?alt=media&token=6663b127-e6eb-462b-922d-35d80b0154e0')] bg-cover bg-center p-6 md:p-10 text-gray-800"
      >
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="p-4 text-2xl md:text-4xl font-bold text-center mb-16 relative"
        >
          DEVENIR PARTENAIRE
          <div className="w-24 md:w-48 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
        </motion.header>

        <div className="md:flex md:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
            className="md:w-[1100px] md:ml-[-40px] mb-6 md:mb-0"
          >
            <img loading="lazy"
              src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/DEVENIR%20PARTENAIRE%2FDEVENIR%20PARTENAIRE.jpg?alt=media&token=3c9cf064-79c1-4707-8a9a-0498e530a5c9"
              alt="Group Image"
              width={1100}
              height={600}
              className="rounded-xl md:rounded-r-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
            className="md:w-1/2  md:mx-16"
          >
            <h2 className="text-xl md:text-5xl font-semibold mb-4">
              Pourquoi devenir partenaire ?
            </h2>
            <p className="mb-4 text-gray-600 text-xl leading-relaxed">
              Parce que cette forme de générosité permet à l&apos;association Bab Rayan de réaliser des projets concrets en faveur des enfants et familles en difficulté. Vous devenez ainsi un acteur à part entière du développement économique et social de votre territoire. Nous pouvons convenir ensemble d'un partenariat sur mesure en adéquation avec vos valeurs et votre stratégie RSE.
            </p>
          </motion.div>
        </div>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="my-10 md:mx-16"
        >
          <h3 className="text-xl md:text-4xl font-bold mb-6 uppercase">Formes de partenariat</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white border border-red-500 p-4 rounded-3xl">
            {[
              {
                title: "Don financier",
                description:
                  "Il s'agit d'un don qui peut être affecté à un projet en particulier. Les projets sont nombreux, nous pouvons nous adapter en fonction de vos attentes.",
              },
              {
                title: "Don en nature",
                description:
                  "Il s'agit d'un don de marchandises : produits alimentaires, vêtements, produits d'hygiène ou d'entretien, jouets, matériel sportif, mobiliers, etc.",
              },
              {
                title: "Partenariat de compétences",
                description:
                  "Votre entreprise peut mettre à disposition son savoir-faire et ses compétences au service de notre association. Elle peut également offrir à nos jeunes l'opportunité d'un stage, d'un contrat d'apprentissage.",
              },
              {
                title: "Parrainer un enfant",
                description: "Votre entreprise peut choisir de parrainer un ou plusieurs enfants.",
              },
            ].map((form, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6, delay: index * 0.1 } }}
                viewport={{ once: true }}
                className="p-4"
              >
                <h4 className="text-2xl font-bold mb-2">{form.title}</h4>
                <p>{form.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-10 d-flex justify-items-center justify-center pt-6"
        >
          <h2 className="text-lg font-bold text-center text-gray-800 mb-8 relative">
            CONTACT
            <div className="w-10 md:w-24 h-1 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h2>
          <div className="bg-white border border-red-500 rounded-3xl p-4 md:p-12">
            <div className="grid grid-rows-2 xl:grid-rows-1 xl:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-xl mb-3">Directrice Partenariats et Relations Publiques</h4>
                <div className="text-red-600 text-xl leading-relaxed">
                  <p>Téléphone : +212 618 181 806</p>
                  <p>Email : communication@babrayan.ma</p>
                </div>
              </div>

              <div className="xl:ml-12">
                <h4 className="font-semibold text-xl mb-3">Directeur des Opérations</h4>
                <div className="text-red-600 text-xl leading-relaxed">
                  <p>Téléphone : +212 610 022 000</p>
                  <p>Email : dir.operations@babrayan.ma</p>
                </div>
              </div>

            </div>
          </div>

        </motion.section>
        {/* Sponsors Section */}
        <section className="mt-16">
          <div className="relative">
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
            >
              &#8592;
            </button>
            <div className="overflow-hidden w-full">
              <motion.div
                className="flex"
                initial={{ x: 0 }}
                animate={{ x: `-${(currentIndex * 100) / visibleItems}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {sponsors.map((sponsor, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-1/5 px-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img loading="lazy"
                      src={sponsor.src}
                      alt={sponsor.alt}
                      width={200}
                      height={100}
                      className="mx-auto"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
            >
              &#8594;
            </button>
          </div>
        </section>
      </motion.div>
      {/* Form section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-red-700 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-white text-4xl font-bold mb-2">
            Je veux devenir
          </h1>
          <h2 className="text-white text-4xl font-bold mb-8">
            un partenaire
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
                type="text"
                name="profession"
                placeholder="Entreprise ou profession *"
                value={formData.profession}
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
                className="w-full px-4 py-3 rounded-3xl text-gray-700 text-lg"
              />
            </div>

            <div>
              <div className="mt-6 flex justify-center">
                <div
                  className="g-recaptcha"
                  data-sitekey="6LePYC0rAAAAAPYanTVgTBqhAvppr3j2MyICOgQZ"
                  data-callback="onCaptchaChange"
                ></div>
              </div>
              <button
                type="submit"
                className="px-8 py-2 border border-cyan-50 bg-yellow-300 hover:bg-yellow-400 text-red-700 rounded-full text-xl font-bold transition-colors duration-200"
              >
                envoyer
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </main>
  );
}
{/* </motion.div>
    </main> */}
