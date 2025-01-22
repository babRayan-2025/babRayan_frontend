"use client";

import React from "react";
import Image from "next/image";
import FirstImg from "../../../assets/foyer/first_pic.jpeg";
import BookIcon from "../../../assets/foyer/book_icon.png";
import StartIcon from "../../../assets/foyer/star.png";
import CardPic2 from "../../../assets/foyer/petite_fille.jpeg";
import SoleilIcon from "../../../assets/foyer/soleil.png";
import S7abaIcon from "../../../assets/foyer/s7aba.png";

import Icon1 from "../../../assets/foyer/icon1.png";
import Icon2 from "../../../assets/foyer/icon2.png";
import Icon3 from "../../../assets/foyer/icon3.png";
import Icon4 from "../../../assets/foyer/icon4.png";
import Icon5 from "../../../assets/foyer/icon5.png";
import "./style.css"
export default function Foyer() {

    const Cards = [
        {
            title: "PROJET DE VIE",
            description: "En créant un foyer de vie, l'association Bab Rayan préserve l'enfance en veillant à ce que les enfants soient nourris, soignés, protégés, éduqués, et entourés par des adultes bienveillants intégrés dans la société. Dans notre approche, chaque enfant bénéficie d'un projet de vie complet. Cela inclut la résolution de questions administratives essentielles telles que l'obtention de documents d'identité, la prise en charge de leur dossier médical, leur parcours éducatif et sportif, ainsi qu'un plan d'insertion sociale sur mesure.",
            image: CardPic2,
        },
        {
            title: "STRUCTURE",
            description: "Le Foyer Bab Rayan est un établissement de protection sociale (EPS) agréé et sous la tutelle du Ministère de la Solidarité, de l’Insertion Sociale et de la Famille. Le premier pavillon du Foyer Bab Rayan a ouvert ses portes en septembre 2015 et est habilité à accueillir des enfants orphelins, abandonnés, en situation difficile ou maltraités à partir de 3 ans jusqu’à l’âge de 18 ans, souvent envoyés par d'autres organisations.",
            image: CardPic2,
        }
    ]

    const Icons = [
        { icon: Icon1 },
        { icon: Icon2 },
        { icon: Icon3 },
        { icon: Icon4 },
        { icon: Icon5 }
    ]

    return (
        <section>
            {/* Header Section */}
            <div className="relative w-full h-screen flex items-center justify-center">
                <Image
                    src={FirstImg}
                    alt="Foyer Bab Rayan"
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <div className="absolute bottom-10 right-10 max-w-lg text-white z-20">
                    <h1 className="text-xl md:text-3xl font-bold leading-tight">
                        REJOIGNEZ LE COMBAT POUR<br />
                        LA PROTECTION DE L’ENFANCE
                    </h1>
                    <p className="mt-4 italic text-sm md:text-base leading-relaxed">
                        Bab Rayan place la protection de l'enfance au cœur de sa mission.
                        Son objectif : offrir à ces enfants un cadre de vie sécurisant, tout
                        en restaurant leur confiance grâce à un soutien matériel et humain
                        continu. En leur redonnant une part de leur insouciance et en les
                        accompagnant vers la réalisation de leurs rêves — avoir un foyer et
                        accéder à l'éducation — l'association leur permet de se projeter
                        vers un avenir meilleur.
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
                        className="absolute top-4 right-4 z-10"
                    />
                    <Image
                        src={StartIcon}
                        alt="Star Icon"
                        width={250}
                        className="absolute top-4 left-4 z-10"
                    />
                </h1>

                {/* Watermark Text */}
                <h4 className="absolute top-1/2 right-[300px] transform -translate-y-1/2  font-bold text-gray-300 z-0 pointer-events-none">
                    <Image
                        src={S7abaIcon}
                        alt="Star Icon"
                        width={250}
                    />
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
                                        width={380}
                                        height={380}
                                        alt="Group of Children"
                                        className="shadow_style_css rounded-lg w-full"
                                    />
                                </div>
                                <div className="max-w-lg">
                                    <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4">
                                        {card.title}
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">{card.description}</p>
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

            <div className="py-9 shadow-md bg-[#cc2229] font-[sans-serif] relative z-50" style={{ backgroundColor: "" }}>
                <h1 className="p-4 text-2xl md:text-4xl font-bold text-center text-white mb-8 relative">
                    FOYER BAB RAYAN
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
