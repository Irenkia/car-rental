import React from "react";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "../CSS/stylesHome.css";

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
