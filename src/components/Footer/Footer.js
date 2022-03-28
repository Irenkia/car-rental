import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        &#160; © <span>Iryna Tiutiun</span>&#160; 28 March 2022 &#160;
        <a
          href="https://github.com/Irenkia/car-rental"
          target="_blank"
          rel="noreferrer"
        >
          Github&#160;&#160;
        </a>{" "}
        Design by{" "}
        <a
          href="https://react-landing-page-template.herokuapp.com/#features"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Template
        </a>
      </p>
    </div>
  );
};
export default Footer;
