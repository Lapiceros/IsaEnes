import { Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import About from './components/about/About'
import MusicPage from "./pages/MusicPage/MusicPage"
import LiveSetsPage from "./pages/LiveSetsPage/LiveSetsPage";


function Router(){
    return(
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/about' Component={About} />
            <Route path='/musicproductions' Component={MusicPage} />
            <Route path='/livesets' Component={LiveSetsPage} />
        </Routes>
    )
}

export default Router;