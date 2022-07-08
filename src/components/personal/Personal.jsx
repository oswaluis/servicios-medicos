import React from 'react'
import cuidador1 from '../../assets/cuidador4.jpg'
import cuidador2 from '../../assets/cuidador1.jpg'
import './personal.css'

const Personal = () => {
  return (
    <section id='personal'>
        <div className="containerPersonal">
            <h2 className="titlePersonal">Personal Capacitado</h2>
            <div className="containerImgPersonal">
                <div className='imgPersonal1'><img src={cuidador1} alt="" /></div>
                <div className='imgPersonal2'><img src={cuidador2} alt="" /></div>
            </div>
            <p className="contentPersonal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam numquam iste alias quos, pariatur distinctio eius nostrum. Ipsa dolorem reiciendis accusantium possimus, in earum incidunt consequatur ad neque, mollitia laboriosam!
            Commodi aut, neque officia iste itaque veritatis vitae facere in odio quas illo possimus quibusdam veniam quos repudiandae tempora magni excepturi eligendi impedit illum ex debitis error animi iusto. Praesentium.
            Ea accusamus omnis fuga error fugiat repellat, alias excepturi veritatis, magnam eligendi officiis eos modi illo aut quia voluptatum commodi. Possimus delectus quidem fuga cum id ea aliquid accusamus unde!
            </p>
        </div>
    </section>
  )
}

export default Personal