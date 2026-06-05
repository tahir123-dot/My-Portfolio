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
          <p className="hire_me">Why hire me?</p>
          <p className="about_description">
            I'm a Software Engineering student at Abasyn University with
            hands-on experience building full-stack web apps, Flutter mobile
            apps, and AI-integrated systems. I've worked with technologies
            ranging from React and Node.js to Spring Boot, FastAPI, Kafka, and
            Camunda always focused on clean architecture and real-world impact.
            <br />
            <br />I don't just write code — I build solutions. Whether it's a
            booking app in Flutter, an AI chatbot, or an automated workflow in
            Camunda, I take ownership from idea to deployment.
            <br />
            <br /> Always looking for opportunities to work with great teams,
            solve real problems, and ship products that make an impact.
          </p>
        </div>
        <div className="about_img">
          <img src={profile} alt="Tahir owner" />
        </div>
      </div>
    </>
  );
};

export default About;
