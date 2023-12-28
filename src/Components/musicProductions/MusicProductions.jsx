// MusicProductions.js
import React from 'react';
import './MusicProductions.css';

import isaproduction from "../../assets/musicProductionsimg/isasproduction.png";
import isaproduction2 from "../../assets/musicProductionsimg/isasproduction2.png";
import isaproduction3 from "../../assets/musicProductionsimg/isasproduction3.png";

import Carrousel from '../carrousel/Carrousel';

function MusicProductions() {
  const title = ["MUSIC PRODUCTIONS"]
  const images = [isaproduction, isaproduction2, isaproduction3];
  const imageLinks = [
    "https://soundcloud.com/isaenes/amusement-park",
    "https://soundcloud.com/isaenes/floating-in-air",
    "https://soundcloud.com/isaenes/isa-enes-bfh",
  ];
  const captions = [
    "Isa Enes - Amusement Park",
    "Isa Enes - Floating in air",
    "Isa Enes - BFH",

  ];

  return (
    <div>
      <Carrousel title={title} images={images} imageLinks={imageLinks} captions={captions} />
    </div>
  );
}

export default MusicProductions;
