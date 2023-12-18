import { Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'
import MusicPage from "./pages/MusicPage/MusicProductionsPage"
import LiveSetsPage from "./pages/LiveSetsPage/LiveSetsPage";
import Collaborations from "./components/collaboration/Collaborations";
import Events from "./components/events/Events";
import Press from "./components/press/Press";


function Router(){
    return(
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/about' Component={AboutPage} />
            <Route path='/contact' Component={ContactPage} />
            <Route path='/collaborations' Component={Collaborations} />
            <Route path='/events' Component={Events} />
            <Route path='/press' Component={Press} />
            <Route path='/musicproductions' Component={MusicPage} />
            <Route path='/livesets' Component={LiveSetsPage} />
        </Routes>
    )
}

export default Router;