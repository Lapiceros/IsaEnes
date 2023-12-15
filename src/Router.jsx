import { Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import About from './components/about/about/About'
import Events from './components/events/Events'
import MusicProductions from './components/music/musicProductions/MusicProductions'
import LiveSets from "./components/music/liveSets/LiveSets";
import ArtDirection from "./components/art/artDirection/ArtDirection";
import Jewlery from "./components/art/jewlery/Jewelery";
import Press from './components/press/Press' 
import Collaborations from './components/collaboration/Collaborations'


function Router(){
    return(
        <Routes>
            <Route path='/' element={Home} />
            <Route path='/about' element={About} />
            <Route path='/events' element={Events} />
            <Route path='/musicproductions' element={MusicProductions} />
            <Route path='/livesets' element={LiveSets} />
            <Route path='/artdirection' element={ArtDirection} />
            <Route path='/jewlery' element={Jewlery} />
            <Route path='/press' element={Press} />
            <Route path='/collaborations' element={Collaborations} />
        </Routes>
    )
}

export default Router;

