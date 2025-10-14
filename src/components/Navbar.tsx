import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          SirLife<span className="text-orange-500">Water</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faq">FAQ</Link>

          {user ? (
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={toggleMenu}
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-2/5 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="text-3xl text-gray-600 hover:text-gray-900"
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col items-center justify-center h-[80%] space-y-6 font-medium text-gray-700">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/products" onClick={closeMenu}>
            Products
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/faq" onClick={closeMenu}>
            FAQ
          </Link>

          {user ? (
            <button
              onClick={() => {
                logout();
                closeMenu();
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={closeMenu}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
