import React from "react";


import {
    Nav,
    Navbar,
    Form,
    FormControl,
    Button,
    NavDropdown,
  } from 'react-bootstrap'


const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" fixed="top" expand="lg">
        <Navbar.Brand href="#home">Droix</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Android Devices</Nav.Link>
            <NavDropdown title="MoreItems" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mini PC & IT</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Gaming
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SmartHome</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Refurbished
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <Button className="btn-primary m-1" >Login</Button>
        <Button className="btn-primary m-1" >SignUp</Button>
      </Navbar>
    </div>
  );
};

export default NavBar;
