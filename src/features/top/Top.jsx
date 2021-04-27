import React from "react";
import TopCustomStyle from "./top.css";
import "bootstrap/dist/css/bootstrap.min.css";
// reactのheadやmetaタグを設定できるライブラリ（今回はbodyタグの設定で使う)
import { Helmet } from "react-helmet";
import {
  Container,
} from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import Header from '../common/Header';
import Fadein from '../animation/Fadein';


// スムーススクロールを実現するためのライブラリ
import { SmuuthLink, AnimateScroll as scroll } from "react-scroll";

const Top = () => {
  return (
    <div>
      <Helmet>
        <title>My Portfolio</title>
        <style>{"body { background-color: #000000; }"}</style>
      </Helmet>
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
                <div className="firstvlock introduction">
                <h1 class="content col-12" id="about">About me</h1>
                <div className="col-12 mx-auto">
                  <p>
                    2014 Mar: Graduated from Kobe Gakuin University.
                  </p>
                  <p>
                    2014 April: Work as a Operator for MS System Inc.
                  </p>
                  <p>
                    2016 Feb: Work as an assistanece of system engineer for Soft Hyperion Inc.
                  </p>
                  <p>
                    2018 Mar: Work as a programmer for Casareal inc.
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <Container fluid className="third-block">
            <div class="row">
              <div class="third-content-img col-12 col-lg-12">
                <div class="col-12">
                  <h1 class="content  mx-auto" id="contact">Contact</h1>
                  <Formik
                    initialErrors={{ email: "required" }}
                    initialValues={{ email: "", password: "" }}
                    onSubmit={async (values) => {
                      console.log("ddd");
                    }}
                    validationSchema={Yup.object().shape({
                      email: Yup.string()
                        .email("email format is wrong")
                        .required("email is must"),
                      password: Yup.string()
                        .required("password is must")
                        .min(4),
                    })}
                    render={({
                      handleSubmit,
                      handleChange,
                      handleBlur, // handler for onBlur event of form elements
                      values,
                      touched,
                      errors,
                      isValid,
                    }) => (
                      <>
                        <form onSubmit={handleSubmit}>
                          <div>
                            <input
                              className="form-control col-12 mt-1 mb-3"
                              placeholder="Email Address"
                              type="text"
                              name="email"
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                          </div>
                          <div>
                            <input
                              className="form-control col-12 mt-1 mb-3"
                              placeholder="Subject"
                              type="text"
                              name="subject"
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                          </div>
                          <div>
                            <textarea
                              className="form-control mt-1 mb-5"
                              rows="10"
                              placeholder="Message"
                              name="message"
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                          </div>
                          <br />
                          <input
                            class="col-12 mt-4 contact-send-button"
                            type="submit"
                            value="Send"
                          ></input>
                        </form>
                      </>
                    )}
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Top;
