import React from "react";
import "./Stats.css";

function Statistics() {
  return (
    <div
      className="statistics"
      style={{ backgroundColor: "#16163F", padding: "20px", margin: "10px" }}>
      <h1 className="emphasis">We are Good With Numbers</h1>
      <div className="ui four column stackable grid">
        <div className="column">
          <h1>1500+</h1>
          <h3>Mentees Signed Up</h3>
        </div>
        <div className="column">
          <h1>200+</h1>
          <h3>Mentors Across the Globe</h3>
        </div>
        <div className="column">
          <h1>20+</h1>
          <h3>Employees Worldwide</h3>
        </div>
        <div className="column">
          <h1>1000+</h1>
          <h3>Hours of Mentoring</h3>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
