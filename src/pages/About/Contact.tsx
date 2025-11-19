import React from "react";

function Contact() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <div className="max-w-3xl mx-auto shadow-md rounded-xl p-8 md:p-12 bg-white">
        
        <h2 className="text-3xl font-bold text-[#091A71] mb-2 text-center underline">
          You Have A Concern?
        </h2>

        <p className="text-gray-600 px-6 md:px-10 mb-8 text-center">
          Have questions or need support? Send us a message and we’ll respond shortly.
        </p>

        <form className="grid grid-cols-1 gap-6">

          {/* Email — with bevel effect */}
          <div>
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="
                w-full p-3 bg-[#D9D9D9]
                hover:shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]
                focus:outline-none focus:bg-white
                transition
              "
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="
                w-full p-3 bg-[#D9D9D9]
                hover:shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]
                focus:outline-none focus:bg-white
                transition
              "
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="
                w-full p-3 bg-[#D9D9D9]
                hover:shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]
                focus:outline-none focus:bg-white
                transition
              "
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              rows={4}
              placeholder="Write your message..."
               className="
                w-full p-3 bg-[#D9D9D9]
                hover:shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]
                focus:outline-none focus:bg-white
                transition
              "
            ></textarea>
          </div>

          <div className="flex justify-end">
  <button
    type="submit"
    className="bg-[#150448] hover:text-[#150448] hover:bg-blue-700 text-[#FBFCFF] font-semibold py-3 px-6 rounded-full transition"
  >
    Send Message
  </button>
</div>


        </form>
      </div>
    </section>
  );
}

export default Contact;
