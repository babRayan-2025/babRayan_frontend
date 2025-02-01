"use client";

export default function Dates() {
  return (
    <main>
      <div className="h-[170rem] md:h-[170rem] sm:h-[230rem] xs:h-[120rem] p-4 mb-10 md:mb-40 sm:mb-20 xs:mb-20">
        {/* Header Section */}
        <header className="relative mt-4 p-4 text-2xl md:text-4xl sm:text-3xl xs:text-2xl font-bold text-center mb-16 uppercase">
          <h1>Dates Clés</h1>
          <div className="w-24 md:w-48 sm:w-32 xs:w-24 h-1 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
        </header>

        <section className="relative grid justify-items-center mb-20 md:mb-40 sm:mb-20 xs:mb-10">
          {/* Première division 2014 */}
          <div className="flex flex-col items-center">
            <div className="relative ml-[7.5rem] md:ml-[7.5rem] sm:ml-[5rem] xs:ml-[3.7rem] md:mb-8 sm:mb-0 xs:mb-2">
              <img
                src="/dateCles/site bab rayan dates clés-02.png"
                alt="element"
                className="w-[30rem] h-[15rem] md:w-[30rem] md:h-[15rem] sm:w-[20rem] sm:h-[10rem] xs:w-[15rem] xs:h-[7.5rem]"
              />
            </div>
            <div className="relative grid place-items-start mt-4 md:mt-4 sm:mt-2 xs:mt-0 ml-[23rem] md:ml-[23rem] sm:ml-[19rem] xs:ml-[12rem]">
              <ul
                className="list-disc list-inside text-pretty text-sm md:text-sm sm:text-xs xs:text-[9px]"
                style={{ lineHeight: "1" }}
              >
                <li className="pl-[1rem]">
                  Création de l'association Bab Rayan
                </li>
                <li className="pl-[1rem]">
                  Partenariat avec l'académie <br />
                  régionale de l'éducation et de la <br />
                  formation de la région du Grand <br />
                  Casablanca et l'INDH
                </li>
                <li className="pl-[1rem]">Lancement du Ftour Bab Rayan</li>
              </ul>
            </div>
            <div className="absolute top-[8rem] md:top-[8rem] sm:top-[5rem] xs:top-[4rem] left-1/2 transform -translate-x-1/2">
              <img
                src="/dateCles/site bab rayan dates clés-09.png"
                alt="fleche"
                className="w-[6rem] h-[20rem] md:w-[6rem] md:h-[20rem] sm:w-[4rem] sm:h-[15rem] xs:w-[3rem] xs:h-[10rem]"
              />
            </div>
          </div>

          {/* Deuxième division 2015 */}
          <div className="flex flex-col items-center">
            <div className="relative -ml-[9rem] md:-ml-[9rem] sm:-ml-[6rem] xs:-ml-[4.5rem] md:mb-4 sm:mb-0 xs:mb-0">
              <img
                src="/dateCles/site bab rayan dates clés-03.png"
                alt="element"
                className="w-[30rem] h-[15rem] md:w-[30rem] md:h-[15rem] sm:w-[20rem] sm:h-[10rem] xs:w-[15rem] xs:h-[7.5rem]"
              />
            </div>
            <div className="relative grid place-items-start mt-4 -ml-[18rem] md:-ml-[18rem] sm:-ml-[14rem] xs:-ml-[11rem]">
              <ul
                className="list-disc list-inside text-sm md:text-sm sm:text-xs xs:text-[9px]"
                style={{ lineHeight: "1" }}
              >
                <li>
                  Ouverture du foyer Bab Rayan et <br /> accueil des enfants
                </li>
              </ul>
            </div>
            <div className="absolute top-[31rem] md:top-[31rem] sm:top-[22rem] xs:top-[15.9rem] left-1/2 transform -translate-x-1/2">
              <img
                src="/dateCles/yellowArrow.png"
                alt="element"
                className="w-[6rem] h-[20rem] md:w-[6rem] md:h-[20rem] sm:w-[4rem] sm:h-[15rem] xs:w-[3rem] xs:h-[10rem]"
              />
            </div>
          </div>

          {/* Troisième division 2016 */}
          <div className="flex flex-col items-center">
            <div className="relative mt-12 ml-[8rem] md:ml-[8rem] sm:ml-[5.5rem] xs:ml-[4rem] md:mb-2 sm:mb-0 xs:mb-0">
              <img
                src="/dateCles/site bab rayan dates clés-04.png"
                alt="element"
                className="w-[30rem] h-[15rem] md:w-[30rem] md:h-[15rem] sm:w-[20rem] sm:h-[10rem] xs:w-[15rem] xs:h-[7.5rem]"
              />
            </div>
            <div className="relative grid place-items-start mt-4 ml-[23rem] md:ml-[23rem] sm:ml-[16rem] xs:ml-[12rem]">
              <ul
                className="list-disc list-inside text-left text-sm md:text-sm sm:text-xs xs:text-[9px]"
                style={{ lineHeight: "1" }}
              >
                <li>
                  Premiers Partenariats avec des <br /> institutions publiques
                  et privées
                </li>
              </ul>
            </div>
            <div className="absolute top-[53rem] md:top-[53rem] sm:top-[38.5rem] xs:top-[29rem] left-1/2 transform -translate-x-1/2">
              <img
                src="/dateCles/site bab rayan dates clés-09.png"
                alt="fleche"
                className="w-[6rem] h-[20rem] md:w-[6rem] md:h-[20rem] sm:w-[4rem] sm:h-[15rem] xs:w-[3rem] xs:h-[10rem]"
              />
            </div>
          </div>

          {/* Quatrième division 2018 */}
          <div className="flex flex-col items-center">
            <div className="relative mt-12 -ml-[8.5rem] md:-ml-[8.5rem] sm:-ml-[5.7rem] xs:-ml-[4.3rem] md:mb-4 sm:mb-0 xs:mb-0">
              <img
                src="/dateCles/site bab rayan dates clés-05.png"
                alt="element"
                className="w-[30rem] h-[15rem] md:w-[30rem] md:h-[15rem] sm:w-[20rem] sm:h-[10rem] xs:w-[15rem] xs:h-[7.5rem]"
              />
            </div>
            <div className="relative grid place-items-start mt-4 -ml-[20rem] md:-ml-[20rem] sm:-ml-[15rem] xs:-ml-[11rem]">
              <ul
                className="list-disc list-inside text-sm md:text-sm sm:text-xs xs:text-[9px]"
                style={{ lineHeight: "1" }}
              >
                <li>
                  Ouverture de l'école Palmier <br /> (préscolaire et primaire)
                </li>
              </ul>
            </div>
            <div className="absolute top-[74rem] md:top-[74rem] sm:top-[54rem] xs:top-[41.3rem] left-1/2 transform -translate-x-1/2">
              <img
                src="/dateCles/yellowArrow.png"
                alt="element"
                className="w-[6rem] h-[20rem] md:w-[6rem] md:h-[20rem] sm:w-[4rem] sm:h-[15rem] xs:w-[3rem] xs:h-[10rem]"
              />
            </div>
          </div>

          {/* Cinquième division 2021 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6 mt-10 ml-[9.5rem] md:ml-[9.5rem] sm:ml-[6.2rem] xs:ml-[4.5rem] md:mb-8 sm:mb-0 xs:mb-0">
              <img
                src="/dateCles/site bab rayan dates clés-06.png"
                alt="element"
                className="w-[30rem] h-[15rem] md:w-[30rem] md:h-[15rem] sm:w-[20rem] sm:h-[10rem] xs:w-[15rem] xs:h-[7.5rem]"
              />
            </div>
            <div className="relative grid place-items-start mt-4 ml-[17rem] md:ml-[17rem] sm:ml-[12rem] xs:ml-[9rem]">
              <ul
                className="list-disc list-inside text-left text-sm md:text-sm sm:text-xs xs:text-[9px]"
                style={{ lineHeight: "1" }}
              >
                <li>
                  Reconnaissance <br /> de l'utilité publique
                </li>
              </ul>
            </div>
            <div className="absolute top-[96rem] md:top-[96rem] sm:top-[70rem] xs:top-[54rem] left-1/2 transform -translate-x-1/2">
              <img
                src="/dateCles/site bab rayan dates clés-09.png"
                alt="fleche"
                className="w-[6rem] h-[20rem] md:w-[6rem] md:h-[20rem] sm:w-[4rem] sm:h-[15rem] xs:w-[3rem] xs:h-[10rem]"
              />
            </div>
          </div>

          {/* Sixième division 2022 */}
          <div className="flex flex-col items-center">
            <div className="relative mt-12 -ml-[8.5rem] md:-ml-[8.5rem] sm:-ml-[5.7rem] xs:-ml-[4rem] md:mb-8 sm:mb-0 xs:mb-0">
              <img
                src="/dateCles/site bab rayan dates clés-07.png"
                alt="element"
                className="w-[30rem] h-[15rem] md:w-[30rem] md:h-[15rem] sm:w-[20rem] sm:h-[10rem] xs:w-[15rem] xs:h-[7.5rem]"
              />
            </div>
            <div className="relative grid place-items-start mt-4 -ml-[20rem] md:-ml-[20rem] sm:-ml-[15rem] xs:-ml-[12rem]">
              <ul
                className="list-disc list-inside text-sm md:text-sm sm:text-xs xs:text-[9px]"
                style={{ lineHeight: "1" }}
              >
                <li>
                  Ouverture du Centre de formation et <br /> d'insertion
                  professionnelle (CFI) et <br /> signature de conventions
                  publiques <br /> et privées
                </li>
              </ul>
            </div>
            <div className="absolute top-[118rem] md:top-[118rem] sm:top-[87rem] xs:top-[66rem] left-1/2 transform -translate-x-1/2">
              <img
                src="/dateCles/yellowArrow.png"
                alt="element"
                className="w-[6rem] h-[20rem] md:w-[6rem] md:h-[20rem] sm:w-[4rem] sm:h-[15rem] xs:w-[3rem] xs:h-[10rem]"
              />
            </div>
          </div>

          {/* Septième division 2024 */}
          <div className="flex flex-col items-center">
            <div className="relative mt-4 ml-[10rem] md:ml-[10rem] sm:ml-[6.5rem] xs:ml-[5rem]">
              <img
                src="/dateCles/site bab rayan dates clés-08.png"
                alt="element"
                className="w-[30rem] h-[15rem] md:w-[30rem] md:h-[15rem] sm:w-[20rem] sm:h-[10rem] xs:w-[15rem] xs:h-[7.5rem]"
              />
            </div>
            <div className="relative grid place-items-start mt-4 ml-[20rem] md:ml-[20rem] sm:ml-[18rem] xs:ml-[12rem]">
              <ul
                className="list-disc list-inside text-left text-sm md:text-sm sm:text-xs xs:text-[9px]"
                style={{ lineHeight: "1" }}
              >
                <li>
                  Remise des diplômes de la 2ème <br /> promotion du CFI
                </li>
                <li>
                  Projet de développement <br /> "École du numérique"
                </li>
              </ul>
            </div>
            <div className="absolute top-[141rem] md:top-[141rem] sm:top-[104rem] xs:top-[78rem] left-1/2 transform -translate-x-1/2">
              <img
                src="/dateCles/site bab rayan dates clés-09.png"
                alt="fleche"
                className="w-[6rem] h-[20rem] md:w-[6rem] md:h-[20rem] sm:w-[4rem] sm:h-[15rem] xs:w-[3rem] xs:h-[10rem]"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}