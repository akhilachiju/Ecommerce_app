import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import LazyImage from "./LazyImage";
import logo from "../../assets/logo.svg";
import { RiNotification2Line, RiHeartLine } from "react-icons/ri";
import {
  HiOutlineShoppingBag,
  HiOutlineMenuAlt3,
  HiX,
} from "react-icons/hi";
import { ShopContext } from "../../features/cart/ShopContext";
import { IconWithBadge } from ".";
import {
  navbarContainer,
  navLinks,
  iconGroup,
  logoImage,
  colors,
  cursors,
  mobileMenu,
} from "../../styles/ui.config";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, wishlistCount } = useContext(ShopContext); //  get wishlistCount too

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="backdrop-blur-md bg-white/70 w-full sticky top-0 z-50 shadow-sm">
      <div className={navbarContainer}>
        {/* LEFT: Logo */}
        <NavLink to="/" className="flex items-center">
          <LazyImage src={logo} alt="ShopEase logo" className={logoImage} />
          <span className="text-2xl md:text-3xl font-bold text-black ml-2">
            Ease
          </span>
        </NavLink>

        {/* MIDDLE: Links (Desktop) */}
        <div className={navLinks}>
          {links.map((link) => (
            link.isScroll ? (
              <a
                key={link.name}
                href={link.path}
                className={`relative font-medium px-1 pb-1 transition-all duration-300 ${cursors.pointer} ${colors.primary}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.name}
              </a>
            ) : (
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
            )
          ))}
        </div>

        {/* RIGHT: Icons */}
        <div className={iconGroup}>
          {/* Notifications */}
          <NavLink to="/notifications">
            <IconWithBadge 
              icon={RiNotification2Line}
              showBadge={false}
              title="Notifications"
            />
          </NavLink>

          {/* Wishlist Icon with Badge */}
          <NavLink to="/wishlist">
            <IconWithBadge 
              icon={RiHeartLine}
              badgeCount={wishlistCount}
              title="Wishlist"
            />
          </NavLink>

          {/* Cart icon with live badge */}
          <NavLink to="/cart">
            <IconWithBadge 
              icon={HiOutlineShoppingBag}
              badgeCount={cartCount}
              title="Shopping Cart"
            />
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
            link.isScroll ? (
              <a
                key={link.name}
                href={link.path}
                className={`relative font-medium transition-all duration-300 ${cursors.pointer} ${colors.primary}`}
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.name}
              </a>
            ) : (
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
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
