import React from "react";
import "./Stats.css";

function Statistics() {
  return (
    <div
      className="statistics">
      <h1 className="emphasis">We are Good With Numbers</h1>
      <div className="ui four column stackable grid">
        <div className="column">
          <h1 className="number first">1500+</h1>
          <h3>Mentees Signed Up</h3>
        </div>
        <div className="column">
          <h1 className="number second">200+</h1>
          <h3>Mentors Across the Globe</h3>
        </div>
        <div className="column">
          <h1 className="number third">20+</h1>
          <h3>Employees Worldwide</h3>
        </div>
        <div className="column">
          <h1 className="number fourth">100+</h1>
          <h3>Hours of Mentoring received per mentee on average</h3>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
