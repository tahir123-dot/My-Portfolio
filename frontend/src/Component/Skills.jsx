import React from "react";
import "./Skills.css"; // CSS ko alag rakha hai

const skills = [
  {
    name: "HTML",
    desc: "I can create well-structured HTML markup ensuring accessibility and performance.",
    level: 5,
  },
  {
    name: "CSS",
    desc: "I specialize in modern, responsive, and animated CSS designs with Flexbox and Grid.",
    level: 5,
  },
  {
    name: "JavaScript",
    desc: "I build interactive web applications with ES6+, handling events and state effectively.",
    level: 4,
  },
  {
    name: "React.js",
    desc: "I create dynamic UI components and SPAs using React hooks, context API, and Redux.",
    level: 4,
  },
  {
    name: "React Native",
    desc: "I build cross-platform mobile apps with React Native and optimize performance.",
    level: 4,
  },
  {
    name: "Node.js",
    desc: "I develop scalable backend APIs using Express.js, JWT authentication, and RESTful principles.",
    level: 4,
  },
  {
    name: "Express.js",
    desc: "I create efficient APIs with Express.js, handling middleware and routing effectively.",
    level: 3,
  },
  {
    name: "MongoDB",
    desc: "I design NoSQL databases, optimize queries, and ensure data consistency with Mongoose.",
    level: 4,
  },
  {
    name: "SQL",
    desc: "I manage relational databases, write optimized queries, and design efficient schemas.",
    level: 3,
  },
  {
    name: "Figma",
    desc: "I prototype stunning UI/UX designs, ensuring user-friendly and responsive interfaces.",
    level: 4.5,
  },
  {
    name: "Git",
    desc: "I manage version control, collaborate using GitHub, and follow Git workflows.",
    level: 5,
  },
  {
    name: "Java & Spring Boot",
    desc: "I develop enterprise-level applications with Java, Spring Boot, and RESTful APIs.",
    level: 4,
  },
  {
    name: "AI API Integration",
    desc: "I integrate AI APIs (OpenAI, Groq, Hugging Face) to build intelligent tools like chatbots and content generators.",
    level: 5,
  },
  {
    name: "Chrome Extension",
    desc: "I build and manage browser extensions using JavaScript and Manifest V3 for automation and productivity.",
    level: 4,
  },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="circle-shapes">
              <h3 className="skill-name">{skill.name}</h3>
              <div className="circlesss">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="goal"
                    style={{
                      backgroundColor: i < skill.level ? "#6a9bf7" : "#d3d3d3",
                    }}
                  ></span>
                ))}
              </div>
            </div>
            <p className="skill-desc">{skill.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
