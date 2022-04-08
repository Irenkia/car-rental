import React from "react";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Services from "../../pages/Services";
import Pricing from "../../pages/Pricing";
//import "./styles.css";

const Main = () => {
  return (
    <div className="wrapper">
      <Home />
      <About />
      <Services />
      <Pricing />
    </div>
  );
};

export default Main;
