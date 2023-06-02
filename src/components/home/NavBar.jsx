import React from "react";

const NavBar = () => {
  return (
    <div className="ui padded menu">
      <h2 className="item">Home</h2>
      <h2 className="item">FindMentor</h2>
      <h2 className="item">About us</h2>
      <h2 className="item">Contacts</h2>
      <div className="right menu item"> <button className="ui primary button">Sign In</button></div>
    </div>
  );
};

export default NavBar;
