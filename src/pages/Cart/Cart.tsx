import Items from "./Items";
import Summary from "./Summary";
import { useCart } from "../../context/CartContext";

function Cart() {
  const { cart } = useCart(); // FIXED

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Your Cart 🛒
      </h1>

      {(cart?.length ?? 0) === 0 ? (
        <div className="text-center text-gray-600">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Items />
          </div>
          <div>
            <Summary />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
