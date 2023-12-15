import React from "react";
import Swiper from "../../components/Swiper/Swiper";

import isaimage1 from "../../assets/img/musicProductionsimg/isasproduction.jpg";
import isaimage2 from "../../assets/img/musicProductionsimg/isasproduction2.jpg";
import isaimage3 from "../../assets/img/musicProductionsimg/isasproduction3.jpg";

export default function MusicProductions() {
  const images = [isaimage1, isaimage2, isaimage3];
  return (
    <div>
      <Swiper images={images} />
    </div>
  );
}
