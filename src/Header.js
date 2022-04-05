import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import { Container, Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CSSfiles/header.css';

class Header extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Brand>Bands Like This</Navbar.Brand>
        <div>
          <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem><Link to="/meetTheTeam">Meet The Team</Link></NavItem>
        </div>
      </Navbar>
      // <Navbar bg="light" expand="lg">
      //   <Container>
      //     <Navbar.Brand>Bands Like This</Navbar.Brand>
      //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //     <Navbar.Collapse id="basic-navbar-nav">
      //       <Nav className="me-auto">
      //         <Nav.Link to="/login">Home</Nav.Link>
      //         <Nav.Link to="/meetTheTeam">Meet The Team</Nav.Link>
      //       </Nav>
      //     </Navbar.Collapse>
      //   </Container>
      // </Navbar>
    );
  }
}

export default Header;
