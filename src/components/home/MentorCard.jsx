import React from "react";
import "./Homecards.css";

function MentorCard({ name, image, profession }) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={image} alt="Profile" />
        </div>
        <div className="card-back">
          <h3>{name}</h3>
          <p>{profession}</p>
        </div>
      </div>
    </div>
  );
}

export default MentorCard;
