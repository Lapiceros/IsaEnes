import React from 'react'
import './Press.css'
import pressImage from '../../assets/img/imagesIsa/isa2.png'
import perfil from '../../assets/img/imagesIsa/isa.png'

function Press() {
  return (
    <section className='press'>
      <div className='pressCard'>
        <img src={pressImage} alt='articulo de prensa' className='imageCard'></img>
        <img src={perfil} alt='articulo de prensa' className='perfilImg'></img>
        <div className="eventText">
          <h4>Isa Penes</h4>
          <p> Isa Penes Come muchos penes oh waos <br />
            ¿quieres echar un vistazo de cuantos penes come isa?</p>
        </div>
      </div>
    </section>
  )
}

export default Press