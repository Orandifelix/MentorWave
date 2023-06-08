import React from "react";
import "./aboutus.css";

function Mission() {
  return (
    <div className="ui raised segment">
      <div className="ui inverted teal segment">
        <h2 className="ui centered header">Our Mission</h2>
        <div className="ui content">
          <p className="ui bold header">
            Our mission at MentorWave is to bridge the gap between experienced
            professionals and aspiring individuals by providing high-quality
            mentorship programs to companies and students. We aim to empower the
            next generation of leaders and entrepreneurs by fostering meaningful
            connections, sharing knowledge, and cultivating a culture of growth
            and success.
          </p>
          <div className="content-list">
          <p>
            Key elements of our mission:</p>
            <ul className="">
              <li>Empowering the Next Generation</li>
              <li>Bridging the Gap</li>
              <li>Cultivating Meaningful Connections</li>
              <li>Sharing Knowledge and Experience</li>
              <li>Creating a Culture of Growth and Success</li>
            </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
