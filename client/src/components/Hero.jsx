import React from "react";
import {
  button,
  featureCard,
  featureIcon,
  featureTitle,
  featureDesc,
} from "../styles/ui.config";

import shippingIcon from "../assets/shipping.png";
import returnIcon from "../assets/return.png";
import giftIcon from "../assets/gift.png";
import contactIcon from "../assets/contact.png";
import heroImage from "../assets/hero_men.png";

const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gray-100 py-10 md:py-20">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-10 lg:px-16">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col space-y-6 max-w-xl text-center md:text-left">
            <div>
              <p className="text-sm font-bold text-gray-500 tracking-wide">New Arrival —</p>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug mt-2">
                Limited Collection For <br />
                <span className="">Men’s & Women’s Fashion</span>
              </h1>
            </div>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              From street wear essentials to elegant looks — explore our new
              season collection crafted for everyone. Stay stylish, confident, and
              comfortable all day long.
            </p>

            <div>
              <button className={button}>Shop Now</button>
              <p className="text-gray-500 text-sm mt-3">
                Save up to <span className="text-green-600 font-medium">50% off</span>  on seasonal favorites!
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE WITH WHITE CIRCLE */}
          <div className="relative flex justify-center items-center mt-10 md:mt-0">
            
            {/* Hero Image */}
            <img
              src={heroImage}
              alt="Men's Fashion Hero"
              className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] relative z-10 object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className={featureCard}>
          <img className={featureIcon} src={shippingIcon} alt="Shipping Icon" />
          <span className={featureTitle}>FREE SHIPPING</span>
          <span className={featureDesc}>Free worldwide shipping on all orders.</span>
        </div>
        <div className={featureCard}>
          <img className={featureIcon} src={returnIcon} alt="Return Icon" />
          <span className={featureTitle}>30 DAYS RETURN</span>
          <span className={featureDesc}>No question return and easy refund in 14 days.</span>
        </div>
        <div className={featureCard}>
          <img className={featureIcon} src={giftIcon} alt="Gift Icon" />
          <span className={featureTitle}>GIFT CARDS</span>
          <span className={featureDesc}>Buy gift cards and use coupon codes easily.</span>
        </div>
        <div className={featureCard}>
          <img className={featureIcon} src={contactIcon} alt="Contact Icon" />
          <span className={featureTitle}>CONTACT US!</span>
          <span className={featureDesc}>Keep in touch via email and support system.</span>
        </div>
      </section>
    </>
  );
};

export default Hero;
