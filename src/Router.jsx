import { Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import About from './components/about/About'
import MusicPage from "./pages/musicPage/MusicProductionsPage"
import LiveSetsPage from "./pages/liveSetsPage/LiveSetsPage";
import ArtDirectionsPage from "./pages/artDirectionsPage/ArtDirectionsPage";
import JewelleryPage from "./pages/jewelleryPage/JewelleryPage";
import CollaborationsPage from "./pages/collaborationsPage/CollaborationsPage";
import EventsPage from "./pages/eventsPage/EventsPage";



function Router(){
    return(
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/about' Component={About} />
            <Route path='/artdirections' Component={ArtDirectionsPage} />
            <Route path='/jewellery' Component={JewelleryPage} />
            <Route path='/collaborations' Component={CollaborationsPage} />
            <Route path='/events' Component={EventsPage} />
            
            <Route path='/musicproductions' Component={MusicPage} />
            <Route path='/livesets' Component={LiveSetsPage} />
        </Routes>
    )
}

export default Router;