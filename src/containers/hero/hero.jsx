import React, { useRef, forwardRef } from 'react'

import './hero.css'

const Hero = forwardRef(({portfolioRef}, ref) => {
  const handlePortfolioClick = () => {
    portfolioRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest" })
  };

  return (
    <section id='top' ref={ref}>
      <div className="intro">
        <h2>Hello! My Name is</h2>
        <h1>Joshua Ocampo.</h1>
        <h2>I'm a Software Engineer.  </h2>
      </div>
      <div className="btn-portfolio">
        <a href="#portfolio" onClick={() => handlePortfolioClick()}>View Portfolio</a>
      </div>
    </section>
   
  )
})

export default Hero