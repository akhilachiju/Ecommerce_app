import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-16 m-6 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Hero Section */}
        <div className="mb-18 mt-4  text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-green-600">ShopEase</span>
          </h1>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            At ShopEase, we are passionate about providing the best fashion,
            accessories, and lifestyle products to our customers. Our goal is to
            make shopping effortless, stylish, and enjoyable.
          </p>
          <Link to="/shop">
            <button className="bg-black text-white font-medium px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300">Shop Now</button>
          </Link>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
          <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center">
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To deliver high-quality products and exceptional shopping
              experiences to our customers worldwide.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center">
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To become the go-to online destination for fashion-forward,
              quality-conscious shoppers.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center">
            <h3 className="text-xl font-bold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Customer first, integrity, sustainability, and innovation in
              everything we do.
            </p>
          </div>
        </div>

        {/* Brand Story */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            ShopEase was founded in 2022 with the idea that shopping online
            should be simple, fun, and reliable. Our team is dedicated to
            sourcing the best products, offering excellent customer service, and
            creating a platform where every shopper feels valued and inspired.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
