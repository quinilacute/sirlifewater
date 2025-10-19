// App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import LoginSignup from "./pages/LoginSignup";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import DeliveryMap from "./pages/DeliveryMap";
import FAQ from "./pages/AboutFAQ";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="min-h-screen bg-white text-red-800">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/delivery" element={<DeliveryMap />} />
        <Route path="/faq" element={<FAQ />} />

        {/* 🔒 Protected route for Checkout */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
