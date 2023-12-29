import React from "react";
import "./Carrousel.css";

const Carrousel = ({ title, images, imageLinks, captions }) => {
  return (
    <div className="carrouselContainer">
      <h1 className="titleCarrousel">{title}</h1>
      <div className="imgCarrouselContainer">
        {images.map((image, index) => (
          <div key={index} className="carrouselItem">
            <a href={imageLinks[index]} target="_blank" rel="noopener noreferrer">
              <img className="carrouselImg" src={image} alt={`Slide ${index}`} />
            </a>
            <h2 className="carrouselCaption">{captions[index]}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
