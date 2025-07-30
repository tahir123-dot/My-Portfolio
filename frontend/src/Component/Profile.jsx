import { useState } from "react";
import "./Profile.css";

export default function ProfileOverview() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="profile_container">
      <p className="title">
        Profile <span className="highliight">Overview</span>
      </p>
      <div className="tab-wrapper">
        <div className="tab-container">
          <button
            className={activeTab === "experience" ? "tab active" : "tab"}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>
          <button
            className={activeTab === "education" ? "tab active" : "tab"}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
        </div>
      </div>
      <div className="content">
        {activeTab === "experience" ? <Experience /> : <Education />}
      </div>
    </div>
  );
}

function Experience() {
  const experiences = [
    {
      company: "CodeCraft Solutions",
      date: "2024 - Present",
      position: "Full-Stack Developer",
      location: "Remote",
      description:
        "Developed full-stack applications using React.js, Node.js, Express.js, and Java Spring Boot. Built scalable APIs, optimized backend performance, and integrated third-party services for seamless user experience.",
      skills: [
        "React.js",
        "React Native",
        "Node.js",
        "Spring Boot",
        "MongoDB",
        "SQL",
        "Firebase",
      ],
    },
    {
      company: "Creative Designs Hub",
      date: "2023 - Present",
      position: "UI/UX & Figma Designer",
      location: "Remote",
      description:
        "Designed intuitive user interfaces and prototypes using Figma. Created wireframes, high-fidelity designs, and interactive prototypes for web and mobile applications.",
      skills: ["Figma", "Wireframing", "Prototyping", "UI/UX Design"],
    },
  ];

  return (
    <div className="experience-container">
      {experiences.map((exp, i) => (
        <div key={i} className="experience-item">
          <div className="timeline">
            <div className="rect-box"></div>
            {i < experiences.length - 1 && <div className="lline"></div>}
          </div>
          <div className="details">
            <h3 className="company">{exp.company}</h3>
            <p className="date">{exp.date}</p>
            <p className="position">{exp.position}</p>
            <p className="location">{exp.location}</p>
            <p className="description">{exp.description}</p>
            <div className="skills">
              {exp.skills.map((skill, j) => (
                <span key={j} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Education() {
  return (
    <div className="experience-container">
      <div className="experience-item">
        <div className="timeline">
          <div className="rect-box"></div>
        </div>
        <div className="details">
          <h3 className="company">Abasyn University</h3>
          <p className="date">2022 - Current</p>
          <p className="position">BS Software Engineering</p>
          <p className="description">
            Focused on software development, database management, and system
            architecture.
          </p>
        </div>
      </div>
    </div>
  );
}
