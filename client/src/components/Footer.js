import React from 'react'
import { NavLink } from 'react-bootstrap'

const Footer = () => {
    return (
        <div className="footer">
            <div className="left-container">
                <p>Copyirght © 2021, All rigths reserved Nissrine Hnainia</p>
            </div>
            <div className="right-container">
                <NavLink to="#">Home</NavLink>
                <NavLink to="#">Terms</NavLink>
                <NavLink to="#">Pivacy Policy</NavLink>
                <NavLink to="#">Contact Us</NavLink>
            </div>
        </div>
    )
}

export default Footer
