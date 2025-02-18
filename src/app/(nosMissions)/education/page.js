"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "../../../components/layout/Footer";

export default function Education() {
  const items = [
    {
      src: "/education/Accompagnement3.jpeg",
      text: "PROGRAMME NATIONAL DE LA LANGUE ARABE",
    },
    {
      src: "/education/1.JPG",
      text: "PROGRAMME FLM DE LA MISSION FRANÇAISE",
    },
    {
      src: "/education/Accompagnement 1.jpeg",
      text: "PROGRAMME BRITANNIQUE DE LA LANGUE ANGLAISE",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <main className="">
      {/*  */}
      <motion.div
        className="relative w-full h-[750px] bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/Parrainer/5.jpg"
            alt="Cooking Activity"
            layout="fill"
            objectfit="cover"
            className="opacity-80 object-cover"
          />
        </div>
        <motion.div
          className="relative z-5 flex items-center justify-end h-full p-8"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="p-6 max-w-2xl sm:m-4 text-left absolute bottom-6 right-6">
            <h2 className="text-5xl font-bold mb-4">ÉDUCATION ET SCOLARITÉ</h2>
            <p className="text-lg leading-relaxed">
              Bab Rayan transforme les parcours des enfants en difficulté grâce
              à une éducation adaptée et un soutien familial, en garantissant :
            </p>
            <ul className="text-lg">
              <li>• Un suivi éducatif personnalisé,</li>
              <li>• Le plaisir d&apos;apprendre,</li>
              <li>• Des activités extrascolaires enrichissantes ;</li>
              <li>
                • Un accompagnement face aux défis scolaires et familiaux.
              </li>
            </ul>
          </div>
          {/* ecole palmier */}
        </motion.div>
        <div className="w-full bg-white bg-cover bg-center py-16 px-6">
          <h1 className="p-4 text-black text-2xl md:text-4xl font-bold text-center mb-8 md:mx-44 relative">
            ÉCOLE PALMIER
            <div className="w-44 md:w-48 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h1>
          <motion.div
            className="max-w-7xl mx-auto flex flex-col items-center md:flex-row "
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.div className="flex-shrdink-0 mb-6 md:mb-0 md:mr-8" d>
              <div className="relative  rounded-xl border-3 shadow-2xl border-r-gray-500 overfldow-hidden">
                <img
                  src="/education/girl_educate.jpg"
                  alt="Présidente"
                  layout="fill"
                  objectfit="cover"
                  style={{ borderRadius: "1rem", width: "500px" }}
                />
              </div>
            </motion.div>

            <motion.div className="flex-1" variants={fadeInUp}>
              <p className="text-black text-xl font-medium leading-relaxed mb-4">
                L’école Palmier est un établissement privé à caractère social,
                gratuit, agréé par le Ministère de l’Éducation nationale, du
                Préscolaire et des Sports.
              </p>
              <p className="text-black text-xl font-medium leading-relaxed mb-6">
                Chaque année, de nombreux enfants orphelins, abandonnés, issus
                de mères célibataires, de familles isolées ou vivant dans la rue
                interrompent leur scolarité, confrontés à des difficultés
                insurmontables. Les principales causes de l’échec scolaire chez
                l’enfant s’expliquent par une négligence des diagnostics
                précoces des différents troubles de l’apprentissage et de
                l’attention, ainsi que par des retards dans le développement
                psychologique et psychomoteur.
              </p>
            </motion.div>
          </motion.div>
        </div>
        {/* pedagogie */}
        <div className="w-full bg-red-700 bg-cover bg-center py-16 px-6">
          <h1 className="p-4 text-white text-2xl md:text-4xl font-bold text-center mb-8 md:mx-44 relative">
            PÉDAGOGIE 3.0
            <div className="w-44 md:w-48 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h1>
          <motion.div
            className="max-w-7xl mx-auto items-center pt-8 "
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.div
              className=""
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="text-white text-lg text-center font-medium mb-16">
                L’école a opté pour la pédagogie 3.0, une approche adaptée aux
                besoins des enfants ayant des troubles de l’apprentissage. Elle
                responsabilise les élèves et leur permet de prendre conscience
                de la conséquence de leurs décisions. De plus, l’enfant est le
                seul à pouvoir réellement agir sur la réussite de son
                apprentissage. En choisissant lui-même la façon dont il apprend,
                la pédagogie 3.0 permet une meilleure implication, améliore son
                attention, sa motivation mais aussi sa mémorisation. Elle est
                basée sur 3 piliers importants :
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center">
              <motion.div
                className="max-w-7xl mx-auto flex flex-col items-center pt-8 md:flex-row md:items-start"
                variants={fadeInUp}
              >
                <div className="text-yellow-300 text-[120px] font-semibold  -mt-10">
                  1
                </div>
                <div className="text-white text-3xl md:text-5xl font-bold ">
                  LE DÉVELOPPEMENT
                  <br />
                  DE L’AUTONOMIE
                </div>
              </motion.div>
              <motion.div
                className="max-w-7xl mx-auto flex flex-col items-center pt-8 md:flex-row md:items-start"
                variants={fadeInUp}
              >
                <div className="text-yellow-300 text-[120px] font-semibold  -mt-10">
                  2
                </div>
                <div className="text-white text-3xl md:text-5xl font-bold ">
                  LA PERMANENCE
                  <br />
                  DE L’APPRENTISSAGE
                </div>
              </motion.div>
              <motion.div
                className="max-w-7xl mx-auto flex flex-col items-center pt-8 md:flex-row md:items-start"
                variants={fadeInUp}
              >
                <div className="text-yellow-300 text-[120px] font-semibold  -mt-10">
                  3
                </div>
                <div className="text-white text-3xl uppercase md:text-5xl font-bold ">
                  LE DÉVELOPPEMENT
                  <br />
                  DE la créativité
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/* sERVICES INTÉGRÉS */}
        <motion.div
          className="relative bg-white py-12 px-6 text-center justify-center"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <h1 className="p-4 text-black text-2xl md:text-4xl font-bold text-center mb-8 md:mx-44 relative">
            SERVICES INTÉGRÉS
            <div className="w-44 md:w-60 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h1>
          <p className="text-xl md:font-semibold text-black lg:mx-64 m-8 mb-12 md:m-24">
            L’école prépare les enfants aux défis de demain dans un monde de
            plus en plus globalisé, le programme choisi par l’école est par
            conséquent trilingue :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto place-items-center">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-2xl"
                variants={fadeInUp}
              >
                <Image
                  src={item.src}
                  alt={item.text}
                  width={390}
                  height={200}
                  className="md:w-[44] h-80 sm:w-[24rem] sm:h-[20rem] xs:w-[22rem] xs:h-[19rem] object-cover"
                />
                <div className="absolute bottom-0 bg-red-700 text-white text-center py-3 px-3 w-full">
                  <p className="text-sm font-semibold">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* encadrement  */}
        <motion.div
          className="relative bg-pink-100 py-12 px-6"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.div variants={fadeInUp}>
              <h1 className="p-4 text-2xl md:text-4xl text-gray-950 font-bold text-center mb-8 relative">
                SUIVI ET ENCADREMENT DE L&apos;ENFANT
                <div className="w-24 md:w-48 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-6"></div>
              </h1>
              <p className="text-lg text-gray-900 font-semibold mx-6">
                Le programme a la particularité d’inclure des activités
                parascolaires dans le cursus académique, à savoir, des ateliers
                d’expression libre de peinture, des stages de cuisine, du
                jardinage, des ateliers de robotique et de bricolage, des
                activités technologiques et un programme sportif d’éducation
                physique.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 mx-6  justify-center gap-36 my-20">
                {[
                  {
                    src: "/education/picto/site bab rayan école-08.png",
                    text: "Suivi psychologique personnalisé",
                  },
                  {
                    src: "/education/picto/site bab rayan école-06.png",
                    text: "Accompagnement spécialisé des troubles Dys et TDA",
                  },
                  {
                    src: "/education/picto/site bab rayan école-04.png",
                    text: "Aménagement des espaces d’apprentissage de façon ludique",
                  },
                  {
                    src: "/education/picto/site bab rayan école-02.png",
                    text: "Accompagnement holistique",
                  },
                  {
                    src: "/education/picto/site bab rayan école-09.png",
                    text: "Aire de développement psychomoteur",
                  },
                  {
                    src: "/education/picto/site bab rayan école-07.png",
                    text: "Programme sportif pour l’éducation des valeurs et du leadership",
                  },
                  {
                    src: "/education/picto/site bab rayan école-05.png",
                    text: "Cantine gratuite pour assurer une nutrition équilibrée",
                  },
                  {
                    src: "/education/picto/site bab rayan école-03.png",
                    text: "Distribution de cartables et de matériel scolaire",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center mx-auto d-flex justify-items-center text-gray-700 font-semibold md:text-lg"
                    variants={fadeInUp}
                  >
                    <Image
                      src={item.src}
                      className="w-44 h-40  "
                      width={40}
                      height={40}
                      alt={item.text}
                    />
                    {item.text}
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto place-items-center">

                <Image
                  src="/education/WhatsApp Image 2025-01-24 at 15.56.45.jpeg"
                  className="w-full h-72 rounded-3xl shadow-2xl object-cover"
                  width={100}
                  height={100}
                  alt="Art culinaire"
                />
                <Image
                  src="/education/2.JPG"
                  className="w-full h-72 rounded-3xl shadow-2xl object-cover"
                  width={100}
                  height={100}
                  alt="Art culinaire"
                />
                <Image
                  src="/education/3.jpeg"
                  className="w-full h-72 rounded-3xl shadow-2xl object-cover"
                  width={100}
                  height={100}
                  alt="Art culinaire"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
        {/* ACCOMPAGNEMENT PARENTAL */}
        <div className="w-full bg-white bg-cover bg-center py-16 px-6">
          <div className="p-4  text-center mb-8 md:mx-44 relative">
            <h1 className="text-black text-2xl md:text-4xl font-bold">
              ACCOMPAGNEMENT PARENTAL
            </h1>
            <p className="text-2xl text-red-700 font-semibold">
              PROMOUVOIR UNE COMMUNAUTÉ ÉDUCATIVE
            </p>
            <div className="w-44 md:w-48 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
          </div>
          <motion.div
            className="max-w-7xl mx-auto flex flex-col items-center pt-8 md:flex-row md:items-start"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex-shrink-0 mb-6 md:mb-0 md:mr-8"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-80 h-60 rounded-xl border-3 shadow-2xl border-r-gray-500 overflow-hidden">
                <Image
                  src="/education/WhatsApp Image 2025-01-24 at 15.47.51.jpeg"
                  alt="Présidente"
                  layout="fill"
                  objectfit="cover shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div className="flex-1" variants={fadeInUp}>
              <p className="text-red-700 text-xl font-semibold  mb-4">
                EN AIDANT LES PARENTS, NOUS AIDONS LES ENFANTS
              </p>
              <p className="text-black text-lg font-medium md:mr-24 mb-6">
                L&apos;école Palmier, tant pour le préscolaire que pour le
                primaire, s&apos;adresse aux enfants du foyer Bab Rayan ainsi
                qu&apos;aux externes issus de milieux défavorisés. Les parents
                de cette communauté bénéficient d&apos;ateliers d&apos;éducation
                parentale fondés sur le programme de la médiation familiale,
                élaborés par le Ministère de la Solidarité, de l&apos;Insertion
                Sociale et de la Famille et visant à approfondir la culture de
                l’éducation parentale en guidant les parents à communiquer
                efficacement avec leurs enfants, les protégeant des risques et
                leur transmettant des valeurs positives.
              </p>
            </motion.div>
          </motion.div>
        </div>
        {/* L’ÉCOLE EN CHIFFRES */}
        <motion.div
          className="bg-red-700 py-12 px-6 text-white relative"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="p-4 text-2xl md:text-4xl font-bold text-center mb-8 relative">
              L’ÉCOLE EN CHIFFRES
              <div className="w-24 md:w-48 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 my-6"></div>
            </h1>

            <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
              {[
                {
                  picto: "/education/site bab rayan école-10.png",
                  numb: "+225",
                  title:
                    "élèves : l’école accueille tous les enfants du foyer et aussi des enfants externes défavorisés",
                },
                {
                  picto: "/education/site bab rayan école-11.png",
                  numb: "23",
                  title: "encadrants",
                },
                {
                  picto: "/CFI/site bab rayan CFI-09.png",
                  numb: "1200",
                  title: "bénévoles",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-4"
                  variants={fadeInUp}
                >
                  <Image
                    src={value.picto}
                    alt={value.title}
                    width={64}
                    height={64}
                    className="w-52 h-44"
                  />

                  <p className="text-5xl font-extrabold text-center">
                    {value.numb}
                  </p>
                  <p className="text-base font-medium mx-16">{value.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <Footer />
      </motion.div>
    </main>
  );
}
