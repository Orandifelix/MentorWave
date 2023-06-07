import React from "react";
import "./Landing.css";

function Landing() {
  return (
    <div className="ui segment">
      <div className="ui two column grid">
        <div className=" padded column" id="landing">
          <h1>
            Unleash Your Learning <span>Potential </span>
            Through Mentorship
          </h1>
          <h3 className="ui small header">
            Experience the transformative power of human connections and the
            guidance of mentors who will unlock your true potential. At
            Mentorwave, we believe in the limitless possibilities of mentorship,
            creating a space where you can thrive and excel.
          </h3>
          <button className="ui large teal button"><b>Join Now!</b></button>
        </div>
        <div className="column">
          <img
            src="https://www.mentor-pro.com/wp-content/uploads/2020/11/Desktop-1.jpg"
            alt="landing page pic"
            className="ui image"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
