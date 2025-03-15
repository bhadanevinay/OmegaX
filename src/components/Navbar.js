import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiUsers, FiAward, FiList } from "react-icons/fi"; // Importing icons
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-item">
        <FiHome className="nav-icon" />
        <span>Home</span>
      </Link>
      <Link to="/tasks" className="nav-item">
        <FiList className="nav-icon" />
        <span>Tasks</span>
      </Link>
      <Link to="/refer" className="nav-item">
        <FiUsers className="nav-icon" />
        <span>Refer</span>
      </Link>
      <Link to="/leaderboard" className="nav-item">
        <FiAward className="nav-icon" />
        <span>Leaderboard</span>
      </Link>
    </nav>
  );
};

export default Navbar;
