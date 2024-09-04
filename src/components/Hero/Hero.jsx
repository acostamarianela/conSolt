import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.webp'


const Hero = () => {
  return (
    <div className='hero container' >
        <div className="hero-text">
            <h1>La solución integral para la gestión de tu edificio</h1>
            <p>Gestiona tu empresa de manera eficiente. Clientes, vendedores, edificios, ventas, todo en un solo lugar. </p>
            <button className='btn'>Explora más <img src={dark_arrow} alt=''/></button>
        </div>
    </div>
  )
}

export default Hero