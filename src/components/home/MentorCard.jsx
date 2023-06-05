import React, { useState } from "react";
import "./Homecards.css";

function MentorPicture({ image }) {
  return (
    < >
      <img src={image} alt="Profile" className="card-image" />
    </>
  );
}

function MentorInfo({ name, profession }) {
  return (
    <div className="card-name">
      <h3>{name}</h3>
      <p>{profession}</p>
    </div>
  );
}

function MentorCard({ name, image, profession }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="card" onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <div>
        <MentorPicture image={image} />
        {isHovered && <MentorInfo name={name} profession={profession} />}
      </div>
    </div>
  );
}

export default MentorCard;
