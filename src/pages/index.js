import React from "react";
import NextButton from "../components/NextButton";
import PrevButton from "../components/PrevButton";
import "../styles/style.css"
import PageImage from "../images/png-clipart-dog-puppy-cartoon-home-pet-animal-drawing-collar-sticker-removebg-preview.png"

const Home = () => {
  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Title of the Page</h1>
      </div>
      <div className="content">
        <div className="image-container">
          <img src={PageImage} alt="Page" className="image" />
        </div>
      </div>
      <div className="button-container">
        <PrevButton to="/prev" />
        <NextButton to="/next" />
      </div>
      <div className="navigationDots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Home;
