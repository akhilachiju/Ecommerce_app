import React from "react";
import { RiHeartFill } from "react-icons/ri";
import { HiOutlineShare, HiOutlineShoppingBag } from "react-icons/hi2";

const ProductImageGallery = ({ 
  images, 
  thumbnail, 
  title, 
  mainImage, 
  setMainImage, 
  isWishlisted, 
  addToWishlist, 
  productId, 
  handleShare, 
  addToCart, 
  product, 
  stock 
}) => {
  const currentImage = mainImage || images?.[0] || thumbnail;

  return (
    <div className="flex flex-col sm:flex-row md:flex-row gap-3 md:gap-4 items-center md:items-start">
      {/* Thumbnails */}
      {images?.length > 1 && (
        <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-y-auto sm:max-h-[400px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                img === currentImage
                  ? "border-green-500"
                  : "border-transparent hover:border-gray-300"
              }`}
              onClick={() => setMainImage(img)}
            >
              <img
                src={img}
                alt={`Thumbnail ${i + 1}`}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      )}

      {/* Main Image */}
      <div className="relative flex-1 w-full">
        <img
          src={currentImage}
          alt={title}
          className="rounded-2xl w-full h-[280px] sm:h-[350px] md:h-[400px] object-contain border border-gray-100 bg-gray-50"
        />

        {/* Wishlist */}
        <button
          onClick={() => addToWishlist(productId)}
          className={`absolute top-3 right-3 flex items-center justify-center w-10 h-10 rounded-full ${
            isWishlisted ? "bg-green-50" : "bg-white"
          } shadow-md hover:shadow-lg transition-all duration-300`}
        >
          <RiHeartFill
            className={`w-6 h-6 ${
              isWishlisted ? "text-green-600" : "text-gray-300"
            }`}
          />
        </button>

        {/* Horizontal button row */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          {/* Quantity Adjuster (when item is in cart) - first */}
          {product.cartItem && (
            <div className="flex items-center bg-gray-100 rounded-xl px-3 py-1">
              <button
                onClick={() => product.updateQuantity(productId, -1)}
                className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg font-bold"
              >
                −
              </button>
              <span className="mx-3 text-gray-800 font-semibold">
                {product.cartItem.quantity}
              </span>
              <button
                onClick={() => product.updateQuantity(productId, 1)}
                className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg font-bold"
              >
                +
              </button>
            </div>
          )}

          {/* Share - second */}
          <button
            onClick={handleShare}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-green-600 hover:text-white text-gray-700 transition-all"
            title="Share Product"
          >
            <HiOutlineShare className="w-5 h-5" />
          </button>

          {/* Add to Cart - third */}
          <button
            onClick={() => addToCart(product)}
            disabled={stock === 0}
            className={`flex items-center justify-center w-10 h-10 rounded-full text-white transition ${
              stock === 0
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-black hover:bg-green-600"
            }`}
            title={stock === 0 ? "Out of Stock" : "Add to Cart"}
          >
            <HiOutlineShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;
