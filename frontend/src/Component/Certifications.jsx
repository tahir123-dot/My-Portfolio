import React, { useState } from "react";
import "./Certifications.css";

const certificates = [
  {
    id: 1,
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    platform: "Coursera",
    date: "Apr 2023",
    credentialId: "E9LX3WUREGFU",
    verifyUrl: "https://coursera.org/verify/E9LX3WUREGFU",
    category: "Frontend",
    color: "#0082FB",
    initial: "M",
  },
  {
    id: 2,
    title: "Camunda 8 - Demonstration",
    issuer: "Camunda Academy",
    platform: "Camunda",
    date: "Dec 2025",
    credentialId: "jo3qnthu3bqb",
    verifyUrl: "https://verify.skilljar.com/c/jo3qnthu3bqb",
    category: "BPM",
    color: "#FF7D00",
    initial: "C",
  },
  {
    id: 3,
    title: "Camunda 8 - Human Workflow",
    issuer: "Camunda Academy",
    platform: "Camunda",
    date: "Dec 2025",
    credentialId: "vjwz8bog47j8",
    verifyUrl: "https://verify.skilljar.com/c/vjwz8bog47j8",
    category: "BPM",
    color: "#FF7D00",
    initial: "C",
  },
  {
    id: 4,
    title: "BPMN - Overview",
    issuer: "Camunda Academy",
    platform: "Camunda",
    date: "Dec 2025",
    credentialId: "k8uywwiwdt6w",
    verifyUrl: "https://verify.skilljar.com/c/k8uywwiwdt6w",
    category: "BPM",
    color: "#FF7D00",
    initial: "B",
  },
  {
    id: 5,
    title: "Camunda 8 - Web Modeler Overview",
    issuer: "Camunda Academy",
    platform: "Camunda",
    date: "Jan 2026",
    credentialId: "gy9as4n23yh6",
    verifyUrl: "https://verify.skilljar.com/c/gy9as4n23yh6",
    category: "BPM",
    color: "#FF7D00",
    initial: "C",
  },
  {
    id: 6,
    title: "BPMN - Task Types",
    issuer: "Camunda Academy",
    platform: "Camunda",
    date: "Jan 2026",
    credentialId: "mdeysb4vsgqa",
    verifyUrl: "https://verify.skilljar.com/c/mdeysb4vsgqa",
    category: "BPM",
    color: "#FF7D00",
    initial: "B",
  },
  {
    id: 7,
    title: "BPMN - Events",
    issuer: "Camunda Academy",
    platform: "Camunda",
    date: "Jan 2026",
    credentialId: "x9zqpcz92vx3",
    verifyUrl: "https://verify.skilljar.com/c/x9zqpcz92vx3",
    category: "BPM",
    color: "#FF7D00",
    initial: "B",
  },
];

const FILTERS = ["All", "Frontend", "BPM"];

function CertCard(props) {
  var cert = props.cert;
  var iconStyle = { background: cert.color };
  return (
    <div className="cert-card">
      <div className="cert-card-top">
        <div className="cert-issuer-icon" style={iconStyle}>
          {cert.initial}
        </div>
        <div>
          <p className="cert-platform">{cert.platform}</p>
          <p className="cert-date">{cert.date}</p>
        </div>
        <span className="cert-cat-pill">{cert.category}</span>
      </div>
      <h3 className="cert-name">{cert.title}</h3>
      <p className="cert-issuer-text">Issued by {cert.issuer}</p>
      <div className="cert-footer">
        <p className="cert-id">ID: {cert.credentialId}</p>
        <a
          href={cert.verifyUrl}
          target="_blank"
          rel="noreferrer"
          className="cert-verify-btn"
        >
          Verify
        </a>
      </div>
    </div>
  );
}

function Certifications() {
  var activeState = useState("All");
  var active = activeState[0];
  var setActive = activeState[1];

  var filtered =
    active === "All"
      ? certificates
      : certificates.filter(function (c) {
          return c.category === active;
        });

  return (
    <section className="cert-section">
      <div className="cert-header">
        <p className="cert-label">Certifications</p>
        <h2 className="cert-title">Verified Credentials</h2>
        <p className="cert-sub">
          Industry-recognized certificates from Meta, Camunda Academy, and more.
        </p>
      </div>

      <div className="cert-filters">
        {FILTERS.map(function (f) {
          return (
            <button
              key={f}
              className={
                active === f ? "cert-filter-btn active" : "cert-filter-btn"
              }
              onClick={function () {
                setActive(f);
              }}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="cert-grid">
        {filtered.map(function (cert) {
          return <CertCard key={cert.id} cert={cert} />;
        })}
      </div>
    </section>
  );
}

export default Certifications;
