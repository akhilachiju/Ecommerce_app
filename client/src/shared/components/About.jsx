import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white via-green-100 to-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Side - ShopEase Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
              At <span className="text-green-600">ShopEase</span>
            </h1>
            <p className="text-gray-600 mb-6">
              we are passionate about providing the best fashion,
              accessories, and lifestyle products to our customers. Our goal is to
              make shopping effortless, stylish, and enjoyable.
            </p>
          </div>

          {/* Right Side - Mission, Vision, Values */}
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To deliver high-quality products and exceptional shopping
                experiences to our customers worldwide.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To become the go-to online destination for fashion-forward,
                quality-conscious shoppers.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">Our Values</h3>
              <p className="text-gray-600">
                Customer first, integrity, sustainability, and innovation in
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
