import React from "react";
import "./Skills.css"; // CSS ko alag rakha hai

const skills = [
  {
    name: "HTML",
    desc: "I create well-structured, semantic HTML markup ensuring accessibility, performance, and clean code standards.",
    level: 5,
  },
  {
    name: "CSS",
    desc: "I build modern, responsive, animated designs using Flexbox, Grid, and advanced CSS techniques.",
    level: 5,
  },
  {
    name: "JavaScript",
    desc: "I develop interactive web apps with ES6+, handling events, async logic, and state effectively.",
    level: 4,
  },
  {
    name: "React.js",
    desc: "I build dynamic SPAs using React hooks, Context API, Redux, and reusable component architecture.",
    level: 4,
  },
  {
    name: "Flutter",
    desc: "I create beautiful cross-platform mobile apps using Flutter, Dart, Bloc, and Cubit patterns.",
    level: 4,
  },
  {
    name: "Dart",
    desc: "I write clean, efficient Dart code powering Flutter apps with strong typing and OOP principles.",
    level: 4,
  },
  {
    name: "Node.js",
    desc: "I develop scalable backend APIs using Node.js, Express, JWT authentication, and RESTful principles.",
    level: 4,
  },
  {
    name: "Express.js",
    desc: "I create efficient REST APIs with Express.js, handling middleware, routing, and error management.",
    level: 3,
  },
  {
    name: "MongoDB",
    desc: "I design NoSQL schemas, optimize queries, and ensure data consistency using Mongoose ODM.",
    level: 4,
  },
  {
    name: "PostgreSQL",
    desc: "I manage relational databases, write optimized queries, and design efficient, normalized PostgreSQL schemas.",
    level: 3,
  },
  {
    name: "SQL",
    desc: "I write complex queries, manage relational databases, and design efficient, well-structured data schemas.",
    level: 3,
  },
  {
    name: "Firebase",
    desc: "I integrate Firebase for real-time databases, authentication, cloud storage, and push notifications.",
    level: 4,
  },
  {
    name: "Java & Spring Boot",
    desc: "I build enterprise-level applications with Java, Spring Boot, microservices, and RESTful API design.",
    level: 4,
  },
  {
    name: "FastAPI",
    desc: "I build high-performance Python APIs using FastAPI with async support and automatic documentation.",
    level: 3,
  },
  {
    name: "Docker",
    desc: "I containerize applications using Docker, writing Dockerfiles and managing multi-container environments efficiently.",
    level: 3,
  },
  {
    name: "AWS",
    desc: "I deploy and manage cloud infrastructure on AWS using EC2, S3, and serverless services.",
    level: 3,
  },
  {
    name: "Git & GitHub",
    desc: "I manage version control, handle branching strategies, and collaborate efficiently using Git workflows.",
    level: 5,
  },
  {
    name: "Figma",
    desc: "I prototype stunning UI/UX designs ensuring user-friendly, responsive, and pixel-perfect interfaces.",
    level: 4.5,
  },
  {
    name: "AI API Integration",
    desc: "I integrate OpenAI, Groq, and Hugging Face APIs to build intelligent chatbots and AI tools.",
    level: 5,
  },
  {
    name: "REST APIs",
    desc: "I design and consume RESTful APIs following best practices for scalability and clean architecture.",
    level: 4,
  },
  {
    name: "Redux",
    desc: "I manage complex application state using Redux Toolkit with clean actions, reducers, and middleware.",
    level: 4,
  },
  {
    name: "Apache Kafka",
    desc: "I implement event-driven architecture using Kafka for reliable, high-throughput message streaming systems.",
    level: 3,
  },
  {
    name: "Camunda & BPMN",
    desc: "I model and automate business workflows using Camunda BPM engine and BPMN 2.0 diagrams.",
    level: 3,
  },
  {
    name: "RAG",
    desc: "I build Retrieval-Augmented Generation pipelines combining vector search with LLMs for smart applications.",
    level: 4,
  },
  {
    name: "Chrome Extension",
    desc: "I build browser extensions using JavaScript and Manifest V3 for automation and productivity tools.",
    level: 4,
  },
  {
    name: "Postman",
    desc: "I test, document, and debug REST APIs professionally using Postman collections and environments.",
    level: 5,
  },
  {
    name: "CI/CD",
    desc: "I automate build and deployment pipelines using GitHub Actions and CI/CD best practices.",
    level: 3,
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
