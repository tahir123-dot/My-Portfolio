import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Allproject from "./Pages/Allproject";
import Projectdetail from "./Pages/Projectdetail";
import NootFound from "./Pages/Notfound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Allproject />} />
        <Route path="/project-detail" element={<Projectdetail />} />
        <Route path="*" element={<NootFound />} />
      </Routes>
    </>
  );
}

export default App;
