import { Link } from "react-router-dom";
import Face from "../assets/icons/facebook.png";
import Insta from "../assets/icons/instagram.png";
import What from "../assets/icons/whatsapp.png";
import Email from "../assets/icons/email.png";

function Footer() {
  return (
    <footer className="bg-gray-white  py-10 mt-20 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-10">
        
        {/* Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/about" >About us</Link></li>
            <li><Link to="/delivery" >Delivery</Link></li>
            <li><Link to="/products" >Products</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/account">My Account</Link></li>
            <li><Link to="/orders">Order History</Link></li>
            <li><Link to="/news" >Newsletter</Link></li>
            <li><Link to="/policy">Policy</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm">
            📍 123 Aqua Street, Flow City<br />
            📞 +234 800 123 4567<br />
            📧 hello@sirlifewater.com
          </p>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="w-5 h-5">
              <img src={Face} alt="Facebook" />
            </a>
            <a href="#" className="w-5 h-5">
              <img src={Insta} alt="Instagram" />
            </a>
            <a href="#" className="w-5 h-5">
              <img src={What} alt="WhatsApp" />
            </a>
            <a href="#" className="w-5 h-5">
              <img src={Email} alt="Email" />
            </a>
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
