import React from 'react'
import './accordion.css'
import {data} from './data'
import styled from 'styled-components'
import { useState } from 'react'
import {FiPlusCircle, FiMinusCircle} from 'react-icons/fi'


const AccordionSection = styled.div`

    margin: 5.5rem;
    display: flex;
    background: var(--color-light);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    height: 50vh;
`

const Container = styled.div`
    position: absolute;
    background: var(--color-light);


`
const Wrap = styled.div`
    background: var(--color-bg);
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border: 1px solid var(--color-primary);
    border-radius: 0.7rem;
    margin-bottom: 1rem;

`
const Dropdown = styled.div`
    background: var(--color-light);
    font-size: 1.5rem;
    font-weight: 300;
    padding: 1rem;
    margin-bottom: 1rem;
`


const Accordion = () => {
    const [unclick, setUnclick] = useState (false)
    const toggle = index =>{
        if(unclick === index){
            return setUnclick(null)
        }

    setUnclick(index)
    }
  return ( 
    <section className='qanda' id='answer'>
     <h2 className='titleAccordion'>Preguntas Frecuentes</h2>
        <AccordionSection>
            
            <Container className='conta'>
                {data.map((item, index)=>{
                    return(
                        <>
                        <Wrap onClick={()=> toggle(index)} key={index} className='wrap'>
                            <h3>{item.question}</h3>
                            <span>{unclick===index ?<FiMinusCircle/> : <FiPlusCircle/>}</span>
                        </Wrap>
                        {unclick === index ?(
                            <Dropdown className='drop'>
                            <p>{item.answer}</p>
                        </Dropdown>
                        ): null}
                        
                        </>
                    )
                })}
            </Container>
        </AccordionSection>
    </section>
   
  )
}


export default Accordion