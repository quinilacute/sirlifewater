import Line from "../../assets/icons/lines.png";
import Video from "../../assets/videos/About.mp4";

function VideoSection() {
  return (
    <section className="relative bg-gray-100 py-16 px-6 md:px-20 flex flex-col items-center text-center">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
       OUR VIDEO HISTORY
      </h2>
      <img src={Line} alt="" />
      <p className="text-gray-600 max-w-2xl mb-10">
       We are more than just wto health,sustainability,and customer satisfaction.
      </p>

      {/* Video Container */}
      <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-300">
        <iframe
          className="w-full h-full"
          src={Video}
          title="SirLifeWater Mission Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default VideoSection;
