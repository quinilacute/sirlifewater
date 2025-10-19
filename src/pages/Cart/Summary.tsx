import { useMemo, useState } from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Summary = () => {
  const { cartItems } = useCart();
  const [deliveryFee, setDeliveryFee] = useState<number>(0);
  const subtotal = useMemo(() => cartItems.reduce((s, i) => s + i.price * i.quantity, 0), [cartItems]);
  const total = subtotal + deliveryFee;

  // Example: set flat delivery or integrate distance later
  const calcDelivery = () => {
    // placeholder; replace with distance matrix logic when ready
    setDeliveryFee(1000);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-blue-700">Order Summary</h2>

      <div className="flex justify-between mb-2"><span>Subtotal</span><span>₦{subtotal.toLocaleString()}</span></div>
      <div className="flex justify-between mb-4">
        <span>Delivery</span>
        <span>{deliveryFee ? `₦${deliveryFee.toLocaleString()}` : "—"}</span>
      </div>

      <button onClick={calcDelivery} className="w-full bg-yellow-500 py-2 rounded mb-4 hover:bg-yellow-600">Calculate Delivery</button>

      <div className="flex justify-between font-semibold text-lg mb-4">
        <span>Total</span>
        <span>₦{total.toLocaleString()}</span>
      </div>

      <Link to="/checkout" className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default Summary;
