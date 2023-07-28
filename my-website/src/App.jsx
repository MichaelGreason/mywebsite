import { useEffect, useState } from "react";
import "./styles/App.css";
import Blog from "./pages/blog";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Resume from "./pages/resume";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

function App() {
  useEffect(() => {
    document.title = "Michael Greason's Website";
  }, []);
  return (
    <>
      <Header />
      <div style={{ width: "" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
