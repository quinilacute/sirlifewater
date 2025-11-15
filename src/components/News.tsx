import React, { useState } from "react";

function News() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSuccess(true);
    setEmail("");
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <>
      {/* Newsletter Section */}
      <section className="bg-white py-16 px-6 md:px-20 flex flex-col items-start text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          Newsletter
        </h2>

        <p className="text-gray-600 max-w-2xl mb-8 leading-relaxed">
          Delivering clean and safe table water
          <span className="md:inline"><br /></span>
          to your home, office, and events
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-start gap-4 w-full max-w-lg"
        >
          <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />

          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium 
                       hover:bg-orange-600 transition"
          >
            Subscribe
          </button>
        </form>

        {success && (
          <p className="text-green-600 mt-4 font-medium">
            Thank you for subscribing!
          </p>
        )}
      </section>

      {/* Full-width horizontal line */}
      <div className="w-full">
        <hr className="border-t border-gray-300 w-full" />
      </div>
    </>
  );
}

export default News;
