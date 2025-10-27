import React, { useState } from "react";
import { ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const faqs: FAQItem[] = [
    {
      question: "What is SirLifeWater?",
      answer:
        "SirLifeWater provides pure, refreshing water delivered directly to your home or business. Our goal is to ensure hydration made simple and healthy.",
    },
    {
      question: "How can I place an order?",
      answer:
        "You can order through our website by navigating to the Shop section and adding your desired quantity to your cart.",
    },
    {
      question: "Do you offer same-day delivery?",
      answer:
        "Yes! Orders placed before 12 PM are eligible for same-day delivery depending on your location.",
    },
    {
      question: "Can I track my delivery?",
      answer:
        "Absolutely. Once your order is confirmed, you'll receive a tracking link or message to monitor your delivery progress.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept Paystack payments (cards, transfers, and mobile money) for your convenience.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6 md:px-20">
      {/* Return Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-blue-600 font-medium mb-6 hover:text-blue-800 transition"
      >
        <ArrowLeft size={30} />
       
      </button>

      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-10 text-center">
        Frequently Asked Questions
      </h1>

      {/* FAQ List */}
      <div className="max-w-3xl w-full space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl border border-gray-100"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left px-6 py-4 focus:outline-none"
            >
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                {faq.question}
              </h2>
              {openIndex === index ? (
                <ChevronUp className="text-blue-600" />
              ) : (
                <ChevronDown className="text-gray-500" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
