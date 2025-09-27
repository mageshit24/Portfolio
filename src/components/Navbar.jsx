import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'; // optional for additional styling

function Navbar() {
  const location = useLocation(); // to highlight active link

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MyPortfolio</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
        <li><Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link></li>
        <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
        <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
