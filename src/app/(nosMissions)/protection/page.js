"use client";

import React from "react";
import Image from "next/image";


import "./style.css";
export default function Foyer() {
  const Cards = [
    {
      title: "PROJET DE VIE",
      description:
        "En créant un foyer de vie, l'association Bab Rayan préserve l'enfance en veillant à ce que les enfants soient nourris, soignés, protégés, éduqués, et entourés par des adultes bienveillants intégrés dans la société. Dans notre approche, chaque enfant bénéficie d'un projet de vie complet. Cela inclut la résolution de questions administratives essentielles telles que l'obtention de documents d'identité, la prise en charge de leur dossier médical, leur parcours éducatif et sportif, ainsi qu'un plan d'insertion sociale sur mesure.",
      image: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/foyer%2Fpic1.webp?alt=media&token=3e06c326-8fea-4cde-b5e0-25d4a00fbcf6",
    },
    {
      title: "STRUCTURE",
      description:
        "Le Foyer Bab Rayan est un établissement de protection sociale (EPS) agréé et sous la tutelle du Ministère de la Solidarité, de l’Insertion Sociale et de la Famille. Le premier pavillon du Foyer Bab Rayan a ouvert ses portes en septembre 2015 et est habilité à accueillir des enfants orphelins, abandonnés, en situation difficile ou maltraités à partir de 3 ans jusqu’à l’âge de 18 ans, souvent envoyés par d'autres organisations.",
      image: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/foyer%2Fpic2.webp?alt=media&token=2550557e-5490-46e9-89f6-337db633514b",
    },
  ];

  const Icons = [
    { icon: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/foyer%2Ficon1.webp?alt=media&token=60f7e420-eb98-4eaf-acac-397809e9f814" },
    { icon: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/foyer%2Ficon2.webp?alt=media&token=7dd10459-5092-48f4-9c2b-d962d1c5ebac" },
    { icon: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/foyer%2Ficon3.webp?alt=media&token=dd46dfa7-5c52-4121-a7e9-2b2b131fca11" },
    { icon: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/foyer%2Ficon4.webp?alt=media&token=40ca54de-09ad-4f0c-be71-5d254502a929" },
    { icon: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/foyer%2Ficon5.webp?alt=media&token=c887bdbc-3210-477f-9cfd-954cd4d2bf7f" },
  ];

  const activities = [
    { image: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/foyer%2Fact1.webp?alt=media&token=ccb11077-edb3-474d-a25a-4264e02c4e98" },
    { image: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/foyer%2Fact2.webp?alt=media&token=00e4e889-3d1f-44d0-854d-1527063644e9" },
    { image: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/foyer%2Fact3.webp?alt=media&token=a6704277-c2ba-4ab6-8161-ffa16e6018cd" },
  ];

  return (
    <section>
      {/* Header Section */}
      <div className="relative w-full h-[700px] md:h-screen flex items-center justify-center">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/foyer%2Ffirst_pic.webp?alt=media&token=24ae9f55-10ea-4e57-839f-055bd8362cba"
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
            src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/foyer%2Fbook_icon.webp?alt=media&token=1c0c719d-944d-417d-95b7-7f7caeb0d1ab"
            alt="Book Icon"
            width={250}
            height={100}
            className="absolute top-2 md:top-4 right-[480px] md:right-[300px] z-[-1]"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/foyer%2Fstar.webp?alt=media&token=6366212b-5d30-4d95-9311-b80ad3c053bb"
            alt="Star Icon"
            width={250}
            height={100}
            className="absolute top-2 md:top-4 md:left-4 right-[350px] z-[-1]"
          />
        </h1>

        {/* Watermark Text */}
        <h4 className="absolute top-1/2 md:right-[300px] right-[500px] transform -translate-y-1/2  font-bold text-gray-300 z-0 pointer-events-none">
          <Image src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/foyer%2Fs7aba.webp?alt=media&token=ddfbb731-4d95-45ac-b297-695fc6b98c9a" alt="Star Icon" width={250} height={100} />
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
            src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/foyer%2Fsoleil.webp?alt=media&token=fbb46d56-791f-4aca-8afa-6c94b7fc804c"
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
            src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/foyer%2Fact4.webp?alt=media&token=0c51ae71-d5a4-467c-acc5-0301cdce6cf6"
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
