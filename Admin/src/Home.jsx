import React, { useState } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!name || !description || !category || !file) {
      alert("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("link", link);
    formData.append("media", file);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      if (response.ok) {
        alert("File uploaded successfully!");
        setName("");
        setDescription("");
        setCategory("");
        setFile(null);
        setLink("");
      } else {
        alert(result.error || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="home">
      <div className="nav">
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>

      <div className="formm">
        <div className="form-data">
          <div className="picture-view">
            <div className="preview-img-or-video">
              {file && file.type.startsWith("image/") && (
                <img src={URL.createObjectURL(file)} alt={file.name} />
              )}
              {file && file.type.startsWith("video/") && (
                <video width="100%" controls>
                  <source src={URL.createObjectURL(file)} type={file.type} />
                </video>
              )}
            </div>

            <label className="custom-file-upload">
              Choose File
              <input
                type="file"
                accept="image/*, video/*"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="data-info">
            <label>Design Name:</label>
            <input
              type="text"
              placeholder="Enter design name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Choose a category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select</option>
              <option value="App">App</option>
              <option value="Website">Website</option>
              <option value="Figma">Figma</option>
            </select>

            <label>Description:</label>
            <textarea
              rows="4"
              placeholder="Enter description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label>Source URL:</label>
            <input
              type="text"
              placeholder="Enter URL"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div className="btn">
            <button className="Add" onClick={handleSubmit}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
