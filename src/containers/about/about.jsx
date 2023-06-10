import Reac, { forwardRef } from 'react'

import Pic from '../../assets/pic.png'
import './about.css'



const about = forwardRef(( props, ref ) => {
  return (
    <section id="about" ref={ref}>
      <h1>About Me</h1>
      <div className="details">
        <div className="image-container">
          <img src={Pic} alt="" />
        </div>
        <div className="paragraph">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eligendi voluptatibus dolore blanditiis consequuntur voluptates quia, ad aspernatur nulla placeat. Quos quod molestiae, beatae consequuntur iure aliquam sed praesentium blanditiis!</p>
        </div>
      </div>
      <div className="technologies">
        <h2>Technologies I've Worked With</h2>
        <div className="tech-containers">
          <div className="container">
            <div className="title"><h4>Frontend</h4></div>
            <div className="tech-icons"></div>
          </div>
          <div className="container">
            <div className="title"><h4>Backend</h4></div>
            <div className="tech-icons"></div>
          </div>
          <div className="container">
            <div className="title"><h4>DevOps</h4></div>
            <div className="tech-icons"></div>
          </div>
          <div className="container">
            <div className="title"><h4>Languages</h4></div>
            <div className="tech-icons"></div>
          </div>
          <div className="container">
            <div className="title"><h4>Tools</h4></div>
            <div className="tech-icons"></div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default about