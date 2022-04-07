import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import { Container, Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import '../CSSfiles/header.css';
import LogoutButton from './Main/LogoutButton';

// TODO: grab a nice team or team/band/music themed icon for this (maybe we change the wording to meet the band)

class Header extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Brand>RECCrd.bin</Navbar.Brand>
        <div>
          <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem><LogoutButton /></NavItem>
          <NavItem><Link to="/meetTheTeam">Meet The Band</Link></NavItem>
        </div>
      </Navbar>
    );
  }
}

export default Header;

