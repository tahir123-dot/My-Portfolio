import React from "react";
import "./About.css";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <>
      <div className="about_container">
        <div className="about">
          <p className="about_me">
            About <span className="me">me</span>
          </p>
          
          <p className="about_description">
            I'm a Software Engineering student at Abasyn University with hands-on experience building full-stack web apps, Flutter mobile apps, and AI-integrated systems. I work with technologies like React, Node.js, FastAPI, and Camunda, with a strong focus on clean architecture and real-world impact.
            <br />
            <br />I enjoy turning ideas into working products, from designing the architecture to building the front end, back end, and deployment. My projects include a booking app in Flutter, an AI-powered chatbot, and automated business workflows using Camunda.
            <br />
            <br /> I'm passionate about writing clean, maintainable code and always eager to learn new tools and technologies. Outside of coursework, I like building real projects that solve practical problems.
          </p>
        </div>

        <div className="about_img">
          <img src={profile} alt="Tahir Rashid" width="800" height="1000" />
        </div>
      </div>
    </>
  );
};

export default About;
