import Image from "next/image";

export default function Footer() {
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
            Politique de confidentialité / Association Bab Rayan © 2015-2025 | All
            Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
