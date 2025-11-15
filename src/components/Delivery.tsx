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
          zIndex: 0,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[#150448] opacity-80 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Water Delivery 20k.m.Free <br />Service
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Experience seamless doorstep water delivery designed for <br /> your
          convenience — quick, safe, and eco-friendly.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          cgfyfyk
        </button>
      </div>
    </section>
  );
};

export default Delivery;
