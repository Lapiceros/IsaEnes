import React, { useState } from 'react';
import './NavBarComponent.css';
import { NavLink } from 'react-router-dom';

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
            <nav className={`menu ${isMenuVisible ? 'show' : 'hide'}`}>
                <ul className='menu-list'>
                    <li className='route'><NavLink to="/" activeClassName='active' onClick={handleNavLinkClick}>HOME</NavLink></li>
                    <li className='route'><NavLink to="/about" activeClassName='active' onClick={handleNavLinkClick}>ABOUT</NavLink></li>
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
            <button id='menuBtn' onClick={handleMenuToggle}>Menu</button>
        </footer>
    );
}
