import React from 'react'
import Titulo from '../titulo/Titulo'
import './portada.css'
import IMGPORT from '../../assets/manos.jpg'
import IMGPORT2 from '../../assets/jeringa2.png'
import {RiHomeHeartLine} from 'react-icons/ri'
import {TbHeartbeat} from 'react-icons/tb'

function Portada({clicked}) {
  return (
    <section id='portada'>
        <div  className={`containerPortada section ${clicked ? 'secAct' : 'secOut'}`}>
            <div className="title">
                <Titulo/>
            </div>
            <div className="containerFig">
                <div className="fig1"> <RiHomeHeartLine/> </div>
                <a href="#service"  className="img1"><img src={IMGPORT2} alt="" /></a>
               
                <a href="#contact" className="img2"><img src={IMGPORT} alt=""  /></a> 
                <div className="fig2"> <TbHeartbeat/></div>
            </div>
        </div>
    </section>
  )
}

export default Portada