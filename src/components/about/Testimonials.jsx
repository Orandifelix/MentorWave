import React from 'react';
import './aboutus.css'; 

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2>What Our Mentees Say</h2>
      <div className="testimonial-card">
        <p className="testimonial-text">
          "I had the privilege of being mentored by an incredible professional through MentorWave.Thanks to their mentorship, I gained confidence, expanded my network, and achieved my professional goals. I highly recommend MentorWave to anyone seeking mentorship opportunities."
        </p>
        <p className="testimonial-author">- Sarah, mentee</p>
      </div>
      <div className="testimonial-card">
        <p className="testimonial-text">
          "MentorWave has been a game-changer for me.Our mentoring sessions were transformative. My mentor went above and beyond to provide personalized guidance, offer constructive feedback, and share invaluable resources. I am grateful for Mentor Hub's commitment to fostering meaningful mentor-mentee relationships."
        </p>
        <p className="testimonial-author">- John, mentee</p>
      </div>
      <div className="testimonial-card">
        <p className="testimonial-text">
          "MentorWave exceeded my expectations in every way. As a recent graduate entering a competitive job market, I was unsure of my career direction.Their mentorship gave me the clarity and motivation I needed to succeed."
        </p>
        <p className="testimonial-author">- Emily, mentee</p>
      </div>
      <div className="testimonial-card">
        <p className="testimonial-text">
          "Being part of MentorWave has been an incredible experience. The platform not only connected me with a highly knowledgeable and accomplished mentor but also provided a structured framework for our mentorship journey. My mentor helped me set meaningful goals, develop new skills, and overcome challenges. Their unwavering support and commitment to my growth were truly remarkable."
        </p>
        <p className="testimonial-author">- Michael, mentee</p>
      </div>
      
    </div>
  );
};

export default Testimonials;
