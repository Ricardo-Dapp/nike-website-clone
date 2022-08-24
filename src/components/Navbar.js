import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">
        Shoe Me<span>!</span>
      </h2>
      <div className="navbar-list">
        <a href="#Home" className="navbar-link">
          Home
        </a>
        <a href="#Man" className="navbar-link">
          Man
        </a>
        <a href="#Women" className="navbar-link">
          Women
        </a>
        <a href="#Kids" className="navbar-link">
          Kids
        </a>
        <a href="#Sales" className="navbar-link">
          Sales
        </a>
      </div>

      <input
        type="text"
        placeholder="Search here.."
        className="searchbar"
      ></input>
    </nav>
  );
};

export default Navbar;
