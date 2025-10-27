

function VideoSection() {
  return (
    <section className="relative bg-gray-100 py-16 px-6 md:px-20 flex flex-col items-center text-center">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
        Watch Our Mission in Action
      </h2>
      <p className="text-gray-600 max-w-2xl mb-10">
        See how <span className="font-semibold text-blue-600">SirLifeWater</span> 
        is transforming communities with clean, accessible water — one drop at a time.
      </p>

      {/* Video Container */}
      <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-300">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/9No-FiEInLA"
          title="SirLifeWater Mission Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default VideoSection;
