import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import Navbar from "../../components/Nav";
import Herobackground from "../../assets/images/hero.png";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white min-h-screen flex flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.7), rgba(96, 165, 250, 0.7)), url(${Herobackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar on top */}
      <Navbar />

      {/* 🛒 Floating Cart Icon */}
      <button
        onClick={() => navigate("/cart")}
        className="absolute top-24 right-8 bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        aria-label="Go to Cart"
      >
        <ShoppingCart size={22} />
      </button>

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
