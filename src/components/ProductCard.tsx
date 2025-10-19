import type { FC } from "react";
import type { Product } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductCard: FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 mx-auto object-contain mb-4"
      />
      <h2 className="text-xl font-bold mb-2 text-blue-700">{product.name}</h2>
      <p className="text-gray-600 text-sm mb-3">{product.description}</p>
      <p className="text-lg font-semibold text-green-600 mb-4">
        ₦{product.price.toLocaleString()}
      </p>
      <button
        onClick={onAddToCart}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
