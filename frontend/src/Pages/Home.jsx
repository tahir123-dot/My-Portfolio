import React from "react";
import Nav from "../Component/Nav";
import "./Home.css";
import Hero from "../Component/Hero";
import About from "../Component/About";
import Profile from "../Component/Profile";
import Services from "../Component/Services";
import Project from "../Component/Project";
import Skills from "../Component/Skills";
import Contact from "../Component/Contact";

const Home = () => {
  return (
    <>
      <div className="full_page">
        <div className="home_container" id="home">
          <Nav />
          <Hero />
        </div>
        <div className="black_Back" id="about">
          <About />
        </div>
        <div className="white_back" id="experience">
          <Profile />
        </div>
        <div className="black_Back" id="services">
          <Services />
        </div>
        <div className="white_back" id="projects">
          <Project />
        </div>
        <div className="black_Back" id="skills">
          <Skills />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Home;
