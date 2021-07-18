import React from "react";
import { Container } from "react-bootstrap";
import { useTexture } from "./useTexture";
import { useGLTF } from "@react-three/drei";
import "../about/about.scss";
import ScrollAnimation from "react-animate-on-scroll";
// OrbitControlsを使用するためにこのような書き方にしないといけない
// import { OrbitControls, TransformControls } from "three-stdlib";
// extend({ OrbitControls, TransformControls });

const About = () => {
  return (
    <>
      {/* <Canvas
        gl={{ powerPreference: "low-power", antialias: true, alpha: false }}
      >
        <Suspense fallback={null}>
          <Cont />
        </Suspense>
        <orbitControls />
        <ambientLight />
      </Canvas> */}
      <ScrollAnimation animateIn="bounceInRight">
        <Container fluid className="second-block">
          <div className="row">
            <div className="second-content-img col-12 col-lg-12 col-md-12 col-sm-12">
              <div className="firstblock introduction" id="about">
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
