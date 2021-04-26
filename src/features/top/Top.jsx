import React from "react";
import TopCustomStyle from "./top.css";
import AboutCustomStyle from "./about.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
// reactのheadやmetaタグを設定できるライブラリ（今回はbodyタグの設定で使う)
import { Helmet } from "react-helmet";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Container,
  Button,
} from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import Header from '../common/Header';

const Top = () => {
  return (
    <div>
      <Helmet>
        <title>My Portfolio</title>
        <style>{"body { background-color: #000000; }"}</style>
      </Helmet>
      <div classNameName="content">
        
        <header>
        <Header />

        </header>
        {/* <div className={TopCustomStyle.start}>
          <div className={TopCustomStyle.start_image}>
            <img src="images/hello.jpeg" />
          </div>
        </div> */}
        <div className="content-part">
          <Container fluid>
            <div className="row">
              <div className=" first_content_img col-12 col-lg-12 col-md-12 col-sm-12">
                <div>
                  <h1 className="first_block_sentence content_character mt-5 col-lg-12 col-sm-12">
                    I'm Tatsuki.
                  </h1>
                  <h1 className="first_block_sentence content_character mt-5 col-lg-12 col-sm-12">
                    This is my portfolio as a
                  </h1>
                  <h1 className="first_block_sentence content_character mt-5 col-lg-12 col-sm-12">
                    software engineer.
                  </h1>
                </div>
              </div>
            </div>
          </Container>
          <Container fluid className="second_block">
            <div className="row">
              <div className="second_content_img col-12 col-lg-12 col-md-12 col-sm-12">
                <div className="firstvlock introduction">
                <h1 class="content col-12 mx-auto">About me</h1>
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
          <Container fluid className="second_block">
            <div class="row">
              <div class="third-content-img col-12 col-lg-12">
                <div class="col-12">
                  <h1 class="content  mx-auto">Contact</h1>
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
                            <label>Email Address</label>
                            <br />
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
                            <label>Subject</label>
                            <br />
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
                            <label>Message</label>
                            <br />
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
