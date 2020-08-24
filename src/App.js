import React from "react";
import "./App.css";
import Reveal from "./reveal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Jumbotron, Container } from "react-bootstrap";
import { Timeline, Tween } from "react-gsap";

function App() {
  return (
    <div className="App" style={{ padding: "0 100px 0" }}>
      <Jumbotron fluid style={{ height: "400px", marginBottom: "200px" }}>
        <Container>
          <Timeline
            target={
              <>
                <h1 style={{ opacity: 0 }}>GSAP Test</h1>
                <p style={{ opacity: 0 }}>
                  I have created this project to play around with JavaScript
                  animations in React.
                </p>
              </>
            }
          >
            <Tween to={{ opacity: 1 }} duration={0.5} target={0} position="+=0.5" />
            <Tween to={{ opacity: 1 }} duration={0.5} target={1} />
          </Timeline>
        </Container>
      </Jumbotron>
      <h2 style={{ borderBottom: "1px solid black" }}>
        Reveal when scrolled to
      </h2>
      <Reveal>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Reveal>
    </div>
  );
}

export default App;
