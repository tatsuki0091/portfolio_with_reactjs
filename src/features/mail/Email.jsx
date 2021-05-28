import React from "react";
import { Container } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { fetchAsyncSendEmail, setOpenModal } from "./emailSlice";
import { useHistory } from "react-router-dom";
import "./email.scss";
import ScrollAnimation from "react-animate-on-scroll";

export function Email() {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      <ScrollAnimation animateIn="bounceInDown">
        <Container fluid className="third-block">
          <div className="row">
            <div className="third-content-img col-12 col-lg-12">
              <div className="col-12">
                {/* Contactの見出しを左からフェードインさせるためのコンポーネント */}

                <div
                  className="content contact-heading"
                  id="contact"
                  data-text="Contact"
                >
                  Contact
                </div>
                <Formik
                  initialErrors={{ email: "required", message: "required" }}
                  initialValues={{ email: "", subject: "", message: "" }}
                  onSubmit={async (values) => {
                    const result = await dispatch(fetchAsyncSendEmail(values));
                    await dispatch(setOpenModal());
                    alert("You have sent a message");
                    // スクロールをページの先頭にまで戻す
                    window.scrollTo(0, 0);
                    window.location.reload();
                  }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string()
                      .email("email format is wrong")
                      .required("email is must"),
                    message: Yup.string().required("message is must").max(2000),
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
                            <div className="error-message">
                              {errors.message}
                            </div>
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
      </ScrollAnimation>
    </>
  );
}
