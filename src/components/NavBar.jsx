import React from 'react'
// src/components/NavBar.jsx

import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';



export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={NavLink} to="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link as={NavLink} to="/" activeclassname="active">
                        Home
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/users" activeclassname="active">
                        Users
                    </Nav.Link>
                    <NavDropdown title="Examples" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/user-form"> User Form</NavDropdown.Item>
                        <NavDropdown.Item href="#">Something Else</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
