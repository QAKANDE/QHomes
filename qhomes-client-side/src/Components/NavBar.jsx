import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,Button} from 'react-bootstrap'
import './NavBar.css'
class NavBar extends Component {
    render() { 
        return ( 
   <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">
  <img  id="brand-img" src="../../assets/Archi-kraft-logo.png"></img>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Help</Nav.Link>
      <Button className="Nav-Link mx-1" variant="outline-primary">Log In As A seller</Button>
      <Button className="Nav-Link mx-1" variant="outline-primary">Sign Up As A Seller</Button>
      <Button className="Nav-Link mx-1" variant="outline-primary">Log In As A Buyer</Button>
      <Button className="Nav-Link mx-1" variant="outline-primary">Sign Up As A Buyer</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
         );
    }
}
 
export default NavBar;