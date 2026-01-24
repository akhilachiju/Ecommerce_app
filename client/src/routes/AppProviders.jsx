import React from "react";
import { ShopProvider } from "../context";
import AuthContextProvider from "../context/AuthContextProvider";

const AppProviders = ({ children }) => {
  return (
    <AuthContextProvider>
      <ShopProvider>
        {children}
      </ShopProvider>
    </AuthContextProvider>
  );
};

export default AppProviders;
