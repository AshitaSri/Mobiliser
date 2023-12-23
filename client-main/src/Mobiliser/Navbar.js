import React from 'react';
import './Navbar.css'; // Import your CSS file here

function Navbar() {
    return (
        <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#newRegistration">New Registration</a>
            <a href="#Logout">Logout</a>
        </nav>
    );
}

export default Navbar;
