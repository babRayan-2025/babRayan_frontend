import Image from "next/image";
import { Modal } from 'antd';
import { usePrivacyPolicy } from '@/hooks/usePrivacyPolicy';

export default function Footer() {
  const {
    isPrivacyModalOpen,
    openPrivacyModal,
    closePrivacyModal,
    privacyPolicyText,
    setIsPrivacyModalOpen
  } = usePrivacyPolicy();

  return (
    <footer className="bg-[#000000] text-white py-10 px-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <img src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/Logo.png?alt=media&token=1d4af563-f0f7-466b-9184-77d005204d7a" alt="Logo" className="mb-3 w-32" priority />
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
              "Nos Partenaires",
              "Nous Contacter",
            ].map((item, index) => (
              <p
                key={index}
                className="text-gray-400 border-b border-transparent hover:text-white  transition-colors cursor-pointer"
              >
                <span className="hover:border-white border-b border-transparent"
                onClick={() => window.open(item === "Missions & Valeurs" ? "https://www.babrayan.ma/about"
                : item === "Gouvernance" ? "https://www.babrayan.ma/gouvernance"
                : item === "Nos Partenaires" ? "https://www.babrayan.ma/partenaires"
                : item === "Nous Contacter" ? "https://www.babrayan.ma/contact_us" : "")}>
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
              "Partenariat",
              "Bénévolat",
            ].map((item, index) => (
              <p
                key={index}
                className="text-gray-400 border-b border-transparent hover:text-white transition-colors cursor-pointer"
              >
                <span className="hover:border-white border-b border-transparent"
                onClick={() => window.open(item === "Faire un don" ? "https://www.babrayan.ma/donation"
                : item === "Parrainer un enfant" ? "https://www.babrayan.ma/parrainage"
                : item === "Partenariat" ? "https://www.babrayan.ma/devenir_partenaire"
                : item === "Bénévolat" ? "https://www.babrayan.ma/benevole" : "")}>
                  {item}
                </span>
              </p>
            ))}
          </div>

          {/* Follow Section */}
          <div className="space-y-4">
            <h4 className="uppercase font-bold text-white mb-4">Suivre</h4>
            {["Actualités", "Facebook", "Instagram", "LinkedIn"].map(
              (item, index) => (
                <p
                  key={index}
                  className="text-gray-400 border-b border-transparent hover:text-white transition-colors cursor-pointer"
                >
                  <span className="hover:border-white border-b border-transparent"
                    onClick={() => window.open(item === "Facebook" ? "https://www.facebook.com/babrayan"
                      : item === "Instagram" ? "https://www.instagram.com/association_babrayan"
                        : item === "LinkedIn" ? "https://www.linkedin.com/company/associationbabrayan/"
                          : item === "Actualités" ? "https://www.babrayan.ma/blog" : "")}>
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
        styles={{
          body: {
            maxHeight: '70vh',
            overflowY: 'auto',
            padding: '24px'
          }
        }}
        centered
      >
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: privacyPolicyText }} />
      </Modal>
    </footer>
  );
}