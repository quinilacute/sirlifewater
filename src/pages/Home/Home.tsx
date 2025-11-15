// import React from "react";
import Delivery from "../../components/Delivery";
import Hero from "../Home/Hero";
import Testi from "../Home/Testi";
import Why from "../Home/Why";
import News from "../../components/News";
import Footer from "../../components/Footer";

function Home() {
  

  return (
    <div className="flex-col h-screen transition-all duration-700 bg-green">
      <Hero />
      <Why />
     <Testi />
     <Delivery />
     <News />
     <Footer />
    </div>
  );
}

export default Home;
