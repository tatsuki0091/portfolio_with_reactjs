import React from "react";
import { useSpring, animated } from "react-spring";

const ThirdSentence = () => {
  const props = useSpring({
    to: [{ opacity: 1 }],
    from: { opacity: 0, transition: "20s" },
  });
  return (
    <animated.div style={props}>
      <h1 className="first-block-sentence content-character mt-4">
        software engineer.
      </h1>
    </animated.div>
  );
};

export default ThirdSentence;
