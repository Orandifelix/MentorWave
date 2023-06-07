import React, { useState } from "react";
import "./Homecards.css";

function MentorCard({ name, image, profession }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered)
    
  };

  return (
    <div className="ui card" onMouseEnter={handleHover} onMouseLeave={handleHover}>
      {isHovered ? (
        <div className="ui card">
          <div className="card-name">
            <h3>{name}</h3>
            <p>{profession}</p>
          </div>
        </div>
      ) : (
        <img src={image} alt="Profile" className="ui image" />
      )}
    </div>
  );
}

export default MentorCard;


