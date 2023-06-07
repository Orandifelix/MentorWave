import React, { useState } from "react";
import "./Homecards.css";

function MentorCard({ name, image, profession }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="ui card" onClick={(()=>setIsClicked(!isClicked))}>
      {isClicked ? (
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


