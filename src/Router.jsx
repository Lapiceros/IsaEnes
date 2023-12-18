import { Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import About from './components/about/About'
import Music from "./components/music/Music";
import Art from "./components/art/Art";
import Collaborations from "./components/collaboration/Collaborations";
import Events from "./components/events/Events";
import Press from "./components/press/Press";


function Router(){
    return(
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/about' Component={AboutPage} />
            <Route path='/collaborations' Component={Collaborations} />
            <Route path='/events' Component={Events} />
            <Route path='/press' Component={Press} />
            <Route path='/musicproductions' Component={MusicPage} />
            <Route path='/livesets' Component={LiveSetsPage} />
        </Routes>
    )
}

export default Router;

