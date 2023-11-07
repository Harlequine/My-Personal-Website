import React, { forwardRef } from 'react'
import { DocumentMagnifyingGlassIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid'

import './resume.css'

const resume = forwardRef((props, ref) => {
  return (
    <section id="resume" ref={ref}>
        <h1>Resume</h1>
        <div className="links-resume">
                <div className='btn-links-resume'>
                    <a href="https://drive.google.com/file/d/1KyBSieIlGYHwh5FkpzovDIvH6XwpMnv8/view?usp=sharing" target="_blank">View Resume<DocumentMagnifyingGlassIcon className='icons'/></a>
                </div>
                <div className='btn-links-resume'>
                    <a href="https://drive.google.com/u/0/uc?id=1KyBSieIlGYHwh5FkpzovDIvH6XwpMnv8&export=download" target="_blank">Download Resume<ArrowDownTrayIcon className='icons'/></a>
                </div>
                
        </div>
    </section>
  )
})

export default resume