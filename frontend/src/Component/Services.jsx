import React from "react";
import "./Services.css"; // Importing CSS file

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "I develop modern, scalable web applications using MERN stack (MongoDB, Express.js, React.js, Node.js) and Java Spring Boot. From business websites to complex dashboards, I provide end-to-end solutions.",
    },
    {
      title: "Mobile App Development",
      description:
        "I build high-performance cross-platform mobile applications using React Native. Whether it's an e-commerce app, social media platform, or custom business solution, I ensure seamless UI/UX and optimized performance.",
    },
    {
      title: "UI/UX Design",
      description:
        "I create stunning and user-friendly interfaces using Figma for wireframing and prototyping. My frontend development skills in HTML, CSS, JavaScript, and React.js ensure responsive and interactive designs.",
    },
    {
      title: "Security & Authentication Solutions",
      description:
        "I implement secure login systems using JWT, Firebase, and OAuth authentication. My expertise includes role-based access control, API security, and data encryption to protect applications from vulnerabilities.",
    },
    {
      title: "Database Design & Management",
      description:
        "I design efficient and scalable database architectures using MongoDB (NoSQL) and SQL databases. My expertise includes query optimization, RESTful API integrations, and ensuring data consistency.",
    },
    {
      title: "Chrome Extension Development",
      description:
        "I build lightweight, custom Chrome extensions to automate tasks, scrape data, and enhance productivity using JavaScript and APIs.",
    },
    {
      title: "AI Tool Development",
      description:
        "I create smart AI-based tools using OpenAI, Groq, and Hugging Face APIs—ideal for automation, content generation, and personalization.",
    },
    {
      title: "API Integration & Automation",
      description:
        "I integrate third-party APIs and build backend automation workflows to streamline business processes and boost efficiency.",
    },
    {
      title: "SaaS Platform Development",
      description:
        "I develop full-stack SaaS applications with admin panels, user roles, and subscription models using MERN or Java Spring Boot.",
    },
  ];

  return (
    <section className="services">
      <h2 className="titlle">Services</h2>
      <p className="subtitle">
        What <span className="highlliight">I'm doing</span>
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-para">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
