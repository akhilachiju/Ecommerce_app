import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { RiNotification2Line } from "react-icons/ri";
import { LuHeart } from "react-icons/lu";
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
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className={navbarContainer}>
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Shop ease logo" className={logoImage} />
          <span className="text-2xl md:text-3xl font-bold text-black">
            Ease
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className={navLinks}>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${colors.black} ${colors.primary} ${cursors.pointer}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons + Mobile Menu */}
        <div className={iconGroup}>
          <Link to="/notification" className={cursors.pointer}>
            <RiNotification2Line className={`w-6 h-6 ${colors.primary}`} />
          </Link>

          <Link to="/wishlist" className={cursors.pointer}>
            <LuHeart className={`w-6 h-6 ${colors.primary}`} />
          </Link>

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

      {/* Mobile Menu */}
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
              className={`${colors.black} ${colors.primary} ${cursors.pointer}`}
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

