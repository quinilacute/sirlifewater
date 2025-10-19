import { useState } from "react";
import ProductCard from "./ProductCard";
import products from "../data/products.json";
import { useCart, type Product } from "../context/CartContext";

function ProductList() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <div className="relative min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-700">
        Explore Our Products 💧
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="relative group bg-white rounded-xl shadow-md hover:shadow-lg p-4 transition"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mb-3 rounded-md"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-blue-600 font-bold">
                ₦{product.price.toLocaleString()}
              </p>
              <p className="text-gray-600 text-sm mt-1">
                {product.description?.slice(0, 40)}...
              </p>
            </div>

            {hoveredProduct === product.id && (
              <div className="absolute inset-0 bg-white rounded-xl shadow-xl p-4 flex items-center justify-center z-10 transform scale-105 transition-all duration-200">
                <ProductCard
                  product={product}
                  onAddToCart={() => handleAddToCart(product)}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
