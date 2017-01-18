import React from 'react';
import './bootstrap.min.css';
import './App.css';

import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

import logo from '../public/images/london-physio-lab-logo.png';

const App = () => (
  <div className="app">
    <Navbar inverse fixedTop collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <img src={logo} alt="London Physio Lab" className="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
          <NavItem eventKey={4} href="#">Link Right</NavItem>
          <NavItem eventKey={5} href="#">Link Right</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className="content" />
    <div className="content" />
  </div>
);

export default App;
