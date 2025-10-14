import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500">
            SirLife<span className="text-orange-400">Water</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Bringing clean, refreshing water to every home.  
            SirLifeWater — pure hydration, pure living.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/products" className="hover:text-blue-400">Products</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:text-blue-400">FAQ</Link></li>
            <li><Link to="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-blue-400">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm">
            📍 123 Aqua Street, Flow City  
            📞 +234 800 123 4567  
            📧 hello@sirlifewater.com
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400">🌐</a>
            <a href="#" className="hover:text-blue-400">📘</a>
            <a href="#" className="hover:text-blue-400">🐦</a>
            <a href="#" className="hover:text-blue-400">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        © {new Date().getFullYear()} SirLifeWater. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
