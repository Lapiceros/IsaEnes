import React from 'react'
import './MusicProductions.css'
import ImgIsa1 from '../../assets/imagesIsa/Isa.png'
import ImgIsa2 from '../../assets/imagesIsa/isa2.png'
import ImgIsa4 from '../../assets/imagesIsa/isa4.png'
import ImgIsa6 from '../../assets/imagesIsa/isa6.png'
import ImgIsaDraw1 from '../../assets/imagesIsa/isasdraw.jpg'
import ImgIsaDraw2 from '../../assets/imagesIsa/isasdraw2.jpg'

import Carrousel from '../carrousel/Carrousel'

function MusicProductions() {
  const images = [ImgIsa1, ImgIsa2, ImgIsa4, ImgIsa6, ImgIsaDraw1, ImgIsaDraw2]
  return(
    <>
    <div className='container'>
    <Carrousel images={images} />
    </div>
    </>
  )
}

export default MusicProductions