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
    return (
        <main>
            <motion.h1
                className="p-4 text-2xl md:text-4xl font-bold text-center my-8 relative"
                variants={fadeIn} // Apply fadeIn animation
                initial="initial"
                animate="animate" >
                ACTIONS SOLIDAIRES
                <div className="w-24 md:w-48 h-1 bg-yellow-200 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
            </motion.h1>

            <div className="text-center lg:px-72 mb-10">
                Depuis sa création, l'Association Bab Rayan ne se contente pas seulement de veiller au bien-être des enfants à travers ses trois projets principaux. Elle s'engage également dans une série d'actions solidaires, démontrant ainsi son engagement envers la communauté et sa volonté de créer un impact positif au-delà de ses programmes établis.
            </div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="bg-red-700 p-8" >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                    <div className="p-4">
                        <h1 className="text-yellow-200 text-4xl font-bold ">
                            Ftour <br /> Bab Rayan
                        </h1><br />
                        <p className="text-white mb-2">
                            Les Actions du « Ftour Bab Rayan » représentent l'ADN même de l'association, constituant sa première et plus ancienne initiative.
                        </p><br />
                        <p className="text-white mb-2">
                            Les familles en précarité bénéficiaires ne manquent jamais cette occasion, et nous non plus, car nous les considérons comme une part intégrante de notre engagement durant ce mois sacré.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-4">
                        <h2 className="text-xl font-bold mb-2">Titre 2</h2>
                    </div>


                </div>
            </motion.div>
        </main>
    );
}