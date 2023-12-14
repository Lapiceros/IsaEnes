import { Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/about'
import Events from './components/events'
import MusicPage from './components/music/MusicPage'
import Art from './components/art'
import Press from './components/press' 
import Collaborations from './components/collaboration'

function Router(){
    return(
        <Routes>
            <Route path='/' element={Home} />
            <Route path='/about' element={About} />
            <Route path='/events' element={Events} />
            <Route path='/music' element={MusicPage} />
            <Route path='/art' element={Art} />
            <Route path='/press' element={Press} />
            <Route path='/collaborations' element={Collaborations} />
        </Routes>
    )
}

export default Router;

