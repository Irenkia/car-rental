import React from "react";
import { PRICING } from "../constants/pricing";
import "./CSS/stylesPricing.css";

const Pricing = () => {
  return (
    <div>
      <div id="pricing">
        <h3>Pricing</h3>
        <div className="pricing">
          {PRICING.map((item) => {
            return (
              <div key={item.id} className="card">
              <div class="card-img">{item.img}</div>
              <h2>{item.carBrand}</h2>
              <h4>{item.carModel}</h4>
              <p>{item.year}</p>
            </div>

            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Pricing;

