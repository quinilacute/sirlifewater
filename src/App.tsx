// App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart/Cart";
import OrderConfirmation from "./pages/checkout/OrderConfirmation";
import Checkout from "./pages/checkout/Checkout";
import LoginSignup from "./pages/LoginSignup";
import Dashboard from "./pages/Dashboard";

import FAQ from "./pages/AboutFAQ";

function App() {
  return (
    <div className="min-h-screen bg-white text-red-800">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderconfirmation" element={<OrderConfirmation />} /> {/* ✅ fixed */}
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default App;
