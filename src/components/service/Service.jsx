import React from 'react'
import './service.css'
import imagenServicios from '../../assets/jeringa1.png'
import Cards from '../cards/Cards'
import {FaHandHoldingMedical, FaSyringe} from 'react-icons/fa'

const Service = () => {
  return (
    <section id='service'>
        <div className="containerService">
            <div className="textService">
                <h2 className="titleService">Nuestros Servicios</h2>
                <p className="contentService">
                    Brindamos un servicio de primera calidad, personalizado que permite adecuarse a las necesidades particulares de cada persona.
                </p>
                <div className="cards">
                      <div className="containerCards">
                    <div className="iconCard"><FaSyringe/></div>
                    <Cards 
                    title='Internación domiciliaria'
                    prop='Control de SV'
                    prop1='Administracion de tratamiento'
                    prop2='Higiene y Confort'/>
                </div>
                <div className="containerCards">
                    <div className="iconCard"><FaHandHoldingMedical/></div>
                    <Cards 
                    title='Cuidadores'
                    prop='Curas de heridas'
                    prop1='Acompañamiento'
                    prop2='Higiene y confort'/>
                </div>               
                </div>
              
            </div>
            <div className="imgService">
                <img src={imagenServicios} alt="Servicios Prestados" />
            </div>
        </div>
    </section>
  )
}

export default Service