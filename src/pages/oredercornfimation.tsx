import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

const OrderConfirmation: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const [deliveryDate, setDeliveryDate] = useState("");

  useEffect(() => {
    // 🕒 Estimate delivery date (3–5 days from today)
    const today = new Date();
    const delivery = new Date(today);
    delivery.setDate(today.getDate() + 4);
    setDeliveryDate(delivery.toDateString());

    // 🧹 Clear cart after successful order
    clearCart();
  }, [clearCart]);

  const handleBackToShop = () => navigate("/products");
  const handleGoHome = () => navigate("/");

  const total = getTotalPrice();
  const deliveryFee = total > 0 ? 2000 : 0;
  const grandTotal = total + deliveryFee;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-lg w-full">
        <CheckCircle className="mx-auto text-green-600 w-20 h-20 mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Payment Successful 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you {user?.name || "dear customer"}! Your order has been received
          and is being processed for delivery.
        </p>

        {/* 🧾 Order Summary */}
        <div className="border-t border-b py-4 mb-4 text-left">
          <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
          {cartItems.length > 0 ? (
            <ul className="space-y-2">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between text-sm text-gray-700"
                >
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>₦{(item.price * item.quantity).toLocaleString()}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm">No items (Cart cleared)</p>
          )}

          <div className="mt-4 text-sm">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>₦{total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery:</span>
              <span>₦{deliveryFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-800 mt-2">
              <span>Total:</span>
              <span>₦{grandTotal.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* 📦 Delivery Info */}
        <div className="bg-green-50 p-3 rounded-lg mb-6">
          <p className="text-sm text-gray-700">
            Estimated delivery date: <b>{deliveryDate}</b>
          </p>
        </div>

        {/* 🔘 Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleBackToShop}
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200"
          >
            Continue Shopping
          </button>

          <button
            onClick={handleGoHome}
            className="w-full border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transition duration-200"
          >
            Back to Home
          </button>
        </div>
      </div>

      <footer className="mt-10 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Shaba Furnitures — All Rights Reserved.
      </footer>
    </div>
  );
};

export default OrderConfirmation;
