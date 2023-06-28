import React, { useState, useContext } from "react";
import { AppContext } from "../../context/Context";
import { NavLink } from "react-router-dom";
import { BsSoundwave } from "react-icons/bs";
import "./Navbar.css";

const Navbar = ({ handleClick }) => {
  const {isLoggedIn}= useContext(AppContext)
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
    <div className="navbar-container">
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
          onClick={handleNavLinkClick}>
          <b><i className="home icon" id="home-icon"></i>Home</b>
        </NavLink>
        <NavLink
          to="/about"
          className="ui header item"
          onClick={handleNavLinkClick}>
          <b><i className="info circle icon navbar-icon" id="about-icon"></i>About</b>
        </NavLink>
        <NavLink
          to="/blog"
          className="ui header item"
          onClick={handleNavLinkClick}>
          <b><i className="blogger icon"id="blog-icon"></i>Blog</b>
        </NavLink>
        <NavLink
          to="/mentors"
          className="ui header item"
          onClick={handleNavLinkClick}>
          <b><i className="users icon navbar-icon" id="mentors-icon"></i>Mentors</b>
        </NavLink>
        <NavLink
          to="/account"
          className="ui header item"
          onClick={handleNavLinkClick}>
          <b><i className="user circle icon navbar-icon" id="account-icon"></i>My Account </b>
        </NavLink>
        {menuOpen ? (
          <NavLink
            onClick={handleClick}
            className="ui header item"
            id="login-link">
            <b><i className="sign in icon"></i>{!isLoggedIn? "Sign In": "Sign Out"}</b>
          </NavLink>
        ) : (
          <button onClick={handleClick} className="sign-in btn">
            <i className="sign in icon"></i>{!isLoggedIn? "Sign In": "Sign Out"}
          </button>
        )}

        <i className="window close icon large" onClick={toggleMenu}></i>
      </div>

      <i className="bars icon large" id="menu-icon" onClick={toggleMenu}></i>
    </nav>
    </div>
  );
};

export default Navbar;
