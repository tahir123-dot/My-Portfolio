import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (token) {
    // Already logged in → redirect to home
    return <Navigate to="/" />;
  }

  return children;
};

export default PublicRoute;
