import React from 'react';
import "./LiveSets.css"

import album1 from "../../assets/liveSetsimg/album1.jpeg";
import album2 from "../../assets/liveSetsimg/album2.jpeg";
import album3 from "../../assets/liveSetsimg/album3.jpeg";
import album4 from "../../assets/liveSetsimg/album4.jpeg";
import album5 from "../../assets/liveSetsimg/album5.jpeg";
import album6 from "../../assets/liveSetsimg/album6.jpeg";


export default function LiveSets() {
  return (
    <div className='carousel-container'>      
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1" ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={album1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={album2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={album3} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={album4} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={album5} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={album6} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
