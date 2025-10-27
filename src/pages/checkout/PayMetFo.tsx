// src/pages/checkout/PayMetFo.tsx
import { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

function PayMetFo() {
  const { getTotalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const [cardDetails, setCardDetails] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const amount = getTotalPrice() * 100;
  const email = user?.email || "guest@example.com";
  const isLoggedIn = !!user;

  const handlePaystackSuccessAction = () => {
    clearCart();
    alert("Payment Successful!");
  };

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoggedIn) return alert("Please log in to save your card.");
    if (!cardDetails.name || !cardDetails.number || !cardDetails.expiry || !cardDetails.cvv) {
      alert("Please fill all card fields!");
      return;
    }
    localStorage.setItem("savedCard", JSON.stringify(cardDetails));
    alert("Card added successfully!");
  };

  const componentProps = {
    email,
    amount,
    publicKey,
    text: "Pay with Paystack",
    onSuccess: handlePaystackSuccessAction,
    onClose: () => alert("Payment closed!"),
  };

  return (
    <div>
      <h2 className="text-md font-bold text-gray-700 uppercase mb-2">
        Payment Methods
      </h2>

      <p className="text-xs text-gray-500 mb-3">
        Choose how you want to pay for your order
      </p>

      {/* Paystack */}
      <div className="mb-6">
        {isLoggedIn ? (
          <PaystackButton
            {...componentProps}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md w-full"
          />
        ) : (
          <button
            disabled
            className="bg-gray-300 text-gray-600 font-semibold px-4 py-2 rounded-md w-full cursor-not-allowed"
            title="Login to use Paystack"
          >
            Pay with Paystack (Login required)
          </button>
        )}
      </div>

      {/* Add Card - Always visible */}
      <div className="mt-2">
        <h3 className="font-semibold mb-2 text-sm">Add Card</h3>
        <form onSubmit={handleAddCard} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Cardholder Name"
            value={cardDetails.name}
            onChange={(e) =>
              setCardDetails({ ...cardDetails, name: e.target.value })
            }
            className="border rounded-md p-2 text-sm"
          />
          <input
            type="text"
            placeholder="Card Number"
            maxLength={16}
            value={cardDetails.number}
            onChange={(e) =>
              setCardDetails({ ...cardDetails, number: e.target.value })
            }
            className="border rounded-md p-2 text-sm"
          />
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="MM/YY"
              value={cardDetails.expiry}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, expiry: e.target.value })
              }
              className="border rounded-md p-2 w-1/2 text-sm"
            />
            <input
              type="text"
              placeholder="CVV"
              maxLength={3}
              value={cardDetails.cvv}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cvv: e.target.value })
              }
              className="border rounded-md p-2 w-1/2 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={!isLoggedIn}
            className={`${
              isLoggedIn
                ? "bg-indigo-900 hover:bg-indigo-800 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            } font-semibold px-4 py-2 rounded-md transition`}
          >
            Save Card
          </button>
        </form>
      </div>
    </div>
  );
}

export default PayMetFo;
