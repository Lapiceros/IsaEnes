import React from "react";
import Swiper from "../swiper/Swiper";

import isaimage1 from "../../assets/img/musicProductionsimg/isasproduction.png";
import isaimage2 from "../../assets/img/musicProductionsimg/isasproduction2.png";
import isaimage3 from "../../assets/img/musicProductionsimg/isasproduction3.png";

export default function MusicProductions() {
  const images = [isaimage1, isaimage2, isaimage3];
  return (
    <div>
      <Swiper images={images} />
    </div>
  );
}
