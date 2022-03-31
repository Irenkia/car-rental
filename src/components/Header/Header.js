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
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#pricing">Pricing</a>
        <a href="#cars">Cars</a>
        <a href="#blogs">Blog</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};
export default Header;
