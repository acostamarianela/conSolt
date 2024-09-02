import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.webp'


const Hero = () => {
  return (
    <div className='hero container' >
        <div className="hero-text">
            <h1>We ensure education for a better world</h1>
            <p>Tell your visitors your story. Add catchy text to describe what you do, and what you have to offer. The right words can inspire and intrigue your audience, so they’re ready to take action on your site. To start telling your story, double click or click Edit Text.</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt=''/></button>
        </div>
    </div>
  )
}

export default Hero