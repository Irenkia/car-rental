import React from "react";
import car from "../assets/car.jpg";
import man from "../assets/man.jpg";
import icon_3 from "../assets/icon_3.png";
import icon_2 from "../assets/icon_2.png";
import icon_1 from "../assets/icon_1.png";
import yaris from "../assets/yaris.jpg";
import "./CSS/stylesServices.css";

const Services = () => {
    return(
        <div>
                  <div>
        <h3>Our Services</h3>
      </div>
      <div className="services" id="services">
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
    )
};
export default Services;
