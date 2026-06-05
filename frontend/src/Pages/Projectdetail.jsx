import React, { useEffect, useState } from "react";
import "./Projectdetail.css";

const GithubIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Projectdetail = ({ onClose, product }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 400);
  };

  return (
    <div className={`bottom-sheet ${isVisible ? "show" : ""}`}>
      <button className="close-btn" onClick={handleClose} aria-label="Close">
        ✕
      </button>

      <div className="inner">
        <div className="top-meta">
          {product.category && (
            <span className="cat-pill">{product.category}</span>
          )}
          {product.mediaType && (
            <span className="media-pill">{product.mediaType}</span>
          )}
        </div>

        <h1 className="proj-name">{product.name}</h1>

        <div className="author-row">
          <div className="avatar">TR</div>
          <div>
            <p className="author-name">Tahir Rashid</p>
            <p className="author-sub">Full Stack Developer</p>
          </div>
        </div>

        <div className="media-box">
          {product.mediaType === "image" ? (
            <img src={product.mediaUrl} alt={product.name} />
          ) : (
            <video autoPlay muted loop playsInline controls>
              <source src={product.mediaUrl} type="video/mp4" />
            </video>
          )}
        </div>

        <p className="section-label">Project Overview</p>
        <p className="overview-text">{product.description}</p>

        {product.skills && product.skills.length > 0 && (
          <div>
            <p className="section-label">Tech Stack</p>
            <div className="skills-wrap">
              {product.skills.map((skill, i) => (
                <span key={i} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {product.link && (
          <a
            className="link-btn"
            href={product.link}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
            View on GitHub
          </a>
        )}

        <div className="divider-row">
          <span className="divider-line"></span>
          <div className="divider-avatar">TR</div>
          <span className="divider-line"></span>
        </div>
      </div>
    </div>
  );
};

export default Projectdetail;
