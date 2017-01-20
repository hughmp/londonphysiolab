import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import logo from '../../public/images/london-physio-lab-logo.png';

export default () => (
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
            <MenuItem eventKey={2.1}>Sports Massage</MenuItem>
            <MenuItem eventKey={2.2}>Gait Analysis</MenuItem>
            <MenuItem eventKey={2.3}>Running Coaching</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.3}>Clinical Pilates</MenuItem>
        </NavDropdown>
        <NavItem eventKey={4} href="#">Locations</NavItem>
        <NavItem eventKey={5} href="#">Fees</NavItem>
        <NavItem eventKey={6} href="#">Insurance</NavItem>
        <NavItem eventKey={7} href="#">Contact</NavItem>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
);