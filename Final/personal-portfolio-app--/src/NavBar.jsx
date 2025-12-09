import { Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
                <Container>
                    <Navbar.Brand href="/Home">
                    Alexia Wells
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className ="me-auto">
                            <Nav.Link href="/Home">Home</Nav.Link>
                            <NavDropdown title="Projects" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Project1">Project 1</NavDropdown.Item>
                                <NavDropdown.Item href="/Project2">Project 2</NavDropdown.Item>
                                <NavDropdown.Item href="/Project3">Project 3</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
