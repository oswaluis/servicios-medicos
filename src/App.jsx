import React from 'react'
import { useState } from 'react'

import About from './components/about/About'
import Service from './components/service/Service'
import Header from './components/header/Header'

import Personal from './components/personal/Personal'
import Contact from './components/contact/Contact'
import Portada from './components/portada/Portada'
import Footer from './components/footer/Footer'
import Accordion from './components/accordion/Accordion'



const App = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = ()=>{
    setClicked(!clicked)
  }
  return (
    <>
      <Header
        clicked={clicked}
        handleClick={handleClick}
        setClicked={setClicked} />
      <Portada
      clicked={clicked}/>

      <About
        clicked={clicked}/>
      <Service/>
      <Personal/>
      <Accordion/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App