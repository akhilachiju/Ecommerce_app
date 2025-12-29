import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../features/auth/components/Login";
import Home from "../pages/Home";
import Shop from "../features/products/components/Shop";
import Contact from "../pages/Contact";
import Notification from "../pages/Notification";
import Wishlist from "../features/cart/components/Wishlist";
import Cart from "../features/cart/components/Cart";
import Orders from "../features/orders/components/Orders";
import PlaceOrder from "../features/orders/components/PlaceOrder";
import Product from "../features/products/components/ProductDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/place-order" element={<PlaceOrder />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
};

export default AppRoutes;
