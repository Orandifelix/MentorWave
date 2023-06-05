
import { Card } from "semantic-ui-react";
import "./mentors.css";

const imageUrl =
  "https://d2win24dv6pngl.cloudfront.net/media/generated/profile-photos/profile-1298663/60cc7564d4a37d90.af828114ed82.jpg";

const Mentorscard = () => {
  return (
    <Card>
      <Card.Content>
        <div className="flex-container">
          <img
            className="ui circular image"
            src={imageUrl}
            alt="mentor image"
          />
          <Card.Header className="centered">
            Donvine Mugendi
          </Card.Header>
        </div>
        <Card.Description>
          <h3>Expertise</h3>
          Software Engineering
        </Card.Description>
        <Card.Content>
          <h3>Bio</h3>
          Donvine is a software engineer with over 10 years experience building
          scalable and efficient websites. He is an expert in Javascript ES6,
          React, Ruby and Rust.
        </Card.Content>
      </Card.Content>
      <Card.Content>
        <h4>
          <i className="ui twitter icon blue large"></i>@donvinemugendi
        </h4>
        <button className="ui inverted blue button">View Profile</button>
      </Card.Content>
    </Card>
  );
};

export default Mentorscard;
