import React from "react";
import Swiper from "../swiper/Swiper";
import "./LiveSets.css"
import albumImage1 from "../../assets/img/liveSetsimg/album1.jpeg";
import albumImage2 from "../../assets/img/liveSetsimg/album2.jpeg";
import albumImage3 from "../../assets/img/liveSetsimg/album3.jpeg";
import albumImage4 from "../../assets/img/liveSetsimg/album4.jpeg";
import albumImage5 from "../../assets/img/liveSetsimg/album5.jpeg";
import albumImage6 from "../../assets/img/liveSetsimg/album6.jpeg";

export default function LiveSets() {
  const images = [
    { src: albumImage1, className: "gallery-item gallery-item-1" },
    { src: albumImage2, className: "gallery-item gallery-item-2" },
    { src: albumImage3, className: "gallery-item gallery-item-3" },
    { src: albumImage4, className: "gallery-item gallery-item-4" },
    { src: albumImage5, className: "gallery-item gallery-item-5" },
    { src: albumImage6, className: "gallery-item gallery-item-6" },
  ];

  return (
    <div>
      <Swiper images={images} />
    </div>
  );
}
