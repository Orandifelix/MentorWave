import React, { useState } from "react";
import { Menu, Segment, Button } from "semantic-ui-react";
import "./Navbar.css";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    
    <div className="ui raised blue segment" >
      <Menu inverted pointing secondary>
        <div className="navbar-logo">
          <h1>
            Mentor <span>Wave</span>
          </h1>
        </div>
        <div className="navbar-links">
          <Menu.Item
            name="Home"
            active={activeItem === "Home"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="About Us"
            active={activeItem === "About Us"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Find Mentors"
            active={activeItem === "Find Mentors"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="My Account"
            active={activeItem === "My Account"}
            onClick={handleItemClick}
          />
        </div>
        <div className="navbar-button">
          <Menu.Menu position="right">
            <Button
              className="ui tiny button navbar-custom-button"
              positive
              animated="fade"
            >
              <Button.Content visible>Meet Your Mentor/Mentee</Button.Content>
              <Button.Content hidden>Sign Up</Button.Content>
            </Button>
          </Menu.Menu>
        </div>
      </Menu>
    </div>
  );
};

export default Navbar;
