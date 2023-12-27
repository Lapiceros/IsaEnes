import React from "react";
import "./Carrousel.css";

const Carrousel = ({ images }) => {
  return (
    <div className="carrouselContainer">
      <div className="imgCarrouselContainer">
        {images.map((image, index) => (
          <img className="carrouselImg" key={index} src={image} alt={`Slide ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
