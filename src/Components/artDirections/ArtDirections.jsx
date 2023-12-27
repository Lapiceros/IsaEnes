import React from 'react'
import './ArtDirections.css'

//cambia aqui las imagenes alex
import isaproduction from "../../assets/musicProductionsimg/isasproduction.png"
import isaproduction2 from "../../assets/musicProductionsimg/isasproduction2.png"
import isaproduction3 from "../../assets/musicProductionsimg/isasproduction3.png"


import Carrousel from '../carrousel/Carrousel'

function ArtDirections() {
  const images = [isaproduction, isaproduction2, isaproduction3]
  return(
    <div>
    <Carrousel images={images} />
    </div>
  )
}

export default ArtDirections