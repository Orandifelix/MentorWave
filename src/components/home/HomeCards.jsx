import React from "react";
import CustomeCard from "./CustomeCard";
import { Icon } from "semantic-ui-react";

import "./Homecards.css";
import MentorCard from "./MentorCard";

function HomeCards() {
  return (
    <>
      <h2 className="work-title"> How It Works</h2>
      <div className="step-cards">
        <CustomeCard
          icon={<Icon name="sign-in alternate" />}
          step={"Step 1"}
          title={"Sign - up"}
          description={
            "Tell us who you are , what you do and what you like to achieve from the mentoring!"
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
      <h2 className="work-title">Meet our Mentors</h2>
      <MentorCard
        image={
          "https://plus.unsplash.com/premium_photo-1675967838197-1e91fba82b54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        }
        name={"Orandi"}
        profession={"Software Engineer"}
      />
    </>
  );
}

export default HomeCards;
