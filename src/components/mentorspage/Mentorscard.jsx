
import { Card } from "semantic-ui-react";
import "./mentors.css";

const Mentorscard = ({handleClick, mentor}) => {
  return (
    <Card id="card">
      <Card.Content>
        <div className="flex-container">
          <img
            className="ui circular image"
            src={mentor.image}
            alt="mentor image"
          />
          <Card.Header className="centered-text">
            {mentor.name}
          </Card.Header>
        </div>
        <Card.Description>
          <h3>Expertise</h3>
          {mentor.expertise}
        </Card.Description>
        <Card.Content>
          <h3>Bio</h3>
          {mentor.bio}
        </Card.Content>
      </Card.Content>
      <Card.Content>
        <h4>
          <i className="ui twitter icon blue large"></i>{mentor.twitter}
        </h4>
        <button className="ui inverted secondary button" onClick={handleClick}>View Profile</button>
      </Card.Content>
    </Card>
  );
};

export default Mentorscard;
