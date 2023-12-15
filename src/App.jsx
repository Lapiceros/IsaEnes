import './App.css'
import Router from './Router'
import Home from './pages/Home'
import { NavLink } from 'react-router-dom'


function App() {
  
  return (
    <>
    <main className='mainContainer'>
      <Router/>
    </main>
    <footer>
    <nav>
      <ul>
        <li className='route'><NavLink to="/" activeClassname= 'active'>HOME</NavLink></li>
        <li className='route'><NavLink to="/about" activeClassname= 'active'>ABOUT</NavLink></li>
        <li className='route'><NavLink to="/events" activeClassname= 'active'>EVENTS</NavLink></li>
        <li className='route'><NavLink to="/music" activeClassname= 'active'>MUSIC</NavLink></li>
        <li className='route'><NavLink to="/art" activeClassname= 'active'>ART</NavLink></li>
        <li className='route'><NavLink to="/press" activeClassname= 'active'>PRESS</NavLink></li>
        <li className='route'><NavLink to="/collaborations" activeClassname= 'active'>COLLABORATIONS</NavLink></li>
      </ul>
        </nav>
    </footer>
    </>
  )
}

export default App
