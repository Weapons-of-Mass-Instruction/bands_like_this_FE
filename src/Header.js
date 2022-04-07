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
            <Navbar.Brand href="/MusicRecs">
              <img
                src={'img/image_720.png'}
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
              <Nav.Link href="/MusicRecs">
                Home
              </Nav.Link>
              <Nav.Link href="/SearchForm">
                Search
              </Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="/MeetTheTeam">
                  MeetTheBand
                </NavDropdown.Item>
                <NavDropdown.Item href="/Profile">
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

