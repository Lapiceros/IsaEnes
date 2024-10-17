import './Collaborations.css'
import React from "react";
import collaborations1 from "../../assets/collaborationsimg/collaborations1.png"
import collaborations2 from "../../assets/collaborationsimg/collaborations2a.png"
import collaborations3 from "../../assets/collaborationsimg/collaborations3.png"


import Carrousel from '../carrousel/Carrousel';

export default function Collaborations() {
  const title = ["COLLABS"];
  const images = [collaborations1, collaborations2 , collaborations3];
  const imageLinks = ["https://beccacole.com/collections/elements", "https://www.youtube.com/watch?v=VPdbqTrQfqs", "https://www.momo-mag.com/drassanes-ii/" ];
  const captions = ["Becca &amp; Cole, Elements Collection, 2022", "DJ set for Kreis (Visuals for Techno) – Vol III, 2023", "Drassanes II Photodhoot for Momo Mag, by Ismael Llopis, 2022"];

  return (
    <div>
      <Carrousel title={title} images={images} imageLinks={imageLinks} captions={captions} />
    </div>
  );
}