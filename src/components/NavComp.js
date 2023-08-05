import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class NavComp extends Component {

    render () {
        return (
            <Navbar expand="lg" className="bg-dark-subtle">
      <Container>
        <Navbar.Brand href="#home">Steg</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Encode</Nav.Link>
            <Nav.Link href="#link">Decode
            {/* <Nav.Link href="#link">Sign-in
            </Nav.Link> */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        )
    }
}