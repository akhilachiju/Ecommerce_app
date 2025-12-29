import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../cart/ShopContext";
import {
  Section,
  Container,
  Button,
} from "../../../shared/components";
import {
  HiArrowLeft,
  HiOutlineTrash,
} from "react-icons/hi";
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
    <Section background="white" className="min-h-screen">
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
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Cart Items
                </h2>
                <div className="space-y-4">
                  {cart.map((item) => {
                    const isWishlisted = wishlist.includes(item.id);
                    return (
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
                                ${item.price} × {item.quantity}
                              </p>
                              <p className="text-xs text-gray-500">
                                Total: $
                                {(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
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
                            <button
                              onClick={() => addToWishlist(item.id)}
                              className={`
                            flex items-center justify-center 
                            w-8 h-8 rounded-full shadow-md hover:shadow-lg 
                            transition-all duration-300
                            ${isWishlisted ? "bg-green-50" : "bg-white"}
                          `}
                            >
                              <RiHeartFill
                                className={`
                            w-5 h-5 transition-colors duration-200
                            ${
                              isWishlisted
                                ? "text-green-600"
                                : "text-gray-300 hover:text-green-500"
                            }
                          `}
                              />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="flex items-center justify-center w-8 h-8 rounded-full bg-black hover:bg-red-500 shadow-md hover:shadow-lg transition-all duration-300"
                            >
                              <HiOutlineTrash className="w-5 h-5 text-white" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 p-6 h-fit">
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
