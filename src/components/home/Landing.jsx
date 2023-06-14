import React from "react";
import "./Landing.css";

function Landing({ handleClick }) {
  return (
    <div className="landing">
      <div className="landing-content">
      <h1>The Power<br></br> 
      of Good Advice</h1>
      <p>Unleash your potential through mentorship </p>
      {/* <p>MentorWave helps connect you with mentors that share your passion!</p> */}
      <button className="sign-up" onClick={handleClick}>
        <b>Join Now!</b>
      </button>
      </div>
    </div>
  );
}

export default Landing;
