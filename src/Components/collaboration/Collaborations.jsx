import './Collaborations.css'
import React from "react";
<<<<<<< HEAD
import collaborations1 from "../../assets/collaborationsimg/collaborations1.png";
import collaborations2 from "../../assets/collaborationsimg/collaborations2.png";
import collaborations3 from "../../assets/collaborationsimg/collaborations3.png";
=======
import collaborations1 from "../../assets/collaborationsimg/collaborations1.png"
import collaborations2 from "../../assets/collaborationsimg/collaborations2.png"
import collaborations3 from "../../assets/collaborationsimg/collaborations3.png"

>>>>>>> 9519d20b84c25bf7f0507c4d875ca3ae81d9e639
import Carrousel from '../carrousel/Carrousel';

export default function Collaborations() {
  const images = [collaborations1, collaborations2 , collaborations3];
  const imageLinks = [];

  return (
    <div>
      <Carrousel images={images} imageLinks={imageLinks} />
    </div>
  );
}