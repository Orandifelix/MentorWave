import React from "react";
import "./aboutus.css";

const Testimonials = () => {
  return (
    <div id="testimonials">
      <h1 className="ui centered header">What Our Mentees Say</h1>
      <div className="ui four doubling stackable padded cards segment">
        <div className="ui card">
          <blockquote className="card content">
          <i className="quote left large blue icon centered"></i>
            I had the privilege of being mentored by an incredible professional
            through MentorWave.Thanks to their mentorship, I gained confidence,
            expanded my network, and achieved my professional goals. I highly
            recommend MentorWave to anyone seeking mentorship opportunities.
            <i className="quote right blue icon centered"></i>
          </blockquote>
          <h3 className="card content header">
            - Sarah,<span className="ui italized header">mentee</span>{" "}
          </h3>
        </div>
        <div className="ui card">
          <blockquote className="card content">
          <i className="quote left icon large red centered"></i>
            MentorWave has been a game-changer for me.Our mentoring sessions
            were transformative. My mentor went above and beyond to provide
            personalized guidance, offer constructive feedback, and share
            invaluable resources. I am grateful for Mentor Hub's commitment to
            fostering meaningful mentor-mentee relationships. <i className="quote right red icon centered"></i>
          </blockquote>
          <h3 className="card content header">
            - John, <span className="ui italized header">mentee</span>
          </h3>
        </div>
        <div className="ui card">
          <blockquote className="card content">
            <i className="quote left green large icon centered"></i>
            MentorWave exceeded my expectations in every way. As a recent
            graduate entering a competitive job market, I was unsure of my
            career direction.Their mentorship gave me the clarity and motivation
            I needed to succeed. <i className="quote right green icon centered"></i>
          </blockquote>
          <h3 className="card content header">
            - Emily, <span className="ui italized header">mentee</span>
          </h3>
        </div>
        <div className="ui card">
          <blockquote className="card content">
            <i className="quote left icon pink large centered"></i>Being part of MentorWave
            has been an incredible experience. The platform not only connected
            me with a highly knowledgeable and accomplished mentor but also
            provided a structured framework for our mentorship journey. My
            mentor helped me set meaningful goals, develop new skills, and
            overcome challenges. Their unwavering support and commitment to my
            growth were truly remarkable.{" "}
            <i className="quote right pink icon centered"></i>
          </blockquote>
          <h3 className="card content header">
            - Michael, <span className="ui italized header">mentee</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
