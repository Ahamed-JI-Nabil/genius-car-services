import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand className='mx-5' href="#home">
                <img
                    src={logo}
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="/services">Services</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    );
};

export default Header;