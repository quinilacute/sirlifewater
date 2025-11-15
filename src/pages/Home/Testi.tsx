import React, { useState } from "react";
import { Star } from "lucide-react";
import Headset from "../../assets/icons/headset.png";

// Define a type for testimonials
interface Testimonial {
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
}

const Testi: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      name: "Grace Williams",
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
  ]);

  const [newTesti, setNewTesti] = useState<Testimonial>({
    name: "",
    role: "",
    comment: "",
    rating: 5,
    image: "",
  });

  // Handle image upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
        setNewTesti((prev) => ({
          ...prev,
          image: reader.result as string, // convert to string for TS
        }));
    };
    reader.readAsDataURL(file);
  };

  // Submit new testimonial
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTestimonials([...testimonials, newTesti]);
    setNewTesti({ name: "", role: "", comment: "", rating: 5, image: "" });
    setShowForm(false);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          TESTIMONIAL
        </h2>

        <img src={Headset} alt="Headset Icon" className="w-9 mx-auto mb-3" />

        <p className="text-[#150448] max-w-2xl mx-auto text-center mb-8">
          OUR EXHORT HAPPY CLIENTS SAY!
        </p>

        {/* Testimonial list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testi, index) => (
            <div
              key={index}
              className="bg-[#D9D9D9] rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testi.image || "https://via.placeholder.com/100"}
                  alt={testi.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-[#150448]"
                />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-[#150448]">
                    {testi.name}
                  </h3>
                  <p className="text-sm text-[#000000]">{testi.role}</p>
                </div>
              </div>

              <p className="text-[#150448] text-sm mb-4">{testi.comment}</p>

              <div className="flex">
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

        {/* CTA Button */}
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition mb-14"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "Share Your Testimonial"}
        </button>

        {/* Add Testimonial Form */}
        {showForm && (
          <div className="bg-white p-8 rounded-xl shadow-md max-w-xl mx-auto text-left">
            <h3 className="text-xl font-bold mb-4">Add Your Testimonial</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 border rounded-lg"
                value={newTesti.name}
                onChange={(e) =>
                  setNewTesti({ ...newTesti, name: e.target.value })
                }
                required
              />

              <input
                type="text"
                placeholder="Location (e.g. Lagos, Nigeria)"
                className="w-full p-3 border rounded-lg"
                value={newTesti.role}
                onChange={(e) =>
                  setNewTesti({ ...newTesti, role: e.target.value })
                }
                required
              />

              <textarea
                placeholder="Your comment"
                className="w-full p-3 border rounded-lg"
                value={newTesti.comment}
                onChange={(e) =>
                  setNewTesti({ ...newTesti, comment: e.target.value })
                }
                required
              />

              {/* Image Upload */}
              <div className="flex items-center gap-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <span className="text-sm text-gray-500">
                  Optional: upload an image
                </span>
              </div>

              {newTesti.image && (
                <div className="mt-2">
                  <img
                    src={newTesti.image}
                    alt="Preview"
                    className="w-20 h-20 object-cover rounded-full border"
                  />
                </div>
              )}

              {/* Star Rating */}
              <div className="flex gap-2 text-2xl cursor-pointer">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() =>
                      setNewTesti({ ...newTesti, rating: star })
                    }
                    className={
                      star <= newTesti.rating ? "text-yellow-400" : "text-gray-300"
                    }
                  >
                    {star <= newTesti.rating ? "⭐" : "☆"}
                  </span>
                ))}
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 w-full rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Submit Testimonial
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testi;
