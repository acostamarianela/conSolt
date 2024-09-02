import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery_1.png'
import gallery_2 from '../../assets/gallery_2.png'
import gallery_3 from '../../assets/gallery_3.png'
import gallery_4 from '../../assets/gallery_4.png'
import dark_arrow from '../../assets/dark_arrow.webp'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1}/>
            <img src={gallery_2}/>
            <img src={gallery_3}/>
            <img src={gallery_4}/>
        </div>
        <button className='btn'>See more here <img src={dark_arrow}/></button>
    </div>
  )
}

export default Campus