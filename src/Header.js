import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import LogoutButton from './Main/LogoutButton';
import './CSSfiles/header.css';


class Header extends React.Component {
  render() {
    return (
      <Navbar className="bg-warning bg-gradient text-dark" expand="lg">
        <Container>
        <Container>
          <Navbar.Brand href="/MusicRecs.js">
            <img
              src={require('./img/image_720.png')}
              width="150"
              height="150"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> 
          </Navbar.Brand>
          </Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/MusicRecs.js">
                Home
              </Nav.Link>
              <Nav.Link href="/SearchForm.js">
                Search
              </Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="/MeetTheTeam.js">
                  MeetTheBand
                </NavDropdown.Item>
                <NavDropdown.Item href="/Profile.js">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >
                  <LogoutButton />
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
