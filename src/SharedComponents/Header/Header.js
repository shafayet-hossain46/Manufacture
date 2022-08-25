import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import {signOut } from 'firebase/auth';
import auth from '../../Firebase/Firebase.init';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    // Sign Out
    const logout = () => {
        signOut(auth);
      };
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                    {
                        user? <>
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link onClick={logout}>LogOut</Nav.Link>
                        <Nav.Link>{user?.displayName}</Nav.Link>
                        </>
                        : 
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;