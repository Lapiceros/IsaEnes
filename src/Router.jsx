import { Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
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
        </Routes>
    )
}

export default Router;

