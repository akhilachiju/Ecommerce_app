import React from "react";
import { Link } from "react-router-dom";
import menImg from "../assets/men_cat.png";
import perfumeImg from "../assets/accessories.jpg";
import sunGlassImg from "../assets/accessories_2.jpg";
import womenImg from "../assets/women_cat.png";

import {
  container,
  categoryCard,
  categoryImage,
  categoryImgStyle,
  verticalTag,
  horizontalTag,
  categoryTagText,
  button,
} from "../styles/ui.config";

const categories = [
  { name: "Men", image: menImg, tagType: "vertical" },
  { name: "Perfume", image: perfumeImg, tagType: "horizontal" },
  { name: "Sunglass", image: sunGlassImg, tagType: "horizontal" },
  { name: "Women", image: womenImg, tagType: "vertical" },
];

const BestSeller = () => {
  return (
    <section className="py-16 bg-white">
      <div className={container}>
        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Best For Your Categories
        </h2>

        {/* CATEGORY GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div key={index} className={categoryCard}>
              <div className={categoryImage} style={{ position: "relative" }}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  className={categoryImgStyle}
                />

                {cat.tagType === "vertical" ? (
                  <div className={verticalTag}>
                    <span
                      className={`${categoryTagText} writing-mode-vertical rotate-180`}
                    >
                      {cat.name}
                    </span>
                  </div>
                ) : (
                  <div className={horizontalTag}>
                    <span className={categoryTagText}>{cat.name}</span>
                  </div>
                )}

                {/* More Button only for Women at right-bottom */}
                {cat.name === "Women" && (
                  <div className="absolute bottom-2 right-2">
                    <Link to="/shop">
                      <button className={button}>More</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
