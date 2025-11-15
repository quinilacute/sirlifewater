import React, { useState } from "react";
import Hero from "../checkout/Hero";
import UserDetailsForm from "../checkout/Forms";
import Order from "../checkout/OrSum";
import Pay from "../checkout/PayMetFo";
import Dev from "../../components/Delivery"; // updated to match JSX
import Footer from "../../components/Footer";

const Checkout: React.FC = () => {
  const [deliveryCost, setDeliveryCost] = useState<number | null>(null);
  const [deliveryDistance, setDeliveryDistance] = useState<string>("");

  const handleDeliveryCostChange = (cost: number, distance: string) => {
    setDeliveryCost(cost);
    setDeliveryDistance(distance);
  };

  return (
    <div className="flex flex-col min-h-screen bg-green-50 transition-all duration-700">
      <Hero />

      {/* User Details Form */}
      <div className="px-6 md:px-12 my-6">
        <UserDetailsForm onDeliveryCostChange={handleDeliveryCostChange} />
      </div>

      {/* Display delivery info */}
      {deliveryCost !== null && (
        <div className="px-6 md:px-12 mb-6 bg-white shadow-md rounded-md p-4">
          <p className="text-gray-700">
            Delivery Distance: <span className="font-semibold">{deliveryDistance}</span>
          </p>
          <p className="text-gray-700">
            Delivery Cost: <span className="font-semibold">₦{deliveryCost.toFixed(2)}</span>
          </p>
        </div>
      )}

      {/* Order Summary */}
      <div className="px-6 md:px-12 my-6">
        <Order deliveryCost={deliveryCost ?? 0} distance={deliveryDistance} />
      </div>

      {/* Payment Method */}
      <div className="px-6 md:px-12 my-6">
        <Pay />
      </div>

      {/* Delivery Component */}
      <Dev />

      <Footer />
    </div>
  );
};

export default Checkout;
