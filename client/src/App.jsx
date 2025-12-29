import React from "react";
import AppProviders from "./app/AppProviders";
import AppRoutes from "./app/AppRoutes";
import Navbar from "./shared/components/Navbar";
import Header from "./shared/components/Header";
import Footer from "./shared/components/Footer";
import ScrollToTop from "./shared/components/ScrollToTop";

const App = () => {
  return (
    <AppProviders>
      <div>
        <ScrollToTop />
        <Header />
        <Navbar />
        <div className="routes">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </AppProviders>
  );
};

export default App;
