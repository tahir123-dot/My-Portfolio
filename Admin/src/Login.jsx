import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        { email, password }
      );

      localStorage.setItem("token", response.data.token);
      setSuccess("Login successful");
      setError(""); // Clear error on success
      navigate("/");
    } catch (error) {
      console.error("Login failed: ", error);
      setError("Invalid email or password"); // Show error message
    }
  };

  return (
    <>
      <div className="Login">
        <div className="form">
          <h1>Login</h1>
          {success && <p style={{ color: "green" }}>{success}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}{" "}
          {/* Fixed error message */}
          <div className="email">
            <input
              className="input"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="password">
            <input
              className="input"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="button">
            <button className="loginbtn" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
