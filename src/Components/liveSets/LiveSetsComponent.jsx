import React from 'react'


import album1 from "../../assets/liveSetsimg/album1.jpeg"
import album2 from "../../assets/liveSetsimg/album2.jpeg"
import album3 from "../../assets/liveSetsimg/album3.jpeg"
import album4 from "../../assets/liveSetsimg/album4.jpeg"
import album5 from "../../assets/liveSetsimg/album5.jpeg"
import album6 from "../../assets/liveSetsimg/album6.jpeg"

import Carrousel from '../carrousel/Carrousel'

function LiveSetsComponent() {
  const images = [album1, album2, album3, album4, album5, album6 ]
  return(
 
    <div>
    <Carrousel images={images} />
    </div>

  )
}

export default LiveSetsComponent
