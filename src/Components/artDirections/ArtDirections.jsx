import './ArtDirections.css'
import React from "react";
import artimg1 from "../../assets/artdirectionsimg/artimg1.png";
import artimg2 from "../../assets/artdirectionsimg/artimg2.png";
import artimg3 from "../../assets/artdirectionsimg/artimg3.png";
import artimg4 from "../../assets/artdirectionsimg/artimg4.png";
import artimg5 from "../../assets/artdirectionsimg/artimg5.png";
import artimg6 from "../../assets/artdirectionsimg/artimg6.png";
import artimg7 from "../../assets/artdirectionsimg/artimg7.png";

import Carrousel from '../carrousel/Carrousel';

export default function ArtDirections() {
  const title = ["ART DIRECTIONS"]
  const images = [artimg1, artimg2, artimg3, artimg4, artimg5, artimg6, artimg7];
  const imageLinks = [
    "https://www.instagram.com/p/CtqpRsdqQSA/?img_index=1",
    "https://www.instagram.com/p/CtqpRsdqQSA/?img_index=1",
    "https://www.instagram.com/p/CtqpRsdqQSA/?img_index=1",
    "https://www.instagram.com/p/CfVzkFyNom4/?img_index=1",
    "https://www.youtube.com/watch?v=1-pRYH36FxA",
    "https://www.youtube.com/watch?v=1-pRYH36FxA",
    "https://www.youtube.com/watch?v=1-pRYH36FxA",

  ];
  const captions = [
    "Granada Concert, 2023",
    "Granada Concert, 2023",
    "Granada Concert, 2023",
    "Photoshoot by Paola Idrontino, 2022",
    "Shortmovie OPÍA, 2022",
    "Shortmovie OPÍA, 2022",
    "Shortmovie OPÍA, 2022",
  ];

  return (
    <div>
      <Carrousel  title={title} images={images} imageLinks={imageLinks} captions={captions} />
    </div>
  );
}

