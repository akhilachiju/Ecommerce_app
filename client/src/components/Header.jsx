// src/components/Header.jsx
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white text-sm py-2 px-4">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        {/* LEFT: Promo Text */}
        <div className="flex items-center">
          <TbTruckDelivery className="text-md mr-2" />
          <span>FREE EXPRESS SHIPPING OVER $250!</span>
        </div>

        {/* RIGHT: Login / Account */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <AiOutlineUser className="text-lg" />
          <Link
            to="/login"
            className="hover:text-green-400 transition-colors duration-200"
          >
            Login
          </Link>
        </div>
      </div>  
    </header>
  );
};

export default Header;
