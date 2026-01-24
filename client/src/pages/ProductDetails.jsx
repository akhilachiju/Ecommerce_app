import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/context";
import { container, section } from "../styles/ui.config";
import { HiArrowLeft } from "react-icons/hi2";
import ProductImageGallery from "../components/common/ProductImageGallery";
import ProductInfo from "../components/common/ProductInfo";
import QuantityAdjuster from "../components/common/QuantityAdjuster";
import ProductTabs from "../components/common/ProductTabs";
import logger from "../utils/logger";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart, updateQuantity, cart, wishlist, addToWishlist, loading } =
    useContext(ShopContext);

  const [activeTab, setActiveTab] = useState("specs");
  const [mainImage, setMainImage] = useState(null);

  // Handle loading state and undefined products
  if (loading || !products) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

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
        logger.error("Share failed:", err.message);
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
          <ProductImageGallery
            images={images}
            thumbnail={thumbnail}
            title={title}
            mainImage={mainImage}
            setMainImage={setMainImage}
            isWishlisted={isWishlisted}
            addToWishlist={addToWishlist}
            productId={product.id}
            handleShare={handleShare}
            addToCart={addToCart}
            product={{...product, cartItem, updateQuantity}}
            stock={stock}
          />

          {/* RIGHT: Product Info */}
          <div>
            <ProductInfo
              title={title}
              brand={brand}
              category={category}
              description={description}
              price={price}
              discountPercentage={discountPercentage}
              rating={rating}
              stock={stock}
              meta={meta}
            />
          </div>
        </div>

        {/* Tabs Section */}
        <ProductTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          warrantyInformation={warrantyInformation}
          shippingInformation={shippingInformation}
          returnPolicy={returnPolicy}
          weight={weight}
          dimensions={dimensions}
          availabilityStatus={availabilityStatus}
          reviews={reviews}
          tags={tags}
        />
      </div>
    </section>
  );
};

export default ProductDetails;