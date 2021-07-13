import React from 'react'
import {Navbar, Nav, NavLink} from "react-bootstrap"

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">APP</Navbar.Brand>
            <Nav className="mr-auto">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Sign In</NavLink>
            </Nav>
        </Navbar>
    )
}

export default Header
