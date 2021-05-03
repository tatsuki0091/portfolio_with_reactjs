import React from "react";
import "./top.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Container,
} from "react-bootstrap";

import Header from '../common/Header';
import Fadein from '../animation/Fadein';
import {Email} from '../mail/Email';


const Top = () => {
  return (
    <div>
      <div>
        <header>
          <Header />
        </header>
        <div className="content-part">
          <Container fluid>
            <div className="row">
              <div className=" first-content-img col-12 col-lg-12 col-md-12 col-sm-12">
                <div id="home">
                  <h1 className="first-block-sentence content-character mt-5">
                    I'm Tatsuki.
                  </h1>
                  <h1 className="first-block-sentence content-character mt-5">
                    This is my portfolio as a
                  </h1>
                  <h1 className="first-block-sentence content-character mt-5">
                    software engineer.
                  </h1>
                </div>
              </div>
            </div>
          </Container>
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
                    2014 April: Work as a Operator for MS System Inc.
                  </p>
                  <p className="article">
                    2016 Feb: Work as an assistanece of system engineer for Soft Hyperion Inc.
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
