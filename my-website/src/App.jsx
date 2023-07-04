import { useState } from "react";
import "./styles/App.css";
import Blog from "./pages/blog";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Resume from "./pages/resume";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
