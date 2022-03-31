import React from "react";
import "../Main/CSS/stylesMain.css";
import "../Main/CSS/stylesAbout.css";
//import banner1 from "../../assets/banner1.jpg";
import about from "../../assets/about.jpg";

const Main = () => {
  return (
    <div>
      {/* Main */}

      <div className="home" id="home">
        {/* <img src={banner1} alt="banner" /> */}

        <div className="content">
          {/* <img src={banner1} alt="banner" /> */}
          <h3>
            We've Got All <span>Great</span> Models For You
          </h3>
          <p>Fast And Easy Way To Rent A Car</p>
          <a href="#" className="btn">
            Hire now
          </a>
        </div>
      </div>

      {/* About */}
      
      <div className="about" id="about">
        <div>
          <img src={about} alt="about us" />
        </div>
        <div id="floater"></div>
        <div>
          <h3>About Us</h3>
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
export default Main;
