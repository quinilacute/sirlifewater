

function Mission() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
            alt="Clean Water Mission"
            className="rounded-2xl shadow-lg w-full md:w-4/5 object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At <span className="font-semibold text-blue-600">SirLifeWater</span>,
            our mission is to provide **clean, safe, and refreshing water** to
            every home and community. We believe that access to pure drinking
            water is not a luxury — it’s a necessity for healthy living.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Through innovative purification methods, eco-friendly packaging,
            and a passion for sustainability, we’re building a future where
            everyone can enjoy water that’s as pure as nature intended.
          </p>

          <p className="text-gray-600 italic">
            “Every drop matters — and so does every person.”
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
