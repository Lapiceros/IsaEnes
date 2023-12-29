import React, { useState } from 'react';
import './NavBarComponent.css';
import { NavLink } from 'react-router-dom';

export default function NavBarComponent() {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const handleMenuToggle = () => {
        setMenuVisible(!isMenuVisible);
    };

    return (
        <footer>
            <nav className={`menu ${isMenuVisible ? 'show' : 'hide'}`}>
                <ul className='menu-list'>
                    <li className='route'><NavLink to="/" activeClassName='active'>HOME</NavLink></li>
                    <li className='route'><NavLink to="/about" activeClassName='active'>ABOUT</NavLink></li>
                    <li className='route'><NavLink to="/events" activeClassName='active'>EVENTS</NavLink></li>
                    <li className='route' id='music'>MUSIC
                        <ul className='subMenu'>
                            <li className='route'><NavLink to="/livesets" activeClassName='active'>LIVE SETS</NavLink></li>
                            <li className='route'><NavLink to="/musicproductions" activeClassName='active'>PRODUCTIONS</NavLink></li>
                        </ul>
                    </li>
                    <li className='route'>ART
                        <ul className='subMenu'>
                            <li className='route'><NavLink to="/artdirections" activeClassName='active'>ART DIRECTION</NavLink></li>
                            <li className='route'><NavLink to="/jewelry" activeClassName='active'>JEWELRY</NavLink></li>
                        </ul>
                    </li>
                    <li className='route'><NavLink to="/press" activeClassName='active'>PRESS</NavLink></li>
                    <li className='route'><NavLink to="/collaborations" activeClassName='active'>COLLABORATIONS</NavLink></li>
                    <li className='route'><NavLink to="/contact" activeClassName='active'>CONTACT</NavLink></li>
                </ul>
            </nav>
            <button id='menuBtn' onClick={handleMenuToggle}>Menu</button>
        </footer>
    );
}
