
import CustomeCard from "./CustomeCard";
import { Icon } from "semantic-ui-react";
import "./Homecards.css"

function HomeCards() {
 
  return (
    <div className="steps-container">
      <h2 className="ui centered header"> How does MentorWave work?</h2>
      <h3>See how our mentorship program connects mentors and mentees from all over the world to help them thrive</h3>
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
    </div>
  );
}

export default HomeCards;

