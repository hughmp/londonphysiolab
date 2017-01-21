import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './styles/navbar.css';
import logo from '../../public/images/london-physio-lab-logo.png';

export default () => (
  <Navbar inverse fixedTop collapseOnSelect>
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
        <LinkContainer
          to="/about"
          activeClassName="active-link"
        >
          <NavItem eventKey={1}>
            ABOUT
          </NavItem>
        </LinkContainer>
        <NavDropdown eventKey={2} title="SERVICES" id="basic-nav-dropdown">
          <MenuItem eventKey={2.1}>Sports Massage</MenuItem>
          <MenuItem eventKey={2.2}>Gait Analysis</MenuItem>
          <MenuItem eventKey={2.3}>Running Coaching</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={2.3}>Clinical Pilates</MenuItem>
        </NavDropdown>
        <LinkContainer
          to="/locations"
          activeClassName="active-link"
        >
          <NavItem eventKey={3}>
            LOCATIONS
          </NavItem>
        </LinkContainer>
        <LinkContainer
          to="/fees"
          activeClassName="active-link"
        >
          <NavItem eventKey={4}>
            FEES
          </NavItem>
        </LinkContainer>        
        <LinkContainer
          to="/insurance"
          activeClassName="active-link"
        >
          <NavItem eventKey={5}>
            INSURANCE
          </NavItem>
        </LinkContainer>  
        <LinkContainer
          to="/contact"
          activeClassName="active-link"
        >
          <NavItem eventKey={6}>
            CONTACT
          </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
