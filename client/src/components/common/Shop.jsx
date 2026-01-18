import React, { useContext, useState, useMemo } from "react";
import { ShopContext } from "../../context/ShopContext";
import {
  Section,
  Container,
  SectionHeader,
  LoadingSpinner,
  ErrorMessage,
  EmptyState,
} from "../ui/StateComponents";
import { Input, Dropdown } from "../ui";
import ProductCard from "./ProductCard";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Shop = () => {
  const { products, loading, error } = useContext(ShopContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Generate category list
  const categories = useMemo(() => {
    const allCategories = products.map((p) => p.category);
    return ["All", ...new Set(allCategories)];
  }, [products]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  if (loading) {
    return (
      <Section className="flex justify-center items-center min-h-[400px]">
        <LoadingSpinner size="lg" text="Loading products..." />
      </Section>
    );
  }

  if (error) {
    return (
      <Section className="flex justify-center items-center min-h-[400px]">
        <ErrorMessage message={error} />
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <SectionHeader
          title="Shop Our Collection"
          description="Explore our latest collection — stylish, comfortable, and made for everyone."
        />

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="flex-1">
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex-1">
            <Dropdown
              options={categories}
              value={selectedCategory}
              onChange={setSelectedCategory}
              placeholder="Select Category"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <EmptyState
            title="No products found"
            description="Try adjusting your search or filter criteria"
            actionText="Clear Filters"
            onAction={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            icon={HiOutlineShoppingBag}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Shop;
