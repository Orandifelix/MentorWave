// import React from "react";
// import "./Navbar.css";
// import { BsSoundwave } from "react-icons/bs";
// import { Button } from "semantic-ui-react";
// import { NavLink } from "react-router-dom";


// const Navbar = () => {

//   return (
//     <div className="navbar-container">
//       <div className="navbar-logo">
//         <h1>
//           Mentor <span>Wave</span>
//           <BsSoundwave className="waveicon" />
//         </h1>
//       </div>
//       <div className="navbar-links">
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/about">About Us</NavLink>
//         <NavLink to="/mentors">Find Mentors</NavLink>
//         <NavLink to="/account">My Account</NavLink>
//       </div>
//       <NavLink to="/login" className="navbar-button">
//         <Button animated="fade" className="navbar-custom-button">
//           <Button.Content visible>Meet Your Mentor/Mentee</Button.Content>
//           <Button.Content hidden>Sign In</Button.Content>
//         </Button>
//       </NavLink>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import "./Navbar.css";
import { BsSoundwave } from "react-icons/bs";
import { Button, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Navbar = ({handleClick}) => {
  return (
    <Menu className="navbar-container" inverted>
      <Menu.Item>
        <div className="navbar-logo">
          <h1>
            Mentor <span>Wave</span>
            <BsSoundwave className="waveicon" />
          </h1>
        </div>
      </Menu.Item>
      <Menu.Item position="right" className="navbar-links" fluid>
        <NavLink to="/" className="item">
          Home
        </NavLink>
        <NavLink to="/about" className="item">
          About Us
        </NavLink>
        <NavLink to="/mentors" className="item">
          Find Mentors
        </NavLink>
        <NavLink to="/account" className="item">
          My Account
        </NavLink>
          <Button animated="fade" className="navbar-custom-button" onClick={handleClick}>
            <Button.Content visible>Meet Your Mentor/Mentee</Button.Content>
            <Button.Content hidden>Sign In</Button.Content>
          </Button>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;

