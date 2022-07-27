import React from 'react'
import './footer.css'
import LOGO from '../../assets/logodef.png'
import {IoMdMailOpen , IoLogoWhatsapp} from 'react-icons/io'

const Footer = () => {
    return (
        <>
            <section id='footer'>
                <a href='#' className='containerLogoFooter'><img src={LOGO} alt="" /></a>
                <ul className='linksFooter'>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#about">Quienes Somos</a></li>
                    <li><a href="#service">Servicios</a></li>
                    <li><a href="#preguntas">Preguntas Frecuentas</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
                <div className="containerIconFooter">
                    <a className="iconFooter" href="https://api.whatsapp.com/send?phone=541135732459" target='_blank'><IoLogoWhatsapp/></a>
                    <a className="iconFooter" href="mailto:malvinarodriguez@hotmail.es" target='_blank'><IoMdMailOpen/></a>
                </div>
                
            </section>        
            <p className='derechos'>®Copyright cuidando hogares 2022. Todos los derechos reservados.</p>
        </>

    )
}

export default Footer