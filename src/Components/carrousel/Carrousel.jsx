// Carrousel.js
import React from "react";
import "./Carrousel.css";

const Carrousel = ({ images, imageLinks }) => {
  return (
    <div className="carrouselContainer">
      <div className="imgCarrouselContainer">
        {images.map((image, index) => (
          <a key={index} href={imageLinks[index]} target="_blank" rel="noopener noreferrer">
            <img className="carrouselImg" src={image} alt={`Slide ${index}`} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
