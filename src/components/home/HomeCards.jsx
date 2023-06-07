import React, { useState } from "react";
import CustomeCard from "./CustomeCard";
import { Icon } from "semantic-ui-react";

import "./Homecards.css";
import MentorCard from "./MentorCard";

function HomeCards() {
  const mentorCards = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1675967838197-1e91fba82b54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      name: "Orandi",
      profession: "Software Engineer",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1675967838197-1e91fba82b54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      name: "Orandi",
      profession: "Software Engineer",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1675967838197-1e91fba82b54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      name: "Orandi",
      profession: "Software Engineer",
    },
    {
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      name: "Orandi",
      profession: "Software Engineer",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(mentorCards.length / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentMentorCards = mentorCards.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <h2 className="ui centered header"> How It Works</h2>
      <div className="step-cards">
        <CustomeCard
          icon={<Icon name="sign-in alternate" />}
          step={"Step 1"}
          title={"Sign - up"}
          description={
            "Tell us who you are, what you do and what you like to achieve from the mentoring!"
          }
        />
        <CustomeCard
          icon={<Icon name="tasks" />}
          step={"Step 2"}
          title={"Match"}
          description={
            "Discover your perfect Mentor/Mentee match and ride the wave of mentoring success!"
          }
        />
        <CustomeCard
          icon={<Icon name="calendar alternate outline" />}
          step={"Step 3"}
          title={"Mentor"}
          description={
            "Schedule a call at a convenient time, choose your preferred mode of communication!"
          }
        />
      </div>
      <h2 className="ui centered header">Meet our Mentors</h2>
      <div className="ui segment" style={{color:"black"}}>
        <div className="mentor-cards">
          {currentMentorCards.map((card, index) => (
            <MentorCard
              key={index}
              image={card.image}
              name={card.name}
              profession={card.profession}
            />
          ))}
        </div>
      </div>
      <div className="ui padded flex container center aligned">
        <button
          className="ui teal button"
          disabled={currentPage === 1}
          onClick={handlePrevPage}>
          &lt;
        </button>
        <span className="ui header">{currentPage}</span>
        <button
          className="ui teal button"
          disabled={currentPage === totalPages}
          onClick={handleNextPage}>
          &gt;
        </button>
      </div>
    </>
  );
}

export default HomeCards;
