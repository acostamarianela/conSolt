import React from 'react'
import './About.css'
import about_image from '../../assets/about_image.png'
import play_icon from '../../assets/play_icon.jpeg'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_image} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{
              setPlayState(true)
            }}/>
        </div>
        <div className="about-right">
            <h3>About MT Soluciones Integrales</h3>
            <h2>Nurturinf Tomorrow Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laudantium dolores voluptatum expedita? Sed laborum quibusdam incidunt voluptatum, accusamus quam aperiam, consequatur, aspernatur voluptatem enim reiciendis omnis harum porro facere?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laudantium dolores voluptatum expedita? Sed laborum quibusdam incidunt voluptatum, accusamus quam aperiam, consequatur, aspernatur voluptatem enim reiciendis omnis harum porro facere?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laudantium dolores voluptatum expedita? Sed laborum quibusdam incidunt voluptatum, accusamus quam aperiam, consequatur, aspernatur voluptatem enim reiciendis omnis harum porro facere?</p>
        </div>
    </div>
  )
}

export default About