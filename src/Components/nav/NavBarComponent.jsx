import React, { useState } from 'react';
import './NavBarComponent.css';
import { Link, NavLink } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export default function NavBarComponent() {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const handleMenuToggle = () => {
        setMenuVisible(!isMenuVisible);
    };

    const handleNavLinkClick = () => {
        // Cerrar el menú al hacer clic en un enlace
        setMenuVisible(false);
    };

    return (
        <footer>
            <nav className='menu'>
                <ul className='menu-list'>
                    <li className='route'><NavLink to="/" activeClassName='active' onClick={handleNavLinkClick}>HOME</NavLink></li>
                    <li className='route'><NavLink to="/about" activeClassName='active' onClick={handleNavLinkClick}>ABOUT</NavLink></li>
                    <li className='route'><NavLink to="/events" activeClassName='active' onClick={handleNavLinkClick}>EVENTS</NavLink></li>
                    <li className='route' id='music'>MUSIC
                        <ul className='subMenu'>
                            <li className='route'><NavLink to="/livesets" activeClassName='active' onClick={handleNavLinkClick}>LIVE SETS</NavLink></li>
                            <li className='route'><NavLink to="/musicproductions" activeClassName='active' onClick={handleNavLinkClick}>PRODUCTIONS</NavLink></li>
                        </ul>
                    </li>
                    <li className='route'>ART
                        <ul className='subMenu'>
                            <li className='route'><NavLink to="/artdirections" activeClassName='active' onClick={handleNavLinkClick}>ART DIRECTION</NavLink></li>
                            <li className='route'><NavLink to="/jewelry" activeClassName='active' onClick={handleNavLinkClick}>JEWELRY</NavLink></li>
                        </ul>
                    </li>
                    <li className='route'><NavLink to="/press" activeClassName='active' onClick={handleNavLinkClick}>PRESS</NavLink></li>
                    <li className='route'><NavLink to="/collaborations" activeClassName='active' onClick={handleNavLinkClick}>COLLABORATIONS</NavLink></li>
                    <li className='route'><NavLink to="/contact" activeClassName='active' onClick={handleNavLinkClick}>CONTACT</NavLink></li>
                </ul>
            </nav>
            <nav className={`phoneMenu ${isMenuVisible ? 'show' : 'hide'}`}>
                <ul>
                    <li><NavLink to="/" onClick={handleNavLinkClick}>Home</NavLink></li>
                    <li><NavLink to="/about" onClick={handleNavLinkClick}>About</NavLink></li>
                    <li><NavLink to="/events" onClick={handleNavLinkClick}>Events</NavLink></li>
                    <li><NavLink to="/livesets" onClick={handleNavLinkClick}>Live sets</NavLink></li>
                    <li><NavLink to="/musicproductions" onClick={handleNavLinkClick}>Productions</NavLink></li>
                    <li><NavLink to="/artdirections" onClick={handleNavLinkClick}>Art direction</NavLink></li>
                    <li><NavLink to="/jewelry" onClick={handleNavLinkClick}>Jewelry</NavLink></li>
                    <li><NavLink to="/press" onClick={handleNavLinkClick}>Press</NavLink></li>
                    <li><NavLink to="/collaborations" onClick={handleNavLinkClick}>Collaborations</NavLink></li>
                    <li><NavLink to="/contact" onClick={handleNavLinkClick}>Contact</NavLink></li>
                </ul>
            </nav>
            <button id='menuBtn' onClick={handleMenuToggle}>Menu</button>
        </footer>
    );
}
