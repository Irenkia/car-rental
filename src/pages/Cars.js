import React from "react";
import { CARS } from "../constants/cars";
import "./CSS/stylesCars.css";

const Cars = () => {
  return (
    <div>
      <div id="cars">
        <h3>Our Cars</h3>
      </div>
      <div className="cars">
        <div className="row">
          <p>For More Informations</p>

          <div className="row">
            {CARS.map((item) => {
              return (
                <div key={item.id} className="card">
                  <div class="card-img">{item.img}</div>
                  <p>{item.carBrand}</p>
                  <h2>{item.carModel}</h2>
                  <h4>{item.year}</h4>
                </div>
              );
            })}
            ;
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cars;
