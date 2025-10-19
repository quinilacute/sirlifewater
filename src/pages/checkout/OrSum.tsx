import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";

interface UserInfo {
  city: string;
}

const OrderSummary: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  const [user, setUser] = useState<UserInfo>({ city: "" });
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const savedUser = localStorage.getItem("sirlife_user");
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
    }
  }, []);

  useEffect(() => {
    const sub = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    setSubtotal(sub);
  }, [cart]);

  // ✅ Dynamic delivery fee based on location
  useEffect(() => {
    if (!user.city) return;

    switch (user.city.toLowerCase()) {
      case "lagos":
        setDeliveryFee(1500);
        break;
      case "abuja":
        setDeliveryFee(2000);
        break;
      case "port harcourt":
        setDeliveryFee(2500);
        break;
      default:
        setDeliveryFee(3000);
        break;
    }
  }, [user.city]);

  const total = subtotal + deliveryFee;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
      <h2 className="text-xl font-bold text-blue-800 mb-4">Order Summary</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-center py-4">Your cart is empty.</p>
      ) : (
        <div>
          <table className="w-full text-left border-collapse mb-4">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-2">Product</th>
                <th className="py-2 text-center">Qty</th>
                <th className="py-2 text-right">Price</th>
                <th className="py-2 text-right">Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b border-gray-100">
                  <td className="py-2 flex items-center space-x-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 object-contain rounded"
                    />
                    <span>{item.name}</span>
                  </td>
                  <td className="py-2 text-center">{item.quantity}</td>
                  <td className="py-2 text-right">₦{item.price.toLocaleString()}</td>
                  <td className="py-2 text-right">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </td>
                  <td className="py-2 text-right">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="space-y-2 text-right text-gray-700">
            <p>Subtotal: <span className="font-semibold">₦{subtotal.toLocaleString()}</span></p>
            <p>Delivery Fee ({user.city || "your city"}):{" "}
              <span className="font-semibold">₦{deliveryFee.toLocaleString()}</span>
            </p>
            <hr className="my-2" />
            <p className="text-lg font-bold text-blue-800">
              Total: ₦{total.toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
