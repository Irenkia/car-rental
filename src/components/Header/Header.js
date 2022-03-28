import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <a href="#" className="logo">
        Car Rental
      </a>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#features">About</a>
        <a href="#products">Services</a>
        <a href="#categories">Pricing</a>
        <a href="#review">Cars</a>
        <a href="#blogs">Blog</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};
export default Header;
