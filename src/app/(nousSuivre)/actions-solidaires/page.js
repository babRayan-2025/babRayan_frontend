"use client";

import { motion } from "framer-motion";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

export default function Actions() {

    const ftourPhotos = [
        { src: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/ACTIONS%20SOLIDAIRES%2F15.webp?alt=media&token=69b32a82-c9f4-4e29-a619-157623241b88", alt: "Ramadan" },
        { src: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/ACTIONS%20SOLIDAIRES%2F14.webp?alt=media&token=41f29b93-b4cd-4da4-92cf-0d21ef1f0449", alt: "Ramadan" },
        { src: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/ACTIONS%20SOLIDAIRES%2F12.webp?alt=media&token=ef98981a-b0c8-4dc9-9068-d15d5f74c6bc", alt: "Ramadan" },
        { src: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/ACTIONS%20SOLIDAIRES%2F13.webp?alt=media&token=d2cfc8df-35cb-4250-b21f-7788a0466550", alt: "Ramadan" },
    ]

    const seismePhotos = [
        { src: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/ACTIONS%20SOLIDAIRES%2F9.webp?alt=media&token=a5c60e2c-eab4-4883-9f54-2aaf07be65b8", alt: "Seisme" },
        { src: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/ACTIONS%20SOLIDAIRES%2F10.webp?alt=media&token=ffddb4a6-e459-4cdc-b1ac-d42d34b1cc62", alt: "Seisme" },
        { src: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/ACTIONS%20SOLIDAIRES%2F11.webp?alt=media&token=a58f2167-e90b-457c-bee0-52c944979382", alt: "Seisme" },
    ]

    const scolairePhotos = [
        { src: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/ACTIONS%20SOLIDAIRES%2F7.webp?alt=media&token=73db11ce-9eb8-41d0-ab4c-7521731a0ca8", alt: "Scolaire" },
        { src: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/ACTIONS%20SOLIDAIRES%2F8.webp?alt=media&token=382deef9-a3da-411e-b145-3d12cc4b3e65", alt: "Scolaire" },
        { src: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/ACTIONS%20SOLIDAIRES%2F555.webp?alt=media&token=1a3767c4-4fe7-4fca-a362-7e51b0bacba0", alt: "Scolaire" },
        { src: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/ACTIONS%20SOLIDAIRES%2F666.webp?alt=media&token=e91a49bd-84fa-4dab-9544-fc94e0377a36", alt: "Scolaire" },
    ]
    const actionsPhotos = [
        { src: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/ACTIONS%20SOLIDAIRES%2F1.webp?alt=media&token=dddb6a76-607b-4a13-9c2a-886485c316f0", alt: "action" },
        { src: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/ACTIONS%20SOLIDAIRES%2F2.webp?alt=media&token=4c4f89fb-3eb1-4fda-8480-ce41faff0ca9", alt: "action" },
        { src: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/ACTIONS%20SOLIDAIRES%2F3.webp?alt=media&token=eff8b4b2-7409-46e7-8c29-9e16cc5c85b9", alt: "action" },
        { src: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/ACTIONS%20SOLIDAIRES%2F4.webp?alt=media&token=18c18869-389a-4733-b9f6-796996d72e17", alt: "action" },
        { src: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/ACTIONS%20SOLIDAIRES%2F5.webp?alt=media&token=03668d9b-4bf0-4e04-92d3-bdcc43a850b6", alt: "action" },
        { src: "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/ACTIONS%20SOLIDAIRES%2F6.webp?alt=media&token=21527070-a2fa-41c7-a359-03fcb892eefa", alt: "action" }
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
                    <div className="grid grid-cols-2 gap-4 w-full xl:w-2/3 xl:pde-80">
                        {ftourPhotos.map((photo, index) => (
                            <div key={index} className="overflow-hidden  ">
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    width={700}
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

                    <div className="flex justify-center items-center gap-4 my-8">
                        {seismePhotos.map((photo, index) => (
                            <div key={index} className="w-2/3 overflow-hidden rounded-lg shadow-md">
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    width={600}
                                    className="object-cover rounded-lg"
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
                            <div key={index} className="overflow-hidden  ">
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="object-cover rounded-lg shadow-lg w-auto "
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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                        {actionsPhotos.map((photo, index) => (
                            <div key={index} className="overflow-hidden rounded-lg">
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="w-full h-auto object-cover shadow-lg rounded-lg"
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