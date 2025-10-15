import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { RiNotification2Line, RiHeartLine } from "react-icons/ri";
import { HiOutlineShoppingBag, HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { ShopContext } from "../context/ShopContext";
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
  const { cartCount } = useContext(ShopContext);

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-100 w-full sticky top-0 z-50 shadow-sm">
      <div className={navbarContainer}>
        {/* LEFT: Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="ShopEase logo" className={logoImage} />
          <span className="text-2xl md:text-3xl font-bold text-black ml-2">
            Ease
          </span>
        </NavLink>

        {/* MIDDLE: Links (Desktop) */}
        <div className={navLinks}>
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative font-medium px-1 pb-1 transition-all duration-300 ${cursors.pointer} ${
                  isActive
                    ? "text-green-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-green-500 after:rounded-full"
                    : `${colors.primary}`
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* RIGHT: Icons */}
        <div className={iconGroup}>
          <NavLink to="/notifications" className={cursors.pointer}>
            <RiNotification2Line className={`w-6 h-6 ${colors.primary}`} />
          </NavLink>

          <NavLink to="/wishlist" className={cursors.pointer}>
            <RiHeartLine className={`w-6 h-6 ${colors.primary}`} />
          </NavLink>

          {/* Cart icon with live badge */}
          <NavLink to="/cart" className={`relative ${cursors.pointer}`}>
            <HiOutlineShoppingBag className={`w-6 h-6 ${colors.primary}`} />
            {cartCount > 0 && (
              <span className="flex items-center justify-center w-4 h-4 bg-green-600 text-white rounded-full text-xs absolute -top-1.5 -right-1.5">
                {cartCount}
              </span>
            )}
          </NavLink>

          {/* Mobile Menu Button */}
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

      {/* MOBILE MENU */}
      <div
        className={`${mobileMenu} ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative font-medium transition-all duration-300 ${cursors.pointer} ${
                  isActive
                    ? "text-green-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-green-500 after:rounded-full"
                    : `${colors.primary}`
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
