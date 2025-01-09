"use client";

import Image from "next/image";

const TeamMember = ({ name, title, imageUrl }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="relative w-48 h-48 rounded-full overflow-hidden mb-3">
      <Image
        src={imageUrl}
        alt={name}
        fill
        className="object-cover"
        sizes="(max-width: 96px) 100vw, 96px"
      />
    </div>
    <h3 className="text-yellow-300 font-semibold">{name}</h3>
    <p className="text-white text-sm whitespace-pre-line">{title}</p>
  </div>
);

const HeroSection = () => (
  <div className="relative">
    <div
      className="h-[750px] bg-cover bg-center"
      style={{ backgroundImage: "url('/gouvernance.png')" }}
    />
    <div className="absolute bottom-2 right-4 p-6 max-w-5xl">
      <div className="text-white p-6 lg:p-12 max-w-4xl mx-auto rounded">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">GOUVERNANCE</h2>
        <p className="text-lg font-semibold text-yellow-300 mb-4">
        Engagés et unis autour d’un même espoir : un projet holistique pour chaque enfant accueilli par Bab Rayan
        </p>
        <p className="text-md lg:text-lg">
        « Au sein de l’association Bab Rayan, dédiée à la protection, au développement de l’enfance et à
            l’insertion professionnelle des jeunes, nous rassemblons des personnes unies par une même foi et une vision
            commune. Nous croyons fermement que chaque situation, aussi difficile soit-elle, peut trouver une issue
            positive. Chaque jeune possède en lui des potentialités insoupçonnées et mérite un avenir où il pourra
            s’épanouir pleinement. Notre mission est de leur offrir les moyens de se redécouvrir, de reprendre
            confiance en eux et de construire un avenir prometteur. »
         
        </p>
      </div>
    </div>
  </div>
);

const InfoCard = ({ title, description }) => (
    <div className="bg-red-700 p-12 shadow-xl flex flex-col h-full">
      <h2 className="text-2xl font-bold text-yellow-300 mb-6">{title}</h2>
      <p className="text-white text-lg leading-relaxed">{description}</p>
    </div>
  );



export default function Gouvernance() {
    const teamData = [
        {
          name: 'Hind Ratiba',
          title: 'Membre Fondateur',
          imageUrl: '/members/Hind Ratibe.jpeg'
        },
        {
          name: 'Fatima Zahra Hamroudi',
          title: 'Fondatrice Présidente',
          imageUrl: '/members/Fatima Zohra Ratibe.jpeg'
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
          imageUrl: '/members/Hind Ratibe.jpeg'
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
      
      <section className=" w-full bg-[url('/teamback.png')] bg-cover bg-center py-16 px-6">
        <div className="max-w-6xl mx-auto px-4">
        <h1 className="p-4 text-2xl md:text-4xl text-white font-bold text-center mb-8 relative">
              MEMBRES DU BUREAU
              <div className="w-24 md:w-48 h-2 bg-yellow-200 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
            </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamData.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
      {/* 3card ------ */}
      <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>
    </section>
    </main>
  );
}