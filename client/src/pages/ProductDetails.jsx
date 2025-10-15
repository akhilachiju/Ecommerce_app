import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import {
  button,
  section,
  container,
} from "../styles/ui.config";
import { HiArrowLeft } from "react-icons/hi";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart, updateQuantity, cart } = useContext(ShopContext);

  const product = products.find((p) => p.id === parseInt(id));
  const cartItem = cart.find((item) => item.id === product?.id);

  if (!product)
    return <p className="text-center py-12 text-lg text-gray-500">Product not found.</p>;

  return (
    <section className={`${section} min-h-screen bg-gray-50`}>
      <div className={`${container} py-10`}>
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-green-600 transition mb-6"
        >
          <HiArrowLeft className="w-5 h-5 mr-2" />
          Back to Shop
        </button>

        {/* Product Details */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT: Image */}
          <div className="flex justify-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="rounded-2xl w-full max-w-md h-[400px] object-cover shadow-sm"
            />
          </div>

          {/* RIGHT: Info */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.title}</h1>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-green-600">${product.price}</p>
              <p className="text-sm text-gray-500 mt-1">
                Stock Available: {product.stock}
              </p>
            </div>

            {/* Add to Cart / Quantity Control */}
            <div className="flex items-center space-x-4 mt-2">
              {cartItem ? (
                <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2 space-x-3">
                  <button
                    onClick={() => updateQuantity(product.id, -1)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg font-bold"
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold text-gray-800">
                    {cartItem.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(product.id, 1)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg font-bold"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className={`${button} bg-black hover:bg-green-700 text-white transition`}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
