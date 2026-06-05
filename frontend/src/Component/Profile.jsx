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
      company: "Vibrex",
      date: "2024 - Present",
      position: "Founder & CEO",
      location: "Remote, Islamabad Pakistan",
      description:
        "Founded and led a software startup focused on delivering full-stack web, mobile, and AI-powered solutions. Managed end-to-end product development from ideation to deployment — handling architecture, design, development, and client delivery independently.",
      skills: [
        "React.js",
        "Flutter",
        "Node.js",
        "Express.js",
        "MongoDB",
        "AI API Integration",
        "Rag",
        "Agentic Ai",
        "NLP",
        "Figma",
        "Git",
      ],
    },
    {
      company: "Safwa",
      date: "2023 - 2024",
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
