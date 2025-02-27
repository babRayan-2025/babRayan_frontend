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
      <img
        src={imageUrl}
        alt={name}
        width={192}
        height={192}
        className="object-cover"
        loading="lazy"
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
      style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/gouvernance%2Fgouv.avif?alt=media&token=fde564d6-81ad-45d1-ba3f-58d6b83058d8')" }}
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
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/gouvernance%2Fmembers%2FFatima%20Zohra%20Ratibe.webp?alt=media&token=f31414cf-9b7b-429d-b281-ef85c79281a4'
    },
    {
      name: 'Hind Ratiba',
      title: 'Membre Fondateur',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/gouvernance%2Fmembers%2FHind%20Ratibe.webp?alt=media&token=4bd27475-1f56-492c-95ca-def39b819cd1'
    },
    {
      name: 'Abdelmoula Ratibe',
      title: 'Membre Fondateur',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/gouvernance%2Fmembers%2Fmoula.webp?alt=media&token=539f9fbf-86fb-4b4c-8e5f-9ec37addbd90'
    },
    {
      name: 'Driss Lalami',
      title: 'Membre Fondateur\nTrésorier Adjoint',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/gouvernance%2Fmembers%2FDriss%20El%20Alami.webp?alt=media&token=2999a16a-edf8-43dc-b84c-9724b6778455'
    },
    {
      name: 'Mouniji Salim Sefrioui',
      title: 'Membre Fondateur\nTrésorier général',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/gouvernance%2Fmembers%2Fsefrioui.webp?alt=media&token=fba582c8-826f-4477-8ee3-3ecbce4c28e4'
    },
    {
      name: 'Mohamed Jamal Lahlouji',
      title: 'Membre Fondateur\nVice-président',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/gouvernance%2Fmembers%2Fjamal.webp?alt=media&token=10b06c7d-3602-4b86-8069-f90b4a9a3881'
    },
    {
      name: 'Anas Guennoun',
      title: 'Vice-président',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/gouvernance%2Fmembers%2FAnas%20Guennoun.webp?alt=media&token=c6e18eb0-ff69-4574-a3c2-112c1d796c61'
    },
    {
      name: 'Hamza Laghari',
      title: 'Vice-président',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/gouvernance%2Fmembers%2FHamza%20Laghrari.webp?alt=media&token=62fcf63e-dbd1-4b88-a79f-a8e6367568e4'
    },
    {
      name: 'Reda Essakalli',
      title: 'Conseiller en communication',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/gouvernance%2Fmembers%2FReda%20Essakalli.webp?alt=media&token=4fdfc2d5-d711-4933-8245-7c3b160a3977'
    },
    {
      name: 'Jihane Lahbabi Berrada',
      title: 'Conseillère en partenariats',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/gouvernance%2Fmembers%2FJihane%20Lahbabi%20Berrada.webp?alt=media&token=5861feb7-a76f-4993-b50b-eab3ff024932'
    }
  ];

  const reports = [
    { year: 2024, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/gouvernance%2Fsoon.webp?alt=media&token=4bacc6e1-6641-4edf-b09b-279e565df588', pdfUrl: '/about/Rapport Annuel - Association Bab Rayan 2024.pdf' },
    { year: 2023, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/gouvernance%2Frap2023.webp?alt=media&token=e16fae63-52de-4c4d-9241-bbfb10bda742', pdfUrl: '/about/Rapport annuel -Association Bab Rayan 2023.pdf' },
    { year: 2022, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/gouvernance%2Frap2022.webp?alt=media&token=87607d16-eef8-4960-b2a9-c04451f07046', pdfUrl: '/about/Rapport Annuel - Association Bab Rayan 2022.pdf' },
    { year: 2021, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/gouvernance%2Frap2021.webp?alt=media&token=f45865e2-ee62-4b6f-9665-c43cbfc8abf0', pdfUrl: '/about/Rapport Annuel - Association Bab Rayan 2021.pptx' },
    { year: 2020, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/gouvernance%2Frap2020.webp?alt=media&token=216db117-3edb-4631-84d8-eeb57f5ae054', pdfUrl: '/about/Rapport Annuel - Association Bab Rayan 2020.pdf' },
    { year: 2019, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/gouvernance%2Frap2019.webp?alt=media&token=eb0201a6-33cb-407a-a285-716893c84786', pdfUrl: '/about/Rapport Annuel - Association Bab Rayan 2019.pdf' },
    { year: 2018, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/gouvernance%2Frap2018.webp?alt=media&token=deeddb4c-5330-4001-b7c3-92b3144a0e4f', pdfUrl: '/about/Rapport Annuel - Association Bab Rayan 2018.pdf' },
    { year: 2017, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/gouvernance%2Frap2017.webp?alt=media&token=09ed3975-ad1b-4286-b570-537fd34c235e', pdfUrl: '/about/Rapport Annuel - Association Bab Rayan 2017.pdf' },
    { year: 2016, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/gouvernance%2Frap2016.webp?alt=media&token=ce18e57d-085b-4e9a-b73f-73f71a0d0722', pdfUrl: '/about/Rapport Annuel - Association Bab Rayan 2016.pdf' },
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
                    loading="lazy"

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
