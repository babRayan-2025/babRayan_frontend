"use client";

import React from "react";
import Image from "next/image";
import "./style.css";
import StarIcon from "/public/protection/star_icon.webp" 
import BookIcon from "/public/protection/book_icon.webp" 

export default function Foyer() {
  const Cards = [
    {
      title: "PROJET DE VIE",
      description:
        "En créant un foyer de vie, l'association Bab Rayan préserve l'enfance en veillant à ce que les enfants soient nourris, soignés, protégés, éduqués, et entourés par des adultes bienveillants intégrés dans la société. Dans notre approche, chaque enfant bénéficie d'un projet de vie complet. Cela inclut la résolution de questions administratives essentielles telles que l'obtention de documents d'identité, la prise en charge de leur dossier médical, leur parcours éducatif et sportif, ainsi qu'un plan d'insertion sociale sur mesure.",
      image: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/protection%2FPROJET%20DE%20VIE.jpg?alt=media&token=37279937-04aa-4ba1-b054-68a8e1c9295a",
    },
    {
      title: "STRUCTURE",
      description:
        "Le Foyer Bab Rayan est un établissement de protection sociale (EPS) agréé et sous la tutelle du Ministère de la Solidarité, de l’Insertion Sociale et de la Famille. Le premier pavillon du Foyer Bab Rayan a ouvert ses portes en septembre 2015 et est habilité à accueillir des enfants orphelins, abandonnés, en situation difficile ou maltraités à partir de 3 ans jusqu’à l’âge de 18 ans, souvent envoyés par d'autres organisations.",
      image: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/protection%2FSTRUCTURE.jpeg?alt=media&token=0e4f4f0e-78d8-4228-bfc5-55b79fc40e1b",
    },
  ];

  const Icons = [
    { icon: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/protection%2Ficon1.webp?alt=media&token=9bbf7d2b-813e-4b1f-87d8-b2c47d4b4fbe" },
    { icon: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/protection%2Ficon2.webp?alt=media&token=dbf24c1c-3a69-4391-829a-9f9c24c6a0ea" },
    { icon: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/protection%2Ficon3.webp?alt=media&token=e5554944-0985-4227-a2c4-2725ca9bdf98" },
    { icon: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/protection%2Ficon4.webp?alt=media&token=33e406fa-cfe5-4043-abfc-b28c603a02a3" },
    { icon: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/protection%2Ficon5.webp?alt=media&token=d7156726-dbac-43f3-b3cc-330af9bff0bb" },
  ];

  const activities = [
    { image: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/protection%2FDES%20ACTIVIT%C3%89S%20QUI%20FONT%20GRANDIR%20img2.jpeg?alt=media&token=a53a3fcf-c327-466b-a18a-3d84693c7b4a" },
    { image: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/protection%2FDES%20ACTIVIT%C3%89S%20QUI%20FONT%20GRANDIR%20img3.jpeg?alt=media&token=54101a0c-4d25-4fdd-a8a4-bc09c6c05754" },
    { image: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/protection%2FDES%20ACTIVIT%C3%89S%20QUI%20FONT%20GRANDIR%20img4.jpeg?alt=media&token=baaf053b-e8f9-485c-8833-52ebf5f103b3" },
  ];

  return (
    <section>
      {/* Header Section */}
      <div className="relative w-full h-[700px] md:h-screen flex items-center justify-center">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/protection%2FFoyer%20Bab%20Rayan.jpeg?alt=media&token=d135a09a-5364-4d2d-bd06-903109e667fa"
          alt="Foyer Bab Rayan"
          layout="fill"
          objectfit="cover"
          className="z-0 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute md:bottom-10  bottom-1  right-10 p-6 max-w-lg text-white z-20">
          <h1 className="text-xl md:text-3xl font-bold leading-tight">
            REJOIGNEZ LE COMBAT POUR
            <br />
            LA PROTECTION DE L’ENFANCE
          </h1>
          <p className="mt-4 italic text-sm md:text-base leading-relaxed">
            Bab Rayan place la protection de l&apos;enfance au cœur de sa
            mission. Elle offre un cadre de vie sécurisant et un soutien continu
            pour restaurer leur confiance. En leur redonnant une part
            d’insouciance et en les guidant vers un foyer et l’éducation,
            l’association les aide à construire un avenir meilleur.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-6 relative">
        <h1 className="p-4 text-2xl md:text-4xl font-bold text-center mb-8 relative">
          FOYER BAB RAYAN
          <div className="w-24 md:w-48 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
          {/* Decorative Icons */}
          <Image
            src={BookIcon}
            alt="Book Icon"
            width={250}
            height={100}
            className="absolute top-2 md:top-4 right-[480px] md:right-[300px] z-[-1]"
          />
          <Image
            src={StarIcon}
            alt="Star Icon"
            width={250}
            height={100}
            className="absolute top-2 md:top-4 md:left-4 right-[350px] z-[-1]"
          />
        </h1>

        {/* Watermark Text */}
        <h4 className="absolute top-1/2 md:right-[300px] right-[500px] transform -translate-y-1/2  font-bold text-gray-300 z-0 pointer-events-none">
          <Image src={StarIcon} alt="Star Icon" width={250} height={100} />
        </h4>

        {/* cards */}
        {Cards &&
          Cards.map((card, index) => {
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16"
              >
                <div>
                  <Image
                    src={card.image}
                    width={470}
                    height={400} 
                    style={{
                      width: "470px",
                      height: "400px",
                      objectfit: "cover",
                    }}
                    alt="Group of Children"
                    className="shadow_style_css rounded-lg w-full z-50 object-cover"
                  />
                </div>
                <div className="max-w-lg">
                  <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4">
                    {card.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}

        <div className="relative">
          <Image
            src={BookIcon}
            alt="Middle Right Icon"
            width={300}
            height={100}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 z-[-1]"
          />
        </div>
      </div>

      {/* ACTIVITÉS section */}
      <div
        className="flex flex-col items-center py-16 px-10"
        style={{ backgroundColor: "#FFD9DA" }}
      >
        <h1 className="p-4 text-2xl md:text-4xl font-bold text-center mb-8 relative">
          DES ACTIVITÉS QUI FONT GRANDIR
          <div className="w-24 md:w-48 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
        </h1>
        <div className="flex flex-wrap-reverse items-center justify-center w-full gap-8 px-2 rounded-lg md:-ml-10">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/protection%2FDES%20ACTIVIT%C3%89S%20QUI%20FONT%20GRANDIR%20img1.jpeg?alt=media&token=9636f5e1-a64c-428a-8393-d95c07319a5f"
            className="w-1/3 shadow_style_css rounded-lg object-cover"
            width={400}
            height={300}
            style={{ width: "400px", height: "300px", objectfit: "cover" }}
          />
          <div className="md:w-1/3 p-2 text-gray-800">
            <p className="text-justify leading-relaxed">
              Le choix d’une activité dans un club de leur préférence constitue
              une étape essentielle du processus éducatif. Cette initiative
              offre aux adolescents l’opportunité de s’investir dans une
              activité qui les passionne, favorisant ainsi leur épanouissement
              personnel. Qu’il s’agisse de Rugby, Football, Tennis, Basketball,
              Équitation...
              <br />
              <br />
              En rejoignant un club aligné sur leurs centres d’intérêt, ils
              développent des compétences spécifiques, renforcent leur estime de
              soi et posent progressivement les bases solides de leur future
              autonomie. Cette démarche permet également de concrétiser, dans
              leur quotidien, les idées et objectifs qu’ils se fixent pour
              construire leur projet de vie.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-6 flex-wrap mt-8 w-full md:px-8 md:ml-7">
          {activities.map((activity, index) => (
            <div
              key={index}
              
              className="bg-white rounded-lg shadow_style_css overflow-hidden w-[340px] h-[260px]"
              // style={{ width: "340px", height: "260px" }}
            >
              <Image
                src={activity.image}
                width={340}
                height={260}
                className="w-full h-full object-cover"
                alt="activity"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="py-9 shadow-md bg-[#cc2229] font-[sans-serif] relative z-50"
        style={{ backgroundColor: "" }}
      >
        <h1 className="p-4 text-2xl md:text-4xl font-bold text-center text-white mb-8 relative">
          BAB RAYAN EN CHIFFRES
          <div className="w-24 md:w-48 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-9 text-white">
          {Icons.map((icon, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <Image
                src={icon.icon}
                alt={`icon-${index}`}
                width={200}
                height={120}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
