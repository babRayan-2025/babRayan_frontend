"use client";

import SkeletonLoader from "../../../components/SkeletonLoader";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { Modal } from 'antd';
import toast from "react-hot-toast";
import DOMPurify from "isomorphic-dompurify";

// Animation Variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// News Item Component
const NewsItem = ({ imageSrc, title, description }) => (
  <motion.div
    className="flex flex-col items-center gap-9 px-4"
    variants={staggerContainer}
    initial="initial"
    animate="animate"
  >
    <motion.div
      className="p-6 rounded-lg flex flex-col md:flex-row gap-7 items-center justify-center w-full max-w-[90%] md:max-w-[70%]"
      variants={fadeIn}
    >
      {/* Image Section */}
      <motion.div className="flex-shrink-0 w-full md:w-[45%]" variants={fadeIn}>
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={400}
          className="rounded-xl w-full h-auto object-cover"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div className="text-center md:text-left" variants={fadeIn}>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        <p className="text-gray-600 mb-4 md:mb-10 text-sm md:text-base">
          {description}
        </p>
        <motion.button
          className="inline-block bg-yellow-300 rounded-full text-red-600 font-semibold px-4 py-2 transition hover:bg-yellow-400"
          variants={scaleIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Découvrir plus
        </motion.button>
      </motion.div>
    </motion.div>
  </motion.div>
);

export default function Blog() {
  const [isLoading, setIsLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [newsfetched, setNewsfetched] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);


  // const videoUrl = "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/Vid%C3%A9o%20telquel%20site%20web.mp4?alt=media&token=fbf6d395-01d9-498c-85a3-15a800a3d1a0";
  const videoUrl = "https://www.youtube.com/watch?v=1SatrIi9WB0&t=71s";
  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("https://api-vevrjfohcq-uc.a.run.app/v1/news");
        const data = await response.json();
        if (data.status && data.data) {
          setNewsfetched(data.data);
        } else {
          setNewsfetched([]);
          toast.error("Erreur lors du chargement des actualités");
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        toast.error("Erreur lors du chargement des actualités");
      }
    }
    fetchNews();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const newdata = [
    {
      id: 1,
      image: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/landing%2FRemise%20des%20dipl%C3%B4mes%20de%20la%20deuxi%C3%A8me%20promotion%20du%20CFI.jpg?alt=media&token=a6788bf7-919e-48f2-96ca-5468a7d86176",
      alt: "Graduation",
      title: "Remise des diplômes de la deuxième promotion du CFI",
      description: `L'Association Bab Rayan a eu l'honneur de célébrer ce 28 Octobre 2024,
    la réussite de la deuxième promotion de diplômés de son Centre de
    Formation et d'Insertion. Le CFI propose aux jeunes issus des EPS et
    en situation de précarité une formation qualifiante dans les métiers
    de l'hôtellerie et de la restauration. Aujourd'hui, plus de 120 jeunes
    franchissent une étape clé vers l'emploi, grâce au soutien de nos
    entreprises partenaires.`,
      buttonText: "Découvrir plus",
    },
    {
      id: 2,
      image: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/actualit%C3%A9%2FC%C3%A9r%C3%A9monie%20d'ouverture%20de%20PSG%20Academy.webp?alt=media&token=c364468d-8acb-41da-abee-43c53d541cac",
      alt: "Partnership",
      title: "Cérémonie d'ouverture de PSG Academy",
      description: `La PSG Academy Maroc a ouvert ses portes le 11 novembre à Casablanca, en présence d'Achraf Hakimi, invité d'honneur.
Les jeunes de Bab Rayan ont eu le privilège de le rencontrer et de jouer un match contre lui.`,
      buttonText: "Découvrir plus",
    },
    {
      id: 3,
      image: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/landing%2FConvention%20entre%20Newrest%20et%20le%20CFI%20pour%20offrir%20une%20formation%20en%20alternance%20de%20qualit%C3%A9%20(2).webp?alt=media&token=d0a016ca-770e-444f-b8c1-28fd3d4840cf",
      alt: "Success",
      title:
        "Convention entre Newrest et le CFI pour offrir une formation en alternance de qualité",
      description: `Le CFI à Bab Rayan & Newrest s'unissent pour offrir une formation diplômante en restauration, une première qui changera la vie d'une promotion engagée de jeunes en difficulté !`,
      buttonText: "Découvrir plus",
    },
    {
      id: 4,
      image: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/actualit%C3%A9%2FAiguebelle%20%20Un%20partenaire%20engage%CC%81%20avec%20nos%20jeunes%20du%20CFI.webp?alt=media&token=2c56ae94-1d41-46f7-905d-01e60bd6ee68",
      alt: "Success",
      title: "Aiguebelle : Un partenaire engagé avec nos jeunes du CFI",
      description: `Notre partenaire Aiguebelle a généreusement organisé cet automne, une journée de visite et de formation en chocolaterie pour les jeunes du Centre de Formation et d'Insertion (CFI) de Bab Rayan.
Nos étudiants ont eu l'opportunité unique de découvrir les secrets de la fabrication du chocolat, tout en explorant le fonctionnement de l'usine. Cette expérience immersive a enrichi leurs connaissances et stimulé leur passion pour l'art culinaire.`,
      buttonText: "Découvrir plus",
    },
    {
      id: 5,
      image: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/actualit%C3%A9%2Fsortie%20theatre.jpg?alt=media&token=73ae337a-f499-4712-bffa-e67ebe67e697",
      alt: "Training",
      title: "Une sortie au théâtre pour voir le petit prince",
      description: `Les enfants de Bab Rayan ont assisté au premier spectacle de la saison de l'École du Jeune
Spectateur : Le Petit Prince.
Grâce à la générosité de la Fondation Achraf Hakimi, nos jeunes ont été accueillis au Complexe Culturel Al Hassani, où ils ont plongé dans l'univers magique de cette œuvre intemporelle.`,
      buttonText: "Découvrir plus",
    },
    {
      id: 6,
      image: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/actualit%C3%A9%2FUnknown.webp?alt=media&token=2df91639-ba34-4954-b9b7-f2183e89f001",
      alt: "Innovation",
      title: "Nos enfants partent à la découverte du monde",
      description: `Grâce à des voyages à l'étranger, nos enfants ont eu la chance unique d'élargir leurs horizons, de nourrir leurs rêves et de s'ouvrir à de nouvelles cultures. Ces expériences enrichissantes encouragent la tolérance, renforcent l'estime de soi, et favorisent une meilleure compréhension des autres, tout en contribuant à leur épanouissement personnel.`,
      buttonText: "Découvrir plus",
    },
  ];

  return (
    <>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <main className="w-full bg-[url('https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/actualit%C3%A9%2FBG-actualit%C3%A9.webp?alt=media&token=077e9635-b894-44e1-993a-860948c23554')] bg-center py-16">
          <motion.h1
            className="p-4 text-2xl md:text-4xl font-bold text-center mb-8 relative"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            ACTUALITÉS
            <div className="w-24 md:w-48 h-1 bg-yellow-200 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
          </motion.h1>

          {/* Video Section */}
          <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="w-full bg-center pb-12"
          >
            <div className="max-w-7xl mx-auto px-4">
              <motion.div
                variants={scaleIn}
                className="relative w-full rounded-3xl overflow-hidden"
              >
                <div className="relative aspect-video w-full">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/actualit%C3%A9%2Ftelequel.webp?alt=media&token=02820e98-3d80-4e88-a7bb-5f9a0e6c989b"
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />

                  {!isPlaying && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handlePlayClick}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                    >
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/90 group-hover:bg-white transition-colors">
                        <Play className="w-8 h-8 text-gray-900 ml-1" />
                      </div>
                    </motion.button>
                  )}

                  {isPlaying && (
                    <div className="absolute inset-0">
                      <video className="w-full h-full" controls autoPlay>
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </div>
              </motion.div>
              <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mt-6 mb-4">
                TelQuel parle de nous !
              </h1>
              <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
                L'association Bab Rayan a récemment été mise en lumière par
                TelQuel à travers un reportage poignant, révélant avec justesse
                et sensibilité l'impact de ses actions en faveur des enfants en
                situation de précarité. Avec un regard bienveillant et un talent
                incontestable, l'équipe de TelQuel a su capturer l'essence de
                notre mission : protéger, éduquer et accompagner vers
                l'autonomie les enfants et jeunes issus des milieux les plus
                vulnérables...{" "}
                <motion.button
                  className=" text-red-600 font-bold px-1"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "" : "Voir plus"}
                </motion.button>
              </p>
              {showMore && (
                <motion.p
                  className="text-gray-600 text-sm md:text-base leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  De notre foyer d'accueil à notre école inclusive en passant
                  par notre centre de formation et d'insertion professionnelle,
                  chaque image, chaque témoignage reflète l'engagement quotidien
                  de Bab Rayan pour offrir à ces jeunes un avenir digne et
                  porteur d'espoir. Ce reportage est bien plus qu'un simple
                  témoignage : c'est une fenêtre ouverte sur les parcours de
                  résilience, de courage et de transformation que nous avons la
                  chance d'accompagner chaque jour. Un immense merci à TelQuel
                  pour cette mise en lumière précieuse qui rappelle combien
                  chaque enfant mérite une chance, un soutien et un avenir.
                </motion.p>
              )}
            </div>
          </motion.section>

          <motion.div
            className="flex flex-col items-center gap-9 px-4"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {newsfetched.map((item) => (
              <motion.div
                key={item.id}
                className="md:p-6 py-10 rounded-lg flex flex-col md:flex-row gap-10 items-start justify-center w-full max-w-[100%] md:max-w-[80%] bg-white/40 backdrop-blur-sm shadow-sm mb-8"
                variants={fadeIn}
              >
                {/* Image Section */}
                <motion.div
                  className="flex-shrink-0 w-full md:w-1/2"
                  variants={fadeIn}
                >
                  <Image
                    src={item.pic}
                    alt={item.alt || item.title}
                    width={600}
                    height={400}
                    className="rounded-xl w-full h-[300px] md:h-[400px] object-cover"
                  />
                </motion.div>

                {/* Text Section */}
                <motion.div
                  className="text-start p-4 md:text-left w-full md:w-1/2 flex flex-col justify-between h-full"
                  variants={fadeIn}
                >
                  <div>
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h1>
                    <p className="text-gray-600 mb-6 text-sm md:text-base"
                      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.shortContent) }}>
                    </p>
                  </div>
                  <div className="mt-auto">
                  <motion.button
                      onClick={() => {
                        setSelectedArticle(item);
                        setModalOpen(true);
                      }}
                      className="inline-block bg-yellow-400 rounded-full text-red-600 font-semibold px-6 py-2.5 transition hover:bg-yellow-500"
                      variants={scaleIn}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                        Découvrir plus
                      </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {newdata.map((item) => (
              <motion.div
                key={item.id}
                className="md:p-6 py-10 rounded-lg flex flex-col md:flex-row gap-10 items-start justify-center w-full max-w-[100%] md:max-w-[80%] bg-white/40 backdrop-blur-sm shadow-sm mb-8"
                variants={fadeIn}
              >
                {/* Image Section */}
                <motion.div
                  className="flex-shrink-0 w-full md:w-1/2"
                  variants={fadeIn}
                >
                  <Image
                    src={item.image}
                    alt={item.alt || item.title}
                    width={600}
                    height={400}
                    className="rounded-xl w-full h-[300px] md:h-[400px] object-cover"
                  />
                </motion.div>

                {/* Text Section */}
                <motion.div
                  className="text-start p-4 md:text-left w-full md:w-1/2 flex flex-col justify-between h-full"
                  variants={fadeIn}
                >
                  <div>
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h1>
                    <p className="text-gray-600 mb-6 text-sm md:text-base"
                      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.description) }}>
                    </p>
                  </div>
                  <div className="mt-auto">
                    <button onClick={() => {
                      setSelectedArticle(item);
                      setModalOpen(true);
                    }}>
                      <motion.button
                        className="inline-block bg-yellow-400 rounded-full text-red-600 font-semibold px-6 py-2.5 transition hover:bg-yellow-500"
                        variants={scaleIn}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.buttonText || "Découvrir plus"}
                      </motion.button>
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>


          {selectedArticle && (
            <Modal
              title={<h2 className="text-center w-full text-xl font-semibold">{selectedArticle.title}</h2>}
              centered
              open={modalOpen}
              onCancel={() => setModalOpen(false)}
              width={800}
              styles={{ body: { padding: "20px", maxHeight: "80vh", overflowY: "auto" } }}
              footer={null}
            >
              <div className="flex flex-col items-center">
                {/* Article Image */}
                <Image
                  src={selectedArticle.pic || selectedArticle.image}
                  className="w-full h-auto max-h-[300px] object-cover rounded-lg mb-4 shadow-md"
                  alt={selectedArticle.title}
                  width={500}
                  height={300}
                />

                {/* Content Section */}
                <div className="max-h-[60vh] overflow-y-auto px-4 text-gray-700 leading-relaxed text-lg">
                  <p dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(selectedArticle.content || selectedArticle.description)
                  }}></p>
                </div>
              </div>
            </Modal>
          )}
        </main>
      )}
    </>
  );
}
