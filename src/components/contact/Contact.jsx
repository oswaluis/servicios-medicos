import React from 'react'
import './contact.css'
import {IoMdMailOpen , IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import swal from 'sweetalert';


const Contact = () => {
    const sweetalert=()=>{
        swal({
          title: 'Gracias',
          text: 'Su mensaje se ha enviado con eso',
          icon: 'success',
          button: 'Aceptar'
        })
      }
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4lzdj5w', 'template_c4ugxep', form.current, 'iqraAl8EQwC03ZdAN')
      e.target.reset()
    };
  return (
    <section id='contact'>
        <div className="containerContact">
            <h2 className="titleContact">Contactanos</h2>
            <div className="containerRight">
                <h3 className="sloganContact">Estamos<br/> aqui para <br/> ayudarte</h3>
                <a className='emailContact' href="mailto:malvinarodriguez@hotmail.es" target='_blank'>
                    <div className="containerIconEmail">
                        <IoMdMailOpen/>
                    </div>
                    <div className="containerDataEmail">
                        <h4>Email</h4>
                        <h5>malvinarodriguez@hotmail.es</h5>
                    </div>
                </a>
                <a className="whatsappContact"  href="https://api.whatsapp.com/send?phone=541135732459" target='_blank'>
                    <div className="containerIconWhatsapp">
                        < IoLogoWhatsapp/>
                    </div>
                    <div className="containerDataWhatsapp">
                        <h4>Whatsapp</h4>
                        <h5>(+54)9 11 3573-2459</h5>

                    </div>
                </a>
                
                
            </div>
            <form ref={form} className="formContact" onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Nombre Completo'/>
                <input type="text" name='email' placeholder='Email' />
                <textarea name="message" rows="10" placeholder='Escribe aqui tu mensaje'/>
                <button type='submit' className='btnContact' onClick={()=>sweetalert()}>Enviar Mensaje</button>
            </form>

        </div>
    </section>
)
}

export default Contact