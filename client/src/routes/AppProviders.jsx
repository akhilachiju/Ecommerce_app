import React from "react";
import { ShopProvider } from "../context";

const AppProviders = ({ children }) => {
  return (
    <ShopProvider>
      {children}
    </ShopProvider>
  );
};

export default AppProviders;
