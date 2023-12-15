import React from "react";
import "./Swiper.css";


export default function Swiper({ images }) {
  return (
    <div>
      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Description ${index + 1}`} />
        ))}
      </div>
      <div className="gallery-controls"></div>
    </div>
  );
}
