import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
// import NavItem from 'react-bootstrap/NavItem';
import { Link } from 'react-router-dom';
import './CSSfiles/header.css';

class Header extends React.Component {
  render() {
    return (
      // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      //   <Navbar.Brand>
      //     Bands Like This
      //   </Navbar.Brand>
      //   <NavItem>
      //     <Link to="/login">Home</Link>
      //   </NavItem>
      //   <NavItem>
      //     <Link to="/meetTheTeam">MeetTheTeam</Link>
      //   </NavItem>
      // </Navbar>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Bands Like This</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/login">Home</Link>
              <Link to="/meetTheTeam">MeetTheTeam</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
