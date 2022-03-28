import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      {/* <h2>Iryna Tiutiun</h2> */}
      <p>
        &#160; © <span>Iryna Tiutiun</span>&#160; 28 March 2022 &#160;
        <a
          href="https://github.com/Irenkia/React-Intro-3"
          target="_blank"
          rel="noreferrer"
        >
          Github&#160;&#160;
        </a>{" "}
        Design by{" "}
        <a
          href="https://ru.depositphotos.com/39223635/stock-illustration-ice-abstract-geometric-vector-background.html"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Template
        </a>
      </p>

      {/* </p>
      <a
        href="https://github.com/Irenkia/React-Intro-3"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
      <p>Design by</p>
      <a
        href="https://ru.depositphotos.com/39223635/stock-illustration-ice-abstract-geometric-vector-background.html"
        target="_blank"
        rel="noreferrer"
      >
        template
      </a> */}
    </div>
  );
};
export default Footer;
