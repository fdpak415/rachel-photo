import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './customnavbar.css';

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar fluid collapseOnSelect>
        <Navbar.Header id="navbar">
          <Navbar.Brand>
            <Link to="/">RachelPhoto</Link>
          </Navbar.Brand>
          <Navbar.Brand id="head-center">
            Beauty Refined...
          </Navbar.Brand>

          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href='/about' to='/about'>
              About
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href='/portfolio' to='/portfolio'>
              Portfolio
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href='/testimonials' to='/testimonials'>
              Testimonials
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href='/pricing' to='/pricing'>
              Pricing
            </NavItem>
            <NavItem eventKey={5} componentClass={Link} href='/contact' to='/contact'>
              Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
