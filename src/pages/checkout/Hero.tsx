import Navbar from "../../components/Navbar";

function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white min-h-screen flex flex-col">
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
