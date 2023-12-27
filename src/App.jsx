import './App.css'
import Router from './Router'
import NavBar from './Components/nav/NavBar'
import Home from './pages/Home'



function App() {
  
  return (
    <>
    <main>
      <Router/>
    </main>
    <footer>
      <NavBar/>
    </footer>
    </>
  )
}

export default App;
