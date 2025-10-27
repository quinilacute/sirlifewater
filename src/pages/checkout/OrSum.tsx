// src/pages/checkout/OrSum.tsx
import React from "react";
import { useCart } from "../../context/CartContext";

interface OrderSummaryProps {
  deliveryCost: number;
  distance: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ deliveryCost, distance }) => {
  const { getTotalPrice } = useCart();
  const subtotal = getTotalPrice();
  const total = subtotal + (deliveryCost || 0);

  return (
    <div>
      <h3 className="font-bold mb-3">Order Summary</h3>
      <p>Subtotal: ₦{subtotal.toFixed(2)}</p>
      {deliveryCost > 0 && (
        <>
          <p>Distance: {distance}</p>
          <p>Delivery Cost: ₦{deliveryCost.toFixed(2)}</p>
        </>
      )}
      <hr className="my-2" />
      <p className="font-bold text-lg">Total: ₦{total.toFixed(2)}</p>
    </div>
  );
};

export default OrderSummary;
