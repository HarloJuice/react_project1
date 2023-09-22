import React from "react";
import NextButton from "../components/NextButton"; 
import PrevButton from "../components/PrevButton";


function About() {
  return <div>
    <h1>About Page</h1>
    <NextButton to="/contact" />
    <PrevButton to="/" />
    </div>;
   

}

export default About;
