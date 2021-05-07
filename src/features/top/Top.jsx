import React from "react";
import "./top.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSpring, animated, Spring } from "react-spring";
import { Container } from "react-bootstrap";
import helloImage from "../../images/hello.jpeg";
import Header from "../common/Header";
import Introduction from "../introduction/Introduction";
import Fadein from "../animation/Fadein";
import { Email } from "../mail/Email";

const Top = () => {
  return (
    <div>
      <div>
        <header>
          <Header />
        </header>
        <div className="content-part">
          <Introduction />
          <Container fluid className="second-block">
            <div className="row">
              <div className="second-content-img col-12 col-lg-12 col-md-12 col-sm-12">
                <div className="firstblock introduction" id="about">
                  <h1 className="content col-12">About me</h1>
                  <div className="col-12 mx-auto">
                    <p className="article">
                      2014 Mar: Graduated from Kobe Gakuin University.
                    </p>
                    <p className="article">
                      2014 April: Work as an Operator for MS System Inc.
                    </p>
                    <p className="article">
                      2016 Feb: Work as an assistanece of system engineer for
                      Soft Hyperion Inc.
                    </p>
                    <p className="article">
                      2018 Mar: Work as a programmer for Casareal inc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <Email />
        </div>
      </div>
    </div>
  );
};

export default Top;
