import React, { useState, useEffect } from "react";
import "./List.css";

const List = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/posts`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <div className="posts-loading">Loading projects...</div>;

  return (
    <section className="portfolio-section">
      <div className="section-header">
        <span className="section-label">Projects</span>
        <span className="count-pill">
          {posts.length} {posts.length === 1 ? "project" : "projects"}
        </span>
      </div>

      <div className="posts-grid">
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            {post.mediaType === "image" ? (
              <img src={post.mediaUrl} alt={post.name} className="post-media" />
            ) : (
              <div className="video-wrap">
                <video controls>
                  <source
                    src={`${post.mediaUrl}?q_auto,f_auto`}
                    type="video/mp4"
                  />
                </video>
              </div>
            )}

            <div className="post-body">
              <div className="post-top">
                <h3 className="post-name">{post.name}</h3>
                <span className="cat-badge">{post.category}</span>
              </div>

              <p className="post-desc">{post.description}</p>

              <div className="skills-row">
                {post.skills?.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="post-footer">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-btn"
                >
                  🔗 View Project
                </a>
                <span className="media-pill">{post.mediaType}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default List;
