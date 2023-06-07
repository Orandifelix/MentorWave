import React from "react";
import "./Navbar.css";
import { BsSoundwave } from "react-icons/bs";
import { Button} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Navbar = ({handleClick}) => {
  return (
     <nav className="navbar">
      <div className="ui fluid secondary menu">
        <div className="menu item">
        <div className="navbar-logo">
          <NavLink to="/"className='ui header '>Mentor<span>Wave</span> <BsSoundwave className="pink large item" /></NavLink>
        </div>
        </div>
        <NavLink to="/" className="ui header item" activeClassName="active">
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="ui header item"
          activeClassName="active">
          About
        </NavLink>
        <NavLink
          to="/mentors"
          className="ui header item"
          activeClassName="active">
          Find Mentors
        </NavLink>        
        <NavLink
          to="/login"
          className="ui header item"
          activeClassName="active">
          My Account
        </NavLink>       
        <div class="right menu">
         <Button animated="fade" className="ui primary padded large button" style={{margin:"20px"}}>
            <Button.Content visible>Meet Your Mentor/Mentee</Button.Content>
            <Button.Content hidden>Sign In</Button.Content>
          </Button>
        </div>
      </div>
      </nav>
  );
};

export default Navbar;

