"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const TeamMember = ({ name, title, imageUrl }) => (
  <motion.div
    variants={fadeIn}
    className="flex flex-col items-center text-center p-4"
  >
    <div className="relative w-48 h-48 rounded-full overflow-hidden mb-3">
      <Image
        src={imageUrl}
        alt={name}
        width={192}
        height={192}
        className="object-cover"
      />
    </div>
    <h3 className="text-yellow-300 font-semibold">{name}</h3>
    <p className="text-white text-sm whitespace-pre-line">{title}</p>
  </motion.div>
);

const HeroSection = () => (
  <div className="relative">
    <div
      className="h-[750px] bg-cover bg-center"
      style={{ backgroundImage: "url('/gouvernance.png')" }}
    />
    <div className="absolute bottom-2 right-4 p-6 max-w-5xl">
      <div className="text-white p-4 lg:p-12 max-w-4xl mx-auto rounded">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">GOUVERNANCE</h2>
        <p className="text-lg font-semibold text-yellow-300">
          Engagés et unis autour d’un même espoir : un projet holistique pour
          chaque enfant accueilli par Bab Rayan
        </p>
        <p className="text-md lg:text-lg">
          « Au sein de l’association Bab Rayan, dédiée à la protection, au
          développement de l’enfance et à l’insertion professionnelle des
          jeunes, nous rassemblons des personnes unies par une même foi et une
          vision commune... »
        </p>
      </div>
    </div>
  </div>
);

const InfoCard = ({ title, description }) => (
  <motion.div
    variants={fadeIn}
    className="bg-red-700 p-12 shadow-xl flex flex-col h-full"
  >
    <h2 className="text-2xl font-bold text-yellow-300 mb-6">{title}</h2>
    <p className="text-white text-lg leading-relaxed">{description}</p>
  </motion.div>
);

