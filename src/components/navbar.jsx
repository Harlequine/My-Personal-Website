import React from 'react'

import './navbar.css'

const navbar = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <a href="top">
          J
        </a>
      </div>

        <ul className="menu">
          <li><a href="#">PORTFOLIO</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">RESUME</a></li>
          <li><a href="#">CONTACT</a></li>
          <li><a href="#">GITHUB</a></li>
          <li><a href="#">LINKEDIN</a></li>
        </ul>
    </div>
  )
}

export default navbar