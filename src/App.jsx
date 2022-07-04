import React from 'react'
import { useState } from 'react'
import Header from './components/header/Header'

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
    </>
  )
}

export default App