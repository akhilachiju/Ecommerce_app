import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Section, Container } from "../components/ui";
import { HiArrowLeft, HiOutlineShoppingBag } from "react-icons/hi";
import { RiHeartFill } from "react-icons/ri";

const Wishlist = () => {
  const { wishlist, products, addToWishlist, addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const wishlistItems = products.filter((p) => wishlist.includes(p.id));

  // Calculate total price of wishlist items
  const wishlistTotal = wishlistItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

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
            <p className="text-lg text-gray-500 mb-4">Your wishlist is empty.</p>
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
            <div className="lg:col-span-2 space-y-6">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 ${
                    item.stock === 0 ? "opacity-50" : ""
                  }`}
                >
                  {/* Image & Details */}
                  <Link to={`/product/${item.id}`} className="flex items-center space-x-4">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                      <p className="text-green-600 font-medium">${item.price}</p>
                      {item.stock === 0 && (
                        <p className="text-red-500 text-sm mt-1">Out of Stock</p>
                      )}
                    </div>
                  </Link>

                  {/* Actions */}
                  <div className="flex items-center space-x-3">
                    {/* Remove from Wishlist */}
                    <button
                      onClick={() => addToWishlist(item.id)}
                      className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition flex items-center justify-center"
                      title="Remove from Wishlist"
                    >
                      <RiHeartFill className="text-green-600 w-5 h-5" />
                    </button>

                    {/* Add to Cart */}
                    <button
                      onClick={() => handleAddToCartSingle(item)}
                      disabled={item.stock === 0}
                      className={`flex items-center justify-center w-8 h-8 rounded-full text-white transition ${
                        item.stock === 0
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-black hover:bg-green-600"
                      }`}
                      title={item.stock === 0 ? "Out of Stock" : "Add to Cart"}
                    >
                      <HiOutlineShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 h-fit">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Wishlist Summary</h2>

              <div className="space-y-3 border-b border-gray-200 pb-4">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-gray-700 text-sm">
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
