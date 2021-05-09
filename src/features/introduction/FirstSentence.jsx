import React from "react";
import { useSpring, animated } from "react-spring";

const FirstSentence = () => {
  const props = useSpring({
    to: [{ opacity: 1 }],
    from: { opacity: 0, transition: "2s" },
  });
  return (
    <animated.div style={props}>
      <h1 className="first-block-sentence content-character mt-5">
        I'm Tatsuki.
      </h1>
    </animated.div>
  );
};

export default FirstSentence;
