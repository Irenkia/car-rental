import React from "react";
import "./CSS/stylesHome.css";

const Home = () => {
  return (
    <div>
      <div className="home" id="home">
        {/* <img src={banner1} alt="banner" /> */}
        <div className="content">
          {/* <img src={banner1} alt="banner" /> */}
          <div>
            {" "}
            <h3>
              We've Got All <span>Great</span> Models For You
            </h3>
          </div>
          {/* <h3>
            We've Got All <span>Great</span> Models For You
          </h3> */}
          <p>Fast And Easy Way To Rent A Car</p>
          <a href="#pricing" className="btn">
            Hire now
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
