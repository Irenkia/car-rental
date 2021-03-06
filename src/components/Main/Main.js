import React from "react";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Services from "../../pages/Services";
import Pricing from "../../pages/Pricing";
import Cars from "../../pages/Cars";
import Order from "../../pages/Order";
import Contact from "../../pages/Contact";
import "./styles.css";

const Main = () => {
  return (
    <div className="wrapper">
      <Home />
      <About />
      <Services />
      <Pricing />
      <Cars />
      <Order />
      <Contact />
    </div>
  );
};

export default Main;
