import React from "react";
import { useCart, Product } from "../../context/CartContext";

const Summary: React.FC = () => {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (sum: number, item: Product) => sum + (item.price * (item.quantity || 1)),
    0
  );

  const shipping = subtotal > 0 ? 2000 : 0; // example flat shipping
  const total = subtotal + shipping;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Order Summary</h2>
      <div className="flex justify-between">
        <span>Subtotal:</span>
        <span>₦{subtotal.toLocaleString()}</span>
      </div>
      <div className="flex justify-between">
        <span>Shipping:</span>
        <span>₦{shipping.toLocaleString()}</span>
      </div>
      <div className="flex justify-between font-semibold">
        <span>Total:</span>
        <span>₦{total.toLocaleString()}</span>
      </div>
      <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-md">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Summary;
