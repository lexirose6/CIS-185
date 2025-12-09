import { useState } from 'react'
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import Home from "./Home.jsx"
import Projects from "./Projects.jsx"

function NavBar() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="../src/Home.jsx">
                    Alexia Wells
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className ="me-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <NavDropdown title="Projects" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Project 1</NavDropdown.Item>
                                <NavDropdown.Item href="#">Project 2</NavDropdown.Item>
                                <NavDropdown.Item href="#">Project 3</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
