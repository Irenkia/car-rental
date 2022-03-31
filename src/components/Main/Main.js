import React from "react";
import "./styles.css";
import banner11 from "./../../assets/banner11.jpg";

const Main = () => {
  return (
    <div className="home" id="home">
      {/* <img src={banner11} alt="banner" /> */}

      <div className="content">
        {/* <img src={banner11} alt="banner" /> */}
        <h3>
          We've Got All <span>Great</span> Models For You
        </h3>
        <p>Fast And Easy Way To Rent A Car</p>
        <a href="#" className="btn">
          Hire now
        </a>
      </div>
    </div>
  );
};
export default Main;
