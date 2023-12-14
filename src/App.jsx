
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
                <li className='route'><NavLink to="/about" activeClassname= 'active'>about</NavLink></li>
                <li className='route'><NavLink to="/music" activeClassname= 'active'>Music</NavLink></li>
                <li className='route'><NavLink to="/" activeClassname= 'active' exact>Home</NavLink></li>
            </ul>
        </nav>
    </footer>
    </>
  )
}

export default App;
