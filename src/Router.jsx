import { Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import AboutPage from './pages/aboutPage/AboutPage'
import ContactPage from './pages/contactPage/ContactPage'
import MusicPage from "./pages/musicPage/MusicProductionsPage"
import LiveSetsPage from "./pages/liveSetsPage/LiveSetsPage";
import ArtDirectionsPage from "./pages/artDirectionsPage/ArtDirectionsPage";
import JewelryPage from "./pages/jewelryPage/JewelryPage";
import CollaborationsPage from "./pages/collaborationsPage/CollaborationsPage";
import EventsPage from "./pages/eventsPage/EventsPage";
import PressPage from './pages/pressPage/PressPage'


function Router(){
    return(
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/about' Component={AboutPage} />
            <Route path='/artdirections' Component={ArtDirectionsPage} />
            <Route path='/jewelry' Component={JewelryPage} />
            <Route path='/collaborations' Component={CollaborationsPage} />
            <Route path='/events' Component={EventsPage} />
            <Route path="/press" Component={PressPage} />
            <Route path='/musicproductions' Component={MusicPage} />
            <Route path='/livesets' Component={LiveSetsPage} />
            <Route path='/contact' Component={ContactPage} />
        </Routes>
    )
}

export default Router;