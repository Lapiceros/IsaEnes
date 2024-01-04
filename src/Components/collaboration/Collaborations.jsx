import './Collaborations.css'
import React from "react";
import collaborations1 from "../../assets/collaborationsimg/collaborations1.png"
import collaborations2 from "../../assets/collaborationsimg/collaborations2.png"
import collaborations3 from "../../assets/collaborationsimg/collaborations3.png"

import Carrousel from '../carrousel/Carrousel';

export default function Collaborations() {
  const title = ["COLLABORATIONS"];
  const images = [collaborations1, collaborations2 , collaborations3];
  const imageLinks = [];
  const captions = ["DESCRIPTION", "DESCRIPTION", "DESCRIPTION"];

  return (
    <div>
      <Carrousel title={title} images={images} imageLinks={imageLinks} captions={captions} />
    </div>
  );
}