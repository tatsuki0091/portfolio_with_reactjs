import React from "react";

// import { styled, withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Burger from "./Burger";
// reactのheadやmetaタグを設定できるライブラリ（今回はbodyタグの設定で使う)
import { Helmet } from "react-helmet";
const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  color: white;
  display: flex;
  justify-content: flex-end;
  background-color: black;
`;

const Header = () => {
  return (
    <>
      <Helmet>
        <title>My Portfolio</title>
        <style>{"body { background-color: #000000; }"}</style>
      </Helmet>
      <Nav>
        <Burger />
      </Nav>
    </>
  );
};

export default Header;
