import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom';
import './Header.css'
import auth from '../../../firebase.init'
import logo from '../../../images/logo.png'
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user] = useAuthState(auth)
    // console.log(user);

    const handleSignout = () => {
        signOut(auth)
    }

    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    <img height={30} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link href="home\#experts">Experts</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            {
                                user && <>
                                    <NavDropdown.Item as={Link} to="/add">Add Services</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/manage">Manage Services</NavDropdown.Item>
                                </>
                            }
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>

                        {user ? <Nav.Link onClick={handleSignout} eventKey={2} >
                            SignOut
                        </Nav.Link>
                            : <Nav.Link as={Link} eventKey={2} to="/login">
                                Login
                            </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    );
};

export default Header;