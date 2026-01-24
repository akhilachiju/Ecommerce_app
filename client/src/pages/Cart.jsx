import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/context";
import { AuthContext } from "../context/authContext";
import {
  Section,
  Container,
  Button,
  CartItem
} from "../components";
import { HiArrowLeft, HiOutlineShoppingBag } from "react-icons/hi";

const Cart = () => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    cartTotal,
    wishlist,
    addToWishlist,
  } = useContext(ShopContext);

  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/place-order' } });
    } else {
      navigate('/place-order');
    }
  };

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
            <HiOutlineShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
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
                  {cart.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeFromCart}
                      onMoveToWishlist={addToWishlist}
                      isInWishlist={wishlist.includes(item.id)}
                    />
                  ))}
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
              <div className="flex justify-between items-center mt-4 text-lg font-bold text-gray-900">
                <span>Total Items:</span>
                <span className="text-green-600">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
              </div>

              <div className="flex flex-col gap-3 mt-6">
                <Button
                  onClick={handleCheckout}
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
