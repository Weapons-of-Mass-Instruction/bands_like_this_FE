import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import { Container, Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CSSfiles/header.css';
import LogoutButton from './Main/LogoutButton';

// TODO: grab a nice team or team/band/music themed icon for this (maybe we change the wording to meet the band)

class Header extends React.Component {
  render() {
    return (
      <header className="hflexbox-container">

      <Navbar className="hflexbox-item hflexbox-item-2">
        <Navbar.Brand className="hflexbox-item hflexbox-item-3" href="/"></Navbar.Brand>
        <div>
          <NavItem className="hflexbox-item hflexbox-item-4"><Link to="/">Home</Link></NavItem>
          <NavItem className="hflexbox-item hflexbox-item-6"><Link to="/meetTheTeam">Meet The Band</Link></NavItem>
          <NavItem className="hflexbox-item hflexbox-item-5"><LogoutButton /></NavItem>
        </div>
      </Navbar>
      </header>
    );
  }
}

export default Header;
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
