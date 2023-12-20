import './Collaborations.css'
import React from "react";
import collaborations1 from "../../assets/img/musicProductionsimg/isasproduction.png";
import collaborations2 from "../../assets/img/musicProductionsimg/isasproduction2.png";
import collaborations3 from "../../assets/img/musicProductionsimg/isasproduction3.png";
import Carrousel from '../carrousel/Carrousel';

export default function Collaborations() {
  const images = [collaborations1, collaborations2 , collaborations3];
  return (
    <div>
      <Carrousel images={images} />
    </div>
  );
}