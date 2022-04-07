import React from 'react';
import './CSSfiles/footer.css';
import { Navbar, Nav, Container } from 'react-bootstrap';



class Footer extends React.Component {
  render() {
    return (
      <Navbar className="bg-warning bg-gradient text-dark"  expand="lg">
<Container>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <img
              src={'img/GitHub-Mark-64px.png'}
              href="https://github.com/Weapons-of-Mass-Instruction"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> 
            <Nav.Link href="https://github.com/Weapons-of-Mass-Instruction">GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
</Container>
      </Navbar>
    );
  }
}

export default Footer;
