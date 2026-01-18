import React, { memo, useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { RiHeartFill } from 'react-icons/ri';
import { HiOutlineShoppingBag, HiOutlineShare } from 'react-icons/hi';
import { calculateDiscountedPrice, getStockStatus, generateStarRating, shareProduct } from '../../utils';

const ProductCard = memo(({ 
  product, 
  showActions = true, 
  showDescription = true,
  showRating = true,
  showStock = true,
  showDiscount = true,
  className = '',
  imageHeight = 'h-56 sm:h-64'
}) => {
  const { wishlist, addToWishlist, addToCart } = useContext(ShopContext);
  
  const isWishlisted = wishlist.includes(product.id);

  const handleAddToCart = useCallback(() => {
    addToCart(product);
  }, [addToCart, product]);

  const handleToggleWishlist = useCallback(() => {
    addToWishlist(product.id);
  }, [addToWishlist, product.id]);
  const discountPercent = product.discountPercentage || 15;
  const originalPrice = product.price;
  const discountedPrice = calculateDiscountedPrice(originalPrice, discountPercent);
  const stock = product.stock || 10;
  const stockInfo = getStockStatus(stock);
  const stars = generateStarRating(product.rating);

  const handleShare = async () => {
    const result = await shareProduct(product);
    if (result.message) {
      alert(result.message);
    }
  };

  return (
    <div className={`
      relative bg-white rounded-2xl shadow-sm hover:shadow-lg 
      transition-all duration-300 overflow-hidden group flex flex-col
      ${className}
    `}>
      {/* Wishlist Heart */}
      {showActions && (
        <button
          onClick={handleToggleWishlist}
          className={`
            absolute top-3 right-3 z-10 flex items-center justify-center 
            w-8 h-8 rounded-full shadow-md hover:shadow-lg 
            transition-all duration-300
            ${isWishlisted ? 'bg-green-50' : 'bg-white'}
          `}
          title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <RiHeartFill className={`
            w-5 h-5 transition-colors duration-200
            ${isWishlisted ? 'text-green-600' : 'text-gray-300 hover:text-green-500'}
          `} />
        </button>
      )}

      {/* Product Image */}
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className={`
              w-full ${imageHeight} object-cover 
              transition-transform duration-500 group-hover:scale-105
            `}
          />
        </div>
      </Link>

      {/* Product Details */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
        <div>
          <h2 className="text-md sm:text-lg font-semibold text-gray-900 truncate">
            {product.title}
          </h2>

          {/* Description */}
          {showDescription && (
            <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mt-1">
              {product.description}
            </p>
          )}

          {/* Rating */}
          {showRating && (
            <div className="flex items-center space-x-1 mt-1">
              {stars.map((star) => (
                <span
                  key={star.index}
                  className={`text-sm ${
                    star.filled ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
              <span className="text-xs text-gray-500 ml-1">
                ({product.rating})
              </span>
            </div>
          )}

          {/* Stock Info */}
          {showStock && (
            <p className={`text-xs font-medium mt-0.5 ${stockInfo.color}`}>
              {stockInfo.message}
            </p>
          )}

          {/* Pricing Layout */}
          <div className="mt-1">
            {/* Strike + Offer */}
            {showDiscount && (
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 line-through text-xs">
                  ${originalPrice}
                </span>
                {discountPercent > 0 && (
                  <span className="inline-block bg-green-100 text-green-700 text-[11px] font-semibold px-2 py-0.5 rounded-full">
                    {discountPercent}% OFF
                  </span>
                )}
              </div>
            )}

            {/* Final Price + Buttons */}
            <div className="flex items-center justify-between mt-0.5">
              <span className="text-green-600 font-bold text-base sm:text-md">
                ${showDiscount ? discountedPrice : originalPrice}
              </span>

              {showActions && (
                <div className="flex items-center space-x-2">
                  {/* Share Button */}
                  <button
                    onClick={handleShare}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-green-600 text-gray-700 transition"
                    title="Share Product"
                  >
                    <HiOutlineShare className="w-5 h-5" />
                  </button>

                  {/* Cart Button */}
                  <button
                    onClick={handleAddToCart}
                    disabled={stock === 0}
                    className={`
                      flex items-center justify-center w-8 h-8 rounded-full 
                      text-white transition
                      ${stock === 0
                        ? 'bg-gray-200 cursor-not-allowed'
                        : 'bg-black hover:bg-green-600'}
                    `}
                    title={stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                  >
                    <HiOutlineShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;
