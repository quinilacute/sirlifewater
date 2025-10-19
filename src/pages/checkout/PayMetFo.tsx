import React, { useState } from "react";

interface PaymentMethodProps {
  totalAmount: number;
  onProceed: () => void;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ totalAmount, onProceed }) => {
  const [method, setMethod] = useState<"card" | "transfer" | "">("");
  const [cardInfo, setCardInfo] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!method) {
      alert("Please select a payment method.");
      return;
    }

    if (method === "card") {
      if (!cardInfo.number || !cardInfo.expiry || !cardInfo.cvv) {
        alert("Please complete your card details.");
        return;
      }
    }

    // ✅ Future integration: Paystack or PayPal API call can go here
    onProceed();
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
      <h2 className="text-xl font-bold text-blue-800 mb-4">Payment Method</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Select Payment Option */}
        <div className="flex flex-col space-y-2">
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={method === "card"}
              onChange={() => setMethod("card")}
              className="accent-blue-600"
            />
            <span>Pay with Card (Visa / MasterCard)</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="payment"
              value="transfer"
              checked={method === "transfer"}
              onChange={() => setMethod("transfer")}
              className="accent-blue-600"
            />
            <span>Pay via Transfer (Paystack / Local Bank / USSD)</span>
          </label>
        </div>

        {/* Card Details Form */}
        {method === "card" && (
          <div className="mt-4 space-y-3 border-t pt-4">
            <input
              type="text"
              name="number"
              placeholder="Card Number"
              value={cardInfo.number}
              onChange={handleCardChange}
              className="w-full border rounded-lg p-2 focus:outline-blue-600"
            />
            <div className="flex gap-2">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={cardInfo.expiry}
                onChange={handleCardChange}
                className="w-1/2 border rounded-lg p-2 focus:outline-blue-600"
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={cardInfo.cvv}
                onChange={handleCardChange}
                className="w-1/2 border rounded-lg p-2 focus:outline-blue-600"
              />
            </div>
          </div>
        )}

        {/* Transfer Info */}
        {method === "transfer" && (
          <div className="mt-4 border-t pt-4 space-y-2 text-gray-700">
            <p className="text-sm">
              Kindly make your transfer to the account below:
            </p>
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="font-semibold">Sirlife Water Nigeria Ltd</p>
              <p>GTBank — <span className="font-bold">0456789021</span></p>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              After payment, click “Proceed” to confirm your order. Your
              payment will be verified automatically or manually by our system.
            </p>
          </div>
        )}

        {/* Total and Proceed Button */}
        <div className="mt-6 flex justify-between items-center">
          <p className="text-lg font-bold text-blue-800">
            Total: ₦{totalAmount.toLocaleString()}
          </p>
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentMethod;
