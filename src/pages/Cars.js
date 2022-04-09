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
              <h4>{item.carBrand}</h4>
              <h2>{item.carModel}</h2>
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
