import { useCart } from "../../context/CartContext";

const Items = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-contain rounded-md border" />
            <div>
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              {item.size && <p className="text-sm text-gray-500">Size: {item.size}</p>}
              <p className="text-sm text-gray-600">₦{item.price.toLocaleString()}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => updateQuantity(item.id, "decrease")} className="px-3 py-1 bg-gray-200 rounded">-</button>
            <div className="min-w-[24px] text-center">{item.quantity}</div>
            <button onClick={() => updateQuantity(item.id, "increase")} className="px-3 py-1 bg-gray-200 rounded">+</button>

            <button onClick={() => removeFromCart(item.id)} className="text-red-500 ml-4">Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
