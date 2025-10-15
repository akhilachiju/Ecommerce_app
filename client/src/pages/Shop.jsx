import React, { useContext, useState, useMemo } from "react";
import { ShopContext } from "../context/ShopContext";
import {
  container,
  button,
  section,
  sectionTitle,
  sectionDesc,
} from "../styles/ui.config";
import { Link } from "react-router-dom";

const Shop = () => {
  const { products, loading, error } = useContext(ShopContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories
  const categories = useMemo(() => {
    const allCategories = products.map((p) => p.category);
    return ["All", ...new Set(allCategories)];
  }, [products]);

  // Filter logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  // Loading and error states
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

  // Main render
  return (
    <section className={section}>
      <div className={container}>
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className={sectionTitle}>Shop Our Collection</h1>
          <p className={sectionDesc}>
            Explore our latest collection — stylish, comfortable, and made for everyone.
          </p>
        </div>

        {/* Filters Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 text-gray-700"
          />

          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No products found.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </Link>

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
        )}
      </div>
    </section>
  );
};

export default Shop;
