import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../cart/ShopContext";
import { Section, Container, SectionHeader, Button, LoadingSpinner, EmptyState } from "../../../shared/components";
import ProductCard from "./ProductCard";
import {
  categoryCard,
  categoryImage,
  categoryImgStyle,
  verticalTag,
  horizontalTag,
  categoryTagText,
} from "../../../styles/ui.config";

const BestSeller = () => {
  const { products, loading } = useContext(ShopContext);

  // Generate 4 random categories
  const categories = useMemo(() => {
    if (!products || products.length === 0) return [];

    // Group products by category
    const grouped = {};
    products.forEach((p) => {
      if (!grouped[p.category]) grouped[p.category] = [];
      grouped[p.category].push(p);
    });

    // Shuffle categories randomly and take 4
    const allCategories = Object.keys(grouped)
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);

    const layoutPattern = [
      { tagType: "vertical", height: "420px" },
      { tagType: "horizontal", height: "340px" },
      { tagType: "horizontal", height: "340px" },
      { tagType: "vertical", height: "420px" },
    ];

    // Map categories to display objects
    return allCategories.map((cat, index) => {
      const items = grouped[cat];
      const randomProduct = items[Math.floor(Math.random() * items.length)];
      return {
        name: cat,
        image: randomProduct.thumbnail || randomProduct.images?.[0],
        productId: randomProduct.id,
        ...layoutPattern[index],
      };
    });
  }, [products]);

  if (loading) {
    return (
      <Section className="text-center">
        <LoadingSpinner text="Loading categories..." />
      </Section>
    );
  }

  if (!categories.length) {
    return (
      <Section className="text-center">
        <EmptyState title="No categories available" />
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <SectionHeader title="Best For Your Categories" />

        {/* CATEGORY GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div key={index} className={`${categoryCard} relative`}>
              {/* Product Image Link */}
              <Link to={`/product/${cat.productId}`}>
                <div
                  className={categoryImage}
                  style={{
                    height: cat.height,
                    overflow: "hidden",
                    borderRadius: "1rem",
                    position: "relative",
                  }}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className={`${categoryImgStyle} object-cover w-full h-full transition-transform duration-500 hover:scale-105`}
                  />

                  {/* Tags */}
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
                </div>
              </Link>

              {/* "More" button only on last card */}
              {index === 3 && (
                <div className="absolute bottom-2 right-2">
                  <Link to="/shop">
                    <Button size="sm">More</Button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default BestSeller;
