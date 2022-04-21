import React from "react";
import "./CSS/stylesHome.css";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="content">
        <h3>
          We've Got All <span>Great</span> Models For You
        </h3>
        <p>Fast And Easy Way To Rent A Car</p>
        <a href="#pricing" className="btn">
          Hire now
        </a>
      </div>
    </div>
  );
};
export default Home;
