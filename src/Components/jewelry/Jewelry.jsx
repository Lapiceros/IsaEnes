import React from "react";
import isa7 from "../../assets/jewelleryimg/isa7.png";
import Carrousel from "../carrousel/Carrousel";

export default function Jewelry() {
  const images = [isa7.png];
  return (
    <div>
      <Carrousel images={images} />
    </div>
  );
}
