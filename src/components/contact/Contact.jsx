import React from 'react'
import './contact.css'
import {IoMdMailOpen , IoLogoWhatsapp} from 'react-icons/io'


const Contact = () => {
  return (
    <section id='contact'>
        <div className="containerContact">
            <h2 className="titleContact">Contactanos</h2>
            <div className="containerRight">
                <h3 className="sloganContact">Estamos<br/> aqui para <br/> ayudarte</h3>
                <article className='emailContact'>
                    <div className="containerIconEmail">
                        <IoMdMailOpen/>
                    </div>
                    <div className="containerDataEmail">
                        <h4>Email</h4>
                        <h5>personaldomiciliario@gmail.com</h5>
                    </div>
                </article>
                <article className="whatsappContact">
                    <div className="containerIconWhatsapp">
                        < IoLogoWhatsapp/>
                    </div>
                    <div className="containerDataWhatsapp">
                        <h4>Whatsapp</h4>
                        <h5>(+54)9 11 123456789</h5>
                    </div>
                </article>
                
                
            </div>
            <form action=""className="formContact">
                <input type="text" name='name' placeholder='Nombre Completo'/>
                <input type="text" name='email' placeholder='Email' />
                <textarea name="message" rows="10" placeholder='Escribe aqui tu mensaje'/>
                <button type='submit' className='btnContact'>Enviar Mensaje</button>
            </form>

        </div>
    </section>
)
}

export default Contact