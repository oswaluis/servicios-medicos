import React from 'react'
import LOGO from '../../assets/logodef.png'
import Hamburger from '../hamburger/Hamburger'
import './header.css'

const Header = ({clicked, handleClick}) => {
  return (
    <header id='header'>
        <div className="containerHeader">
            <a className="logoHeader" href='#header'>
                <img src={LOGO} alt="Logo Enfermeria domiciliaria"/>
            </a>
            <div className="menuHeader">
                <ul className="listaMenuHeader">
                    <li className="itemList"><a className='btnList' href="#about">Quienes Somos</a></li>
                    <li className="itemList"><a className='btnList' href="#service">Sevicios</a></li>
                    <li className="itemList"><a className='btnList' href="#personal">Nuestro Personal</a></li>
                    <li className="itemList"><a className='btnList' href="#answer">Preguntas Frecuentes</a></li>
                    <li className="itemList"><a className='btnList' href="#contact">Contactanos</a></li>
                </ul>
            </div>
            <div className="menuHamburger">
                <ul className={`listaMenuHamburger ${clicked ? 'active' : ''}`}>
                    <li className="itemListHamburger"><a onClick={handleClick} className='btnListHamburger' href="#about">Quienes Somos</a></li>
                    <li className="itemListHamburger"><a onClick={handleClick} className='btnListHamburger' href="#service">Sevicios</a></li>
                    <li className="itemListHamburger"><a onClick={handleClick} className='btnListHamburger' href="#personal">Nuestro Personal</a></li>
                    <li className="itemListHamburger"><a onClick={handleClick} className='btnListHamburger' href="#answer">Preguntas Frecuentes</a></li>
                    <li className="itemListHamburger"><a onClick={handleClick} className='btnListHamburger' href="#contact">Contactanos</a></li>
                </ul>
            </div>
            <Hamburger clicked={clicked} handleClick={handleClick}/>
            <div className={`animationBg ${clicked ? 'act' : '' }`}></div>
        </div>
    </header>
  )
}

export default Header