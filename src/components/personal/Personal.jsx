import React from 'react'
import cuidador1 from '../../assets/cuidador1.jpg'
import cuidador2 from '../../assets/cuidador2.jpg'
import './personal.css'

const Personal = () => {
  return (
    <section id='personal'>
        <div className="containerPersonal">
            <h2 className="titlePersonal">Personal Capacitado</h2>
            <div className="containerImgPersonal">
                <div className='imgPersonal1'><img src={cuidador2} alt="" /></div>
                <div className='imgPersonal2'><img src={cuidador1} alt="" /></div>
            </div>
            <p className="contentPersonal">
              Contamos con un equipo multidisciplinario, preparado, dedicado a cubrir todas las necesidades para que el paciente y la familia se sienta contenido.
            </p>
            <div className="typePersonal">
              <div className="itemPersonal">Acompañantes</div>
              <div className="itemPersonal">Enfermeras</div>
              <div className="itemPersonal">Cuidadores</div>
            </div>
        </div>
    </section>
  )
}

export default Personal