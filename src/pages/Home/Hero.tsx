import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

import Navbar from "../../components/Nav";
import First from "../../assets/images/firsimage.png";
import Herobackground from "../../assets/images/hero.png";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="relative text-white min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(37, 99, 235, 0.88), rgba(96, 165, 250, 0.75)),
          url(${Herobackground})
        `,
      }}
    >
      {/* Top Navbar */}
      <Navbar />

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
          z-50
        "
      >
        <ShoppingCart size={26} />
      </button>

      {/* Hero Content */}
      <div className="flex flex-row items-center justify-between flex-1 md:px-12 lg:px-20 md:gap-10 lg:gap-16 py-10 md:py-0">

        {/* IMAGE */}
        <motion.img
          src={First}
          alt="Sir Life Water"
          className="
            w-48 sm:w-56 md:w-72 lg:w-[340px] xl:w-[420px] 2xl:w-[500px]
            drop-shadow-2xl object-contain
            ml-4 md:ml-10
          "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />

        {/* TEXT CONTENT */}
        <motion.div
          className="
            text-center md:text-left 
            max-w-lg lg:max-w-xl xl:max-w-2xl 
            space-y-4 sm:space-y-5 md:space-y-6
            mr-4 md:mr-10
          "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
        >
          <h1 className="text-4xl tracking-wider sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.1]">
            Clean, <br /> Proven, <br /> Cooling
          </h1>

          <p className="text-base sm:text-lg md:text-xl xl:text-2xl opacity-95 leading-relaxed">
            Delivering clean and safe <br />
            table water to your <br />
            home, office, and events.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/products")}
            className="
              mt-4 bg-white text-blue-700 font-bold 
              px-10 py-4 
              rounded-full shadow-lg 
              hover:bg-gray-100 transition-all duration-300
            "
          >
            Shop Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
