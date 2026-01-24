import React from "react";
import { Link } from 'react-router-dom';
import { HiOutlineTrash } from 'react-icons/hi';
import { RiHeartFill } from 'react-icons/ri';

const CartItem = ({ item, onUpdateQuantity, onRemove, onMoveToWishlist, isInWishlist }) => {
  return (
    <div className="relative border-b border-gray-100 pb-3 last:border-b-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link to={`/product/${item.id}`}>
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-12 h-12 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>
          <div>
            <h3 className="font-medium text-gray-900">
              {item.title}
            </h3>
            <p className="text-green-600 font-semibold">
              ${item.price} × {item.quantity}
            </p>
            <p className="text-xs text-gray-500">
              Total: ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center bg-gray-100 rounded-xl px-3 py-1">
            <button
              onClick={() => onUpdateQuantity(item.id, -1)}
              className="w-7 h-7 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg font-bold"
            >
              −
            </button>
            <span className="mx-3 text-gray-800 font-semibold">
              {item.quantity}
            </span>
            <button
              onClick={() => onUpdateQuantity(item.id, 1)}
              className="w-7 h-7 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg font-bold"
            >
              +
            </button>
          </div>
          <button
            onClick={() => onMoveToWishlist(item.id)}
            className={`
              flex items-center justify-center 
              w-8 h-8 rounded-full shadow-md hover:shadow-lg 
              transition-all duration-300
              ${isInWishlist ? "bg-green-50" : "bg-white"}
            `}
          >
            <RiHeartFill
              className={`
                w-5 h-5 transition-colors duration-200
                ${isInWishlist ? "text-green-600" : "text-gray-300 hover:text-green-500"}
              `}
            />
          </button>
          <button
            onClick={() => onRemove(item.id)}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-black hover:bg-red-500 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <HiOutlineTrash className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
