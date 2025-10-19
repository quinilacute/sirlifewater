import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext"; // ✅ import AuthProvider
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/sirlifewater">
      <AuthProvider>          {/* ✅ AuthProvider wraps everything */}
        <CartProvider>        {/* ✅ Cart context also available */}
          <App />             {/* ✅ Navbar and Routes inside */}
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
