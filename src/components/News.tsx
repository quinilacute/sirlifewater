import React, { useState } from "react";

function News() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSuccess(true);
    setEmail("");
    setTimeout(() => setSuccess(false), 3000); // reset message
  };

  return (
    <section className="bg-blue-50 py-16 px-6 md:px-20 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
        Stay Connected
      </h2>
      <p className="text-gray-600 max-w-2xl mb-8">
        Subscribe to our newsletter and get updates on water initiatives, new products, 
        and how you can help bring clean water to every home.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition"
        >
          Subscribe
        </button>
      </form>

      {success && (
        <p className="text-green-600 mt-4 font-medium">
          🎉 Thank you for subscribing!
        </p>
      )}
    </section>
  );
}

export default News;
