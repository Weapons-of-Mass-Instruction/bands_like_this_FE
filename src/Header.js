import React from 'react';
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoutButton from './Main/LogoutButton';
import './CSSfiles/header.css';


class Header extends React.Component {
  render() {
    return (
      <Navbar className="bg-warning bg-gradient text-dark" expand="lg">
        <Container>
          <Container>
            <Navbar.Brand href="/">
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
              <Link to="/meet-the-team">Meet The Band</Link>
              <Link to="/">ReWind</Link>
              {/* <Nav.Link href="/">
                ReWind
              </Nav.Link> */}
              {/* <Nav.Link href="/meet-the-team">
                Meet The Band
              </Nav.Link> */}
              <NavDropdown title="Flip through the records" id="basic-nav-dropdown">
                <NavDropdown.Item href="/meet-the-team">
                  MeetTheBand
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

