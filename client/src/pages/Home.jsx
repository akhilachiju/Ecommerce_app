import React from "react";
import Hero from "../shared/components/Hero";
import BestSeller from "../features/products/components/BestSeller";
import About from "../shared/components/About";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <BestSeller />
    </div>
  );  
};

export default Home;
