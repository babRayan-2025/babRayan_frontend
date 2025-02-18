"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

export default function Actions() {

    const ftourPhotos = [
        { src: "./actions_solidaires/15.png", alt: "Ramadan" },
        { src: "./actions_solidaires/14.png", alt: "Ramadan" },
        { src: "./actions_solidaires/12.png", alt: "Ramadan" },
        { src: "./actions_solidaires/13.png", alt: "Ramadan" },
    ]

    const seismePhotos = [
        { src: "./actions_solidaires/9.png", alt: "Seisme" },
        { src: "./actions_solidaires/10.png", alt: "Seisme" },
        { src: "./actions_solidaires/11.png", alt: "Seisme" },
    ]

    const scolairePhotos = [
        { src: "./actions_solidaires/7.png", alt: "Scolaire" },
        { src: "./actions_solidaires/8.png", alt: "Scolaire" },
        { src: "./actions_solidaires/555.png", alt: "Scolaire" },
        { src: "./actions_solidaires/666.png", alt: "Scolaire" },
    ]
    const actionsPhotos = [
        { src: "./actions_solidaires/1.png", alt: "action" },
        { src: "./actions_solidaires/2.png", alt: "action" },
        { src: "./actions_solidaires/3.png", alt: "action" },
        { src: "./actions_solidaires/4.png", alt: "action" },
        { src: "./actions_solidaires/5.png", alt: "action" },
        { src: "./actions_solidaires/6.png", alt: "action" }
    ]
    return (
        <main>
            <motion.h1
                className="p-4 text-2xl md:text-4xl font-bold text-center my-8 relative"
                variants={fadeIn} // Apply fadeIn animation
                initial="initial"
                animate="animate" >
                ACTIONS SOLIDAIRES
                <div className="w-24 md:w-48 h-1 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
            </motion.h1>

            <div className="text-center lg:px-72 mb-10">
                Depuis sa création, l'Association Bab Rayan ne se contente pas seulement de veiller au bien-être des enfants à travers ses trois projets principaux. Elle s'engage également dans une série d'actions solidaires, démontrant ainsi son engagement envers la communauté et sa volonté de créer un impact positif au-delà de ses programmes établis.
            </div>



            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="bg-red-700 p-8"
            >
                <div className="flex flex-col xl:flex-row itdems-center gap-8">

                    {/* Text Section */}
                    <div className="w-full xl:w-1/2 text-white md:ps-20">
                        <div className="relative col-span-1 lg:col-span-2 h-full flex flex-col justify-center items-start">
                            {/* Image positioned in the top-right corner */}
                            <img
                                src="./actions_solidaires/ramadan.png"
                                alt="Ramadan"
                                className="absolute top-0 right-0 w-64 h-64 object-cover"
                            />

                            {/* Content */}
                            <div>
                                <h1 className="text-yellow-300 text-4xl font-bold">
                                    Ftour <br /> Bab Rayan
                                </h1>
                                <br />
                                <p className="text-white mb-2">
                                    Les Actions du « Ftour Bab Rayan » représentent l'ADN même de l'association, constituant sa première et plus ancienne initiative.
                                </p>
                                <br />
                                <p className="text-white mb-2">
                                    Les familles bénéficiaires dans la précarité ne manquent jamais cette occasion, et nous non plus, car nous les considérons comme une part intégrante de notre engagement durant ce mois sacré.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full xl:w-2/3 xl:pde-80">
                        {ftourPhotos.map((photo, index) => (
                            <div key={index} className="overflow-hidden  ">
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    width={700}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>


            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="p-8" style={{ backgroundColor: "#F8D24D" }}
            >
                <div className="items-center gap-8 xl:px-20">
                    <div className="text-red-700 text-4xl font-bold my-8">
                        Séisme <br /> D&apos;Alhaouz
                    </div>
                    <p className="text-black text-xl">
                        En plus des activités mentionnées, l'association intervient également en cas d'urgence nationale, telles que la pandémie de Covid-19 ou le séisme dans la région d'Al Haouz en septembre 2023.
                        <br />La solidarité massive démontrée à travers le Maroc s'inspire de notre Souverain, Sa Majesté le Roi Mohammed VI.
                    </p>

                    <div className="flex justify-center items-center gap-4 my-8">
                        {seismePhotos.map((photo, index) => (
                            <div key={index} className="w-2/3 overflow-hidden rounded-lg shadow-md">
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    width={600}
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>


            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="bg-red-700 p-8"
            >
                <div className="flex flex-col lg:flex-row items-center gap-8 xl:px-20 ">
                    {/* Image Section */}
                    <div className="grid grid-cols-2 gap-4 w-full xl:w-2/3">
                        {scolairePhotos.map((photo, index) => (
                            <div key={index} className="overflow-hidden  ">
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="object-cover rounded-lg shadow-lg w-auto "
                                />
                            </div>
                        ))}
                    </div>
                    {/* Text Section */}
                    <div className="w-full lg:w-1/2 text-white">
                        <h1 className="text-yellow-300 text-4xl font-bold">
                            Services <br /> Scolaires
                        </h1>
                        <br />
                        <p className="text-white mb-2">
                            Depuis la création de l'école Palmier en 2018, l'association Bab Rayan fournit :

                        </p>
                        <br />
                        <ul className="text-white mb-2 list-disc list-inside">
                            <li>
                                Des cartables garnis de fournitures scolaires et manuels à tous les bénéficiaires de l'école, soit aux internes (enfants résidant au foyer Bab Rayan) ou aux externes (enfants issus de familles dans la précarité).
                            </li>
                            <li>
                                Un repas équilibré et une garde gratuite.
                            </li>
                            <li>
                                Soutien scolaire gratuit.
                            </li>
                            <li>
                                Activités et excursions ludiques gratuites.
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className=" p-8"
            >
                <div className="items-center gap-8 xl:px-20">
                    <div className="text-red-700 text-4xl font-bold my-8">
                        Actions <br /> Diverses
                    </div>
                    <p> Le pôle Actions Solidaires propose divers services sociaux, incluant la circoncision, le soutien aux familles pendant l'Aid al-Adha.
                        Chez Bab Rayan, nous inculquons à nos enfants les valeurs de solidarité par le biais de partage de dons en nature, reçus de nos partenaires et donateurs.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                        {actionsPhotos.map((photo, index) => (
                            <div key={index} className="overflow-hidden rounded-lg">
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="w-full h-auto object-cover shadow-lg rounded-lg"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </motion.div>


        </main>
    );
}