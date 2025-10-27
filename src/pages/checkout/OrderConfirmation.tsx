import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

const OrderConfirmation: React.FC = () => {
  const { clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center animate-fadeIn">
        <CheckCircle className="mx-auto text-green-600 w-20 h-20 mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Payment Successful 
        </h1>
        <p className="text-gray-600 mb-6">
  Thank you {user?.displayName || user?.email || "dear customer"}! Your order has been placed.
</p>


        <div className="space-y-3">
          <button
            onClick={() => navigate("/products")}
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Continue Shopping
          </button>

          <button
            onClick={() => navigate("/")}
            className="w-full bg-gray-100 py-2 rounded-xl hover:bg-gray-400 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
