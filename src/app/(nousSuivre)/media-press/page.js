"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Modal } from 'antd';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
  exit: { opacity: 0, scale: 0.8 },
};

export default function Press() {
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    email: "",
    message: "",
  });
  const [modal2Open, setModal2Open] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const albums = {
    "Le Foyer bab rayan": [
      "/press/album/AlbumFoyer/1.JPG",
      "/press/album/AlbumFoyer/2.JPG",
      "/press/album/AlbumFoyer/3.JPG",
      "/press/album/AlbumFoyer/4.JPG",
      "/press/album/AlbumFoyer/5.jpeg",
      "/press/album/AlbumFoyer/6.jpeg",
    ], 
    "CFI": [
      "/press/album/AlbumCFI/1.JPG",
      "/press/album/AlbumCFI/2.JPG",
      "/press/album/AlbumCFI/3.JPG",
      "/press/album/AlbumCFI/4.JPG",
      "/press/album/AlbumCFI/5.JPG",
      "/press/album/AlbumCFI/6.JPG",
      "/press/album/AlbumCFI/7.JPG",
      "/press/album/AlbumCFI/8.JPG",
      "/press/album/1.jpg",
      "/press/album/4.jpg",
      "/press/album/2.jpg",
    ],
    "Ecole palmier": [
      "/press/album/AlbumécolePalmier/1.JPG",
      "/press/album/AlbumécolePalmier/2.JPG",
      "/press/album/AlbumécolePalmier/3.JPG",
      "/press/album/AlbumécolePalmier/4.JPG",
      "/press/album/AlbumécolePalmier/5.JPG",
      "/press/album/AlbumécolePalmier/6.jpeg"
    ],
    "Ftour bab rayan": [
      "/press/album/AlbumFtourBabRayan/Ftourbabrayan1.jpeg",
      "/press/album/AlbumFtourBabRayan/Ftourbabrayan2.jpeg",
      "/press/album/AlbumFtourBabRayan/Ftourbabrayan3.jpeg",
      "/press/album/AlbumFtourBabRayan/Ftourbabrayan4.png",
      "/press/album/AlbumFtourBabRayan/Ftourbabrayan5.png"
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAlbum(null);
  };

  return (
    <main>
      {/* Hero Section */}
      <div className="w-full bg-[url('/press/BG.png')] bg-center py-16">
        <motion.div
          className="text-center"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <motion.h1
            className="p-4 text-2xl md:text-4xl font-bold mb-8 relative"
            whileHover={{ scale: 1.02 }}
          >
           MEDIAS ET PRESS
            <div className="w-24 md:w-48 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
          </motion.h1>
        </motion.div>
        <motion.div
          className="justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-medium text-red-600 my-2 text-center flex items-center justify-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Image
                src="/benevole/flech-partenaire.png"
                alt="flech-partenaire"
                width={100}
                height={50}
                className="init-block -left-48 md:left-[550px]"
              />
            </motion.div>
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mr-2 mt-6 mb-0 font-medium"
            >
              Kit média
            </motion.span>
          </h2>
          <motion.h1
            className="text-center text-2xl md:text-5xl text-[#161618] font-semibold font-[Helvetica Neue] tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            
          >
            de l&apos;Association Bab Rayan
          </motion.h1>

        </motion.div>

        {/* Content Sections */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 p-6 md:p-10 mx-8"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          {/* Logos Section */}
          <motion.div
  className="bg-[#cc2229] rounded-3xl p-5 flex flex-col items-center justify-center"
  whileHover={{ scale: 1.02 }}
>
  <h2 className="text-5xl font-medium text-white mb-4 flex items-center justify-center tracking-tighter">
    <span className="mr-2"></span> Logos
  </h2>
  <div className="flex flex-wrap gap-2 justify-center">
    <div className="grid grid-cols-2 gap-2 text-white text-xl font-medium ">
      {/* Première div */}
      <div className="flex items-center space-x-0 justify-center ml-6">
        <a href="/press/logo/logobabrayan.jpg" download>
          <Image
            src="/press/telechargement.svg"
            alt="download"
            width={120}
            height={60}
          />
        </a>
        <span className="text-2xl mt-2">L&apos;association <br/> Bab Rayan</span>
      </div>

      {/* Deuxième div */}
      <div className="flex items-center space-x-0 justify-center">
        <a href="/press/logo/ecolePalmier.pdf" download>
          <Image
            src="/press/telechargement.svg"
            alt="download"
            width={120}
            height={60}
          />
        </a>
        <span className="text-2xl mt-2">École <br/> Palmier</span>
      </div>

      {/* Troisième div */}
      <div className="col-span-1 flex items-center justify-center mr-16">
        <a href="/press/logo/cfi_logo.pdf" download>
          <Image
            src="/press/telechargement.svg"
            alt="download"
            width={120}
            height={60}
          />
        </a>
        <span className="text-2xl mt-2">CFI</span>
      </div>
    </div>
  </div>
</motion.div>


          {/* Presentations Section */}
          <motion.div
            className="bg-[#cc2229] rounded-3xl p-5"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-5xl  font-medium text-white mb-4 text-center flex items-center justify-center tracking-tighter">
              <span className="mr-2"></span> Présentations
            </h2>
            <div className=" grid md:grid-cols-2 gap-4 text-white font-medium">
              <div className="flex items-center">
                <a
                  href="/press/presentation/presentation_association_bab_rayan.pdf"
                  download
                >
                  <Image
                    src="/press/telechargement.svg"
                    alt="download"
                    width={120}
                    height={60}
                  />
                </a>
                <span className="text-2xl mt-3">L&apos;association <br/> Bab Rayan</span>
              </div>
              <div className="flex items-center ">
                <a href="/press/presentation/EcolePalmier.pdf" download>
                  <Image
                    src="/press/telechargement.svg"
                    alt="download"
                    width={120}
                    height={60}
                  />
                </a>
                <span className="text-2xl mt-3">École <br/> Palmier</span>
              </div>
              <div className="flex items-center ">
                <a href="/press/presentation/ftourBabRayan.pdf" download>
                  <Image
                    src="/press/telechargement.svg"
                    alt="download"
                    width={120}
                    height={60}
                  />
                </a>
                <span className="text-2xl mt-4" >Ftour <br/> Bab Rayan</span>
              </div>
              <div className="flex items-center">
                <a href="/press/presentation/Brochure-Parrainage-Bab-Rayan2025.pdf" download>
                  <Image
                    src="/press/telechargement.svg"
                    alt="download"
                    width={120}
                    height={60}
                  />
                </a>
                <span className="text-2xl mt-4">Brochure parrainage <br/> Bab Rayan</span>
              </div>
            </div>
            {/* </div> */}
          </motion.div>
        </motion.div>

        {/* Albums Section */}
        <motion.div
          className="bg-[#cc2229] rounded-3xl mx-16 mb-6 p-8"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <h2 className="text-5xl font-medium text-white mb-8 text-center flex items-center justify-center font-[Helvetica Neue] tracking-tighter">
            <Image
              src="/benevole/flech-partenaire.png"
              alt="flech-partenaire"
              width={100}
              height={50}
              className="init-block -left-48 md:left-[550px]"
            />
            <span className="mr-2 mt-8">Albums Photos</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 justify-center">
            {Object.keys(albums).map((album) => (
              <div key={album} onClick={() => { handleAlbumClick(album); setModal2Open(true) }}>
                <img
                  src={`/press/${album}.png`}
                  alt={album}
                  style={{ width: '100%', height: 'auto' }}
                  className="init-block cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
            ))}
          </div>

          {/* Modal */}
          <AnimatePresence>
            {isModalOpen && (
              <motion.div
              >
                <Modal
                  title={<h2 className="text-center w-full text-3xl font-semibold">{selectedAlbum}</h2>}
                  centered
                  open={modal2Open}
                  onCancel={() => setModal2Open(false)}
                  width={1500} // Increased width for better display
                  bodyStyle={{ padding: "20px", maxHeight: "80vh", overflowY: "auto" }} // Scrollable content
                  footer={null} // Removes the OK button
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {albums[selectedAlbum].map((image, index) => (
                      <div
                        key={index}
                        className={`relative ${index % 4 === 0 ? "col-span-3 row-span-5" : "col-span-1"
                          }`}
                      >
                        <Image
                          src={image}
                          alt={`${selectedAlbum}-${index}`}
                          width={index % 4 === 0 ? 600 : 300}
                          height={index % 4 === 0 ? 600 : 300}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                </Modal>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Press Section */}
        <motion.div
          className="bg-yellow-300 rounded-3xl mx-16 p-8"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <h2 className="text-5xl font-semibold text-[#161618] mb-8 text-center flex items-center justify-center font-[Helvetica Neue] tracking-tighter">
            <Image
              src="/press/aroow.png"
              alt="flech-partenaire"
              width={100}
              height={50}
              className="init-block mt-4 -left-48 md:left-[550px]"
            />
            <span className="mr-2 mt-4">Ils parlent de nous</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto d-flex justify-items-center gap-4 justify-center">
            <Image
              src="/press/1.png"
              onClick={() => window.open("/press/parlent/telque.pdf", "_blank")} style={{cursor: "pointer"}}
              alt="call"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
            <Image
              src="/press/2.png"
              onClick={() => window.open("http://www.casa24.ma/people/economie/55743.html", "_blank")} style={{cursor: "pointer"}}
              alt="call"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
            <Image
              src="/press/3.png"
              onClick={() => window.open("https://www.mediaplateforme.com/fr/100-dinsertion-pour-la-deuxieme-promotion-du-centre-de-formation-et-dinsertion-de-lassociation-bab-rayane/", "_blank")} style={{cursor: "pointer"}}
              alt="call"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
            <Image
              src="/press/4.png"
              onClick={() => window.open("https://fr.hibapress.com/news-143334.html", "_blank")} style={{cursor: "pointer"}}
              alt="call"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
            <Image
              src="/press/mosta9bal.jpg"
              onClick={() => window.open("https://almostakbal24.ma/2024/10/29/منح-شهادات-التخرج-للدفعة-الثانية-من-مر/ ", "_blank")} style={{cursor: "pointer"}}
              alt="call"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
            <Image
              src="/press/laalfatima.jpg"
              onClick={() => window.open("https://www.youtube.com/watch?v=qV57CTHvD90", "_blank")} style={{cursor: "pointer"}}
              alt="call"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
            <Image
              src="/press/ajrdh.jpg"
              onClick={() => window.open("https://aujourdhui.ma/societe/lassociation-bab-rayan-celebre-la-2eme-promotion-de-son-centre-de-formation-et-dinsertion", "_blank")} style={{cursor: "pointer"}}
              alt="call"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </div>

      {/* Contact Form Section */}
      <motion.div
        className="bg-red-700 p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-yellow-300 text-4xl font-bold mb-2">
            Besoin de plus <br /> d&apos;informations ?
          </h1>
          <h2 className="text-white text-4xl font-bold mb-8">
            Contactez-nous.
            <div className="w-24 md:w-48 h-1 bg-yellow-300 mt-2"></div>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="nom"
                placeholder="Nom *"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-full text-gray-700 text-lg"
              />
            </div>

            <div>
              <input
                type="tel"
                name="telephone"
                placeholder="Téléphone *"
                value={formData.telephone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-full text-gray-700 text-lg"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-full text-gray-700 text-lg"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-3xl text-gray-700 text-lg"
              />
            </div>

            <div>
              <button
                type="submit"
                className="px-8 py-2 border border-cyan-50 bg-yellow-300 hover:bg-yellow-450 text-red-600 rounded-full text-xl font-bold transition-colors duration-200"
              >
                envoyer
              </button>
            </div>
          </form>
        </div>{" "}
      </motion.div>
    </main>
  );
}
