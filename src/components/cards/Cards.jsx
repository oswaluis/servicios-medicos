import React from 'react'
import './cards.css'


const Cards = (props) => {
  return (
    <article className='containerCard'>
        <div className="itemCard">
            <h3 className="titleCard">{props.title}</h3>
            <p className="contentCard">
                <li>{props.prop}</li>
                <li>{props.prop1}</li>
                <li>{props.prop2}</li>
                <li>{props.prop3}</li>
                <li>{props.prop4}</li>
            </p>
        </div>
    </article>
  )
}

export default Cards