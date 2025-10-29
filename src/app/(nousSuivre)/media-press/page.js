"use client";
import { motion, AnimatePresence } from "framer-motion";
// import { Download } from "lucide-react";
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
      "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Ffoyer_album%2FFoyer.webp?alt=media&token=77b3dd28-5248-4802-bfce-dbdc2cf43910",
      "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Ffoyer_album%2F2417.webp?alt=media&token=d6341d26-7ec9-426b-b831-8d05ffb8831a",
      "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Ffoyer_album%2FBabRayan-Photo-3991.JPG?alt=media&token=23b1a044-15ab-4677-8c0d-261bf17db10d",
      "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Ffoyer_album%2FDSC_9884.JPG?alt=media&token=25d1e3ec-5d3f-4b7d-9f95-c0f59ccc5fb5",
      "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Ffoyer_album%2FDSC_9959.JPG?alt=media&token=69e6d971-ed50-4d3f-a3a0-7f20d9ca8eab",
      "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Ffoyer_album%2FDSC_9922.JPG?alt=media&token=c8321460-8256-40dd-9acc-0fef58339c87",
    ],
    "CFI": [
      "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Fcfi_album%2F62-Bab%20Rayan_28%20octobre%202024%20(85).jpg?alt=media&token=f762e8ca-d3a3-473d-8b2c-d7b1363981b2",
      "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Fcfi_album%2FDSC_9635.JPG?alt=media&token=32b8f4e5-bd1d-4dd2-b023-3e73ef332593",
      "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Fcfi_album%2FPhoto1%20BP.jpeg?alt=media&token=191c2f10-21ea-41c6-a012-304f43b0574c",
      "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Fcfi_album%2Fphoto%202%20BP.jpeg?alt=media&token=638dfe92-c306-46cc-97d8-1ef17c5fe4b7",
      "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Fcfi_album%2Fphoto4%20laureat.jpeg?alt=media&token=110c8bed-13a7-4fb8-a486-5315711fc54c",
      "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Fcfi_album%2Fphoto5.jpeg?alt=media&token=2a36d48d-9168-4ada-b72d-d57e106064e1",
    ],
    "Ecole palmier": [
      "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Fecole_album%2F%C3%A9cole.jpg?alt=media&token=effdfa51-aa97-4644-a35f-e2dacbf4955d",
      "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Fecole_album%2FDSC_9927.JPG?alt=media&token=5a5741ca-0464-4250-bbf0-434befbbf473",
      "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Fecole_album%2FDSC_9381.JPG?alt=media&token=3dae47e8-2b32-4683-8caa-d34449d24a86",
      "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Fecole_album%2FDSC_9312.JPG?alt=media&token=8b60a71d-6fd7-4ba0-90db-266f4be36ca8",
      "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Fecole_album%2FDSC_9505.JPG?alt=media&token=2d39a80d-5fe3-41b4-b595-a563661f67da",
      "https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Fecole_album%2FDSC_9487.JPG?alt=media&token=9b7e19a2-9dd4-409e-a05f-b4f558d08129"
    ],
    "Ftour bab rayan": [
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbumFtourBabRayan%2FFtourbabrayan1.webp?alt=media&token=49c1b009-41df-4a69-ba57-50db011299a0",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbumFtourBabRayan%2Fftourbabrayan2.webp?alt=media&token=567eb805-d145-4160-b54f-9d401bdba6d7",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbumFtourBabRayan%2Fftourbabrayan3.webp?alt=media&token=cee70e0d-8cc2-4143-a7d8-d50d947bf59b",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbumFtourBabRayan%2FFtourbabrayan4.webp?alt=media&token=a36667e6-c322-4516-904a-69878c55c949",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbumFtourBabRayan%2FRamadan%202024%201.webp?alt=media&token=f177ef7d-badd-4ebb-a9fc-ce80cd31aa64",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbumFtourBabRayan%2FFtourBabRayan5.webp?alt=media&token=3a558ccd-afb9-4336-b75d-0c618173e9c4"
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
      <div className="w-full bg-[url('https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2FBG.webp?alt=media&token=ef616fe8-0202-4dec-b96d-ca4dfc7aaf76')] bg-center py-16">
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
                src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Fbas.png?alt=media&token=a13a79b0-c804-43bf-acd4-df9a8d51e889"
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
            <div className=" grid md:grid-cols-2 gap-4 text-white font-medium">
              <div className="flex items-center">
                <a href="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2FLogos%2FLogo%20%C3%A9cole%20palmier%202.webp?alt=media&token=8ed1285b-2183-4ff5-8b04-785074fe082b" target="_blank" download>
                  <Image
                    src="/press/telechargement.svg"
                    alt="download"
                    width={120}
                    height={60}
                  />
                </a>
                <span className="text-2xl mt-2">École <br /> Palmier</span>
              </div>
              <div className="flex items-center ">
                <a href="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2FLogos%2FLogo%20CFI.webp?alt=media&token=c54c9898-7fa2-46ee-8fae-e681a36b19fa" target="_blank" download>
                  <Image
                    src="/press/telechargement.svg"
                    alt="download"
                    width={120}
                    height={60}
                  />
                </a>
                <span className="text-2xl mt-2">CFI</span>
              </div>
              <div className="flex items-center ">
                <a href="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2FLogos%2Flogo%20bab%20rayan%20arabe.jpg?alt=media&token=374f04fc-efd2-45bf-a7cf-1c284ef575a5" target="_blank" download>
                  <Image
                    src="/press/telechargement.svg"
                    alt="download"
                    width={120}
                    height={60}
                  />
                </a>
                <span className="text-2xl mt-2">L&apos;association <br /> Bab Rayan</span>
              </div>
              <div className="flex items-center">
                <a href="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2FLogos%2Flogo%20ftour.webp?alt=media&token=c200ff10-b900-4b06-9565-a09e0ef52c5b" target="_blank" download>
                  <Image
                    src="/press/telechargement.svg"
                    alt="download"
                    width={120}
                    height={60}
                  />
                </a>
                <span className="text-2xl mt-2">Ftour Bab Rayan</span>
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
                  href="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Fpresentations%2FBabrayan%20Brochure%20v2%202025.pdf?alt=media&token=2862a98b-631b-4ea9-841c-20d65bf40f04"
                  download target="_blank"
                >
                  <Image
                    src="/press/telechargement.svg"
                    alt="download"
                    width={120}
                    height={60}
                  />
                </a>
                <span className="text-2xl mt-3">L&apos;association <br /> Bab Rayan</span>
              </div>
              <div className="flex items-center ">
                <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Fpresentations%2FEcole%20Palmier.pdf?alt=media&token=ec531fc0-4b4b-4e39-b906-6ae62ca06d03" download>
                  <Image
                    src="/press/telechargement.svg"
                    alt="download"
                    width={120}
                    height={60}
                  />
                </a>
                <span className="text-2xl mt-3">École <br /> Palmier</span>
              </div>
              <div className="flex items-center ">
                <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Fpresentations%2Fprez%202025-BAB%20RAYANE-new%20(2).pdf?alt=media&token=16b2ee85-5181-44b4-9322-2098928c1208" download>
                  <Image
                    src="/press/telechargement.svg"
                    alt="download"
                    width={120}
                    height={60}
                  />
                </a>
                <span className="text-2xl mt-4" >Ftour <br /> Bab Rayan</span>
              </div>
              <div className="flex items-center">
                <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Fpresentations%2FBrochu%201%20final.pdf?alt=media&token=dc2bd69b-4b94-477c-b870-aa063aef4346" download>
                  <Image
                    src="/press/telechargement.svg"
                    alt="download"
                    width={120}
                    height={60}
                  />
                </a>
                <span className="text-2xl mt-4">Brochure parrainage <br /> Bab Rayan</span>
              </div>
            </div>
            {/* </div> */}
          </motion.div>
        </motion.div>

        {/* Albums Section */}
        <motion.div
          className="bg-[#cc2229] rounded-3xl mb-6 md:mx-16 ms:mb-6 p-8 mx-14"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <h2 className="text-5xl font-medium text-white mb-8 text-center flex items-center justify-center font-[Helvetica Neue] tracking-tighter">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Fbas.png?alt=media&token=a13a79b0-c804-43bf-acd4-df9a8d51e889"
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
                  src={`/press/${album}.webp`}
                  alt={album}
                  style={{ width: '100%', height: 'auto' }}
                  loading="lazy"
                  className="init-block cursor-pointer hover:opacity-80 transition-opacity "
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
                  title={<h2 className="text-center w-full text-5xl font-bold mb-8">{selectedAlbum}</h2>}
                  centered
                  open={modal2Open}
                  onCancel={() => setModal2Open(false)}
                  width={1500} // Increased width for better display
                  styles={{ body: { padding: "20px", maxHeight: "80vh", overflowY: "auto" } }} // Scrollable content
                  footer={null} // Removes the OK button
                >
                  <div className="grid grid-cols-3 gap-4">
                    {albums[selectedAlbum].map((image, index) => (
                      <div
                        key={index}
                        className={`relative ${index === 0 ? 'col-span-3' : ''} ${index > 0 && (albums[selectedAlbum].length - 1) % 3 === 2 && index === (albums[selectedAlbum].length - 1) ? 'col-span-2' : ''}`}
                      >
                        <Image
                          src={image}
                          alt={`${selectedAlbum}-${index}`}
                          width={300}
                          height={300}
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
          className="bg-yellow-300 rounded-3xl mx-16 p-8 md:mx-16 ms:mb-6 p-8 mx-14"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <h2 className="text-5xl font-semibold text-[#161618] mb-8 text-center flex items-center justify-center font-[Helvetica Neue] tracking-tighter">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Fgauche.png?alt=media&token=0efc5a65-98bd-4e66-813e-09aa11e44077"
              alt="flech-partenaire"
              width={100}
              height={50}
              loading="lazy"
              className="init-block mt-4 -left-48 md:left-[550px]"
            />
            <span className="mr-2 mt-4">Ils parlent de nous</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto d-flex justify-items-center gap-4 justify-center">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Ftelequele.webp?alt=media&token=7f0a9889-230f-47fa-ac82-828767c016fe"
              onClick={() => window.open("https://youtu.be/1SatrIi9WB0?si=MyxVJCpaVk2ye_f6", "_blank")} style={{ cursor: "pointer" }}
              alt="call"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2FCasa24.webp?alt=media&token=ce1ec549-927d-4ea8-b03a-bfd34ed36aca"
              onClick={() => window.open("http://www.casa24.ma/people/economie/55743.html", "_blank")} style={{ cursor: "pointer" }}
              alt="call"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2FLogo-MediaPlateforme-FR.webp?alt=media&token=d5dcdf22-0da5-4384-8acc-42d05f6ff469"
              onClick={() => window.open("https://www.mediaplateforme.com/fr/100-dinsertion-pour-la-deuxieme-promotion-du-centre-de-formation-et-dinsertion-de-lassociation-bab-rayane/", "_blank")} style={{ cursor: "pointer" }}
              alt="call"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2FHespress-logo.webp?alt=media&token=53b9c172-237a-445b-89cd-7c78d3a07654"
              onClick={() => window.open("https://fr.hibapress.com/news-143334.html", "_blank")} style={{ cursor: "pointer" }}
              alt="call"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2FLogo-almostakbal24-2.webp?alt=media&token=4fb09b58-ec54-4ffd-9282-254e86d4cd18"
              onClick={() => window.open("https://almostakbal24.ma/2024/10/29/منح-شهادات-التخرج-للدفعة-الثانية-من-مر/ ", "_blank")} style={{ cursor: "pointer" }}
              alt="call"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2Flogo-lalla-fatima-HEADER.webp?alt=media&token=8c495a32-93af-49ed-9db0-fb0f556c26b5"
              onClick={() => window.open("https://www.youtube.com/watch?v=qV57CTHvD90", "_blank")} style={{ cursor: "pointer" }}
              alt="call"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/MEDIAS_ET_PRESS%2FLogo-ALM-NV.-01.webp?alt=media&token=374b9a78-9467-4a8f-bfcc-ed81563696f6"
              onClick={() => window.open("https://aujourdhui.ma/societe/lassociation-bab-rayan-celebre-la-2eme-promotion-de-son-centre-de-formation-et-dinsertion", "_blank")} style={{ cursor: "pointer" }}
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
