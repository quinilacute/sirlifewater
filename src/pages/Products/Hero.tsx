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
        backgroundImage: `url(${Herobackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Page Title */}
      <h2 className="absolute top-48 left-36 text-blue-600 p-3 text-3xl">
        Our Product
      </h2>

      {/* Floating Cart Button */}
      <button
        onClick={() => navigate("/cart")}
        className="
          fixed top-28 right-6 
          bg-[#150448] text-white p-4 rounded-full 
          shadow-xl hover:shadow-2xl 
          hover:bg-blue-700 
          transition-all duration-300 
          flex items-center justify-center
        "
      >
        <ShoppingCart size={26} />
      </button>
    </section>
  );
}

export default Hero;
