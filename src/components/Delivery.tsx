import React from "react";
import Deli from "../assets/images/delivery.png";

const Delivery: React.FC = () => {
  return (
    <section className="relative py-16 px-6 md:px-20">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${Deli})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)",
          zIndex: 0,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#150448]/80 to-[#150448]/80 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-snug">
          Water Delivery <span className="text-blue-400">20km Free Service</span>
        </h2>
        <p className="text-gray-200 text-lg md:text-xl mb-12 leading-relaxed">
          Experience seamless doorstep water delivery designed for your convenience. 
          Quick, safe, and eco-friendly — we bring hydration directly to you.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300">
          Order Now
        </button>
      </div>
    </section>
  );
};

export default Delivery;
