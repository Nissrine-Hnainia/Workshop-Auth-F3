import React from 'react'
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">APP</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Sign In</Link>
            </Nav>
        </Navbar>
    )
}

export default Header
