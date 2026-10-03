import React, { useState, useEffect, useRef } from "react";
import "./Allproject.css";
import "./Projectgrid.css";
import { Link } from "react-router-dom";
import Projectdetail from "./Projectdetail";

const CATEGORIES = [
  /*"All Projects",
  "NLP",
  "Agentic Ai",
  "N8N",
  "Mern Stack",
  "Flutter",
  "Figma",
  "Camunda",*/
];

const API = import.meta.env.VITE_BACKEND_URL;

const isWebLink = (link) => /^https?:\/\//i.test(link || "");

/* ---------- Single project card ---------- */
const ProjectCard = ({ post, onOpen }) => {
  const videoRef = useRef(null);
  const isVideo = post.mediaType !== "image";

  const playVideo = () => videoRef.current?.play().catch(() => {});
  const pauseVideo = () => videoRef.current?.pause();

  return (
    <article
      className="pg-card"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(post)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(post);
        }
      }}
      onMouseEnter={isVideo ? playVideo : undefined}
      onMouseLeave={isVideo ? pauseVideo : undefined}
      onFocus={isVideo ? playVideo : undefined}
      onBlur={isVideo ? pauseVideo : undefined}
      aria-label={`Open project ${post.name}`}
    >
      <div className="pg-media">
        {isVideo ? (
          <>
            <video
              ref={videoRef}
              src={post.mediaUrl}
              muted
              loop
              playsInline
              preload="metadata"
            />
            <span className="pg-badge">Video</span>
          </>
        ) : (
          <img src={post.mediaUrl} alt={post.name} loading="lazy" />
        )}
      </div>

      <div className="pg-body">
        <span className="pg-category">{post.category}</span>
        <h3 className="pg-title">{post.name}</h3>
        {post.description && <p className="pg-desc">{post.description}</p>}

        <div className="pg-actions">
          <span className="pg-view">View details</span>
          {isWebLink(post.link) && (
            <a
              className="pg-live"
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

/* ---------- Loading placeholder ---------- */
const SkeletonCard = () => (
  <div className="pg-card pg-skeleton" aria-hidden="true">
    <div className="pg-media" />
    <div className="pg-body">
      <span className="pg-line pg-line-sm" />
      <span className="pg-line pg-line-lg" />
      <span className="pg-line" />
    </div>
  </div>
);

const Allproject = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const searchTimer = useRef(null);
  const requestId = useRef(0); // ignore outdated responses

  const handleHireClick = () => {
    window.open(`https://wa.me/923415150339`, "_blank");
  };

  const load = async (url) => {
    const id = ++requestId.current;
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      if (id !== requestId.current) return;
      setPosts(Array.isArray(data) ? data : []);
    } catch (err) {
      if (id !== requestId.current) return;
      console.error("Error fetching projects:", err);
      setError(true);
      setPosts([]);
    } finally {
      if (id === requestId.current) setLoading(false);
    }
  };

  const fetchByCategory = (cat) =>
    load(
      cat === "All Projects"
        ? `${API}/posts`
        : `${API}/posts?category=${encodeURIComponent(cat)}`,
    );

  const fetchSearch = (query) => {
    if (!query.trim()) return fetchByCategory(activeCategory);
    return load(`${API}/search?name=${encodeURIComponent(query.trim())}`);
  };

  const handleCategoryClick = (cat) => {
    clearTimeout(searchTimer.current);
    setActiveCategory(cat);
    setSearchQuery("");
    fetchByCategory(cat);
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    clearTimeout(searchTimer.current);
    searchTimer.current = setTimeout(() => fetchSearch(val), 300);
  };

  useEffect(() => {
    fetchByCategory("All");
    return () => clearTimeout(searchTimer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openDetail = (post) => {
    setSelected(post);
    setShowDetail(true);
  };

  const resultLabel = searchQuery.trim()
    ? `${posts.length} result${posts.length === 1 ? "" : "s"} for "${searchQuery.trim()}"`
    : `${posts.length} project${posts.length === 1 ? "" : "s"}${
        activeCategory === "All" ? "" : ` in ${activeCategory}`
      }`;

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

        {/* ---------- Projects grid ---------- */}
        <section className="pg-wrap" aria-live="polite">
          {!loading && !error && posts.length > 0 && (
            <p className="pg-count">{resultLabel}</p>
          )}

          {loading && (
            <div className="pg-grid">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          )}

          {!loading && error && (
            <div className="pg-state">
              <p className="pg-state-title">Projects could not be loaded</p>
              <p className="pg-state-text">
                Check your connection and try again.
              </p>
              <button
                className="pg-btn"
                onClick={() => fetchByCategory(activeCategory)}
              >
                Try again
              </button>
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div className="pg-state">
              <p className="pg-state-title">No projects found</p>
              <p className="pg-state-text">
                {searchQuery.trim()
                  ? "Try a different name, or clear the search."
                  : "Nothing has been added to this category yet."}
              </p>
              {activeCategory !== "All" && (
                <button
                  className="pg-btn"
                  onClick={() => handleCategoryClick("All")}
                >
                  Show all projects
                </button>
              )}
            </div>
          )}

          {!loading && !error && posts.length > 0 && (
            <div className="pg-grid">
              {posts.map((post) => (
                <ProjectCard
                  key={post._id}
                  post={post}
                  onOpen={openDetail}
                />
              ))}
            </div>
          )}
        </section>
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
