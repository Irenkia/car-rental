import React from "react";
import about from "../assets/about.jpg";
import "./CSS/stylesAbout.css";

const About = () => {
  return (
    <div>
      <div>
        <h3>About Us</h3>
      </div>
      <div className="about" id="about">
        <div>
          <img src={about} alt="about us" />
        </div>
        <div id="floater"></div>
        <div>
          <p>Better Way to Rent Your Perfect Cars</p>
          <blockquote>
            FOR AS LOW AS $30 A DAY PLUS 15% DISCOUNT FOR OUR RETURNING
            CUSTOMERS
          </blockquote>
        </div>
      </div>
    </div>
  );
};
export default About;
