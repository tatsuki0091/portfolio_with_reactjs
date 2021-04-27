import React, { useState } from "react";

// import { styled, withStyles } from "@material-ui/core/styles";
import styled from 'styled-components';
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  color: white;
  display: flex;
  justify-content: flex-end;
  background-color: black;
  
` ;

const Header = () => {
  return (
    <Nav>
      <Burger />
    </Nav>

  );
};

export default Header;
