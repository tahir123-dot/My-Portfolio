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
          <p className="hire_me">Why hire me for your next project?</p>
          <p className="about_description">
            I’m passionate and results-driven full-stack developer who loves
            solving real-world problems through technology. With hands-on
            experience in web and mobile app development, I have built and
            optimized applications that are not just functional but also
            user-friendly and scalable.<br/> I specialize in creating smooth and
            intuitive UIs with React.js, developing powerful backends with
            Spring Boot, and building interactive mobile apps with React Native.
            My projects, including e-commerce platforms and weather apps,
            reflect my ability to turn ideas into fully functional solutions.<br/> If
            you're looking for someone who takes ownership, continuously learns,
            and delivers high-quality work, I’d love to be a part of your team!
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
