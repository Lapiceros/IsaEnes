import { Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import About from './components/about/About'
import Events from './components/events/Events'
import MusicPage from './components/music/MusicPage'
import Art from './components/art/Art'
import Press from './components/press/Press' 
import Collaborations from './components/collaboration/Collaborations'

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

