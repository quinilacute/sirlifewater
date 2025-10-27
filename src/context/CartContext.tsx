import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  size?: string;
  image?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product | CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, type: "increase" | "decrease") => void;
  clearCart: () => void;
  getTotalPrice: () => number; // ✅ Added this line
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product | CartItem) => {
    setCartItems((prev) => {
      const item: CartItem = "quantity" in product ? product : { ...product, quantity: 1 };
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };

  const updateQuantity = (id: number, type: "increase" | "decrease") => {
    setCartItems((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              quantity:
                type === "increase"
                  ? p.quantity + 1
                  : p.quantity > 1
                  ? p.quantity - 1
                  : 1,
            }
          : p
      )
    );
  };

  const clearCart = () => setCartItems([]);

  // ✅ Added: getTotalPrice function
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice, // ✅ included here
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};
