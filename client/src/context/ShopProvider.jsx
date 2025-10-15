import React, { useState, useEffect } from "react";
import { ShopContext } from "./ShopContext";

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();
        setProducts(data.products);
        setError(null);
      } catch (err) {
        setError(err.message || "Something went wrong while fetching products");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ShopContext.Provider value={{ products, loading, error }}>
      {children}
    </ShopContext.Provider>
  );
};
