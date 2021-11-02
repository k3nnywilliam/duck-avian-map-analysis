import React, { Component } from 'react';
import { render } from 'react-dom';
import {Container, Navbar, Offcanvas, Nav, NavDropdown} from 'react-bootstrap';
import navstyles from './Navbar.css';

const MapNavbar = () => {
    return (
        < Navbar bg="light" expand={false} >
            <Container fluid>
                <Navbar.Brand href="#">Market Poultry Chain (In the Context Avian Influenza Transmission)</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <NavDropdown title="Choose Duck Tag" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href="#action3">Tag ID 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Tag ID 2</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar >

    );
};

export default MapNavbar;