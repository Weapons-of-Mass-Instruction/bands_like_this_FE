import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './CSSfiles/header.css';

class Header extends React.Component {
  render(){
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          Bands Like This
        </Navbar.Brand>
        <NavItem>
          {/* <Link to="/login">Home</Link> */}
        </NavItem>
        <NavItem>
          {/* <Link to="/meetTheTeam">MeetTheTeam</Link> */}
        </NavItem>
      </Navbar>
    );
  }
}

export default Header;
