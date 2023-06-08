import React, { useState, useEffect } from "react";
import CustomeCard from "./CustomeCard";
import { Icon } from "semantic-ui-react";
import MentorCard from "./MentorCard";

function HomeCards() {
  const [data, setData] = useState([]);
  const url = "http://localhost:8001/mentors";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(data.length / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentMentorCards = data.slice(startIndex, endIndex);

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
      <div className="ui segment">
        <div className="mentor-cards">
          {currentMentorCards.map((mentor) => (
            <MentorCard
              key={mentor.id}
              image={mentor.image}
              name={mentor.name}
              profession={mentor.expertise}
            />
          ))}
        </div>
      </div>
      <div className="ui padded flex container center aligned">
        <button
          className="ui teal button"
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
          &lt;
        </button>
        <span className="ui header">{currentPage}</span>
        <button
          className="ui teal button"
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          &gt;
        </button>
      </div>
    </>
  );
}

export default HomeCards;

