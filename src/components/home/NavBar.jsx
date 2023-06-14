import React from "react";
import "./Navbar.css";
import { BsSoundwave } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = ({ handleClick }) => {
  return (
    <nav className="navbar">
      <div className="ui secondary fluid menu">
        <div className="menu item">
          <div className="navbar-logo">
            <NavLink to="/" className="ui large header">
              Mentor<span>Wave</span>
              <BsSoundwave />
            </NavLink>
          </div>
        </div>
        <div className="ui secondary right menu">
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
            to="/account"
            className="ui header item"
            activeClassName="active">
            <b>My Account</b>
          </NavLink>
        </div>
        <button onClick={handleClick} className="sign-in btn">
          <i className="lock icon"></i>Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
