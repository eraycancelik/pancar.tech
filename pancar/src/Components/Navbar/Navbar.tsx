import React from "react";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">LOGO</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/UserGuide">UserGuide</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
