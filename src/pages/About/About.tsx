import Con from "./Contact";
import Hero from "./Hero";
import Map from "./Map";
import Miss from "./Mission";
import Video from "./Video";
import News from "../../components/News";
import Footer from "../../components/Footer";


function About() {
  return (
    <div >
      <Hero />
      <Miss />
      <Video />
      <Map />
      <Con />
      <News />
      <Footer />
    </div>
  );
}
export default About;
