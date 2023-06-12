import React from 'react'

import './navbar.css'

const NavBar = ({topRef, portfolioRef, aboutRef, resumeRef, contactRef}) => {
  const handleTopClick = () => {
    topRef.current.scrollIntoView({behavior: "smooth", block: "start"})
  };

  const handlePortfolioClick = () => {
    portfolioRef.current.scrollIntoView({behavior: "smooth", block: "start"})
  };

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({behavior: "smooth", block: "start"})
  };

  const handleResumeClick = () => {
    resumeRef.current.scrollIntoView({behavior: "smooth", block: "start"})
  };

  const handleContactClick = () => {
    contactRef.current.scrollIntoView({behavior: "smooth", block: "start"})
  };

  return (
    <div className='header'>
      <div className='logo'>
        <a href="#top" onClick={() => handleTopClick()}>
          J
        </a>
      </div>

        <ul className="menu"> 
          <li><a href="#portfolio" onClick={() => handlePortfolioClick()}>PORTFOLIO</a></li>
          <li><a href="#about" onClick={() => handleAboutClick()}>ABOUT</a></li>
          <li><a href="#resume" onClick={() => handleResumeClick()}>RESUME</a></li>
          <li><a href="#contact" onClick={() => handleContactClick()}>CONTACT</a></li>
          <li><a href="https://github.com/Harlequine" target='_blank'>GITHUB</a></li>
          <li><a href="https://www.linkedin.com/in/joshua-kyle-ocampo-531b56207" target='_blank'>LINKEDIN</a></li>
        </ul>
    </div>
  )
}

export default NavBar