import React from "react";
import Navbar from "../../components/Nav";
import Herobackground from "../../assets/images/hero.png";

function Hero() {
  return (
    <section
      className="relative text-white min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(37, 99, 235, 0.8), rgba(96, 165, 250, 0.7)),
          url(${Herobackground})
        `,
      }}
    >
      {/* Navbar on top */}
      <Navbar />

      {/* Hero content */}
      <div className="flex flex-col items-center justify-center flex-1 text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Pure Water. Pure Life. 💧
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Experience the freshness of nature with SirLifeWater — delivered right
          to your doorstep.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Hero;
