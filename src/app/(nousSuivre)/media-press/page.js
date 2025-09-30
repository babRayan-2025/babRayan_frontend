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
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbumFoyer%2F1.webp?alt=media&token=6489ac9e-08b5-477d-88b8-fbecde08aed8",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbumFoyer%2F2.webp?alt=media&token=45da7b9f-9304-4452-9ea7-09c3a00044b9",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbumFoyer%2F3.webp?alt=media&token=ac20dbcd-2f27-4b43-a15c-05004666f330",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbumFoyer%2F4.webp?alt=media&token=32444c19-5725-4d2c-8742-9c5b99915bdc",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbumFoyer%2F5.webp?alt=media&token=aa990cdc-2035-4334-8a84-55b5024a9c16",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbumFoyer%2F6.webp?alt=media&token=522ec0ad-4071-4d43-aa99-0862f663b453",
    ],
    "CFI": [
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbumCFI%2F1.webp?alt=media&token=5e932b45-910a-4d51-b32c-c23b1f4a87a4",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbumCFI%2F2.webp?alt=media&token=8f430688-b2e6-4168-864a-8045d700e445",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbumCFI%2F3.webp?alt=media&token=dd7af906-f3fc-4b98-bbf3-ee46b01ef1fe",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbumCFI%2F4.webp?alt=media&token=fa83187e-e4b6-4808-8a0c-d802993d9967",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbumCFI%2F5.webp?alt=media&token=a443eed1-fd35-4beb-9863-688f42aeb345",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbumCFI%2F6.webp?alt=media&token=f035b056-6c74-4c14-a59b-61d5b51395b8",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbumCFI%2F7.webp?alt=media&token=01fc1760-6750-42b7-9a20-2e661e5f5e44",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbumCFI%2F8.webp?alt=media&token=ca1714ab-ac8c-468a-a70e-8fbbf858d440",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2F1.webp?alt=media&token=7901b67b-53e5-46f2-add2-d54c71a5b270",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2F4.webp?alt=media&token=b0b95a64-74d5-469d-ac80-37a275bc3d7e",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2F2.webp?alt=media&token=864d28ce-4a09-4f74-a9f3-f47eb40bc982",
    ],
    "Ecole palmier": [
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbum%C3%A9colePalmier%2F1.webp?alt=media&token=34679e19-2dbf-485b-8ac7-7c4f25e5c462",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbum%C3%A9colePalmier%2F2.webp?alt=media&token=7f83a3eb-b3cd-4ccb-8063-f906ff50d896",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbum%C3%A9colePalmier%2F3.webp?alt=media&token=ea4752e9-feff-4de5-b1b0-ad2999d39530",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbum%C3%A9colePalmier%2F4.webp?alt=media&token=57486e52-0395-415e-acb2-49ac4903a00d",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbum%C3%A9colePalmier%2F5.webp?alt=media&token=8ee46a7f-eb8a-4244-9a50-dbedc107fdc7",
      "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Falbums%2FAlbum%C3%A9colePalmier%2F6.webp?alt=media&token=d76de80c-3788-46c3-9ee5-37cd19444468"
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
                src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/benevole%2Fflech-partenaire.png?alt=media&token=82d18c4c-f43f-4dd4-9a32-0ca3397feff0"
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
                <a href="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Flogos%2FecolePalmier.pdf?alt=media&token=3953bfa0-3798-485c-bbe1-b6b7e27868ce" download>
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
                <a href="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Flogos%2Fcfi_logo.pdf?alt=media&token=8a410c22-8e0f-4607-81eb-ec4829a213b4" download>
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
                <a href="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Flogos%2Flogobabrayan.jpg?alt=media&token=3a11dddf-4857-403c-bcbc-8ca3a7b7854c" download>
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
                <a href="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Flogos%2Flogo_ftour.png?alt=media&token=0c38ed65-d735-4670-bb18-8b1d2f5135e8" download>
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
                  href="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Fpresentation%2Fpresentation_association_bab_rayan.pdf?alt=media&token=287e0b12-8bd0-4fb1-ba8e-6283fc24fa08"
                  download
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
                <a href="/press/presentation/EcolePalmier.pdf" download>
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
                <a href="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Fpresentation%2FftourBabRayan.pdf?alt=media&token=e2e39809-0ec0-46f9-b65d-f4f5677427f6" download>
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
                <a href="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Fpresentation%2FBrochure-Parrainage-Bab-Rayan2025.pdf?alt=media&token=884431e1-4b30-412f-a7a3-365675ac220e" download>
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
              src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/benevole%2Fflech-partenaire.png?alt=media&token=82d18c4c-f43f-4dd4-9a32-0ca3397feff0"
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
          className="bg-yellow-300 rounded-3xl mx-16 p-8 md:mx-16 ms:mb-6 p-8 mx-14"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <h2 className="text-5xl font-semibold text-[#161618] mb-8 text-center flex items-center justify-center font-[Helvetica Neue] tracking-tighter">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Faroow.webp?alt=media&token=bd61c759-8bf1-4c6a-bab9-a84a4bea0dc5"
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
              src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2F1.webp?alt=media&token=b0ccffb0-bf07-40d1-b5ff-aa5b50785a79"
              onClick={() => window.open("https://youtu.be/1SatrIi9WB0?si=MyxVJCpaVk2ye_f6", "_blank")} style={{ cursor: "pointer" }}
              alt="call"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2F2.webp?alt=media&token=27ab31c5-247c-4edc-998b-159770110bcc"
              onClick={() => window.open("http://www.casa24.ma/people/economie/55743.html", "_blank")} style={{ cursor: "pointer" }}
              alt="call"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2F3.webp?alt=media&token=5dc8d0b9-b6e7-41e9-9cfc-13517ffbb964"
              onClick={() => window.open("https://www.mediaplateforme.com/fr/100-dinsertion-pour-la-deuxieme-promotion-du-centre-de-formation-et-dinsertion-de-lassociation-bab-rayane/", "_blank")} style={{ cursor: "pointer" }}
              alt="call"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2F4.webp?alt=media&token=ddf50f1a-24fb-4aa4-a013-d851fb15fc27"
              onClick={() => window.open("https://fr.hibapress.com/news-143334.html", "_blank")} style={{ cursor: "pointer" }}
              alt="call"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Fmosta9bal.jpg?alt=media&token=87cd5e02-aa1d-4000-a28e-a691d77e3da1"
              onClick={() => window.open("https://almostakbal24.ma/2024/10/29/منح-شهادات-التخرج-للدفعة-الثانية-من-مر/ ", "_blank")} style={{ cursor: "pointer" }}
              alt="call"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Flaalfatima.jpg?alt=media&token=0038096e-6def-4d93-a18e-916d5622ec6d"
              onClick={() => window.open("https://www.youtube.com/watch?v=qV57CTHvD90", "_blank")} style={{ cursor: "pointer" }}
              alt="call"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/media%20Kit%2Fajrdh.jpg?alt=media&token=2e1bb10d-f0b3-4cfc-b76d-b6a7b24eaa1e"
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
