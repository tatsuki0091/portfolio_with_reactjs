import React from "react";
import { Container } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
// import { fetchAsyncSendEmail } from "./emailSlice";
import { useDispatch, useSelector } from "react-redux";

import { fetchAsyncSendEmail, sendEmail } from './emailSlice'
import { useHistory } from "react-router-dom";


export function Email() {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
      <>
      <Container fluid className="third-block">
          <div className="row">
            <div className="third-content-img col-12 col-lg-12">
              <div className="col-12">
                <h1 className="content  mb-4 mx-auto" id="contact">Contact</h1>
                <Formik
                  initialErrors={{ email: "required", message: "required" }}
                  initialValues={{ email: "", subject: "", message: "" }}
                  onSubmit={async (values) => {
                    const result = await dispatch(fetchAsyncSendEmail(values));
                    console.log(result)
                    window.location.reload();
                  }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string()
                      .email("email format is wrong")
                      .required("email is must"),
                    message: Yup.string()
                      .required("message is must")
                      .max(2000)
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
                        <div className="mb-5">
                          <input
                            className="form-control col-12 mt-1"
                            placeholder="Email Address"
                            type="text"
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          {touched.email && errors.email ? (
                            <div className="error-message">{errors.email}</div>
                          ) : null}
                        </div>           
                        <div className="mb-5">
                          <input
                            className="form-control col-12 mt-1"
                            placeholder="Subject"
                            type="text"
                            name="subject"
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <textarea
                            className="form-control mt-1"
                            rows="10"
                            placeholder="Message"
                            name="message"
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          {touched.message && errors.message ? (
                            <div className="error-message">{errors.message}</div>
                          ) : null}
                        </div>
                        <br />
                        <input
                          className="col-12 contact-send-button"
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
      </>
  )
}
