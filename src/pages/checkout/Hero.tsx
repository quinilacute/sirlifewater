import Navbar from "../../components/Nav";
import Hero2 from "../../assets/images/hero2.png";

function Hero() {
  return (
    <section className="w-full flex flex-col">
      {/* Top Banner / Hero Background */}
      <div
        className="relative flex flex-col bg-cover bg-center bg-no-repeat h-[60vh] md:h-[70vh]" 
        style={{
          backgroundImage: `url(${Hero2})`,
        }}
      >
        

        {/* Navbar */}
        <div className="absolute top-4 z-20 w-full">
          <Navbar />
        </div>

        {/* Hero Text */}
       <div className="relative z-20 flex-1 flex items-start px-6 pt-20 md:pt-24">
  <h1 className="text-3xl md:text-4xl font-bold text-blue-500">
    Checkout
  </h1>
</div>


      </div>
    </section>
  );
}

export default Hero;
