import React from "react";
import { useSpring, animated, Spring } from "react-spring";
import { Container } from "react-bootstrap";
import FirstSentence from "./FirstSentence";
import SecondSentence from "./SecondSentence";
import ThirdSentence from "./ThirdSentence";
const Introduction = () => {
  return (
    <Container fluid>
      <div className="row">
        <div className=" first-content-img col-12 col-lg-12 col-md-12 col-sm-12">
          <div id="home">
            <FirstSentence />
            <SecondSentence />
            <ThirdSentence />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Introduction;