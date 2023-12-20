import './ArtDirection.css'
import React from "react";
import artimg1 from "../../assets/artimg1.png";
import artimg2 from "../../assets/artimg2.png";
import artimg3 from "../../assets/artimg3.png";
import artimg4 from "../../assets/artimg4.png";
import artimg5 from "../../assets/artimg5.png";
import artimg6 from "../../assets/artimg6.png";
import artimg7 from "../../assets/artimg7.png";
import Carrousel from '../carrousel/Carrousel';

export default function ArtDirections() {
  const images = [artimg1, artimg2, artimg3, artimg4, artimg5, artimg6, artimg7];
  return (
    <div>
      <Carrousel images={images} />
    </div>
  );
}
