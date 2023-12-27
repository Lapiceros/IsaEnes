import './ArtDirections.css'
import React from "react";
import artimg1 from "../../assets/artdirectionsimg/artimg1.png";
import artimg2 from "../../assets/artdirectionsimg/artimg2.png";
import artimg3 from "../../assets/artdirectionsimg/artimg3.png";
import artimg4 from "../../assets/artdirectionsimg/artimg4.png";
import artimg5 from "../../assets/artdirectionsimg/artimg5.png";
import artimg6 from "../../assets/artdirectionsimg/artimg6.png";
import artimg7 from "../../assets/artdirectionsimg/artimg7.png";
import artimg1 from "../../assets/artdirectionsimg/artimg1.png";
import artimg2 from "../../assets/artdirectionsimg/artimg2.png";
import artimg3 from "../../assets/artdirectionsimg/artimg3.png";
import artimg4 from "../../assets/artdirectionsimg/artimg4.png";
import artimg5 from "../../assets/artdirectionsimg/artimg5.png";
import artimg6 from "../../assets/artdirectionsimg/artimg6.png";
import artimg7 from "../../assets/artdirectionsimg/artimg7.png";
import Carrousel from '../carrousel/Carrousel';

export default function ArtDirections() {
  const images = [artimg1, artimg2, artimg3, artimg4, artimg5, artimg6, artimg7];
  const imageLinks = [];

  return (
    <div>
      <Carrousel images={images} imageLinks={imageLinks} />
    </div>
  );
}

