import React from "react";
import { image } from "../data/data";

function About() {
  return <div id = "about">
    <h2>About Me</h2>
    <p>I am an Energetic and ready to learn Full Stack Developer student with core skills on how to use React JS</p>
    <img src={image} alt= "I made this"/>
  </div>
  
}

export default About;
