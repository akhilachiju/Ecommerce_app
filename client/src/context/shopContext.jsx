import React, { useState, useEffect } from "react";
import { ShopContext } from "./context";

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Fetch products with caching
  useEffect(() => {
    const controller = new AbortController();
    
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        // Check if products are cached in localStorage
        const cachedProducts = localStorage.getItem('shopease_all_products');
        const cacheTimestamp = localStorage.getItem('shopease_all_products_timestamp');
        const now = Date.now();
        const cacheExpiry = import.meta.env.VITE_CACHE_EXPIRY_MS || 300000; // Default 5 minutes
        
        // Use cached data if it exists and is not expired
        if (cachedProducts && cacheTimestamp && (now - parseInt(cacheTimestamp)) < cacheExpiry) {
          setProducts(JSON.parse(cachedProducts));
          setLoading(false);
          return;
        }

        // Fetch from API if no cache or expired
        const apiUrl = `${import.meta.env.VITE_API_BASE_URL || 'https://dummyjson.com'}/products?limit=0`;
        const response = await fetch(apiUrl, { signal: controller.signal });
        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();
        setProducts(data.products);
        
        // Cache the products
        localStorage.setItem('shopease_all_products', JSON.stringify(data.products));
        localStorage.setItem('shopease_all_products_timestamp', now.toString());
        
        setError(null);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong while fetching products");
          setProducts([]);
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
    
    return () => controller.abort();
  }, []);

  // Add to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Adjust quantity
  const updateQuantity = (productId, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(1, item.quantity + amount) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Cart totals
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  // Wishlist add/remove toggle
  const addToWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  // Wishlist count
  const wishlistCount = wishlist.length;

  return (
    <ShopContext.Provider
      value={{
        products,
        loading,
        error,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartTotal,
        wishlist,
        addToWishlist,
        wishlistCount, 
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
