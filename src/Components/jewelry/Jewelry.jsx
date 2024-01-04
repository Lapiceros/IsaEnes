import React from "react";
import isa7 from "../../assets/jewelryimg/isa7.png";

import Carrousel from "../carrousel/Carrousel";

export default function Jewelry() {
  const title = ["JEWERLY"];
  const images = [isa7];
  const imageLinks = [];
  const captions = ["DESCRIPTION",];

  return (
    <div>
      <Carrousel title={title} images={images} imageLinks={imageLinks} captions={captions} />
    </div>
  );
}
