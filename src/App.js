import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container } from "react-bootstrap";
import Cards from "./cards";
import { useTrail, animated } from "react-spring";

function App() {
  const trail = useTrail(2, { opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  return (
    <div className="App" style={{ padding: "0 100px 0" }}>
      <Jumbotron fluid style={{ height: "400px", marginBottom: "600px" }}>
        <Container>
          {trail.map((props, index) => (
            <>
              {index === 0 && (
                <animated.h1 style={props}>GSAP Test</animated.h1>
              )}
              {index === 1 && (
                <animated.p style={props}>
                  I have created this project to play around with JavaScript
                  animations in React.
                </animated.p>
              )}
            </>
          ))}
        </Container>
      </Jumbotron>
      <Cards />
    </div>
  );
}

export default App;
