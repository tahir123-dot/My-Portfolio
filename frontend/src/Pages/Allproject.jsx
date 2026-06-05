import React, { useState, useEffect } from "react";
import "./Allproject.css";
import { Link } from "react-router-dom";
import Projectdetail from "./Projectdetail";

const CATEGORIES = [
  "All",
  "NLP",
  "Agentic Ai",
  "N8N",
  "Mern Stack",
  "Flutter",
  "Figma",
  "Camunda",
];

const Allproject = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const handleHireClick = () => {
    window.open(`https://wa.me/923415150339`, "_blank");
  };

  // Fetch by category — hits /posts?category=Flutter
  const fetchByCategory = async (cat) => {
    try {
      const url =
        cat === "All"
          ? `${import.meta.env.VITE_BACKEND_URL}/posts`
          : `${import.meta.env.VITE_BACKEND_URL}/posts?category=${encodeURIComponent(cat)}`;
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Search by name
  const fetchSearch = async (query) => {
    try {
      if (!query.trim()) {
        fetchByCategory(activeCategory);
        return;
      }
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/search?name=${encodeURIComponent(query.trim())}`,
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error in search:", error);
    }
  };

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    setSearchQuery(""); // clear search when switching category
    fetchByCategory(cat);
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    fetchSearch(val);
  };

  useEffect(() => {
    fetchByCategory("All");
  }, []);

  return (
    <>
      <div className="project--box">
        <div className="Nav-Project">
          <div className="project-logo">
            <h3 className="web_icon">
              <span>Tahir_</span>
              <span className="tech">Tech</span>
            </h3>
          </div>

          <div className="search-wrap">
            <input
              className="search"
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          <div className="hire-box">
            <Link to="/" style={{ color: "black" }}>
              <p className="Home-me">Home</p>
            </Link>
            <button onClick={handleHireClick} className="hire-me">
              Hire me
            </button>
          </div>
        </div>

        <div className="main-text">
          <p className="Transforming">Transforming Ideas into Reality</p>
          <p className="transforming-para">
            Explore a collection of expertly crafted projects in App
            Development, Web Development, MERN Stack, Flutter, and Figma Designs
            — built to deliver innovation and impact.
          </p>
        </div>

        <div className="category">
          {CATEGORIES.map((cat) => (
            <div
              key={cat}
              className={`category-item ${activeCategory === cat ? "active" : ""}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat === "Flutter" ? "Flutter App" : cat}
            </div>
          ))}
        </div>

        <div className="All-Projects-list">
          {posts.length === 0 ? (
            <p style={{ color: "#aaa", fontSize: "14px", padding: "40px" }}>
              No projects found.
            </p>
          ) : (
            posts.map((post, index) => (
              <div
                key={index}
                className="boxess"
                onClick={() => {
                  setShowDetail(true);
                  setSelected(post);
                }}
              >
                {post.mediaType === "image" ? (
                  <img src={post.mediaUrl} alt={post.name} />
                ) : (
                  <video autoPlay muted loop playsInline>
                    <source src={`${post.mediaUrl}?q_auto,f_auto`} />
                  </video>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {showDetail && (
        <Projectdetail
          product={selected}
          onClose={() => setShowDetail(false)}
        />
      )}
    </>
  );
};

export default Allproject;
