import React from 'react'
import './about.css'
import fotoAbout from '../../assets/enfermero.jpg'

const About = ({clicked}) => {
  return (
    <section id='about' className={`section ${clicked ? 'secAct' : 'secOut'}`}>
        <div className="containerAbout">
            <div className="imgAbout">
                <img src={fotoAbout} alt="Enfermero domiciliario"  />
            </div>
            <div className="textAbout">
                <h2 className="titleAbout">Quienes Somos</h2>
                <p className="contentAbout">
                    Somos un equipo de trabajo dedicado con mas de 8 años atendiendo, cuidando y acompañando pacientes para mejorar su calidad de vida. 
                    <h5>Nuestra vocacion y servicio permite garantizar que cada paciente sea asistido con la mejor calidad de atencion.</h5>
                </p>
            </div>
        </div>
    </section>
  )
}

export default About