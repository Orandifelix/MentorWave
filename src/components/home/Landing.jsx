import React from "react";
import "./Landing.css";
import { Header, Container } from "semantic-ui-react";

function Landing() {
  return (
    <div className="landing-page">
      <Container className="card-container">
        <h2 className="landing-title">
          Unleash Your Learning Potential Through Mentorship
        </h2>
        <p className="landing-description">
          Experience the transformative power of human connections and the
          guidance of mentors who will unlock your true potential. At
          Mentorwave, we believe in the limitless possibilities of mentorship,
          creating a space where you can thrive and excel.
        </p>
        <button className="landing-button">Sign up for free</button>
      </Container>
      <img
        src="https://www.mentor-pro.com/wp-content/uploads/2020/11/Desktop-1.jpg"
        alt="landing page pic"
        className="landing-image"
      />
    </div>
  );
}

export default Landing;
