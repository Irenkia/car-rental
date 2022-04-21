import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h2 className="logo">Car Rental</h2>
      </div>
      <div>
        <p>
          <span>Iryna Tiutiun</span>&#160; © &#160;2022 &#160;
          <a
            href="https://github.com/Irenkia/car-rental"
            target="_blank"
            rel="noreferrer"
          >
            Github&#160;&#160;
          </a>
          &#160;
          <a
            href="https://irenkia.github.io/car-rental/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Pages
          </a>
          &#160; Design by{" "}
          <a
            href="https://react-landing-page-template.herokuapp.com/#features"
            target="_blank"
            rel="noreferrer"
          >
            Template
          </a>
        </p>
      </div>
    </div>
  );
};
export default Footer;
