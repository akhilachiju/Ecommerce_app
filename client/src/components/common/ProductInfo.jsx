import React from "react";
import { HiOutlineStar, HiOutlineCube, HiOutlineQrCode } from "react-icons/hi2";

const ProductInfo = ({ 
  title, 
  brand, 
  category, 
  description, 
  price, 
  discountPercentage, 
  rating, 
  stock, 
  meta 
}) => {
  const discountedPrice = (
    price -
    (price * (discountPercentage || 0)) / 100
  ).toFixed(2);

  return (
    <div className="flex flex-col justify-between space-y-6 md:space-y-8 pr-0 md:pr-6">
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          {title}
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          {brand} • {category}
        </p>
        <p className="text-gray-600 leading-relaxed">{description}</p>

        {/* Price */}
        <div className="flex items-center space-x-3 mt-3">
          {discountPercentage > 0 && (
            <span className="text-gray-400 line-through">${price}</span>
          )}
          <span className="text-2xl md:text-3xl font-semibold text-green-600">
            ${discountedPrice}
          </span>
        </div>

        {/* Stock & Rating */}
        <div className="mt-4 space-y-2 text-sm text-gray-600">
          <p className="flex items-center gap-1">
            <HiOutlineStar className="w-4 h-4 text-yellow-500" />
            Rating: {rating}
          </p>
          <p className="flex items-center gap-1">
            <HiOutlineCube className="w-4 h-4 text-green-500" />
            Stock: {stock} items left
          </p>
        </div>

        {/* QR Code (if available) */}
        {meta?.qrCode && (
          <div className="mt-6 flex items-center gap-3">
            <HiOutlineQrCode className="w-6 h-6 text-gray-500" />
            <img
              src={meta.qrCode}
              alt="QR Code"
              className="w-20 h-20 border rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
