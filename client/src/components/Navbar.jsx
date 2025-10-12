// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { RiNotification2Line, RiHeartLine } from "react-icons/ri";
import { HiOutlineShoppingBag, HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import {
  navbarContainer,
  navLinks,
  iconGroup,
  logoImage,
  colors,
  cursors,
  mobileMenu,
} from "../styles/ui.config";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-100 w-full">
      <div className="max-w-[1280px] mx-auto">
        <div className={navbarContainer}>
          {/* LEFT: Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="ShopEase logo" className={logoImage} />
            <span className="text-2xl md:text-3xl font-bold text-black ml-2">
              Ease
            </span>
          </Link>

          {/* MIDDLE: Navigation Links */}
          <div className={navLinks}>
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${colors.primary} ${cursors.pointer} font-medium`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT: Icons */}
          <div className={iconGroup}>
            {/* Notification */}
            <Link to="/notifications" className={cursors.pointer}>
              <RiNotification2Line className={`w-6 h-6 ${colors.primary}`} />
            </Link>

            {/* Wishlist */}
            <Link to="/wishlist" className={cursors.pointer}>
              <RiHeartLine className={`w-6 h-6 ${colors.primary}`} />
            </Link>

            {/* Cart */}
            <Link to="/cart" className={`relative ${cursors.pointer}`}>
              <HiOutlineShoppingBag className={`w-6 h-6 ${colors.primary}`} />
              <span className="flex items-center justify-center w-4 h-4 bg-green-600 text-white rounded-full text-xs absolute -top-1.5 -right-1.5">
                3
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className={`md:hidden ${cursors.pointer} focus:outline-none`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <HiX className={`w-7 h-7 ${colors.black}`} />
              ) : (
                <HiOutlineMenuAlt3 className={`w-7 h-7 ${colors.black}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`${mobileMenu} ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${colors.primary} ${cursors.pointer}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
