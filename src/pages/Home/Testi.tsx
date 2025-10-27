import React from "react";import { Star } from "lucide-react";

function Testi() {
  const testimonials = [
    {
      name:
       "Grace Williams",
      role: "Lagos, Nigeria",
      comment:
        "SirLifeWater has completely changed the way my family drinks water. It’s always fresh and crystal clear!",
      rating: 5,
      image: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Daniel Obi",
      role: "Port Harcourt",
      comment:
        "Fast delivery and excellent customer service. I love how easy it is to order every week.",
      rating: 4,
      image: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "Chioma Ade",
      role: "Abuja, Nigeria",
      comment:
        "The taste and purity are unmatched. I recommend SirLifeWater to everyone who values clean water.",
      rating: 5,
      image: "https://i.pravatar.cc/100?img=3",
    },
  ];

  return (
    <section className="bg-blue-50 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Customers <span className="text-blue-600">Say</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Real voices, real experiences — because your trust keeps us flowing.
        </p>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition"
            >
              <img
                src={testi.image}
                alt={testi.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-100"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {testi.name}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{testi.role}</p>
              <p className="text-gray-600 text-sm mb-4">{testi.comment}</p>
              <div className="flex justify-center">
                {Array.from({ length: testi.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testi;
