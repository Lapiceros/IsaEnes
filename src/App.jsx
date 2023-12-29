import './App.css'
import Router from './Router'
import NavBarComponent from './Components/nav/NavBarComponent'
import Home from './pages/Home'



function App() {
  
  return (
    <>
    <main>
      <Router/>
    </main>
    <footer>
      <NavBarComponent/>
    </footer>
    </>
  )
}

export default App;
