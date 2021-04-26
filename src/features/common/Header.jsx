import React, { useState } from "react";

// Menubar
import PropTypes from "prop-types";
// import { styled, withStyles } from "@material-ui/core/styles";
import styled from 'styled-components';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuBarButton from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import RightNav from "./RightNav";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  color: white;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
` 

const Header = () => {
  return (
    <Nav>
      <div className="logo">
        Nav Bar
      </div>
      <Burger />
    </Nav>

  );
};

export default Header;
