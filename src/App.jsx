import React, { useRef } from 'react';

import './App.css'

import NavBar from './components/navbar'
import Hero from './containers/hero/hero'
import Portfolio from './containers/portfolio/portfolio'
import About from './containers/about/about';
import Resume from './containers/resume/resume';
import Contact from './containers/contact/contact';

function App() {
  const topRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <NavBar topRef={topRef} portfolioRef={portfolioRef} aboutRef={aboutRef} resumeRef={resumeRef} contactRef={contactRef}/>
      <Hero topRef={topRef} portfolioRef={portfolioRef}/>
      <Portfolio ref={portfolioRef}/>
      <About ref={aboutRef}/>
      <Resume ref={resumeRef}/>
      <Contact ref={contactRef}/>
    </>
  )
}

export default App
