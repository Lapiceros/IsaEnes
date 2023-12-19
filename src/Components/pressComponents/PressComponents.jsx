import React from 'react'
import './PressComponents.css'
import pressImage from "../../assets/imagesIsa/isa6.png"
import perfil from "../../assets/imagesIsa/isa6.png"

function PressComponents() {
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

export default PressComponents;