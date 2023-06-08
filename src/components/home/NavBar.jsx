import React from "react";
import "./Navbar.css";
import { BsSoundwave } from "react-icons/bs";
import { Button} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Navbar = ({handleClick}) => {
  return (
     <nav className="navbar">
      <div className="ui secondary fluid menu">
        <div className="menu item">
        <div className="navbar-logo">
          <NavLink to="/"className='ui header'>Mentor<span>Wave</span><BsSoundwave/></NavLink>
        </div>
        </div>
        <NavLink to="/" className="ui header item" activeClassName="active">
          <b>Home</b>
        </NavLink>
        <NavLink
          to="/about"
          className="ui header item"
          activeClassName="active">
          <b>About</b>
        </NavLink>
        <NavLink
          to="/mentors"
          className="ui header item"
          activeClassName="active">
         <b>Mentors</b>
        </NavLink>        
        <NavLink
          to="/login"
          className="ui header item"
          activeClassName="active">
          <b>My Account</b>
        </NavLink>       
        <div className="right menu">
         <Button  onClick={handleClick} animated="fade" className="ui primary button" style={{margin:"20px"}}>
            <Button.Content visible>Meet Your Mentor/Mentee</Button.Content>
            <Button.Content hidden><i className="lock icon"></i>Sign In</Button.Content>
          </Button>
        </div>
      </div>
      </nav>
  );
};

export default Navbar;

