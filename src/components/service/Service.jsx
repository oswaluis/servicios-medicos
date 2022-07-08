import React from 'react'
import './service.css'
import imagenServicios from '../../assets/jeringa1.png'

const Service = () => {
  return (
    <section id='service'>
        <div className="containerService">
            <div className="textService">
                <h2 className="titleService">Nuestros Servicios</h2>
                <p className="contentService">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, eveniet a quae nulla velit perferendis amet, modi sunt autem debitis excepturi magni officia, aliquam obcaecati magnam itaque exercitationem odio fugit.
                    Excepturi saepe aperiam, dignissimos earum quas magnam modi ullam laudantium impedit quam ipsam quidem voluptate doloremque tempore officia nobis inventore sed laboriosam rem iusto suscipit sit necessitatibus assumenda voluptatem. Maxime?
                    Deleniti sit ab minima mollitia suscipit eaque ducimus excepturi. Adipisci earum odit excepturi at esse totam doloremque fugiat, aliquid saepe provident placeat illo praesentium animi blanditiis aperiam aspernatur ducimus commodi.
                    Rerum atque hic reiciendis deleniti nihil, adipisci quia, placeat commodi ex tempore eligendi, quae voluptates facere consectetur aliquid rem! Eum eos ratione asperiores, debitis pariatur hic explicabo harum eaque. Iste!
                </p>
            </div>
            <div className="imgService">
                <img src={imagenServicios} alt="Servicios Prestados" />
            </div>
        </div>
    </section>
  )
}

export default Service