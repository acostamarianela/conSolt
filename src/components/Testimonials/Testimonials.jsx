import React, { useRef, useState } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user_1.png';
import user_2 from '../../assets/user_2.png';
import user_3 from '../../assets/user_3.png';
import user_4 from '../../assets/user_4.png';

const Testimonials = () => {
  const slider = useRef(); // Usa useRef para obtener la referencia del slider
  const [tx, setTx] = useState(0); // Usa useState para manejar el valor de tx

  const slideForward = () => {
    if (tx > -75) { // Ajusta este valor dependiendo del número de slides y cuánto deseas desplazar
      const newTx = tx - 25;
      setTx(newTx);
      slider.current.style.transform = `translateX(${newTx}%)`;
    }
  };

  const slideBackward = () => {
    if (tx < 0) {
      const newTx = tx + 25;
      setTx(newTx);
      slider.current.style.transform = `translateX(${newTx}%)`;
    }
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} className='next-btn' onClick={slideForward} alt="Next" />
      <img src={back_icon} className='back-btn' onClick={slideBackward} alt="Back" />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt="User 1"/>
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2} alt="User 2"/>
                <div>
                  <h3>Abril Zacaria</h3>
                  <span>Formosa, ARG</span>
                </div>
              </div>
              <p>Very good...</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3} alt="User 3"/>
                <div>
                  <h3>Vera Michel</h3>
                  <span>Edusity, COL</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_4} alt="User 4"/>
                <div>
                  <h3>Acosta Marianela</h3>
                  <span>Edusity, UK</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
