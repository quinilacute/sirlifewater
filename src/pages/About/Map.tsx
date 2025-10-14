import React from "react";

function Map() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
          Find Us 🌍
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Visit our office or distribution point. We’re always happy to connect and
          share more about how SirLifeWater delivers clean, sustainable water solutions.
        </p>
      </div>

      <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border">
        <iframe
          title="SirLifeWater Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.812257... (replace with your actual link)"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Map;
