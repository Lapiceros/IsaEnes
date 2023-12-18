
import './App.css'
import Router from './Router'
import NavBar from './components/nav/NavBar'
import Home from './pages/Home'



function App() {
  
  return (
    <>
    <main className='mainContainer'>
      <Router/>
    </main>
    <footer>
      <NavBar/>
    </footer>
    </>
  )
}

export default App;
