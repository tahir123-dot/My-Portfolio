import React from "react";
import "./Hero.css";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <>
      <div className="info_contaier">
        <div className="timeline">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="year">2025</div>
        </div>
        <div className="img">
          <img src={profile} />
        </div>
        <div className="my_info">
          <p className="highlight">
            Welcome to my <span className="S_Engineer">Portfolio! Hi, I’m </span>
          </p>
          <p className="myName">Tahir Rashid</p>
          <p className="description">
            I’m a passionate Software Engineer & Full-Stack Developer
            specializing in MERN Stack, React Native, and Java Spring Boot. I
            love building scalable, high-performance web and mobile applications
            that make an impact.
          </p>
          <div className="bttn">
            <button className="downloooadbtn">
              <a href="/Zahid.pdf" download="Zahid.pdf">
                Download CV
              </a>
            </button>
            <button
              className="contacctbtn"
              onClick={() => {
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
