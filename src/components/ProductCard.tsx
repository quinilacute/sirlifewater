import type { FC } from "react";
import type { Product } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
  isInCart: boolean; // NEW prop
}

const ProductCard: FC<ProductCardProps> = ({ product, onAddToCart, isInCart }) => {
  return (
    <div className="relative bg-white p-6 rounded-xl shadow-lg border text-center">
      {/* Add-to-Cart button overlay */}
      <button
        onClick={onAddToCart}
        className={`absolute top-3 right-3 px-3 py-1.5 rounded-lg shadow-lg transition text-white
          ${isInCart ? 'bg-green-500 hover:bg-green-600' : 'bg-[#150448] hover:bg-blue-700'}
        `}
      >
        {isInCart ? "Added" : "Add to Cart"}
      </button>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 mx-auto object-contain mb-4"
      />

      {/* Product Info */}
      <h2 className="text-xl font-bold mb-2 text-blue-700">{product.name}</h2>
      <p className="text-gray-600 text-sm mb-3">{product.description}</p>
      <p className="text-lg font-semibold text-green-600 mb-4">
        ₦{product.price.toLocaleString()}
      </p>
    </div>
  );
};

export default ProductCard;
