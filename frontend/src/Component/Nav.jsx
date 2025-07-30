import React, { useState } from "react";
import "./Nav.css";
import MenuBar from "../assets/menubar.png";
import CloseIcon from "../assets/close.png";

const Nav = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };


  


  return (
    <>
      <div className="Nav_container">
        <nav className="Nav_menu">
          <div>
            <h3 className="web_icon">
              <span>Tahir_</span>
              <span className="tech">Tech</span>
            </h3>
          </div>

          {/* Desktop Navigation */}
          <ol className="order_list">
            <li
              onClick={() => handleNavClick("home")}
              className={activeTab === "home" ? "active list" : "list"}
            >
              Home
            </li>
            <li
              onClick={() => handleNavClick("about")}
              className={activeTab === "about" ? "active list" : "list"}
            >
              About
            </li>
            <li
              onClick={() => handleNavClick("experience")}
              className={activeTab === "experience" ? "active list" : "list"}
            >
              Experience
            </li>
            <li
              onClick={() => handleNavClick("services")}
              className={activeTab === "services" ? "active list" : "list"}
            >
              Services
            </li>
            <li
              onClick={() => handleNavClick("skills")}
              className={activeTab === "skills" ? "active list" : "list"}
            >
              Skills
            </li>
            <li
              onClick={() => handleNavClick("projects")}
              className={activeTab === "projects" ? "active list" : "list"}
            >
              Projects
            </li>
          </ol>

          {/* Mobile Menu Button */}
          <img
            className="menu_icon"
            src={MenuBar}
            alt="menu"
            onClick={() => setMenuOpen(true)}
          />
        </nav>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`sidebar ${menuOpen ? "show" : ""}`}>
        <img
          className="close_icon"
          src={CloseIcon}
          alt="close"
          onClick={() => setMenuOpen(false)}
        />
        <ul>
          <li
            onClick={() => handleNavClick("home")}
            className={activeTab === "home" ? "active" : ""}
          >
            Home
          </li>
          <li
            onClick={() => handleNavClick("about")}
            className={activeTab === "about" ? "active" : ""}
          >
            About
          </li>
          <li
            onClick={() => handleNavClick("experience")}
            className={activeTab === "experience" ? "active" : ""}
          >
            Experience
          </li>
          <li
            onClick={() => handleNavClick("services")}
            className={activeTab === "services" ? "active" : ""}
          >
            Services
          </li>
          <li
            onClick={() => handleNavClick("skills")}
            className={activeTab === "skills" ? "active" : ""}
          >
            Skills
          </li>
          <li
            onClick={() => handleNavClick("projects")}
            className={activeTab === "projects" ? "active" : ""}
          >
            Projects
          </li>
          <li
            onClick={() => handleNavClick("contact")}
            className={activeTab === "contact" ? "active" : ""}
          >
            Contact
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
