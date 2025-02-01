"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import lampe from "../../../assets/PNG/lampe.png";
import sign from "../../../assets/PNG/flaiche.png";

export default function Formation() {
  const items = [
    {
      src: '/CFI/11.JPG',
      text: 'DES FORMATIONS DANS DES SECTEURS PORTEURS',
    },
    {
      src: '/CFI/DSC_9647.JPG',
      text: 'STAGE ET INSERTION PROFESSIONNELLE',
    },
    {
      src: '/CFI/DSC06880.jpg',
      text: 'ENCOURAGER L’ENTREPRENEURIAT',
    },
    {
      src: '/CFI/111.jpeg',
      text: 'FAVORISER L’INSERTION SOCIALE ET ÉCONOMIQUE',
    },
    {
      src: '/CFI/222.jpeg',
      text: 'COURS DE LANGUE : ANGLAIS ET FRANÇAIS',
    },
    {
      src: '/CFI/DSC06862.jpg',
      text: 'ATELIERS DE SOFT SKILLS ET BUREAUTIQUE',
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
    <main>
      {/*  */}
      <motion.div
        className="relative w-full h-[750px] bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/CFI/1.jpg"
            alt="Cooking Activity"
            layout="fill"
            objectFit="cover"
            className="opacity-80"
          />
        </div>
        <motion.div
          className="relative z-5 flex items-center justify-end h-full p-8"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="p-6 max-w-xl sm:m-4 text-left absolute bottom-6 right-8">
            <h2 className="text-4xl font-bold mb-4">
              CENTRE DE FORMATION ET INSERTION CFI
            </h2>
            <p className="text-md leading-relaxed">
              Dans une société où l&apos;accès à l&apos;éducation et à la
              formation reste un privilège, les jeunes issus de milieux sociaux
              précaires sont souvent exclus de ces opportunités essentielles.
              Cette marginalisation est encore plus marquée pour ceux ayant
              grandi dans des établissements de protection sociale, où la
              transition vers l’âge adulte devient une période particulièrement
              fragile. Pour répondre à ces défis, l’association Bab Rayan a créé
              en 2022 le Centre de Formation et d’Insertion (CFI), offrant un
              accompagnement personnalisé à travers le programme CARE.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Formation */}
      <div className="w-full bg-red-700 bg-cover bg-center py-16 px-6">
        <h1 className="p-4 text-white text-2xl md:text-4xl font-bold text-center mb-8 md:mx-44 relative">
          FORMATIONS PRATIQUES POUR UNE INSERTION PROFESSIONNELLE RÉUSSIE
          <div className="w-44 md:w-48 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
        </h1>
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
                src="/CFI/2.JPG"
                alt="Présidente"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.div>

          <motion.div className="flex-1" variants={fadeInUp}>
            <p className="text-white text-xl font-medium leading-relaxed mb-4">
              Bab Rayan propose des formations intensives aux métiers de
              l’hôtellerie et de la restauration, axées à 80 % sur la pratique
              et dispensées en interne. Ces apprentissages sont complétés par
              des stages en entreprise grâce à des partenariats solides avec des
              acteurs du secteur. Alignées sur les normes professionnelles, ces
              formations permettent aux jeunes d’acquérir des compétences en
              phase avec les exigences du marché et de bénéficier de réelles
              perspectives d’emploi.
            </p>
            <p className="text-white text-xl font-medium leading-relaxed mb-6">
              Les étudiants du CFI mettent en œuvre leurs apprentissages tout en
              développant des valeurs essentielles de citoyenneté et de
              solidarité.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Programme Section */}
      <motion.div
        className="relative bg-pink-100 py-12 px-6"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div variants={fadeInUp}>
            <h1 className="p-4 text-2xl md:text-4xl font-bold text-center mb-8 relative">
              UN PROGRAMME ACCESSIBLE ET DIVERSIFIÉ
              <p className="text-red-700 text-base">
                LE CFI ACCUEILLE CHAQUE ANNÉE 120 STAGIAIRES RÉPARTIS SUR TROIS
                FILIÈRES
              </p>
              <div className="w-24 md:w-48 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-6"></div>
            </h1>
            <div className="flex flex-wrap justify-center gap-36 my-20">
              {[
                { src: "/CFI/4.png", text: "Art culinaire" },
                { src: "/CFI/5.png", text: "Boulangerie/Pâtisserie" },
                { src: "/CFI/6.png", text: "Service en restauration" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center font-semibold text-lg"
                  variants={fadeInUp}
                >
                  <Image
                    src={item.src}
                    className="w-40 h-40"
                    width={40}
                    height={40}
                    alt={item.text}
                  />
                  {item.text}
                </motion.div>
              ))}
            </div>
            <p className="text-lg font-semibold mx-6">
              Ces formations gratuites, certifiantes et d’une durée d’un an sont
              ouvertes aux jeunes de plus de 18 ans issus du foyer Bab Rayan,
              d’autres établissements de protection sociale (EPS) et de familles
              en situation de précarité dans la région du Grand Casablanca. Le
              centre est agréé par l’Entraide Nationale.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Intégrés Section */}
      <div className="bg-white">
        <div className="mt-12">
          <h1 className="p-4 text-2xl md:text-4xl font-bold text-center mb-8 relative">
            SERVICES INTÉGRÉS
            <div className="w-24 md:w-48 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h1>

          <motion.div
            className="flex flex-col items-center gap-9 px-4"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {[
              {
                src: "/CFI/3.jpeg",
                title: "PARTENARIATS STRATÉGIQUES POUR L’EMPLOI",
                description:
                  "L’association collabore avec des entreprises locales et internationales de renom, telles que Newrest et Hyatt Regency, pour garantir des opportunités de formation et d’embauche de qualité.",
              },
              {
                src: "/CFI/7.jpg",
                title: "ACCOMPAGNEMENT VERS UNE INTÉGRATION DURABLE",
                description:
                  "Le CFI assure un suivi personnalisé avec les formateurs et les responsables des entreprises partenaires pour garantir l’intégration réussie des lauréats.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg flex flex-col md:flex-row gap-7 items-center justify-center w-full max-w-[90%] md:max-w-[70%]"
                variants={fadeInUp}
              >
                <motion.div className="flex-shrink-0 w-full shadow-2xl md:w-[30%]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="rounded-xl w-full h-auto md:h-[250px] object-cover"
                  />
                </motion.div>
                <motion.div className="text-center md:text-left">
                  <h1 className="text-xl md:text-2xl font-bold text-red-700 mb-2">
                    {item.title}
                  </h1>
                  <p className="text-gray-700 mb-4 text-sm font-semibold md:text-base">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Nos service Section */}
      <motion.div
        className="bg-red-700 py-12 px-6 text-white relative"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="p-4 text-2xl md:text-4xl font-bold text-center mb-8 relative">
            LE CENTRE EN CHIFFRES
            <div className="w-24 md:w-48 h-2 bg-yellow-200 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {                 picto: "/CFI/120.png",
                numb:"120",
                title: "Jeunes en formation" },
              {
                picto: "/CFI/site bab rayan CFI-06.png",
                numb:"+350",
                title: "Notre capacité pourra atteindre bénéficiaires",
              },
              { picto: "/CFI/site bab rayan CFI-07.png", numb:"7",title: "encadrants" },
              { picto: "/CFI/site bab rayan CFI-08.png", numb:"100%", title: "Taux de recrutement" },
              { picto: "/CFI/site bab rayan CFI-09.png", numb:"290", title: "bénévoles" },
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
                  className="w-44 h-44"
                />

                <p className="text-5xl font-extrabold text-center">
                {value.numb}
                </p>
                <p className="text-base font-medium">{value.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <Image
          src={sign}
          className="w-30 md:w-80 absolute top-[4%] md:top-[1%] right-[65%] md:right-[84%]"
          alt="Les Ftours Bab Rayan"
        />
        <Image
          src={lampe}
          className="w-20 md:w-40 absolute top-[2%] md:top-[2%] left-[80%] md:left-[91%]"
          alt="Les Ftours Bab Rayan"
        />
      </motion.div>

      {/* Programme CARE Section */}
      <motion.div
        className="relative bg-pink-100 py-12 px-6 text-center justify-center"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
      >
        <h1 className="p-4 text-black text-2xl md:text-4xl font-bold text-center mb-8 md:mx-44 relative">
          PROGRAMME CARE :<br />
          DÉVELOPPER DES COMPÉTENCES POUR L’AVENIR
          <div className="w-44 md:w-60 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
        </h1>
        <p className="text-xl md:font-semibold md:mx-56 m-8 mb-12 md:m-24">
          CARE est un programme complet qui allie formation, accompagnement, et
          insertion professionnelle pour améliorer l’employabilité des jeunes en
          difficulté. Sa réussite repose sur une approche locale et adaptée aux
          besoins du marché, ainsi que sur un suivi personnalisé de chaque
          bénéficiaire.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto place-items-center">
        {items.map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
              variants={fadeInUp}
            >
              <Image
                src={item.src}
                alt={item.text}
                width={290}
                height={200}
                className="md:w-[44] h-80 object-cover"
              />
              <div className="absolute bottom-0 bg-red-700 text-white text-center py-3 w-full">
                <p className="text-sm font-semibold">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}