import React, { useState } from "react";
import "./Navbar.css";
import {BsSoundwave} from "react-icons/bs"

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <h1>
          Mentor <span>Wave</span>
          <BsSoundwave className="waveicon"/>
        </h1>
      </div>
      <div className="navbar-links">
        <ul>
          <li
            className={activeItem === "Home" ? "active" : ""}
            onClick={() => handleItemClick("Home")}
          >
            Home
          </li>
          <li
            className={activeItem === "About Us" ? "active" : ""}
            onClick={() => handleItemClick("About Us")}
          >
            About Us
          </li>
          <li
            className={activeItem === "Find Mentors" ? "active" : ""}
            onClick={() => handleItemClick("Find Mentors")}
          >
            Find Mentors
          </li>
          <li
            className={activeItem === "My Account" ? "active" : ""}
            onClick={() => handleItemClick("My Account")}
          >
            My Account
          </li>
        </ul>
      </div>
      <div className="navbar-button">
        <button className="navbar-custom-button">
          Meet Your Mentor/Mentee
        </button>
      </div>
    </div>
  );
};

export default Navbar;
