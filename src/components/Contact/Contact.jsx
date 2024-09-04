import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg_icon.jpeg'

//agregar iconos a email telefono y direccion algun dia 1:53:00
//agregar icon a submit tambien 1:59:00
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "1522e476-6874-4ac9-9af5-a746480f1863");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Envíanos un Mensaje <img src={msg_icon}/></h3>
            <p>Sentite libre de contactarnos </p>
            <ul>
                <li>consortiumsolutions@gmail.com</li>
                <li>3704724277</li>
                <li>Formosa, ARG</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Tu nombre</label>
                <input type='text' name='name' placeholder='Ingresa tu nombre' required/>
                <label>Número de teléfono</label>
                <input type='tel' name='phone' placeholder='Ingresa tu número de teléfono ' required/>
                <label>Escribe tu mensaje aquí </label>
                <textarea name='message'  rows="6" placeholder='Ingresa tu mensaje' required></textarea>
                <button type='submit' className='btn dark-btn'>Enviar ahora</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact