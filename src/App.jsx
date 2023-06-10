import React, { useRef } from 'react';

import './App.css'

import NavBar from './components/navbar'
import Hero from './containers/hero/hero'
import Portfolio from './containers/portfolio/portfolio'
import About from './containers/about/about';

function App() {
  const topRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <>
      <NavBar topRef={topRef} portfolioRef={portfolioRef} aboutRef={aboutRef}/>
      <Hero topRef={topRef} portfolioRef={portfolioRef}/>
      <Portfolio ref={portfolioRef}/>
      <About ref={aboutRef}/>
    </>
  )
}

export default App
