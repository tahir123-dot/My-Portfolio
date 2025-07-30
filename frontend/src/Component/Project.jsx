import React, { useEffect, useState } from "react";
import "./Project.css";

import { Link } from "react-router-dom";
import Projectdetail from "../Pages/Projectdetail";

const Project = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState({});

  const fetchdimg = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/posts`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("error in fetching post: ", error);
    }
  };

  useEffect(() => {
    fetchdimg();
  }, []);

  return (
    <div className="project-container">
      {/* Blue Line & Circle */}
      <div className="blue-line"></div>
      <div className="blue-circle"></div>

      {/* Title */}
      <h2 className="titile">
        Featured <span className="hihglght">Projects</span>
      </h2>

      {/* Projects Grid */}
      <div className="projects-grid">
        {posts.slice(0, 6).map((post, index) => (
          <div
            key={index}
            className="projeccct-card"
            onClick={() => {
              setShowDetail(true);
              setSelected(post);
            }}
          >
            {post.mediaType === "image" ? (
              <img src={post.mediaUrl} alt={post.name} className="postimg" />
            ) : (
              <video autoPlay muted>
                <source
                  src={`${post.mediaUrl}?q_auto,f_auto`}
                  className="postvideo"
                />
              </video>
            )}
          </div>
        ))}
      </div>

      {/* Explore More */}
      <div className="explore">
        <div className="expirment">
          <h3 className="proj">
            Projects & <span className="expir">Experiments</span>
          </h3>
          <p>
            Browse more projects in the dedicated explorer, a centralized hub
            for all my work and experiments.
          </p>
        </div>
        <Link to="/projects">
          <div className="betn">
            <button className="explore-btn">Explore more projects →</button>
          </div>
        </Link>
      </div>
      {showDetail && <Projectdetail product={selected} onClose={() => setShowDetail(false)} />}

    </div>
  );
};

export default Project;
