import React from 'react';
import './aboutus.css'; 
import Mission from "./Mission";
import Vision from "./Vision";
import Values from "./Values";
import TeamMembers from "./TeamMembers";
import Testimonials from "./Testimonials";


function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <Mission/>
      <Vision/>
      <Values/>
      <TeamMembers/>
      <Testimonials/>


    </div>
  );
}

export default AboutUs;
