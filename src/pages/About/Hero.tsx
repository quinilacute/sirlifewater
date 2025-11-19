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
        backgroundImage: ` url(${Herobackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar on top */}
      <Navbar />

      
      <h2
       
        className="absolute top-48 left-36 text-blue-600 p-3 text-3xl"
      >
       About Us
      </h2>
    </section>
  );
}

export default Hero;
