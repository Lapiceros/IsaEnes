import React from 'react';
import './PressComponents.css';
import { data } from './data';

function PressComponents() {
  return (
    <div className='pressComponents'>
      {data.map((item) => (
        <section key={item.id} className='press'>
          <div className='pressData'>
            <h5 className='header'>{item.Nombre}</h5>
            <div className="imageContainer">
              <img src={item.imgUrl} alt='articulo de prensa' className='imagePress'></img>
              <div className="overlay">
                <div className="eventText">
                  <h4 className='title'>{item.Título}</h4>
                  <p className='review'>{item.Reseña}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default PressComponents;

