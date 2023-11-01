import React, { forwardRef } from 'react'
import { DocumentMagnifyingGlassIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid'

import './resume.css'

const resume = forwardRef((props, ref) => {
  return (
    <section id="resume" ref={ref}>
        <h1>Resume</h1>
        <div className="links-resume">
                <div className='btn-links-resume'>
                    <a href="https://drive.google.com/file/d/1wS26kQoSkyvyV8jbg4VA0cyHt-ahin6W/view?usp=sharing" target="_blank">View Resume<DocumentMagnifyingGlassIcon className='icons'/></a>
                </div>
                <div className='btn-links-resume'>
                    <a href="https://drive.usercontent.google.com/download?id=1wS26kQoSkyvyV8jbg4VA0cyHt-ahin6W&export=download&authuser=1&confirm=t&uuid=e98baea5-c709-4415-b883-50554dea4013&at=APZUnTUOWsA3FKyyuJtxa8-8lWV4:1698838137725" target="_blank">Download Resume<ArrowDownTrayIcon className='icons'/></a>
                </div>
                
        </div>
    </section>
  )
})

export default resume