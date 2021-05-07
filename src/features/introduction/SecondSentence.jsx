import React from "react";
import { useSpring, animated } from "react-spring";

const SecondSentence = () => {
  const props = useSpring({
    to: [{ opacity: 1 }],
    from: { opacity: 0, transition: "10s" },
  });
  return (
    <animated.div style={props}>
      <h1 className="first-block-sentence content-character mt-5">
        This is my portfolio as a
      </h1>
    </animated.div>
  );
};

export default SecondSentence;
