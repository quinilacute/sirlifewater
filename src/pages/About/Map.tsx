import Distance from "../../components/Distance"; // adjust relative path

function Map() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      {/* your map section */}
      <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border">
        <iframe
          title="SirLifeWater Location"
          src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=Itu,Akwa+Ibom,Nigeria`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* delivery calculator below */}
      <div className="mt-12">
        <Distance />
      </div>
    </section>
  );
}

export default Map;
