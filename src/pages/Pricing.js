import React from "react";
import { PRICING } from "../constants/pricing";
import "./CSS/stylesPricing.css";

const Pricing = () => {
  return (
    <div>
      <div>
        <h3>Pricing</h3>
        <div className="pricing" id="pricing">
          {PRICING.map((item) => {
            return (
              <div key={item.id} className="column">
                {/* {item.img}&#160;&#160;
                {item.carBrand}&#160;&#160;
                {item.carModel}&#160;
                {item.year} */}
                {item.img}
                <p>{item.carBrand}</p>
                <p>{item.carModel}</p>
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

/* const listItems = PRICING.map((item)=><ListItem key={id.toString()}) */
