import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import List from "./List";
import Protected from "./Protected";
import PublicRoute from "./PublicRoute";
import NotFound from "./Notfound";

const App = () => {
  return (
    <Routes>
      {/* 👇 PUBLIC route: only allow if NOT logged in */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      {/* 👇 PROTECTED routes: only allow if token exists */}
      <Route element={<Protected />}>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<List />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
