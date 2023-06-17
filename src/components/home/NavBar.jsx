import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsSoundwave } from "react-icons/bs";
import "./Navbar.css";

const Navbar = ({ handleClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleNavLinkClick = () => {
    if (menuOpen) {
      toggleMenu();
    }
  };

  return (
    <nav className="navbar">
      {/* logo item */}
      <div className="navbar-logo">
        <NavLink to="/" className="ui large header">
          Mentor<span>Wave</span>
          <BsSoundwave />
        </NavLink>
      </div>

      <div className={`my-menu ${menuOpen ? "open" : ""}`} id="menu">
        <NavLink
          to="/"
          className="ui header item"
          activeClassName="active"
          onClick={handleNavLinkClick}>
          <b>Home</b>
        </NavLink>
        <NavLink
          to="/about"
          className="ui header item"
          activeClassName="active"
          onClick={handleNavLinkClick}>
          <b>About</b>
        </NavLink>
        <NavLink
          to="/mentors"
          className="ui header item"
          activeClassName="active"
          onClick={handleNavLinkClick}>
          <b>Mentors</b>
        </NavLink>
        <NavLink
          to="/account"
          className="ui header item"
          activeClassName="active"
          onClick={handleNavLinkClick}>
          <b>My Account</b>
        </NavLink>
        {menuOpen ? (
          <NavLink
            onClick={handleClick}
            className="ui header item"
            id="login-link">
            <b>Sign In</b>
          </NavLink>
        ) : (
          <button onClick={handleClick} className="sign-in btn">
            <i className="lock icon"></i>Sign In
          </button>
        )}

        <i className="window close icon large" onClick={toggleMenu}></i>
      </div>

      <i className="bars icon large" id="menu-icon" onClick={toggleMenu}></i>
    </nav>
  );
};

export default Navbar;
