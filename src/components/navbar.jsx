import React from 'react'

import './navbar.css'

const NavBar = ({topRef, portfolioRef, aboutRef}) => {
  const handleTopClick = () => {
    topRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest" })
  };

  const handlePortfolioClick = () => {
    portfolioRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest" })
  };

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest" })
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
          <li><a href="#resume">RESUME</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li><a href="#">GITHUB</a></li>
          <li><a href="#">LINKEDIN</a></li>
        </ul>
    </div>
  )
}

export default NavBar