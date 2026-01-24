import React, { useState, useEffect } from "react";
import { HiOutlineStar, HiOutlineCube, HiOutlineQrCode } from "react-icons/hi2";
import QRCode from "qrcode";

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
  const [qrCodeUrl, setQrCodeUrl] = useState(null);

  useEffect(() => {
    // Generate QR code for current product page
    const generateQR = async () => {
      try {
        const productUrl = window.location.href;
        const qrUrl = await QRCode.toDataURL(productUrl);
        setQrCodeUrl(qrUrl);
      } catch (error) {
        console.error('QR code generation failed:', error);
      }
    };
    generateQR();
  }, []);

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

        {/* QR Code */}
        <div className="mt-6 flex items-center gap-3">
          <HiOutlineQrCode className="w-6 h-6 text-gray-500" />
          {qrCodeUrl ? (
            <img
              src={qrCodeUrl}
              alt="QR Code for this product"
              className="w-20 h-20 border rounded-lg"
            />
          ) : (
            <div className="w-20 h-20 border rounded-lg bg-gray-100 flex items-center justify-center">
              <span className="text-xs text-gray-500">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
