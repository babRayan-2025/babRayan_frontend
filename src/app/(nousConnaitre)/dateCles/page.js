"use client";
import Image from "next/image";

export default function Dates() {
  return (
    <main className="h-[200rem] md:h-[399rem] p-4 bg-gray-50">
      {/* Header Section */}
      <header className="p-4 text-2xl md:text-4xl font-bold text-center mb-16 uppercase relative">
        dates clés
        <div className="w-24 md:w-48 h-1 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
      </header>

        <section>
                 {/* Images Section */}
      <div className="relative">
        {/* First Set of Images */}
        <div className="relative">
          <Image
            src="/dateCles/site bab rayan dates clés-02.png"
            alt="element"
            width={900}
            height={900}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 md:left-[64rem]"
          />
          <Image
            src="/dateCles/site bab rayan dates clés-09.png"
            alt="fleche"
            width={150}
            height={150}
            className="absolute top-40 left-1/2 transform -translate-x-1/2 md:left-[57rem]"
          />
        </div>

        {/* Second Set of Images */}
        <div className="relative">
          <Image
            src="/dateCles/site bab rayan dates clés-03.png"
            alt="element"
            width={900}
            height={900}
            className="absolute top-[36rem] left-1/2 transform -translate-x-1/2 md:left-[48.5rem]"
          />
          <Image
            src="/dateCles/site bab rayan dates clés-10.png"
            alt="fleche"
            width={150}
            height={150}
            className="absolute top-[44rem] left-1/2 transform -translate-x-1/2 md:left-[57rem]"
          />
        </div>
        {/* 3 Set of Images */}
        <div className="relative">
          <Image
            src="/dateCles/site bab rayan dates clés-04.png"
            alt="element"
            width={900}
            height={900}
            className="absolute top-[60.5rem] left-1/2 transform -translate-x-1/2 md:left-[64.5rem]"
          />
          <Image
            src="/dateCles/site bab rayan dates clés-11.png"
            alt="fleche"
            width={150}
            height={150}
            className="absolute top-[72rem] left-1/2 transform -translate-x-1/2 md:left-[57rem]"
          />
        </div>

        {/* 4 Set of Images */}
        <div className="relative">
          <Image
            src="/dateCles/site bab rayan dates clés-05.png"
            alt="element"
            width={900}
            height={900}
            className="absolute top-[85rem] left-1/2 transform -translate-x-1/2 md:left-[49rem]"
          />
          <Image
            src="/dateCles/site bab rayan dates clés-12.png"
            alt="fleche"
            width={150}
            height={150}
            className="absolute top-[97.5rem] left-1/2 transform -translate-x-1/2 md:left-[57rem]"
          />
        </div>
        {/* 5 Set of Images */}
        <div className="relative">
          <Image
            src="/dateCles/site bab rayan dates clés-06.png"
            alt="element"
            width={900}
            height={900}
            className="absolute top-[112rem] left-1/2 transform -translate-x-1/2 md:left-[66rem]"
          />
          <Image
            src="/dateCles/site bab rayan dates clés-13.png"
            alt="fleche"
            width={150}
            height={150}
            className="absolute top-[124rem] left-1/2 transform -translate-x-1/2 md:left-[57rem]"
          />
        </div>

        {/* 6 Set of Images */}
        <div className="relative">
          <Image
            src="/dateCles/site bab rayan dates clés-07.png"
            alt="element"
            width={900}
            height={900}
            className="absolute top-[139.5rem] left-1/2 transform -translate-x-1/2 md:left-[49rem]"
          />
          <Image
            src="/dateCles/site bab rayan dates clés-14.png"
            alt="fleche"
            width={150}
            height={150}
            className="absolute top-[149rem] left-1/2 transform -translate-x-1/2 md:left-[57rem]"
          />
        </div>
      </div>
        </section>
    </main>
  );
}
