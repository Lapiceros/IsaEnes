import './Home.css'

import instalogo from "../assets/icons/instagram.svg";
import soundlogo from "../assets/icons/soundcloud.svg";
import youlogo from "../assets/icons/youtube.svg";

function Home(){
    return(
        <div className='title-container'>
            <h1 className='text-container'>ISA ENES</h1>
            <div className='homeLogo'>
            <a href="https://www.instagram.com/isa.enes/" target='_blank'><img  src={instalogo} alt="" /></a>
            <a href="https://soundcloud.com/isaenes"><img id='soundLogo' src={soundlogo} alt="" /></a>
            <a href=""><img  src={youlogo} alt="" /></a>
            </div>
        </div>
    )
}

export default Home