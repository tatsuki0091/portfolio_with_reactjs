import React from "react";
import "./top.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../common/Header";
import Introduction from "../introduction/Introduction";

const Top = () => {
  return (
    <div>
      <div>
        <header>
          <Header />
        </header>
        <div className="content-part">
          <Introduction />
        </div>
      </div>
    </div>
  );
};

export default Top;
