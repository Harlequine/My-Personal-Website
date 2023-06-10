import React, { useRef, forwardRef } from 'react'

import './hero.css'

const Hero = forwardRef((props, ref) => {
  return (
    <section id='top' ref={ref}>
      <div className="intro">
        <h2>Hello! My Name is</h2>
        <h1>Joshua Ocampo.</h1>
        <h2>I'm a Software Engineer.  </h2>
      </div>
      <div className="btn-portfolio">
        <a href="#">View Portfolio</a>
      </div>
    </section>
   
  )
})

export default Hero