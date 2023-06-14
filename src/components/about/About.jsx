import React from 'react';
import './aboutus.css'; 
import Mission from "./Mission";
import Vision from "./Vision";
import Values from "./Values";
import TeamMembers from "./TeamMembers";
import Testimonials from "./Testimonials";

function About() {
  return (
    <div className='about'>
      <Mission/>
      <Vision/>
      <Values/>
      <TeamMembers/>
      <Testimonials/>
    </div>
  );
}

export default About;
