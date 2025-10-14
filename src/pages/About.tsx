import Con from "./About/Contact";
import Hero from "./About/Hero";
import Map from "./About/Map";
import Miss from "./About/Mission";
import Video from "./About/Video";
import News from "../components/News";
import Footer from "../components/Footer";


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
