import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Container } from "react-bootstrap";
import TodoImg from "../../images/todo.jpeg";
import FreeMarket from "../../images/free_market.jpeg";
import "./work.css";

const Work = () => {
  return (
    <>
      <Container fluid className="third-block">
        <div className="row">
          <div className="third-content-img col-12 col-lg-12">
            <div className="col-12">
              <h1 className="content  mb-4 mx-auto" id="work">
                Work
              </h1>
              <Carousel fade>
                <Carousel.Item>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/tatsuki0091/todo_spring"
                  >
                    <img
                      className="d-block w-75 crimg mx-auto"
                      src={TodoImg}
                      alt="First slide"
                    />
                  </a>
                  <Carousel.Caption>
                    <h3>Todo Application</h3>
                    <p>Todo Application which creted by Java with Spring</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.yahoo.co.jp/"
                  >
                    <img
                      className="d-block w-75 crimg mx-auto"
                      src={FreeMarket}
                      alt="Second slide"
                    />
                  </a>

                  <Carousel.Caption>
                    <h3>Free market web application</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item> */}
              </Carousel>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Work;
