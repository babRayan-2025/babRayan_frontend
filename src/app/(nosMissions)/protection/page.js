"use client";

import React from "react";
import Image from "next/image";
import FirstImg from "../../../assets/foyer/first_pic.jpeg";
import BookIcon from "../../../assets/foyer/book_icon.png";
import StartIcon from "../../../assets/foyer/star.png";
import CardPic1 from "../../../assets/foyer/pic1.jpeg";
import CardPic2 from "../../../assets/foyer/pic2.JPG";
import SoleilIcon from "../../../assets/foyer/soleil.png";
import S7abaIcon from "../../../assets/foyer/s7aba.png";

import Icon1 from "../../../assets/foyer/icon1.png";
import Icon2 from "../../../assets/foyer/icon2.png";
import Icon3 from "../../../assets/foyer/icon3.png";
import Icon4 from "../../../assets/foyer/icon4.png";
import Icon5 from "../../../assets/foyer/icon5.png";

import Activity1 from "../../../assets/foyer/act1.jpeg";
import Activity2 from "../../../assets/foyer/act2.jpeg";
import Activity3 from "../../../assets/foyer/act3.jpeg";
import Activity4 from "../../../assets/foyer/act4.jpeg";

import "./style.css";
export default function Foyer() {
  const Cards = [
    {
      title: "PROJET DE VIE",
      description:
        "En créant un foyer de vie, l'association Bab Rayan préserve l'enfance en veillant à ce que les enfants soient nourris, soignés, protégés, éduqués, et entourés par des adultes bienveillants intégrés dans la société. Dans notre approche, chaque enfant bénéficie d'un projet de vie complet. Cela inclut la résolution de questions administratives essentielles telles que l'obtention de documents d'identité, la prise en charge de leur dossier médical, leur parcours éducatif et sportif, ainsi qu'un plan d'insertion sociale sur mesure.",
      image: CardPic1,
    },
    {
      title: "STRUCTURE",
      description:
        "Le Foyer Bab Rayan est un établissement de protection sociale (EPS) agréé et sous la tutelle du Ministère de la Solidarité, de l’Insertion Sociale et de la Famille. Le premier pavillon du Foyer Bab Rayan a ouvert ses portes en septembre 2015 et est habilité à accueillir des enfants orphelins, abandonnés, en situation difficile ou maltraités à partir de 3 ans jusqu’à l’âge de 18 ans, souvent envoyés par d'autres organisations.",
      image: CardPic2,
    },
  ];

  const Icons = [
    { icon: Icon1 },
    { icon: Icon2 },
    { icon: Icon3 },
    { icon: Icon4 },
    { icon: Icon5 },
  ];

  const activities = [
    { image: Activity1 },
    { image: Activity2 },
    { image: Activity3 },
  ];

  return (
    <section>
      {/* Header Section */}
      <div className="relative w-full h-[400px] md:h-screen flex items-center justify-center">
        <Image
          src={FirstImg}
          alt="Foyer Bab Rayan"
          layout="fill"
          objectfit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-10 right-10 p-6 max-w-lg text-white z-20">
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
            className="absolute top-2 md:top-4 right-[480px] md:right-[300px] z-[-1]"
          />
          <Image
            src={StartIcon}
            alt="Star Icon"
            width={250}
            className="absolute top-2 md:top-4 md:left-4 right-[350px] z-[-1]"
          />
        </h1>

        {/* Watermark Text */}
        <h4 className="absolute top-1/2 md:right-[300px] right-[500px] transform -translate-y-1/2  font-bold text-gray-300 z-0 pointer-events-none">
          <Image src={S7abaIcon} alt="Star Icon" width={250} />
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
                    style={{
                      width: "470px",
                      height: "400px",
                      objectfit: "cover",
                    }}
                    alt="Group of Children"
                    className="shadow_style_css rounded-lg w-full z-50"
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
            src={SoleilIcon}
            alt="Middle Right Icon"
            width={300}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10"
          />
        </div>
      </div>

      {/* ACTIVITÉS section */}
      <div
        className="flex flex-col items-center pt-16 pb-16"
        style={{ backgroundColor: "#FFD9DA" }}
      >
        <h1 className="p-4 text-2xl md:text-4xl font-bold text-center mb-8 relative">
          DES ACTIVITÉS QUI FONT GRANDIR
          <div className="w-24 md:w-48 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
        </h1>
        <div className="flex flex-wrap-reverse items-center justify-center w-full gap-8 p-8 rounded-lg md:-ml-10">
          <Image
            src={Activity4}
            className="w-1/3 shadow_style_css rounded-lg"
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
