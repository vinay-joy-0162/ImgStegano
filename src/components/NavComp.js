import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";



import Home from "./Steghome";
import UploadButton from "./Encode";
import Decode from "./Decode";
import Transfer from "./Sending";

export default class NavComp extends Component {

    render () {
        return (
  
          
        <div>
            <Navbar expand="lg" className="bg-dark-subtle">
      <Container>
        <Navbar.Brand href="#home">Steg</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to = "/">Home</Nav.Link>
              <Nav.Link as={Link} to = "/Uploadbutton">Encode</Nav.Link>
            <Nav.Link  as={Link} to = "/Decode">Decode
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>




<div>
  <Routes>
    <Route path="/Uploadbutton" element={<UploadButton/>}/>
    <Route path="/Decode" element={<Decode/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/Transfer" element={<Transfer/>}/>

  </Routes>
</div>

</div>

          

   

        )
    }
}

