import React from 'react';
import "./aboutus.css"

function TeamMembers() {
  const teamMembers = [
    {
      name: 'Orandi Felix',
      role: 'CEO/Founder',
      background: 'Orandi Felix has over 10 years of experience in the mentoring industry or related fields. With an entrepreneurial mindset, he has a track record of successfully building and growing organizations. His excellent communication and negotiation skills enable him to forge partnerships and drive MentorWave mission forward. Furthermore, his deep understanding of mentoring practices and trends allows him to steer MentorHub in the right direction and make impactful decisions.',
    },
    {
      name: 'Ondieki Wilder',
      role: 'Mentee Support Specialist',
      background: 'Ondieki Wilder brings a background in counseling, coaching, or related fields. She has a profound empathy and understanding towards the needs and challenges faced by mentees. Her strong communication and active listening skills allow her to create a safe and supportive space for mentees. She provides guidance, resources, and encouragement to help mentees overcome obstacles and achieve their goals. She has experience in addressing mentees concerns and tailoring support to meet their individual needs, ensuring a positive and impactful mentoring experience.',
    },
    {
      name: 'Donvine Mugendi',
      role: 'Program Manager',
      background: 'Donvine Mugendi rings a wealth of experience in program management or similar roles. He possess a solid understanding of mentoring best practices and has the ability to design and implement program frameworks that align with MentorWave objectives. ',
    },
    {
      name: 'Cynthia Onzere',
      role: 'Marketing and Communications Manager:',
      background: 'Cynthia Onzere is a strategic professional with expertise in marketing and communications strategies. She has a proven track record in branding, digital marketing, and public relations. With a creative and analytical mindset, she crafts compelling messages and campaigns to engage diverse stakeholders and target audiences. ',
    },
    {
      name: 'Kelvin Kimaru',
      role: 'Mentor Coordinator',
      background: 'Kelvin Kimaru plays a vital role in supporting and guiding the mentors within the organization. He has firsthand experience in mentorship or coaching roles and possess a deep understanding of mentorship dynamics and the mentor-mentee relationship. His exceptional interpersonal and communication skills enable him to build rapport with mentors, providing guidance and support throughout the mentoring journey. ',
    },
  ];

  return (
    <div className="team-members-container">
      <h2>Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <h3>{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <p className="member-background">{member.background}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamMembers;
