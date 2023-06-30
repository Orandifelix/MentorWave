import React from "react";
import "./Landing.css";

function Landing({ handleClick }) {
  return (
    <div className="landing">
      <div className="landing-content">
      <h1>The Power <br>
      </br>of Good Advice</h1>
      <p>Unleash your potential through mentorship. MentorWave takes you through a journey of self-advancement and fulfillment.</p>
      <button type="button" className="sign-up" onClick={handleClick}>
        <b> <i className="signup icon"></i>Join Now!</b>
      </button>
      <img src="/Mentee.png" alt="mentee"id="mentee-image" />
      </div>
    </div>
  );
}

export default Landing;
