import React from "react";
import "./Homecards.css";

function CustomeCard({ title, description, step, icon }) {
  return (
    <div className="carded">
      <div className="step-container">
        <h4 className="step">{step}</h4>
      </div>
      <div className="icon-container">
        <i className="icon-name">{icon}</i>
      </div>
      <div>
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default CustomeCard;
