import React from 'react'
import './about.css'
import fotoAbout from '../../assets/enfermero.jpg'

const About = ({clicked}) => {
  return (
    <section id='about' className={`section ${clicked ? 'secAct' : ''}`}>
        <div className="containerAbout">
            <div className="imgAbout">
                <img src={fotoAbout} alt="Enfermero domiciliario"  />
            </div>
            <div className="textAbout">
                <h2 className="titleAbout">Quienes Somos</h2>
                <p className="contentAbout">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aspernatur, optio quaerat earum ratione magnam ad, nesciunt dignissimos inventore qui autem repudiandae facere voluptatibus officiis quasi quidem est distinctio perferendis?
                    Totam eum sunt consequatur amet dignissimos autem, voluptatem aspernatur quos sed inventore voluptatibus quisquam numquam facere nulla, aperiam assumenda, eius eaque fuga similique modi rerum. Libero suscipit officiis debitis ratione!
                    Vel esse aut veritatis commodi voluptatum earum in animi voluptate! Placeat beatae ipsam repellendus, libero numquam a deleniti voluptatum. Eum minima cumque quas dolorem molestiae, ipsum sapiente. Deserunt, rerum magni?
                    Inventore, quod? Aliquid quibusdam, dolor porro deleniti amet est labore eveniet officia. Eum modi error maiores provident magni quis. Aliquid earum repudiandae maiores corporis modi praesentium rerum vitae inventore aspernatur.
                    Provident maxime velit, molestiae aspernatur fugiat nemo ea optio saepe quia, voluptatibus ex repudiandae perspiciatis in dignissimos nisi distinctio harum. Ad error consequuntur mollitia inventore necessitatibus eveniet! Id, hic veritatis!
                </p>
            </div>
        </div>
    </section>
  )
}

export default About