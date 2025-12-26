import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Section, Container, Button, IconWithBadge, EmptyState } from "../components/ui";
import { HiArrowLeft, HiTrash, HiOutlineShoppingBag } from "react-icons/hi";
import { RiHeartFill } from "react-icons/ri";

const Cart = () => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    cartTotal,
    wishlist,
    addToWishlist,
  } = useContext(ShopContext);

  const navigate = useNavigate();

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

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-gray-500 mb-4">Your cart is empty.</p>
            <Link
              to="/shop"
              className="bg-black text-white font-medium px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300"
            >
              Go to Shop
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => {
                const isWishlisted = wishlist.includes(item.id);

                return (
                  <div
                    key={item.id}
                    className="relative flex items-center justify-between bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6"
                  >

                    {/* Image & Details */}
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div>
                        <h2 className="text-lg font-semibold text-gray-800">
                          {item.title}
                        </h2>
                        <p className="text-green-600 font-medium">
                          ${item.price}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center bg-gray-100 rounded-xl px-3 py-1">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg font-bold"
                        >
                          −
                        </button>
                        <span className="mx-3 text-gray-800 font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg font-bold"
                        >
                          +
                        </button>
                      </div>

                      {/* Wishlist Heart */}
                      <button
                        onClick={() => addToWishlist(item.id)}
                        className={`
                          flex items-center justify-center 
                          w-8 h-8 rounded-full shadow-md hover:shadow-lg 
                          transition-all duration-300
                          ${isWishlisted ? 'bg-green-50' : 'bg-white'}
                        `}
                        title={
                          isWishlisted
                            ? "Remove from Wishlist"
                            : "Add to Wishlist"
                        }
                      >
                        <RiHeartFill
                          className={`w-5 h-5 transition-colors duration-200 ${
                            isWishlisted
                              ? "text-green-600"
                              : "text-gray-300 hover:text-green-500"
                          }`}
                        />
                      </button>

                      {/* Remove button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-black hover:bg-red-500 shadow-md hover:shadow-lg transition-all duration-300"
                        title="Remove item"
                      >
                        <HiTrash className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Summary Section */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 h-fit">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 border-b border-gray-200 pb-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-gray-700 text-sm"
                  >
                    <span>
                      {item.title} × {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4 text-lg font-bold text-gray-900">
                <span>Total Price:</span>
                <span className="text-green-600">${cartTotal}</span>
              </div>

              <div className="flex flex-col gap-3 mt-6">
                <Button
                  onClick={() => alert("Proceeding to checkout...")}
                  className="w-full"
                >
                  Checkout
                </Button>
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

export default Cart;
