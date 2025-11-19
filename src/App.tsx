// App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/About/Contact";
import News from "./components/News";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import OrderConfirmation from "./pages/checkout/OrderConfirmation";
import Checkout from "./pages/checkout/Checkout";
import LoginSignup from "./pages/LoginSignup";
import FAQ from "./pages/AboutFAQ";
import ProtectedRoute from "./components/ProtectedRoute"; // Make sure this exists

function App() {
  return (
    <div className="min-h-screen bg-white text-red-800">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        {/* Protected Checkout Route */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route path="/orderconfirmation" element={<OrderConfirmation />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default App;
