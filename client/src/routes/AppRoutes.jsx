import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Home, Contact, Notification, Orders, PlaceOrder } from "../pages";
import { Shop, ProductDetails, Wishlist, Cart } from "../components";

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
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default AppRoutes;
