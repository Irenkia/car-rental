import React from "react";
import { PRICING } from "../constants/pricing";
import "./CSS/stylesPricing.css";

const Pricing = () => {
  return (
    <div>
      <div id="pricing">
        <h3>Pricing</h3>
        <div className="pricing">
          {/* <div>
            <p>For More Informations</p>
          </div> */}
          <table>
            <thead>
              <tr>
                <th>Car Model</th>
                <th></th>
                <th>Per Hour Rate</th>
                <th></th>
                <th>Per Day Rate</th>
                <th></th>
                <th>Leasing</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {PRICING.map((item) => {
                return (
                  <tr key={item.id} className="">
                    <td>{item.img}</td>
                    <td>
                      {item.carBrand}
                      <br />
                      {item.carModel}
                      <br />
                      {item.year}
                    </td>
                    <td>$5/per hour</td>
                    <td>
                      <button>
                        {" "}
                        <a href="#order">Rent a car</a>
                      </button>
                    </td>
                    <td>$10/per day</td>
                    <td>
                      {" "}
                      <button>
                        <a href="#order">Rent a car</a>
                      </button>
                    </td>
                    <td>$350/per month</td>
                    <td>
                      {" "}
                      <button>
                        {" "}
                        <a href="#order">Rent a car</a>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
