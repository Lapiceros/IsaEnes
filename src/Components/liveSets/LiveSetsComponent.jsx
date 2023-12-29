// LiveSetsComponent.js
import React from 'react';
import Carrousel from '../carrousel/Carrousel';

import album1 from "../../assets/liveSetsimg/album1.jpeg";
import album2 from "../../assets/liveSetsimg/album2.jpeg";
import album3 from "../../assets/liveSetsimg/album3.jpeg";
import album4 from "../../assets/liveSetsimg/album4.jpeg";
import album5 from "../../assets/liveSetsimg/album5.jpeg";
import album6 from "../../assets/liveSetsimg/album6.jpeg";

function LiveSetsComponent() {
  const images = [album1, album2, album3, album4, album5, album6];
  const imageLinks = [
    "https://soundcloud.com/jackiesbarcelona/jackies-music-house-session-154-isa-enes",
    "https://soundcloud.com/isaenes/isa-enes-bfh",
    "https://soundcloud.com/etherealgroovesofficial/ethereal-mix-068-isa-enes",
    "https://soundcloud.com/isaenes/djsetweirdsose",
    "https://soundcloud.com/rblmedia/isa-enes-rbl-goes-to-crack",
    "https://soundcloud.com/communioncircuit/communion-088-isa-enes",
  ];

  return (
    <div>
      <Carrousel images={images} imageLinks={imageLinks} />
    </div>
  );
}

export default LiveSetsComponent;
