import React from 'react'
import './hamburger.css'

const Hamburger = ({handleClick, clicked}) => {
  return (
    <a onClick={handleClick} href="#" className={`headerHamburger ${clicked ? 'is-active'  : ''}`}>
        <span className='line'></span>
        <span className='line'></span>
        <span className='line'></span>
    </a>
  )
}

export default Hamburger