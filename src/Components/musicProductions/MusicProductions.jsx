import React from "react";
import isaimage1 from "../../assets/musicProductionsimg/isasproduction.png";
import isaimage2 from "../../assets/musicProductionsimg/isasproduction2.png";
import isaimage3 from "../../assets/musicProductionsimg/isasproduction3.png";
import Carrousel from "../carrousel/Carrousel";

export default function MusicProductions() {
  const images = [isaimage1, isaimage2, isaimage3];
  return (
    <div>
      <Carrousel images={images} />
    </div>
  );
}
