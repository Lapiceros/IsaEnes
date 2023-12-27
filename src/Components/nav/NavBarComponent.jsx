import React, { useState } from 'react'
import './NavBarComponent.css'
import { NavLink } from 'react-router-dom'

export default function NavBarComponent() {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const handleMenuToggle = () =>{
        setMenuVisible(!isMenuVisible)
    }
    return (
        <footer>
            
        <nav className={`menu ${isMenuVisible ? 'show' : 'hide'}`}>
        <ul className='menu'>
            <li className='route'><NavLink to="/" activeClassname= 'active'>HOME</NavLink></li>
            <li className='route'><NavLink to="/about" activeClassname= 'active'>ABOUT</NavLink></li>
            <li className='route'><NavLink to="/events" activeClassname= 'active'>EVENTS</NavLink></li>
            <li className='route' id='music'>MUSIC
                <ul className='subMenu'>
                    <li className='route'><NavLink to="/livesets" activeClassname= 'active'>LIVE SETS</NavLink></li>
                    <li className='route'><NavLink to="/musicproductions" activeClassname= 'active'>MUSIC PRODUCTIONS</NavLink></li>
                </ul>
            </li>
            <li className='route'>ART
                <ul className='subMenu'>
                    <li className='route'><NavLink to="/artdirections" activeClassname= 'active'>ART DIRECTION</NavLink></li>
                    <li className='route'><NavLink to="/jewelry" activeClassname= 'active'>JEWELRY</NavLink></li>
                </ul>
            </li>
            <li className='route'><NavLink to="/press" activeClassname= 'active'>PRESS</NavLink></li>
            <li className='route'><NavLink to="/collaborations" activeClassname= 'active'>COLLABORATIONS</NavLink></li>
            <li className='route'><NavLink to="/contact" activeClassname= 'active'>CONTACT</NavLink></li>
        </ul>
        </nav>
        <button id='menuBtn' onClick={handleMenuToggle}>Menu</button>
        </footer>
    )
}