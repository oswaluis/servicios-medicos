import React from 'react'
import { useState } from 'react'
import About from './components/about/About'
import Service from './components/service/Service'
import Header from './components/header/Header'
import Titulo from './components/titulo/Titulo'
import Personal from './components/personal/Personal'
import Contact from './components/contact/Contact'

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
      <Titulo/>
      <About
        clicked={clicked}/>
      <Service/>
      <Personal/>
      <Contact/>
    </>
  )
}

export default App