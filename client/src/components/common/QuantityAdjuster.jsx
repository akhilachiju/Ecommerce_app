import React from "react";

const QuantityAdjuster = ({ cartItem, updateQuantity, productId }) => {
  if (!cartItem) return null;

  return (
    <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2 space-x-3 w-fit">
      <button
        onClick={() => updateQuantity(productId, -1)}
        className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold"
      >
        −
      </button>
      <span className="text-lg font-semibold text-gray-800">
        {cartItem.quantity}
      </span>
      <button
        onClick={() => updateQuantity(productId, 1)}
        className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold"
      >
        +
      </button>
    </div>
  );
};

export default QuantityAdjuster;
