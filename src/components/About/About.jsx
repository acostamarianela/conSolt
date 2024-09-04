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
            <h3>Sobre "ConSolt"...</h3>
            <h2>Creando el futuro del liderazgo</h2>
            <p>Somos un equipo de estudiantes de la carrera de Licenciatura en Sistemas en la Universidad Cuenca del Plata de Formosa, apasionados por la tecnología y la innovación. Iniciamos este proyecto en el año 2024 como una iniciativa educativa en colaboración con una empresa del sector de soluciones integrales para edificios.</p>
            <p>Nuestro objetivo inicial fue desarrollar una herramienta que optimizara la gestión de servicios y soluciones para edificaciones. A medida que avanzamos, nos dimos cuenta del potencial de nuestra solución y decidimos expandirnos al mercado para ofrecer nuestras capacidades a más empresas en el sector.</p>
            <p>Hoy, estamos comprometidos a llevar nuestra experiencia y conocimiento al siguiente nivel, proporcionando una plataforma robusta y eficiente que facilita la administración interna de empresas que ofrecen servicios para edificios.</p>
        </div>
    </div>
  )
}

export default About