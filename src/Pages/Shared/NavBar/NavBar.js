
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import brand from '../../../images/mobi-house.jpg';

const NavBar = () => {

        const { user, logOut } = useAuth()
        return (
                <>
                        <Navbar bg="dark" variant="dark">
                                <Container>
                                        <Navbar.Brand style={{ fontSize: '2rem' }} className="m-0" as={Link} to="/home">
                                                <h2>Mobi House</h2>
                                        </Navbar.Brand>
                                        <Nav className="ms-auto text-center">
                                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                                <Nav.Link as={Link} to="/explore">More Product</Nav.Link>
                                                {
                                                        user?.email && <Nav.Link as={Link} to="/dash">DashBord</Nav.Link>
                                                }
                                                {
                                                        user?.email ? <Nav.Link onClick={logOut}>Log out</Nav.Link> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                                }


                                        </Nav>
                                </Container>

                        </Navbar>
                </>
        );
};

export default NavBar;