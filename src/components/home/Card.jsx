import React from 'react'
import { Header, Container } from "semantic-ui-react";

function Card({title, description, button}) {
  return (
    <Container>
      <Header
        as="h2"
        textAlign="center"
        style={{ margin: "10px", padding: "20px" }}
      >
        {title}
      </Header>
      <p style={{ margin: "10px", padding: "20px", fontSize: "18px" }}>{description}</p>
      <button className="ui button positive" style={{ margin: "10px 40px" }}>
        {button}
      </button>
    </Container>
  );
}

export default Card