import React from "react";
import "./Swiper.css";

export default function Swiper({ images }) {
  return (
    <div className="galleryContainer">
      <div className="gallery">
        <div className="photosContainer">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Description ${index + 1}`}
              className={image.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

