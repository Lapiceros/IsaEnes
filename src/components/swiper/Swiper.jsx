import React from 'react';
import './Swiper.css';




export default function Swiper() {
  return (
    <div className="gallery">
      <div className="gallery-container">
        <img className="gallery-item gallery-item-1" src="url_for_image_1.jpg" data-index= "1" alt="Description 1" />
        <img className="gallery-item gallery-item-2" src="url_for_image_2.jpg" data-index= "2" alt="Description 2" />
        <img className="gallery-item gallery-item-3" src="url_for_image_3.jpg" data-index= "3" alt="Description 3" />
        <img className="gallery-item gallery-item-4" src="url_for_image_4.jpg" data-index= "4" alt="Description 4" />
        <img className="gallery-item gallery-item-5" src="url_for_image_5.jpg" data-index= "5" alt="Description 5" />
      </div>
      <div className="gallery-controls"></div>
    </div>
  );
}
