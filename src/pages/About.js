import React from "react";
import about from "../assets/about.jpg";
import "./CSS/stylesAbout.css";

const About = () => {
  return (
    <div>
      <div id="about">
        <h3>About Us</h3>
      </div>
      <div className="about">
        <div>
          <img src={about} alt="about us" />
        </div>
        <div id="floater"></div>
        <div>
          <p>Better Way to Rent Your Perfect Cars</p>
          <p>BOOK A CAR TODAY!</p>
          <p>Only quality for clients</p>
          <p>
            For As Low As $30 A Day Plus 15% Discount For Our Returning
            Customers
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;

