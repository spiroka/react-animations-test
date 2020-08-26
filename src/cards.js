import React, { Suspense, useRef } from "react";
import Reveal from "./reveal";
import { Row, Col } from "react-bootstrap";
import useVisible from "./useVisible";

const CardWithText = React.lazy(async () => await import("./cardWithText"));

function Cards() {
  const rowRef = useRef();
  const rowVisible = useVisible(rowRef);

  return (
    <>
      <h2 style={{ borderBottom: "1px solid black" }}>
        Reveal when scrolled to
      </h2>
      <Reveal>
        <Row ref={rowRef}>
          {rowVisible && (
            <>
              <Col>
                <Suspense fallback="Loading card...">
                  <CardWithText />
                </Suspense>
              </Col>
              <Col>
                <Suspense fallback="Loading card...">
                  <CardWithText />
                </Suspense>
              </Col>
            </>
          )}
        </Row>
      </Reveal>
    </>
  );
}

export default Cards;
