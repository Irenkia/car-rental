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
        {CARS.map((item) => {
          return (
            <div key={item.id} className="card">
              <div class="card-img">{item.img}</div>
              <h2>{item.carBrand}</h2>
              <h4>{item.carModel}</h4>
              <p>{item.year}</p>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
};
export default Cars;
