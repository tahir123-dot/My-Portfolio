import React, { useState, useEffect } from "react";
import "./Allproject.css";
import { Link } from "react-router-dom";
import Projectdetail from "./Projectdetail";

const Allproject = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState({});
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredPosts, setFilteredPosts] = useState([]); 

  const handleHireClick = () => {
    
    const phoneNumber = "923415150339"; 
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    
    window.open(whatsappLink, "_blank");
  };

  // 🔹 Fetch all posts initially
  const fetchpost = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/posts`);
      const data = await response.json();
      setPosts(data);
      setFilteredPosts(data); // Initialize filteredPosts
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  };

  // 🔹 Search API function
  const search = async (query) => {
    try {
      // Check if the query is empty
      if (!query) {
        setFilteredPosts(posts); // If empty, show all posts
        return;
      }
      // Call search API with query
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/search?name=${query.trim()}`
      );
      const data = await response.json();
      setFilteredPosts(data); // Update filtered posts
    } catch (error) {
      console.error("Error in search query: ", error);
    }
  };

  useEffect(() => {
    fetchpost();
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

          {/* 🔹 Search Input */}
          <div>
            <input
              className="search"
              type="text"
              placeholder="Search by name"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                search(e.target.value); // Call search API
              }}
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
            Development, Web Development, Java Spring Boot, React Native, MERN
            Stack, and Figma Designs—all designed to deliver innovation and
            impact.
          </p>
        </div>

        {/* 🔹 Display Search Results or All Posts */}
        <div className="All-Projects-list">
          {filteredPosts.map((post, index) => (
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
                <video autoPlay muted>
                  <source src={`${post.mediaUrl}?q_auto,f_auto`} />
                </video>
              )}
            </div>
          ))}
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
