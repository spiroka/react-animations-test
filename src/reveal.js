import React, { useEffect, useCallback, useRef, useState } from "react";
import { Timeline, PlayState, Tween } from "react-gsap";

function Reveal({ children }) {
  const container = useRef();
  const [progress, setProgess] = useState(0);

  const onScroll = useCallback(() => {
    setProgess(
      document.documentElement.scrollTop / container.current.offsetTop
    );
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    setProgess(
      document.documentElement.scrollTop / container.current.offsetTop
    );

    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <div ref={container}>
      <Timeline
        playState={PlayState.pause}
        totalProgress={progress}
        target={
          <div
            style={{
              opacity: 0,
              transform: "translateY(800px)",
            }}
          >
            {children}
          </div>
        }
      >
        <Tween
          to={{ opacity: 1, transform: "translateY(0px)" }}
          duration={500}
        />
      </Timeline>
    </div>
  );
}

export default Reveal;
