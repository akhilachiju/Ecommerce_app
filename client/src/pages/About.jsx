import React from "react";
import { Link } from "react-router-dom";
import {
  container,
  button,
  section,
  sectionTitle,
  sectionDesc,
  infoCard,
  cardTitle,
  cardText,
  subsectionTitle,
  subsectionText
} from "../styles/ui.config";

const About = () => {
  return (
    <section className={section}>
      <div className={container}>
        {/* Hero Section */}
        <div className="mb-18 mt-4  text-center">
          <h1 className={sectionTitle}>
            About <span className="text-green-600">ShopEase</span>
          </h1>
          <p className={sectionDesc}>
            At ShopEase, we are passionate about providing the best fashion,
            accessories, and lifestyle products to our customers. Our goal is to
            make shopping effortless, stylish, and enjoyable.
          </p>
          <Link to="/shop">
            <button className={button}>Shop Now</button>
          </Link>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
          <div className={infoCard}>
            <h3 className={cardTitle}>Our Mission</h3>
            <p className={cardText}>
              To deliver high-quality products and exceptional shopping
              experiences to our customers worldwide.
            </p>
          </div>
          <div className={infoCard}>
            <h3 className={cardTitle}>Our Vision</h3>
            <p className={cardText}>
              To become the go-to online destination for fashion-forward,
              quality-conscious shoppers.
            </p>
          </div>
          <div className={infoCard}>
            <h3 className={cardTitle}>Our Values</h3>
            <p className={cardText}>
              Customer first, integrity, sustainability, and innovation in
              everything we do.
            </p>
          </div>
        </div>

        {/* Brand Story */}
        <div>
          <h2 className={subsectionTitle}>Our Story</h2>
          <p className={subsectionText}>
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
