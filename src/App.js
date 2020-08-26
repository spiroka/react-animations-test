import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container } from "react-bootstrap";
import { Timeline, Tween } from "react-gsap";
import Cards from './cards';

function App() {
  return (
    <div className="App" style={{ padding: "0 100px 0" }}>
      <Jumbotron fluid style={{ height: "400px", marginBottom: "600px" }}>
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
      <Cards />
    </div>
  );
}

export default App;
