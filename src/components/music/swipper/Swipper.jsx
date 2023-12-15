import React from 'react';
import './Swiper.css';

import isaimage1 from "../../assets/img/musicProductionsimg/isasproduction.jpg"
import isaimage2 from "../../assets/img/musicProductionsimg/isasproduction2.jpg"
import isaimage3 from "../../assets/img/musicProductionsimg/isasproduction3.jpg"

export default function Swiper() {
  return (
    <div className="gallery">
      <div className="gallery-container">
        <img className="gallery-item gallery-item-1" src={isaimage1} data-index= "1" alt="Description 1" />
        <img className="gallery-item gallery-item-2" src={isaimage2} data-index= "2" alt="Description 2" />
        <img className="gallery-item gallery-item-3" src={isaimage3} data-index= "3" alt="Description 3" />
      </div>
      <div className="gallery-controls"></div>
    </div>
  );
}
