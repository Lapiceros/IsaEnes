import { Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import About from './components/about/About'
import Music from "./components/music/Music";


function Router(){
    return(
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/about' Component={About} />
            <Route path='/music' Component={Music} />
        </Routes>
    )
}

export default Router;