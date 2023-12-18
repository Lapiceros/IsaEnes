import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
        <ul className='menu'>
            <li className='route'><NavLink to="/" activeClassname= 'active'>HOME</NavLink></li>
            <li className='route'><NavLink to="/about" activeClassname= 'active'>ABOUT</NavLink></li>
            <li className='route'><NavLink to="/events" activeClassname= 'active'>EVENTS</NavLink></li>
            <li className='route'>
            <ul className='subMenu'>
                <li>LIVE SETS</li>
                <li>SOUNCLOUD</li>
            </ul>
            <NavLink to="/music" activeClassname= 'active'>MUSIC</NavLink>
            </li>
            <li className='route'>
            <ul className='subMenu'>
                <li>Art Direction</li>
                <li>JEWELRY</li>
            </ul><NavLink to="/art" activeClassname= 'active'>ART</NavLink></li>
            <li className='route'><NavLink to="/press" activeClassname= 'active'>PRESS</NavLink></li>
            <li className='route'><NavLink to="/collaborations" activeClassname= 'active'>COLLABORATIONS</NavLink></li>
        </ul>
        </nav>
    )
}
