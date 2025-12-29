import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../cart/ShopContext";
import { Section, Container } from "../../../shared/components";
import { HiArrowLeft, HiOutlineShoppingBag } from "react-icons/hi";
import { RiHeartFill } from "react-icons/ri";

const Wishlist = () => {
  const { wishlist, products, addToWishlist, addToCart } =
    useContext(ShopContext);
  const navigate = useNavigate();

  const wishlistItems = products.filter((p) => wishlist.includes(p.id));

  // Calculate total price of wishlist items
  const wishlistTotal = wishlistItems
    .reduce((sum, item) => sum + item.price, 0)
    .toFixed(2);

  // Single item add to cart
  const handleAddToCartSingle = (item) => {
    if (item.stock > 0) {
      addToCart(item);
      addToWishlist(item.id); // remove from wishlist after adding
    } else {
      alert("Sorry, this item is out of stock!");
    }
  };

  // Add all in-stock items to cart
  const handleAddAllToCart = () => {
    const inStockItems = wishlistItems.filter((item) => item.stock > 0);
    if (inStockItems.length === 0) {
      alert("No items in stock to add!");
      return;
    }
    inStockItems.forEach((item) => {
      addToCart(item);
      addToWishlist(item.id); // remove each after adding
    });
    alert("All available wishlist items added to cart!");
  };

  return (
    <Section background="gray" className="min-h-screen">
      <Container className="py-10">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-green-600 transition mb-6"
        >
          <HiArrowLeft className="w-5 h-5 mr-2" />
          Continue Shopping
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-gray-500 mb-4">
              Your wishlist is empty.
            </p>
            <Link
              to="/shop"
              className="bg-black text-white font-medium px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300"
            >
              Go to Shop
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Wishlist Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Wishlist Items
                </h2>
                <div className="space-y-4">
                  {wishlistItems.map((item) => (
                    <div
                      key={item.id}
                      className="relative border-b border-gray-100 pb-3 last:border-b-0"
                    >
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
                              ${item.price}
                            </p>
                            {item.stock === 0 && (
                              <p className="text-red-500 text-xs">
                                Out of Stock
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => addToWishlist(item.id)}
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-green-50 shadow-md hover:shadow-lg transition-all duration-300"
                          >
                            <RiHeartFill className="w-5 h-5 text-green-600" />
                          </button>
                          <button
                            onClick={() => handleAddToCartSingle(item)}
                            disabled={item.stock === 0}
                            className={`flex items-center justify-center w-8 h-8 rounded-full text-white transition ${
                              item.stock === 0
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-black hover:bg-green-600"
                            }`}
                          >
                            <HiOutlineShoppingBag className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 h-fit">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Wishlist Summary
              </h2>

              <div className="space-y-3 border-b border-gray-200 pb-4">
                {wishlistItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-gray-700 text-sm"
                  >
                    <span>{item.title}</span>
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mt-2 text-lg font-bold text-gray-900">
                <span>Total Price:</span>
                <span className="text-green-600">${wishlistTotal}</span>
              </div>
              <div className="flex justify-between items-center mt-4 text-lg font-bold text-gray-900">
                <span>Total Items:</span>
                <span className="text-green-600">{wishlistItems.length}</span>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 mt-6">
                <button
                  className="bg-black text-white font-medium px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300"
                  onClick={handleAddAllToCart}
                >
                  Add All to Cart
                </button>
                <Link
                  to="/shop"
                  className="text-center text-sm text-gray-500 hover:text-green-600 transition"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Wishlist;
