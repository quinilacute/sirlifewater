import React from "react";

const Mission: React.FC = () => {
  return (
    <section className="bg-[#F2F0F1] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* Text Section */}
        <div className="text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
            Our Story, Our Mission
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            At <span className="font-semibold text-blue-600">SirLifeWater</span>,
            we are more than just water — we’re committed to health, sustainability,
            and exceptional customer satisfaction.
          </p>

          {/* Welcome Line */}
          <p className="text-xl md:text-2xl font-semibold mb-4">
            Welcome to{" "}
            <span className="text-blue-700 font-bold text-2xl md:text-3xl">
              SirLifeWater.
            </span>
          </p>

          {/* Mission Paragraph */}
          <p className="text-gray-600 leading-relaxed mb-6">
            Our mission is rooted in purity, trust, and positive impact. We believe
            that clean, healthy water should be accessible to everyone — not just as
            a product, but as a lifestyle of wellness. With every bottle, we aim to
            support eco-friendly practices, reduce waste, and deliver hydration that
            truly makes a difference.
            <br /><br />
            Our commitment goes beyond business; it’s about protecting our planet,
            uplifting communities, and ensuring that every home enjoys water they
            can rely on with confidence.
          </p>

          <p className="text-gray-600 italic">
            “Every drop matters — and so does every person.”
          </p>
        </div>

      </div>
    </section>
  );
};

export default Mission;
