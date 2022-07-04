import React from 'react'
import { useState } from 'react'
import About from './components/about/About'
import Header from './components/header/Header'
import Titulo from './components/titulo/Titulo'

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
    </>
  )
}

export default App