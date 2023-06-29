import { useState } from "react";
import "./styles/App.css";
import Blog from "./pages/blog";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
