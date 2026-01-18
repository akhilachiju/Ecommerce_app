import React from "react";
import { Link } from "react-router-dom";
import { container } from "../../styles/ui.config";

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-green-100 to-white">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          At{" "}
          <span className="text-transparent bg-clip-text bg-green-500">
            ShopEase
          </span>
        </h1>
        <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We are passionate about providing the best fashion, accessories, and
          lifestyle products to our customers. Our goal is to make shopping
          effortless, stylish, and enjoyable.
        </p>
      </div>

      <div className={container}>
        <div className="max-w-4xl mx-auto relative">
          {/* Center Thread line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-8 bottom-8 border-l-2 border-dashed border-green-500 z-0"></div>

          {/* Left Thread line for mobile */}
          <div className="block md:hidden absolute left-6 top-8 bottom-8 border-l-2 border-dashed border-green-500 z-0"></div>

          <div className="space-y-8 md:space-y-12">
            {/* Our Story - Left on desktop, full width on mobile */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-8 px-4 md:px-0">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-3">
                    <div className="flex items-center">
                      <div className="block md:hidden w-3 h-3 bg-green-500 rounded-full mr-4 -ml-8 relative z-10"></div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      Our Story
                    </h3>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      ShopEase was founded in 2022 with the idea that shopping
                      online should be simple, fun, and reliable.From humble beginnings as a small startup, we've grown
                      into a trusted eCommerce platform.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden md:block w-3 h-3 bg-green-500 rounded-full relative z-10"></div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>

            {/* Mission - Right on desktop, full width on mobile */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="hidden md:block md:w-1/2"></div>
              <div className="hidden md:block w-3 h-3 bg-green-500 rounded-full relative z-10"></div>
              <div className="w-full md:w-1/2 md:pl-8 px-4 md:px-0">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-3">
                    <div className="flex items-center">
                      <div className="block md:hidden w-3 h-3 bg-green-500 rounded-full mr-4 -ml-8 relative z-10"></div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    To deliver high-quality products and exceptional shopping
                    experiences to our customers through innovation and
                    dedication.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision - Left on desktop, full width on mobile */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-8 px-4 md:px-0">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-3">
                    <div className="flex items-center">
                      <div className="block md:hidden w-3 h-3 bg-green-500 rounded-full mr-4 -ml-8 relative z-10"></div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    To become the world's most trusted eCommerce platform,
                    setting new standards for online shopping experiences.
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-3 h-3 bg-green-500 rounded-full relative z-10"></div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>

            {/* Values - Right on desktop, full width on mobile */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="hidden md:block md:w-1/2"></div>
              <div className="hidden md:block w-3 h-3 bg-green-500 rounded-full relative z-10"></div>
              <div className="w-full md:w-1/2 md:pl-8 px-4 md:px-0">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-3">
                    <div className="flex items-center">
                      <div className="block md:hidden w-3 h-3 bg-green-500 rounded-full mr-4 -ml-8 relative z-10"></div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      Our Values
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Customer first, integrity, sustainability, innovation, and
                    building lasting relationships with our community of
                    shoppers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
