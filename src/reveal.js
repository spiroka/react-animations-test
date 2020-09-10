import React, { useEffect, useCallback, useRef, useState } from "react";

function clamp(value, min, max) {
  return Math.max(Math.min(value, max), min);
}

function Reveal({ children }) {
  const container = useRef();
  const [progress, setProgess] = useState(0);

  const onScroll = useCallback(() => {
    setProgess(
      clamp(
        document.documentElement.scrollTop / (container.current.offsetTop - 200),
        0,
        1
      )
    );
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    setProgess(
      clamp(
        document.documentElement.scrollTop / (container.current.offsetTop - 200),
        0,
        1
      )
    );

    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <div ref={container}>
      <div
        style={{
          opacity: progress,
          transform: `translateY(${800 - 800 * progress}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Reveal;
