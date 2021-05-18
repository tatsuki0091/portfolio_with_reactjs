import React from "react";
import "./top.css";
import About from "../about/About";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container } from "react-bootstrap";
// import helloImage from "../../images/hello.jpeg";
import Header from "../common/Header";
import Introduction from "../introduction/Introduction";
// import Fadein from "../animation/Fadein";
import { Email } from "../mail/Email";
import Work from "../work/Work";

const Top = () => {
  return (
    <div>
      <div>
        <header>
          <Header />
        </header>
        <div className="content-part">
          <Introduction />
          <About />
          <Work />
          <Email />
        </div>
      </div>
    </div>
  );
};

export default Top;
