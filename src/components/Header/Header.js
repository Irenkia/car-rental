import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <h2 className="logo">Car Rental</h2>
      <nav className="navbar">
        <a href="#home" id="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#pricing">Pricing</a>
        <a href="#cars">Cars</a>
        <a href="#order">Order</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};
export default Header;
