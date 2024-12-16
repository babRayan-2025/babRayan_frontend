// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-green-500 text-white">
      
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold underline mt-10">
          Welcome to Bab Rayan
        </h1>
        <p className="text-xl md:text-2xl max-w-lg mx-auto">
          Discover your world with Bab Rayan. Explore, learn, and connect.
        </p>
      </header>

      
      <section className="mt-16">
        <div className="relative w-full max-w-lg h-64 rounded-xl overflow-hidden shadow-lg">
          {/* <Image
            src="#"
            alt="Bab Rayan"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          /> */}
        </div>
      </section>

      <section className="mt-12">
        <a
          href="#explore"
          className="px-6 py-3 text-lg bg-yellow-500 text-gray-900 rounded-full hover:bg-yellow-400 transition duration-300"
        >
          Explore Now
        </a>
      </section>

      <footer className="mt-16 text-center text-sm text-gray-300">
        <p>&copy; 2024 Bab Rayan. All rights reserved.</p>
      </footer>
    </main>
  );
}
