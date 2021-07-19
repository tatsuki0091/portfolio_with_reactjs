import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
// スムーススクロールを実現するためのライブラリ
import { Link, animateScroll as scroll } from "react-scroll";

import { BrowserRouter, Link as RouterLink } from "react-router-dom";
import "./common.scss";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 80;
  li {
    padding: 18px 10px;
  }
  a {
    color: white;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #000000;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const DROP = styled.div`
  ul {
    margin: 0;
    padding: 0;
  }
  ul li {
    float: left;
    position: relative;
    list-style: none;
  }
  ul li a {
    display: block;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
  }
  li ul {
    display: none;
    position: absolute;
  }
  li ul li {
    float: none;
  }
  ul li:hover > ul {
    display: block;
  }
`;

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

const RightNav = ({ open }) => {
  const location = useLocation();
  const judgePath = judge(location.pathname);

  return (
    <>
      {judgePath ? (
        <Ul open={open}>
          <li>
            <RouterLink className="header-link" to={`/`}>
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink className="header-link" to={`/about`}>
              About
            </RouterLink>
          </li>
          <li>
            <RouterLink className="header-link" to={`/work`}>
              Work
            </RouterLink>
          </li>
          <li>
            <RouterLink className="header-link" to={`/contact`}>
              Contact
            </RouterLink>
          </li>
          <DROP>
            <nav>
              <ul>
                <li>
                  <soan className="header-link">Play ground</soan>
                  <ul>
                    <li>
                      <RouterLink className="header-link" to={`/playground`}>
                        Play ground
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink className="header-link" to={`/playgroundTwo`}>
                        Play ground 2
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        className="header-link"
                        to={`/playgroundThree`}
                      >
                        Play ground 3
                      </RouterLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </DROP>
        </Ul>
      ) : (
        <Ul open={open}>
          <li>
            <RouterLink className="header-link" to={`/`}>
              Home
            </RouterLink>
          </li>
          <DROP>
            <nav>
              <ul>
                <li>
                  <a className="header-link" href="#">
                    Play ground
                  </a>
                  <ul>
                    <li>
                      <RouterLink className="header-link" to={`/playground`}>
                        Play ground
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink className="header-link" to={`/playgroundTwo`}>
                        Play ground 2
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        className="header-link"
                        to={`/playgroundThree`}
                      >
                        Play ground 3
                      </RouterLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </DROP>
        </Ul>
      )}
    </>
  );
};

export default RightNav;
