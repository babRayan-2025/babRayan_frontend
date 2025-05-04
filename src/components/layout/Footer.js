import Image from "next/image";
import { Modal } from 'antd';
import { usePrivacyPolicy } from '@/hooks/usePrivacyPolicy';

export default function Footer() {
  const {
    isPrivacyModalOpen,
    openPrivacyModal,
    closePrivacyModal,
    privacyPolicyText
  } = usePrivacyPolicy();

  return (
    <footer className="bg-[#000000] text-white py-10 px-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <img src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/Logo.png?alt=media&token=e5f5173e-6170-4f2f-9037-955c7c199481" alt="Logo" className="mb-3 w-32" priority />
            <p className="text-gray-400">
              4 Rue Bayt Lahm, <br /> Quartier Palmier <br /> 20100 Casablanca
              <br /> Maroc
            </p>
            <hr className="border-t-0.5 border-white w-500 my-4" />
            <p>
              <span className="text-gray-400">Tél:</span>
              <a href="tel:+212 522 22 22 22">
                +212 610 023 555
              </a>
            </p>
            <hr className="border-t-0.5 border-white w-500 my-2" />
            <p>
              <span className="text-gray-400">Email:</span>{" "}
              <a
                href="mailto:contact@babrayan.ma"
                className="text-white hover:underline"
              >
                contact@babrayan.ma
              </a>
            </p>
          </div>

          {/* Discover Section */}
          <div className="space-y-4">
            <h4 className="uppercase font-bold text-white mb-4">Découvrir</h4>
            {[
              "Missions & Valeurs",
              "Gouvernance",
              "Nos Projets",
              "Nos Partenaires",
              "Nous Contacter",
            ].map((item, index) => (
              <p
                key={index}
                className="text-gray-400 border-b border-transparent hover:text-white  transition-colors cursor-pointer"
              >
                <span className="hover:border-white border-b border-transparent">
                  {item}
                </span>
              </p>

            ))}
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h4 className="uppercase font-bold text-white mb-4">Soutenir</h4>
            {[
              "Faire un don",
              "Parrainer un enfant",
              "Mécénat & Partenariat",
              "Bénévolat",
              "Événements",
            ].map((item, index) => (
              <p
                key={index}
                className="text-gray-400 border-b border-transparent hover:text-white transition-colors cursor-pointer"
              >
                <span className="hover:border-white border-b border-transparent">
                  {item}
                </span>
              </p>
            ))}
          </div>

          {/* Follow Section */}
          <div className="space-y-4">
            <h4 className="uppercase font-bold text-white mb-4">Suivre</h4>
            {["Actualités", "Facebook", "Instagram", "LinkedIn", "YouTube"].map(
              (item, index) => (
                <p
                  key={index}
                  className="text-gray-400 border-b border-transparent hover:text-white transition-colors cursor-pointer"
                >
                  <span className="hover:border-white border-b border-transparent">
                    {item}
                  </span>
                </p>
              )
            )}
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-8 border-gray-600" />

        {/* Copyright Section */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            <span
              className="cursor-pointer underline"
              onClick={openPrivacyModal}
            >
              Politique de confidentialité
            </span> / Association Bab Rayan © 2015-2025 | All Rights Reserved
          </p>
        </div>
      </div>

      <Modal
        title="Politique de confidentialité"
        open={isPrivacyModalOpen}
        onCancel={closePrivacyModal}
        footer={null}
        width={800}
        className="privacy-policy-modal"
        bodyStyle={{
          maxHeight: '70vh',
          overflowY: 'auto',
          padding: '24px'
        }}
        centered
      >
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6 z-50">
          <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-4xl max-h-[80vh] overflow-y-auto">
            <div className="bg-red-700 text-white py-4 px-6 rounded-xl mb-6 relative">
              <h2 className="text-xl font-bold">Politique de Confidentialité</h2>
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="absolute top-2 right-3 bg-white bg-opacity-20 text-white hover:bg-opacity-30 rounded-full w-8 h-8 flex items-center justify-center"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: privacyPolicyText }} />
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="px-6 py-2 bg-red-700 text-white rounded-full hover:bg-red-800"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </footer>
  );
}