import React from "react";
import { AppProviders, AppRoutes } from "./routes";
import { Navbar, Header, Footer, ScrollToTop } from "./components";

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
