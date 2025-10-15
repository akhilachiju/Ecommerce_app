import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import {
  container,
  button,
  section,
  sectionTitle,
  sectionDesc,
} from "../styles/ui.config";

const Shop = () => {
  const { products, loading, error } = useContext(ShopContext);

  if (loading) {
    return (
      <section className={`${section} flex justify-center items-center`}>
        <p className="text-lg text-gray-600 animate-pulse">Loading products...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={`${section} flex justify-center items-center`}>
        <p className="text-red-600 text-lg font-medium">{error}</p>
      </section>
    );
  }

  return (
    <section className={section}>
      <div className={container}>
        <div className="text-center mb-12">
          <h1 className={sectionTitle}>Shop Our Collection</h1>
          <p className={sectionDesc}>
            Explore our latest collection — stylish, comfortable, and made for everyone.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-5 flex flex-col justify-between space-y-3">
                <h2 className="text-lg font-semibold text-gray-900 truncate">
                  {product.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-green-600 font-bold text-lg">
                    ${product.price}
                  </span>
                  <button className={button}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
