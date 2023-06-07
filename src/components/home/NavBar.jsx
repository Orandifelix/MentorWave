import React, { useState } from "react";
import "./Navbar.css";
import { BsSoundwave } from "react-icons/bs";
import { Button } from "semantic-ui-react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <h1>
          Mentor <span>Wave</span>
          <BsSoundwave className="waveicon" />
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
        <Button animated="fade" className="navbar-custom-button">
          <Button.Content visible>Meet Your Mentor/Mentee</Button.Content>
          <Button.Content hidden>Sign In</Button.Content>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;




