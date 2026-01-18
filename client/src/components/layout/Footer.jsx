import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { colors, cursors, container } from "../../styles/ui.config";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 w-full">
      <div className={`${container} py-10 grid grid-cols-1 md:grid-cols-4 gap-8`}>
        {/* Brand */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="Ease logo" className="w-10 h-10" />
            <span className="text-2xl font-bold text-black">Ease</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            ShopEase is your go-to online store for stylish essentials. We bring
            you quality, comfort, and confidence in every purchase.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Shop</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/shop" className={`${colors.primary} ${cursors.pointer}`}>
                All Products
              </Link>
            </li>
            <li>
              <Link
                to="/shop/men"
                className={`${colors.primary} ${cursors.pointer}`}
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                to="/shop/women"
                className={`${colors.primary} ${cursors.pointer}`}
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                to="/shop/accessories"
                className={`${colors.primary} ${cursors.pointer}`}
              >
                Accessories
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className={`${colors.primary} ${cursors.pointer}`}>
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`${colors.primary} ${cursors.pointer}`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`${colors.primary} ${cursors.pointer}`}>
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className={`${colors.primary} ${cursors.pointer}`}
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className={colors.primary}>
              <FaFacebook size={22} />
            </a>
            <a href="#" className={colors.primary}>
              <FaInstagram size={22} />
            </a>
            <a href="#" className={colors.primary}>
              <FaTwitter size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
