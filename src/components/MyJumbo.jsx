import "./styles.css";
import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
export default function MyJumbo() {
  return (
    <div id="jumbo">
      <hr />
      <Container>
        <Jumbotron className="bg-primary">
          <div className="d-flex justify-content-center">
            <h1>Weather in cities all over the world!</h1>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <p>
              Access to best weather information in touch of your fingertips!
            </p>
          </div>
        </Jumbotron>
      </Container>
      <hr />
    </div>
  );
}
