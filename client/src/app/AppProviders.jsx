import React from "react";
import { ShopProvider } from "../features/cart/cartContext.jsx";

const AppProviders = ({ children }) => {
  return (
    <ShopProvider>
      {children}
    </ShopProvider>
  );
};

export default AppProviders;
