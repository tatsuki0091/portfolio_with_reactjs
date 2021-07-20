import React from "react";
import { Container } from "react-bootstrap";
import "../about/about.scss";
import ScrollAnimation from "react-animate-on-scroll";
import Header from "../common/Header";
import { useLocation } from "react-router-dom";
// OrbitControlsを使用するためにこのような書き方にしないといけない
// import { OrbitControls, TransformControls } from "three-stdlib";
// extend({ OrbitControls, TransformControls });

function judge(path) {
  if (
    path === "/" ||
    path === "/contact" ||
    path === "/about" ||
    path === "/work"
  ) {
    return true;
  } else {
    return false;
  }
}

const About = () => {
  const location = useLocation();
  const judgePath = judge(location.pathname);
  return (
    <>
      <header>
        <Header />
      </header>
      <ScrollAnimation animateIn="bounceInRight">
        <Container fluid className="second-block">
          <div className="row">
            <div
              id="about"
              className="second-content-img col-12 col-lg-12 col-md-12 col-sm-12"
            >
              <div className="firstblock introduction">
                <div className="col-12 mx-auto">
                  <a
                    href="/pdf/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pdf-button about-sent col-12 p-5"
                  >
                    <h1 className={"about-heading"}>ABOUT ME</h1>
                  </a>
                  {/* <div class="parent">
                  <a
                    href="/pdf/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-3d btn"
                  >
                    BUTTON
                  </a>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </ScrollAnimation>
    </>
  );
};

export default About;
