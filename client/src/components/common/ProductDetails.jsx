import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { container, section } from "../../styles/ui.config";
import {
  HiArrowLeft,
  HiOutlineShare,
  HiOutlineShoppingBag,
  HiOutlineCube,
  HiOutlineQrCode,
  HiOutlineStar,
} from "react-icons/hi2";
import { RiHeartFill } from "react-icons/ri";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart, updateQuantity, cart, wishlist, addToWishlist } =
    useContext(ShopContext);

  const [activeTab, setActiveTab] = useState("specs");
  const [mainImage, setMainImage] = useState(null);

  const product = products.find((p) => p.id === parseInt(id));
  const cartItem = cart.find((item) => item.id === product?.id);
  const isWishlisted = wishlist.includes(product?.id);

  if (!product)
    return (
      <p className="text-center py-12 text-lg text-gray-500">
        Product not found.
      </p>
    );

  const {
    title,
    description,
    brand,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    weight,
    dimensions,
    warrantyInformation,
    shippingInformation,
    returnPolicy,
    tags,
    reviews,
    images,
    thumbnail,
    availabilityStatus,
    meta,
  } = product;

  const discountedPrice = (
    price -
    (price * (discountPercentage || 0)) / 100
  ).toFixed(2);

  const currentImage = mainImage || images?.[0] || thumbnail;

  const handleShare = async () => {
    const shareData = {
      title: product.title,
      text: `Check out this product: ${product.title}`,
      url: `${window.location.origin}/product/${product.id}`,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Share failed:", err.message);
      }
    } else {
      navigator.clipboard.writeText(shareData.url);
      alert("Product link copied to clipboard!");
    }
  };

  return (
    <section className={`${section} bg-gray-50 min-h-screen`}>
      <div className={`${container} py-10`}>
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-green-600 mb-6"
        >
          <HiArrowLeft className="w-5 h-5 mr-2" /> Back to Shop
        </button>

        {/* Product Overview */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 grid md:grid-cols-2 gap-6 md:gap-10">
          {/* LEFT: Image Gallery */}
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
                onClick={() => addToWishlist(product.id)}
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

              {/* Share */}
              <button
                onClick={handleShare}
                className="absolute bottom-3 right-16 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-green-600 hover:text-white text-gray-700 transition-all"
                title="Share Product"
              >
                <HiOutlineShare className="w-5 h-5" />
              </button>

              {/* Add to Cart */}
              <button
                onClick={() => addToCart(product)}
                disabled={stock === 0}
                className={`absolute bottom-3 right-3 flex items-center justify-center w-10 h-10 rounded-full text-white transition ${
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

          {/* RIGHT: Product Info */}
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

            {/* Quantity Adjuster */}
            {cartItem && (
              <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2 space-x-3 w-fit">
                <button
                  onClick={() => updateQuantity(product.id, -1)}
                  className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold"
                >
                  −
                </button>
                <span className="text-lg font-semibold text-gray-800">
                  {cartItem.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(product.id, 1)}
                  className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-10 bg-white rounded-2xl shadow-md p-6">
          {/* Tabs Header */}
          <div className="flex gap-6 border-b border-gray-200 pb-2 mb-4 overflow-x-auto">
            {["specs", "reviews", "tags"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize text-lg font-medium pb-2 border-b-2 ${
                  activeTab === tab
                    ? "text-green-600 border-green-600"
                    : "text-gray-500 border-transparent"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tabs Content */}
          {activeTab === "specs" && (
            <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <p>
                <strong>Warranty:</strong> {warrantyInformation}
              </p>
              <p>
                <strong>Shipping:</strong> {shippingInformation}
              </p>
              <p>
                <strong>Return Policy:</strong> {returnPolicy}
              </p>
              <p>
                <strong>Weight:</strong> {weight} g
              </p>
              <p>
                <strong>Dimensions:</strong>{" "}
                {dimensions?.width} × {dimensions?.height} ×{" "}
                {dimensions?.depth}
              </p>
              <p>
                <strong>Availability:</strong> {availabilityStatus}
              </p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-4">
              {reviews?.length > 0 ? (
                reviews.map((r, i) => (
                  <div key={i} className="border-b border-gray-100 pb-3">
                    <p className="text-yellow-400">
                      {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                    </p>
                    <p className="text-gray-700 mt-1">{r.comment}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      — {r.reviewerName} (
                      {new Date(r.date).toLocaleDateString()})
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No reviews yet.</p>
              )}
            </div>
          )}

          {activeTab === "tags" && (
            <div className="flex flex-wrap gap-2">
              {tags?.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                >
                  #{t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
