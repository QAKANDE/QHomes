import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,Button} from 'react-bootstrap'
class SecondNavBar extends Component {
    render() { 
        return (  
            <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Architectural Portfolio</Nav.Link>
                <Nav.Link href="#link">Interior Design Portfolio</Nav.Link>
                <Nav.Link href="#link">Sell your Design</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}
 
export default SecondNavBar;