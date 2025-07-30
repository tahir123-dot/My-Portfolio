import React, { useState, useEffect } from "react";
import "./List.css"; 
import { Link } from "react-router-dom";

const List = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/posts`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="posts-container">
      {posts.map((post, index) => (
        <div key={index} className="post-card">
          {post.mediaType === "image" ? (
            <img src={post.mediaUrl} alt={post.name} className="post-media" />
          ) : (
            <video className="post-media" controls>
              <source src={`${post.mediaUrl}?q_auto,f_auto`} type="video/mp4" />
            </video>
          )}
          <div className="post-content">
            <h3>{post.name}</h3>
            <p>{post.description}</p>
            <span className="post-category">{post.category}</span>
            <span><Link to={post.link}>github</Link></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
