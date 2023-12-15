import { Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import About from './components/about/About'
import MusicPage from "./pages/MusicPage/MusicPage"


function Router(){
    return(
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/about' Component={About} />
            <Route path='/music' Component={MusicPage} />
        </Routes>
    )
}

export default Router;