import Image from "next/image";
import Logo from "../../../public/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white py-10 px-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <Image src={Logo} alt="Logo" className="mb-3 w-32" priority />
            <p className="text-gray-400">
              4 Rue Bayt Lahm, <br /> Quartier Palmier <br /> 20100 Casablanca
              <br /> Maroc
            </p>
            <hr class="border-t-0.5 border-white w-500 my-4" />
            <p>
              <span className="text-gray-400">Tél:</span> +212 610 023 555
            </p>
            <hr class="border-t-0.5 border-white w-500 my-2" />
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
                className="text-gray-400 border-b border-transparent hover:text-white  hover:border-white transition-colors cursor-pointer"
              >
                {item}
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
                className="text-gray-400 border-b border-transparent hover:text-white hover:border-white transition-colors cursor-pointer"
              >
                {item}
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
                  className="text-gray-400 border-b border-transparent hover:text-white hover:border-white transition-colors cursor-pointer"
                >
                  {item}
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
