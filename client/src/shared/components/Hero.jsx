import React from "react";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";
import {
  button,
  featureCard,
  featureIcon,
  featureTitle,
  featureDesc,
  container,
} from "../../styles/ui.config";

import shippingIcon from "../../assets/shipping.png";
import returnIcon from "../../assets/return.png";
import giftIcon from "../../assets/gift.png";
import contactIcon from "../../assets/contact.png";
import heroImage from "../../assets/hero_men.png";

const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-gray-100 overflow-hidden py-12 md:py-20">
        <div
          className={`${container} relative flex flex-col md:flex-row items-center justify-between`}
        >
          {/* LEFT CONTENT */}
          <div className="flex flex-col space-y-6 max-w-xl text-center md:text-left z-20">
            <div>
              <p className="text-sm font-bold text-gray-500 tracking-wide">
                New Arrival —
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug mt-2">
                One Store, <br />
                <span>Where Quality Meets Variety</span>
              </h1>
            </div>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Discover a diverse range of products, explore clothing, tech,
              beauty, and home essentials — all curated to elevate your everyday
              life. Style, comfort, and innovation meet here.
            </p>

            <div>
              <Link to="/shop">
                <button className={button}>Shop Now</button>
              </Link>
              <p className="text-gray-500 text-sm mt-3">
                Save up to{" "}
                <span className="text-green-600 font-medium">50% off</span> on
                seasonal favorites!
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE with animated background */}
          <div className="relative flex justify-center items-center mt-10 md:mt-0">
            {/* Animated Circles Behind Image */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <div className="absolute w-40 h-40 bg-green-500 rounded-full opacity-20 animate-wave"></div>
              <div className="absolute w-40 h-40 bg-green-500 rounded-full opacity-15 animate-wave delay-[1s]"></div>
              <div className="absolute w-40 h-40 bg-green-500 rounded-full opacity-10 animate-wave delay-[2s]"></div>
            </div>

            {/* Hero Image */}
            <LazyImage
              src={heroImage}
              alt="Men's Fashion Hero"
              className="relative w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] object-contain drop-shadow-lg z-10"
            />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section
        className={`${container} py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6`}
      >
        <div className={featureCard}>
          <LazyImage className={featureIcon} src={shippingIcon} alt="Shipping Icon" />
          <span className={featureTitle}>FREE SHIPPING</span>
          <span className={featureDesc}>
            Free worldwide shipping on all orders.
          </span>
        </div>
        <div className={featureCard}>
          <LazyImage className={featureIcon} src={returnIcon} alt="Return Icon" />
          <span className={featureTitle}>30 DAYS RETURN</span>
          <span className={featureDesc}>
            No question return and easy refund in 14 days.
          </span>
        </div>
        <div className={featureCard}>
          <LazyImage className={featureIcon} src={giftIcon} alt="Gift Icon" />
          <span className={featureTitle}>GIFT CARDS</span>
          <span className={featureDesc}>
            Buy gift cards and use coupon codes easily.
          </span>
        </div>
        <div className={featureCard}>
          <LazyImage className={featureIcon} src={contactIcon} alt="Contact Icon" />
          <span className={featureTitle}>CONTACT US!</span>
          <span className={featureDesc}>
            Keep in touch via email and support system.
          </span>
        </div>
      </section>
      {/* OUR STORY SECTION */}
      <section className={`${container} py-10`}>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            ShopEase was founded in 2022 with the idea that shopping online
            should be simple, fun, and reliable. Our team is dedicated to
            sourcing the best products, offering excellent customer service, and
            creating a platform where every shopper feels valued and inspired.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
