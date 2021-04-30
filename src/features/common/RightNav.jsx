import React from 'react';
import styled from 'styled-components';
// スムーススクロールを実現するためのライブラリ
import { Link, animateScroll as scroll } from 'react-scroll';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 80;
  li {
    padding: 18px 10px;
  }
  a {
      color:red;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #000000;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
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

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
                Home
        </Link>
      </li>
      <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
                About me
        </Link>
     </li>
     <li>
        <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            Contact
        </Link>
     </li>
    </Ul>
  )
}

export default RightNav