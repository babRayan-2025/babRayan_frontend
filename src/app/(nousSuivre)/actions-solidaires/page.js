"use client";

import { motion } from "framer-motion";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

export default function Actions() {

    const ftourPhotos = [
        { src: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/action%20solidaire%2FFtour%201.jpg?alt=media&token=e1bc6e77-2bc3-4602-b2fd-839d268cc6f8", alt: "Ramadan" },
        { src: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/action%20solidaire%2FFtour%202.jpg?alt=media&token=0af119fb-d4c9-4e09-baea-9cf82c7c13f1", alt: "Ramadan" },
        { src: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/action%20solidaire%2FFtour%203.jpg?alt=media&token=7f88c5fe-0eac-4726-b23d-33d23e4c950e", alt: "Ramadan" },
        { src: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/action%20solidaire%2FFtour%204.jpg?alt=media&token=b2f6d34e-1aa2-49c8-8b2e-f6f41315f112", alt: "Ramadan" },
    ]

    const seismePhotos = [
        { src: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/action%20solidaire%2FS%C3%A9isme%201.jpg?alt=media&token=cd6543a0-5313-43b8-8ee5-bc6ee1e84324", alt: "Seisme" },
        { src: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/action%20solidaire%2FS%C3%A9isme%202.jpg?alt=media&token=1b4615a4-0749-4e74-b59a-0362bad0da29", alt: "Seisme" },
        { src: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/action%20solidaire%2FS%C3%A9isme%203.jpg?alt=media&token=c3aa301e-f5ca-4e80-97f0-eb3004d8ed58", alt: "Seisme" },
    ]

    const scolairePhotos = [
        { src: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/action%20solidaire%2FService%201.JPG?alt=media&token=47c672ea-bdde-4e38-b5c2-3a56c5516fd7", alt: "Scolaire" },
        { src: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/action%20solidaire%2FServices%202.JPG?alt=media&token=603f1dd2-b4ef-4022-aa4c-7dbde28b230b", alt: "Scolaire" },
        { src: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/action%20solidaire%2FServices%203.JPG?alt=media&token=b0f3825a-9e0d-4e3c-bde3-6136ef10d04b", alt: "Scolaire" },
        { src: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/action%20solidaire%2FServices%204.JPG?alt=media&token=0fcfa3c3-12e2-44c5-b92a-556c6a7bf831", alt: "Scolaire" },
    ]
    const actionsPhotos = [
        { src: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/action%20solidaire%2FAction%201.jpg?alt=media&token=c40f4cb8-e573-4f54-add8-d00b99997644", alt: "action" },
        { src: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/action%20solidaire%2FAction%202.jpg?alt=media&token=a5247157-bb65-4e9f-9172-2bdaaad8e8e1", alt: "action" },
        { src: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/action%20solidaire%2FAction%203.jpg?alt=media&token=2e3e6d29-114c-4e0f-a74f-53244462737a", alt: "action" },
        { src: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/action%20solidaire%2FAction%204.jpg?alt=media&token=470ba86d-e39d-4997-9bff-106a311a1690", alt: "action" },
        { src: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/action%20solidaire%2FAction%205.jpg?alt=media&token=967f8536-ce1f-4eac-9dbb-2ff529197ff6", alt: "action" },
        { src: "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/action%20solidaire%2FAction%206.jpg?alt=media&token=73c1c45f-017e-4e56-a022-709009b1b6aa", alt: "action" }
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
                                src="./icons/ramadan.png"
                                alt="Ramadan"
                                className="absolute top-0 right-0 w-64 h-64 object-cover"
                                loading="lazy"
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
                    <div className="grid grid-cols-2 gap-4 w-full xl:w-2/3">
                        {ftourPhotos.map((photo, index) => (
                            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                        {seismePhotos.map((photo, index) => (
                            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="w-full h-64 sm:h-72 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
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
                            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                        {actionsPhotos.map((photo, index) => (
                            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="w-full h-64 sm:h-72 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </motion.div>


        </main>
    );
}