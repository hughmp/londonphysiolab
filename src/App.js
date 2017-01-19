import React from 'react';
import './bootstrap.min.css';
import './App.css';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import logo from '../public/images/london-physio-lab-logo.png';

const App = () => (
  <div className="app">
    <Navbar inverse fixedTop collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <img src={logo} alt="London Physio Lab" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">About</NavItem>
          <NavDropdown eventKey={2} title="Services" id="basic-nav-dropdown">
            <MenuItem eventKey={2.1}>Pain</MenuItem>
            <MenuItem eventKey={2.2}>Muscular</MenuItem>
            <MenuItem eventKey={2.3}>Sports</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.3}>Clinics</MenuItem>
          </NavDropdown>
          <NavItem eventKey={4} href="#">Location</NavItem>
          <NavItem eventKey={5} href="#">Contact</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className="content" />
    <div className="content" />
  </div>
);

export default App;
