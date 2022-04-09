import React from "react";
import { SERVICES } from "../constants/services";
import "./CSS/stylesServices.css";

const Services = () => {
  return (
    <div className="right-container">
      <div id="services">
        <h3>Our Services</h3>
      </div>
      <div className="services">
        {SERVICES.map((item) => {
          return (
            // <div className="right-container">
            <div className="row">
              <div className="column">
                <div key={item.id} className="box">
                  <div id="i">{item.img}</div>
                  {/* {item.img} */}
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
};
export default Services;
