import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import './index.css';
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="page-container">
        <Navbar /> {/* <-- Added Navbar */}

        <main className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>
          &copy; 2025 MAGESH HARIRAM K. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
