import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { ShopContext } from '../context/context';
import { Section, Container } from '../components';

const PlaceOrder = () => {
  const { user } = useContext(AuthContext);
  const { cart, cartTotal } = useContext(ShopContext);
  const navigate = useNavigate();

  if (!user) {
    return (
      <Section className="min-h-screen flex items-center justify-center">
        <Container>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Please log in to continue</h1>
            <button
              onClick={() => navigate('/login')}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Go to Login
            </button>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container className="py-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Place Your Order</h1>
            <p className="text-gray-600">Review your order and proceed to payment</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* User Info & Delivery */}
            <div className="lg:col-span-2 space-y-6">
              {/* User Information */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Delivery Address</h2>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">{user?.firstName} {user?.lastName}</p>
                  <p>{user?.address}</p>
                  <p>{user?.city}, {user?.state} {user?.pincode}</p>
                  <p>{user?.phone}</p>
                </div>
                <button className="mt-4 text-green-600 hover:text-green-700 font-medium">
                  Edit Address
                </button>
              </div>

              {/* Order Items */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Items</h2>
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center border-b pb-4">
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping & Billing */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Shipping & Billing</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping Method:</span>
                    <span className="font-semibold">Standard (5-7 days)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping Cost:</span>
                    <span className="font-semibold">$5.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary & Payment */}
            <div className="bg-white rounded-2xl shadow-sm p-6 h-fit">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-3 border-b border-gray-200 pb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span>${cartTotal}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping:</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax:</span>
                  <span>${(cartTotal * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4 text-xl font-bold">
                <span>Total:</span>
                <span className="text-green-600">${(parseFloat(cartTotal) + 5 + (parseFloat(cartTotal) * 0.1)).toFixed(2)}</span>
              </div>

              <button
                onClick={() => alert('Payment setup - TODO')}
                className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all"
              >
                Proceed to Payment
              </button>

              <button
                onClick={() => navigate('/cart')}
                className="w-full mt-3 border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-all"
              >
                Back to Cart
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default PlaceOrder;