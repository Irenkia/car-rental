import React from "react";
import "../Main/CSS/stylesHome.css";
import "../Main/CSS/stylesAbout.css";
import "../Main/CSS/stylesServices.css";
//import banner1 from "../../assets/banner1.jpg";
import about from "../../assets/about.jpg";
import car from "../../assets/car.jpg";
import man from "../../assets/man.jpg";
import icon_3 from "../../assets/icon_3.png";
import icon_2 from "../../assets/icon_2.png";
import icon_1 from "../../assets/icon_1.png";
import yaris from "../../assets/yaris.jpg";

const Main = () => {
  return (
    <div>
      {/* Home */}
      <div className="home" id="home">
        {/* <img src={banner1} alt="banner" /> */}

        <div className="content">
          {/* <img src={banner1} alt="banner" /> */}
          <h3>
            We've Got All <span>Great</span> Models For You
          </h3>
          <p>Fast And Easy Way To Rent A Car</p>
          <a href="#form" className="btn">
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

      {/* Services */}
      <div className="services" id="services">
        <div>
          <h3>Our Services</h3>
        </div>
        <div className="row">
          <div className="column">
            <div className="box">
              <img src={car} alt="RENTAL CAR" />
              <h4>RENTAL CAR</h4>
              <p>Reserve Your Rental Car</p>
            </div>
          </div>
          <div className="column">
            <div className="box">
              <img src={man} alt="CAR REPAIR" />
              <h4>CAR REPAIR</h4>
              <p>Repair Your Private Car</p>
            </div>
          </div>
          <div className="column">
            <div className="box">
              <img src={icon_3} alt="TAXI SERVICE" />
              <h4>TAXI SERVICE</h4>
              <p>Call Yourself a Taxi</p>
            </div>
          </div>
          <div className="column">
            <div className="box">
              <img src={icon_2} alt="LIFE INSURANCE" />
              <h4>LIFE INSURANCE</h4>
              <p>Reserve Your Rental Car</p>
            </div>
          </div>
          <div className="column">
            <div className="box">
              <img src={icon_1} alt="CAR WASH" />
              <h4>CAR WASH</h4>
              <p>Book a Car Wash</p>
            </div>
          </div>
          <div className="column">
            <div className="box">
              <img src={yaris} alt="CALL DRIVER" />
              <h4>CALL DRIVER</h4>
              <p>Reserve Your Rental Car</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
