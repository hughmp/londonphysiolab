import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./styles/navbar.css";
import logo from "../../public/images/london-physio-lab-logo.png";

export default () => (
  <Navbar fluid inverse fixedTop collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">
          <img src={logo} alt="London Physio Lab" className="img-responsive" />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <LinkContainer to="/about">
          <NavItem eventKey={1}>ABOUT</NavItem>
        </LinkContainer>
        <LinkContainer to="/services">
          <NavItem eventKey={2}>SERVICES</NavItem>
        </LinkContainer>
        <LinkContainer to="/locations">
          <NavItem eventKey={3}>LOCATIONS</NavItem>
        </LinkContainer>
        <LinkContainer to="/fees">
          <NavItem eventKey={4}>FEES</NavItem>
        </LinkContainer>
        <LinkContainer to="/insurance">
          <NavItem eventKey={5}>INSURANCE</NavItem>
        </LinkContainer>
        <LinkContainer to="/contact">
          <NavItem eventKey={6}>CONTACT</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
