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
      style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Fgouvernance.jpg?alt=media&token=5dc05703-cd23-4400-b0dd-cde467fdc03f')" }}
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
      name: 'Fatima Zohra Hamroudi',
      title: 'Fondatrice Présidente',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Fzohra.webp?alt=media&token=c6b8c9bf-de11-4bcf-b24b-0c232c2896cd'
    },
    {
      name: 'Abdelmoula Ratibe',
      title: 'Membre Fondateur',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Fratib.webp?alt=media&token=09465e00-065d-4910-ae2c-da6cf081c470'
    },
    {
      name: 'Mounji Salim Sefrioui',
      title: 'Membre Fondateur\nTrésorier général',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Fmounji.webp?alt=media&token=f2ade29e-ce38-4c2d-a101-6529e80ba0ca'
    },
    {
      name: 'Driss Lalami',
      title: 'Membre Fondateur\nTrésorier Adjoint',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Fdriss%20alami.webp?alt=media&token=f5611e82-9366-4029-ba0f-c8afe123b28f'
    },
    {
      name: 'Mohamed Jamal Lahjouji',
      title: 'Membre Fondateur\nVice-président',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Fhajouji.webp?alt=media&token=cf1117bb-4f9d-4c53-9954-e2ec6bf88b9c'
    },
    {
      name: 'Anas Guennoun',
      title: 'Vice-président',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Fanas.jpg?alt=media&token=9fae81ad-f8ca-4e7c-98b0-83afa424f25d'
    },
    {
      name: 'Hamza Laghari',
      title: 'Vice-président',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Fhamza.webp?alt=media&token=34400ef8-a909-4085-80cc-7412131c3b53'
    },
    {
      name: 'Reda Essakalli',
      title: 'Conseiller en communication',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Freda.webp?alt=media&token=d34d0ce7-413d-499d-a40b-6763e8d46c5a'
    },
    {
      name: 'Jihane Lahbabi Berrada',
      title: 'Membre du Bureau',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Fjihan.webp?alt=media&token=e3ad8e9b-bd45-49ab-919c-b5a2c5c54176'
    }
  ];

  const reports = [
    {
      year: 2024,
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Frapport%20images%2FRapport%20annuel%202024.jpg?alt=media&token=d7cd186e-ac61-489b-9b88-a896257a69a2',
      pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Frapport%20pdf%2FRapport%20Annuel%20-%20Association%20Bab%20Rayan%202024.pdf?alt=media&token=01c22454-24bd-490e-90ef-c727dfbd3ec0'
    },
    {
      year: 2023,
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Frapport%20images%2FRapport%20annuel%202023.jpg?alt=media&token=5829e04c-d600-4eea-96e4-7616d3771dea',
      pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Frapport%20pdf%2FRapport%20annuel%20-%20Association%20Bab%20Rayan%202023.pdf?alt=media&token=1d5590bf-ddfa-4d08-a9ce-d2ca5c83e167'
    },
    {
      year: 2022,
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Frapport%20images%2FRapport%20annuel%202022.jpg?alt=media&token=3577617b-989b-4fb6-9668-68f6f3a642d9',
      pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Frapport%20pdf%2FRapport%20Annuel%20-%20Association%20Bab%20Rayan%202022.pdf?alt=media&token=d39b5ad5-3e0b-485f-869a-4f7b992d804f'
    },
    {
      year: 2021,
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Frapport%20images%2FRapport%20annuel%202021.jpg?alt=media&token=e03780be-9d81-4681-824b-4658c3faf268',
      pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Frapport%20pdf%2FRapport%20Annuel%20-%20Association%20Bab%20Rayan%202021.pdf?alt=media&token=b2d16b0c-e1cb-40a2-ae01-973f99014f9d'
    },
    {
      year: 2020,
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Frapport%20images%2FRapport%20annuel%202020.jpg?alt=media&token=fab7730e-4a13-430b-a341-b423ead4e572',
      pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Frapport%20pdf%2FRapport%20Annuel%20-%20Association%20Bab%20Rayan%202020.pdf?alt=media&token=74aca817-8b99-4126-acc1-c9d71b42a373'
    },
    {
      year: 2019,
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Frapport%20images%2FRapport%20annuel%202019.jpg?alt=media&token=013007e0-ad7a-4f9f-a5c3-d3ab27c661c3',
      pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Frapport%20pdf%2FRapport%20Annuel%20-%20Association%20Bab%20Rayan%202019.pdf?alt=media&token=1a22e49b-cdb4-4f13-a09e-039415a243d5'
    },
    {
      year: 2018,
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Frapport%20images%2FRapport%20annuel%202018.jpg?alt=media&token=ea4fe80e-fcfc-4f31-a33b-10a124774b99',
      pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Frapport%20pdf%2FRapport%20Annuel%20-%20Association%20Bab%20Rayan%202018.pdf?alt=media&token=27adf2c1-1f31-4f52-b824-7ecdbd7e34ae'
    },
    {
      year: 2017,
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Frapport%20images%2FRapport%20annuel%202017.jpg?alt=media&token=7a3cfb91-72f8-4a97-9659-2c0671b521c6',
      pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Frapport%20pdf%2FRapport%20Annuel%20-%20Association%20Bab%20Rayan%202017.pdf?alt=media&token=2630d4ce-6dc4-4ff8-9831-459aff837b12'
    },
    {
      year: 2016,
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Frapport%20images%2FRapport%20annuel%202016.jpg?alt=media&token=697e0c9f-ca58-4b32-b1b2-06104b18d860',
      pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Frapport%20pdf%2FRapport%20Annuel%20-%20Association%20Bab%20Rayan%202016.pdf?alt=media&token=3adb537f-4fbc-4d10-8330-bff95df478c8'
    },
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
      <section className="w-full bg-[url('https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/gouvernance%2Farrier%20plan.webp?alt=media&token=cb33f758-0b78-44a7-a6e4-fb5cc75286a6')] bg-cover bg-center py-16 px-6">
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
                    className="w-full h-full object-cover"
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
