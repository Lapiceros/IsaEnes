import React from "react";
import isa7 from "../../assets/jewelryimg/isa7.png";

import Carrousel from "../carrousel/Carrousel";

export default function Jewelry() {
  const images = [isa7];
  const imageLinks = [];

  return (
    <div>
      <Carrousel images={images} imageLinks={imageLinks} />
    </div>
  );
}
