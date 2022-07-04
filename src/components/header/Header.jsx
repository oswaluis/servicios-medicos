import React from 'react'
import LOGO from '../../assets/logodef.png'
import Hamburger from '../hamburger/Hamburger'
import './header.css'

const Header = ({clicked, handleClick}) => {
  return (
    <header>
        <div className="containerHeader">
            <div className="logoHeader">
                <img src={LOGO} alt="Logo Enfermeria domiciliaria" />
            </div>
            <div className="menuHeader">
                <ul className="listaMenuHeader">
                    <li className="itemList"><a className='btnList' href="#about">Quienes Somos</a></li>
                    <li className="itemList"><a className='btnList' href="#">Sevicios</a></li>
                    <li className="itemList"><a className='btnList' href="#">Nuestro Personal</a></li>
                    <li className="itemList"><a className='btnList' href="#">Preguntas Frecuentes</a></li>
                    <li className="itemList"><a className='btnList' href="#">Contactanos</a></li>
                </ul>
            </div>
            <div className="menuHamburger">
                <ul className={`listaMenuHamburger ${clicked ? 'active' : ''}`}>
                    <li className="itemListHamburger"><a onClick={handleClick} className='btnListHamburger' href="#about">Quienes Somos</a></li>
                    <li className="itemListHamburger"><a onClick={handleClick} className='btnListHamburger' href="#">Sevicios</a></li>
                    <li className="itemListHamburger"><a onClick={handleClick} className='btnListHamburger' href="#">Nuestro Personal</a></li>
                    <li className="itemListHamburger"><a onClick={handleClick} className='btnListHamburger' href="#">Preguntas Frecuentes</a></li>
                    <li className="itemListHamburger"><a onClick={handleClick} className='btnListHamburger' href="#">Contactanos</a></li>
                </ul>
            </div>
            <Hamburger clicked={clicked} handleClick={handleClick}/>
            <div className={`animationBg ${clicked ? 'act' : '' }`}></div>
        </div>
    </header>
  )
}

export default Header