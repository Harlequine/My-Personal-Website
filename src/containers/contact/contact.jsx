import React, { forwardRef } from 'react'
import { useForm } from 'react-hook-form';

import './contact.css'

const contact = forwardRef((props, ref) => {

  return (
    <section id="contact" ref={ref}>
        <div className="top-center">
          <div className="left-side">
              <h1 className='name'>Joshua Ocampo</h1>
              <p>Web Developer</p>
          </div>
          <div className="right-side">
              <h1>Get In Touch</h1>
              <p>+63192566902</p>
              <p>cs.joshuakylepocampo@gmail.com</p>
          </div>
        </div>
        <div className="bottom-center">
          <p className='rights'>©2023 - Joshua Ocampo. All rights reserved.</p>
        </div>
    </section>
  )
})

export default contact