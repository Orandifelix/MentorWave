import React, { useState } from "react";
import "./Homecards.css";

function MentorCard({ name, image, profession }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="card" onMouseEnter={handleHover} onMouseLeave={handleHover}>
      {isHovered ? (
        <div className="ui card">
          <img src={image} alt="Profile" className="card-image" />
          <div className="card-name">
            <h3>{name}</h3>
            <p>{profession}</p>
          </div>
        </div>
      ) : (
        <img src={image} alt="Profile" className="card-image" />
      )}
    </div>
  );
}

export default MentorCard;