export default function Gouvernance() {

  const teamData = [
    {
      name: 'Fatima Zahra Hamroudi',
      title: 'Fondatrice Présidente',
      imageUrl: '/members/Fatima Zohra Ratibe.jpeg'
    },
    {
      name: 'Hind Ratiba',
      title: 'Membre Fondateur',
      imageUrl: '/members/Hind Ratibe.jpeg'
    },
    {
      name: 'Abdelmoula Ratibe',
      title: 'Membre Fondateur',
      imageUrl: '/members/moula.jpeg'
    },
    {
      name: 'Driss Lalami',
      title: 'Membre Fondateur\nTrésorier Adjoint',
      imageUrl: '/members/Driss El Alami.jpeg'
    },
    {
      name: 'Mouniji Salim Sefrioui',
      title: 'Membre Fondateur\nTrésorier général',
      imageUrl: '/members/sefrioui.jpeg'
    },
    {
      name: 'Mohamed Jamal Lahlouji',
      title: 'Membre Fondateur\nVice-président',
      imageUrl: '/members/jamal.jpeg'
    },
    {
      name: 'Anas Guennoun',
      title: 'Vice-président',
      imageUrl: '/members/Anas Guennoun.png'
    },
    {
      name: 'Hamza Laghari',
      title: 'Vice-président',
      imageUrl: '/members/Hamza Laghrari.jpeg'
    },
    {
      name: 'Reda Essakalli',
      title: 'Conseiller en communication',
      imageUrl: '/members/Reda Essakalli.jpeg'
    },
    {
      name: 'Jihane Lahbabi Berrada',
      title: 'Conseillère en partenariats',
      imageUrl: '/members/Jihane Lahbabi Berrada.jpg'
    }
  ];

  const reports = [
    { year: 2024, imageUrl: '/gouvernance/rapportPhotos/soon.jpg', pdfUrl: '/about/Rapport Annuel - Association Bab Rayan 2024.pdf' },
    { year: 2023, imageUrl: '/gouvernance/rapportPhotos/rap2023.webp', pdfUrl: '/about/Rapport annuel -Association Bab Rayan 2023.pdf' },
    { year: 2022, imageUrl: '/gouvernance/rapportPhotos/rap2022.webp', pdfUrl: '/about/Rapport Annuel - Association Bab Rayan 2022.pdf' },
    { year: 2021, imageUrl: '/gouvernance/rapportPhotos/rap2021.webp', pdfUrl: '/about/Rapport Annuel - Association Bab Rayan 2021.pptx' },
    { year: 2020, imageUrl: '/gouvernance/rapportPhotos/rap2020.webp', pdfUrl: '/about/Rapport Annuel - Association Bab Rayan 2020.pdf' },
    { year: 2019, imageUrl: '/gouvernance/rapportPhotos/rap2019.webp', pdfUrl: '/about/Rapport Annuel - Association Bab Rayan 2019.pdf' },
    { year: 2018, imageUrl: '/gouvernance/rapportPhotos/rap2018.png', pdfUrl: '/about/Rapport Annuel - Association Bab Rayan 2018.pdf' },
    { year: 2017, imageUrl: '/gouvernance/rapportPhotos/rap2017.png', pdfUrl: '/about/Rapport Annuel - Association Bab Rayan 2017.pdf' },
    { year: 2016, imageUrl: '/gouvernance/rapportPhotos/rap2016.png', pdfUrl: '/about/Rapport Annuel - Association Bab Rayan 2016.pdf' },
  ];


  const cards = [
    {
      title: "CONSEIL D'ADMINISTRATION",
      description: `Le Conseil d'administration est l'instance décisionnaire.
        Il se réunit au moins quatre fois par an.
        Son rôle consiste à adopter le fonctionnement, déterminer la politique générale et suivre les orientations stratégiques.
        Il est composé de membres administrateurs.`
    },
    {
      title: "DIRECTION GÉNÉRALE",
      description: `La Direction Générale gère les établissements et services sous l'autorité du Représentant de l'État. Elle assure une fonction stratégique dans la gestion des affaires, en lien avec le Conseil d'Administration et l'association, ainsi que le contexte économique, politique et scientifique.`
    },
    {
      title: "PARTENAIRES INSTITUTIONNELS",
      description: `INDH (Initiative Nationale pour les Droits de l'Homme) Wilaya Grand Casablanca AREF Grand Casablanca (Académie Régional de l'Enseignement et de la Formation) Entraide Nationale Casablanca Anfa.`
    }
  ];

  return (
    <main>
      <HeroSection />
      {/* members -------- */}
      <section className="w-full bg-[url('/teamback.png')] bg-cover bg-center py-16 px-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="p-4 text-2xl md:text-4xl text-white font-bold text-center mb-8 relative">
            MEMBRES DU BUREAU
            <div className="w-24 md:w-48 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h1>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {teamData.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </motion.div>
        </div>
      </section>
      {/* raports -------- */}
      <section className="bg-pink-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2  gap-8"
          >
            {reports.map((report, index) => (
              <motion.div
                variants={fadeIn}
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden text-center"
              >
                {/* Image */}
                <div className="h-80 overflow-hidden">
                  <img
                    src={report.imageUrl}
                    alt={`Rapport Annuel ${report.year}`}
                    className="w-full h-full "
                  />
                </div>

                {/* Text Content */}
                <div className="p-4">
                  <h3 className="text-red-600 font-bold text-lg">
                    Rapport Annuel {report.year}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Compte rendu global des activités de l&apos;Association Bab Rayan
                  </p>

                  {/* Download Button */}
                  <a
                    href={report.pdfUrl}
                    download={`Rapport_Annuel_${report.year}.pdf`} // Forces file download
                    className="inline-block bg-yellow-300 text-red-600 font-semibold py-2 px-4 rounded hover:bg-yellow-400 transition"
                  >
                    Télécharger le PDF
                  </a>
                </div>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>
      {/* cards ---------- */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </motion.div>
      </section>
    </main>
  );
}
