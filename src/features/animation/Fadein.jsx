import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const Img = styled.div`
  z-index: 50;
`;

const Fadein = () => {
  const props = useSpring({
    to: [
      { opacity: 1, background: "linear-gradient(to right, #009fff, #ec2f4b)" },
      { opacity: 0 },
    ],
    from: { opacity: 0 },
  });
  return <animated.div style={props}></animated.div>;
};

export default Fadein;
