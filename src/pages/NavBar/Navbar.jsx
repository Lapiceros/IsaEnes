import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navItem">HOME</div>
            <div className="navItem selected">ABOUT</div>
            <div className="navItem">EVENTS</div>
            <div className="navItem">MUSIC</div>
            <div className="navItem">ART</div>
            <div className="navItem">PRESS</div>
            <div className="navItem">COLLABORATIONS</div>
        </nav>
    );
}

export default NavBar;