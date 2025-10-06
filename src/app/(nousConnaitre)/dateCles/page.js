"use client";

export default function Dates() {
  return (
    <main>
      <div className="h-[170rem] md:h-[170rem] sm:h-[230rem] xs:h-[100rem] p-4 mb-10 md:mb-40 sm:mb-20 xs:mb-20">
        {/* Header Section */}
        <header
          className="relative mt-4 p-4 text-2xl md:text-4xl sm:text-3xl xs:text-2xl font-bold text-center mb-16 uppercase"
        >
          <h1>Dates Clés</h1>
          <div
            className="w-24 md:w-48 sm:w-32 xs:w-24 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"
          ></div>
        </header>

        <div className="">
          <div className="relative grid justify-items-center mb-20 md:mb-40 sm:mb-20 xs:mb-10">
            {/* Première division 2014 */}
            <div
              className="flex flex-col items-center"
            >
              <div className="relative ml-[8rem] md:ml-[11rem] sm:ml-[5rem] xs:ml-[4.7rem] md:mb-2 sm:mb-0 xs:mb-2">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/date_cle%2Fsite%20bab%20rayan%20dates%20cl%C3%A9s-02.png?alt=media&token=bb716156-005e-4fc7-8e92-7d7419f8e1bc"
                  alt="element"
                  className="w-[30rem] h-[15rem] md:w-[45rem] md:h-[15rem] sm:w-[20rem] sm:h-[10rem] xs:w-[15rem] xs:h-[7.5rem] object-cover"
                />
              </div>
              <div className="relative grid place-items-start mt-4 md:mt-4 sm:mt-2 xs:mt-0 ml-[23rem] md:ml-[23rem] sm:ml-[19rem] xs:ml-[12rem]">
                <ul
                  className="list-disc list-inside text-left text-pretty italic text-sm md:text-lg sm:text-xs xs:text-[9px]"
                  style={{ lineHeight: "1" }}
                >
                  <li className="">Création de l'association Bab Rayan</li>
                  <li className="">
                    Partenariat avec l'académie <br />
                    régionale de l'éducation et de la <br />
                    formation de la région du Grand <br />
                    Casablanca et l'INDH
                  </li>
                  <li className="">Lancement du Ftour Bab Rayan</li>
                </ul>
              </div>
              <div className="absolute top-[8rem] md:top-[8rem] sm:top-[5rem] xs:top-[4rem] left-1/2 transform -translate-x-1/2">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/date_cle%2Fsite%20bab%20rayan%20dates%20cl%C3%A9s-09.png?alt=media&token=6f735f2d-053f-44a7-b6ab-847fb267a92e"
                  alt="fleche"
                  className="w-[6rem] h-[20rem] md:w-[6rem] md:h-[20rem] sm:w-[4rem] sm:h-[15rem] xs:w-[3rem] xs:h-[10rem]"
                />
              </div>
            </div>

            {/* Deuxième division 2015 */}
            <div
              className="flex flex-col items-center"
            >
              <div className="relative -ml-[9rem] md:-ml-[14rem] sm:-ml-[6rem] xs:-ml-[6rem] md:mb-1 sm:mb-0 xs:mb-0">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/date_cle%2Fsite%20bab%20rayan%20dates%20cl%C3%A9s-03.png?alt=media&token=85d5117a-6160-4807-9803-be08e92d6219"
                  alt="element"
                  className="w-[30rem] h-[15rem] md:w-[45rem] md:h-[15rem] sm:w-[20rem] sm:h-[10rem] xs:w-[20rem] xs:h-[7.5rem]"
                />
              </div>
              <div className="relative grid place-items-start mt-4 ml-[18rem] md:-ml-[18rem] sm:-ml-[14rem] xs:-ml-[11rem]">
                <ul
                  className="list-disc list-inside text-sm md:text-lg italic sm:text-xs xs:text-[9px]"
                  style={{ lineHeight: "1" }}
                >
                  <li>
                    Ouverture du foyer Bab Rayan et <br /> accueil des enfants
                  </li>
                </ul>
              </div>
              <div className="absolute top-[31rem] md:top-[31rem] sm:top-[22rem] xs:top-[15.9rem] left-1/2 transform -translate-x-1/2">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/date_cle%2FyellowArrow.png?alt=media&token=87219b22-d526-4f87-bf0b-0cd7080e293d"
                  alt="element"
                  className="w-[6rem] h-[20rem] md:w-[6rem] md:h-[20rem] sm:w-[4rem] sm:h-[15rem] xs:w-[3rem] xs:h-[10rem]"
                />
              </div>
            </div>

                       {/* Troisième division 2016 */}
                       <div
              className="flex flex-col items-center"
            >
              <div className="relative mt-12 ml-[8rem] md:ml-[12rem] sm:ml-[5.5rem] xs:ml-[5rem] sm:mb-0 xs:mb-0">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/date_cle%2Fsite%20bab%20rayan%20dates%20cl%C3%A9s-04.png?alt=media&token=b9fb1c3f-fbd4-486e-9f86-588929c9bc77"
                  alt="element"
                  className="w-[30rem] h-[15rem] md:w-[45rem] md:h-[15rem] sm:w-[20rem] sm:h-[10rem] xs:w-[20rem] xs:h-[7.5rem]"
                />
              </div>
              <div className="relative grid place-items-start mt-4 ml-[23rem] md:ml-[23rem] sm:ml-[16rem] xs:ml-[12rem]">
                <ul
                  className="list-disc list-inside text-left text-sm md:text-lg italic sm:text-xs xs:text-[9px]"
                  style={{ lineHeight: "1" }}
                >
                  <li>
                    Premiers Partenariats avec des <br /> institutions publiques
                    et privées
                  </li>
                </ul>
              </div>
              <div className="absolute mt-3 top-[53rem] md:top-[53rem] sm:top-[38.5rem] xs:top-[29rem] left-1/2 transform -translate-x-1/2">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/date_cle%2Fsite%20bab%20rayan%20dates%20cl%C3%A9s-09.png?alt=media&token=6f735f2d-053f-44a7-b6ab-847fb267a92e"
                  alt="fleche"
                  className="w-[6rem] h-[20rem] md:w-[6rem] md:h-[20rem] sm:w-[4rem] sm:h-[15rem] xs:w-[3rem] xs:h-[10rem]"
                />
              </div>
            </div>

            {/* Quatrième division 2018 */}
            <div
              className="flex flex-col items-center"
            >
              <div className="relative mt-12 -ml-[8.5rem] md:-ml-[13rem] sm:-ml-[5.7rem] xs:-ml-[6rem] sm:mb-0 xs:-mb-8">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/date_cle%2Fsite%20bab%20rayan%20dates%20cl%C3%A9s-05.png?alt=media&token=35d85ab3-2e27-40b7-bb58-dc83276b2514"
                  alt="element"
                  className="w-[30rem] h-[15rem] md:w-[45rem] md:h-[17rem] sm:w-[20rem] sm:h-[10rem] xs:w-[20rem] xs:h-[9rem]"
                />
              </div>
              <div className="relative grid place-items-start mt-4 -ml-[20rem] md:-ml-[20rem] sm:-ml-[15rem] xs:-ml-[11rem]">
                <ul
                  className="list-disc list-inside text-sm md:text-lg italic sm:text-xs xs:text-[9px]"
                  style={{ lineHeight: "1" }}
                >
                  <li>
                    Ouverture de l'école Palmier <br /> (préscolaire et
                    primaire)
                  </li>
                </ul>
              </div>
              <div className="absolute mt-4 top-[74rem] md:top-[74rem] sm:top-[54rem] xs:top-[41rem] left-1/2 transform -translate-x-1/2">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/date_cle%2FyellowArrow.png?alt=media&token=87219b22-d526-4f87-bf0b-0cd7080e293d"
                  alt="element"
                  className="w-[6rem] h-[20rem] md:w-[6rem] md:h-[20rem] sm:w-[4rem] sm:h-[15rem] xs:w-[3rem] xs:h-[10rem]"
                />
              </div>
            </div>

            {/* Cinquième division 2021 */}
            <div
              className="flex flex-col items-center"
            >
              <div className="relative mb-6 mt-10 ml-[9.5rem] md:ml-[14rem] sm:ml-[6.2rem] xs:ml-[6rem] md:mb-8 sm:mb-0 xs:-mb-6">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/date_cle%2Fsite%20bab%20rayan%20dates%20cl%C3%A9s-06.png?alt=media&token=bbb1f3b8-a7ee-4858-9c45-a87c8afd7d54"
                  alt="element"
                  className="w-[30rem] h-[15rem] md:w-[45rem] md:h-[15rem] sm:w-[20rem] sm:h-[10rem] xs:w-[20rem] xs:h-[9rem]"
                />
              </div>
              <div className="relative grid place-items-start mt-4 ml-[17rem] md:ml-[17rem] sm:ml-[12rem] xs:ml-[9rem]">
                <ul
                  className="list-disc list-inside text-left text-sm md:text-lg italic sm:text-xs xs:text-[9px]"
                  style={{ lineHeight: "1" }}
                >
                  <li>
                    Reconnaissance <br /> de l'utilité publique
                  </li>
                </ul>
              </div>
              <div className="absolute mt-5 top-[96rem] md:top-[96rem] sm:top-[70rem] xs:top-[53em] left-1/2 transform -translate-x-1/2">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/date_cle%2Fsite%20bab%20rayan%20dates%20cl%C3%A9s-09.png?alt=media&token=6f735f2d-053f-44a7-b6ab-847fb267a92e"
                  alt="fleche"
                  className="w-[6rem] h-[20rem] md:w-[6rem] md:h-[20rem] sm:w-[4rem] sm:h-[15rem] xs:w-[3rem] xs:h-[10rem]"
                />
              </div>
            </div>

            {/* Sixième division 2022 */}
            <div
              className="flex flex-col items-center"
            >
              <div className="relative mt-12 -ml-[8.5rem] md:-ml-[13rem] sm:-ml-[5.7rem] xs:-ml-[5.5rem] md:mb-6 sm:mb-0 xs:mb-0">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/date_cle%2Fsite%20bab%20rayan%20dates%20cl%C3%A9s-07.png?alt=media&token=3ad36dcb-28b0-48cd-a992-b8f17e40df00"
                  alt="element"
                  className="w-[30rem] h-[15rem] md:w-[45rem] md:h-[15rem] sm:w-[20rem] sm:h-[10rem] xs:w-[20rem] xs:h-[9rem]"
                />
              </div>
              <div className="relative grid place-items-start mt-4 md:mr-8 -ml-[20rem] md:-ml-[20rem] sm:-ml-[15rem] xs:-ml-[12rem]">
                <ul
                  className="list-disc list-inside text-sm md:text-lg italic sm:text-xs xs:text-[9px]"
                  style={{ lineHeight: "1" }}
                >
                  <li>
                    Ouverture du Centre de formation et <br /> d'insertion
                    professionnelle (CFI) et <br /> signature de conventions
                    publiques <br /> et privées
                  </li>
                </ul>
              </div>
              <div className="absolute mt-8 top-[118rem] md:top-[118rem] sm:top-[87rem] xs:top-[64.5rem] left-1/2 transform -translate-x-1/2">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/date_cle%2FyellowArrow.png?alt=media&token=87219b22-d526-4f87-bf0b-0cd7080e293d"
                  alt="element"
                  className="w-[6rem] h-[20rem] md:w-[6rem] md:h-[20rem] sm:w-[4rem] sm:h-[15rem] xs:w-[3rem] xs:h-[10rem]"
                />
              </div>
            </div>

            {/* Septième division 2024 */}
            <div
              className="flex flex-col items-center"
            >
              <div className="relative mt-4 ml-[10rem] md:ml-[15rem] sm:ml-[6.5rem] xs:ml-[6rem]">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/date_cle%2Fsite%20bab%20rayan%20dates%20cl%C3%A9s-08.png?alt=media&token=11018d9b-b726-436d-ae12-336beb4547bc"
                  alt="element"
                  className="w-[30rem] h-[15rem] md:w-[45rem] md:h-[15rem] sm:w-[20rem] sm:h-[10rem] xs:w-[22rem] xs:h-[8rem]"
                />
              </div>
              <div className="relative grid place-items-start mt-4 ml-[20rem] md:ml-[25rem] sm:ml-[18rem] xs:ml-[12rem]">
                <ul
                  className="list-disc list-inside text-left text-sm md:text-lg italic sm:text-xs xs:text-[9px]"
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
              <div className="absolute mt-12 top-[141rem] md:top-[141rem] sm:top-[104rem] xs:top-[76rem] left-1/2 transform -translate-x-1/2">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/date_cle%2Fsite%20bab%20rayan%20dates%20cl%C3%A9s-09.png?alt=media&token=6f735f2d-053f-44a7-b6ab-847fb267a92e"
                  alt="fleche"
                  className="w-[6rem] h-[20rem] md:w-[6rem] md:h-[20rem] sm:w-[4rem] sm:h-[15rem] xs:w-[3rem] xs:h-[10rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}