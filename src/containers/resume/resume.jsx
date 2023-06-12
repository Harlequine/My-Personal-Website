import React, { forwardRef } from 'react'
import { DocumentMagnifyingGlassIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid'

import './resume.css'

const resume = forwardRef((props, ref) => {
  return (
    <section id="resume" ref={ref}>
        <h1>Resume</h1>
        <div className="links-resume">
                <div className='btn-links-resume'>
                    <a href="src\assets\resume\JoshuaOcampo-Resume.pdf" target="_blank">View Resume <DocumentMagnifyingGlassIcon className='icons'/></a>
                </div>
                <div className='btn-links-resume'>
                    <a href="https://drive.google.com/file/d/1Cg0F1EgQ_lRjIr-MkIwWtuYQBo3MwRsM/view?usp=sharing" target="_blank">Download Resume <ArrowDownTrayIcon className='icons'/></a>
                </div>
                
        </div>
    </section>
  )
})

export default resume