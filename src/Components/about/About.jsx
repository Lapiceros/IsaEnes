import React, { useEffect, useState } from 'react';
import './About.css'
import IsaImage from "../../assets/imagesIsa/isa5.png"


export default function About(){
    const [page, setPage] = useState(null);

    useEffect(() => {
        fetch('http://localhost/wp-json/wp/v2/pages/2')
            .then(response => response.json())
            .then(data => setPage(data))
            .catch(error => console.error(error));
    }, []);
    
    return(
        <div className='aboutContentPage'>
            <div dangerouslySetInnerHTML={{ __html: page?.content?.rendered }} />
        </div>
    )
}
/*<img src={IsaImage} alt="Isa Enes" className="aboutImage" />
<div className="aboutContent">
<p>
     Isa Enes, a multidisciplinary artist who was born and raised
     in the Azores islands, has been making a name for herself.
 </p>
 <p>
     She’s a DJ, a Music Producer, Art Director and a Jeweler.
 </p>
 <p>
     In the thriving music scene, she dabbles in a wide variety of electronic music genres,
     while still maintaining her signature style and character.
     Her music style navigates between Ambient, IDM and Techno, as well
     as her explorations of Breaks, Bass and dubby shades.
     She has been playing for events from Dublab,
     Mostra, Bridge 48, Planet Venus, Regia, Overtone and played in
     venues such as Bunker, Crack Bellmer, M7Club, La Muriel, Rouge Cocktail Club,
     Garage 442, among many others.
 </p>
</div>*/
