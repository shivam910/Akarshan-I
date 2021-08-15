import React from "react";
import { About } from "./About/About";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Slider from "./Slider/Slider";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <About />
      <Footer />
    </div>
  );
};
