import React, { forwardRef } from 'react'
import { useForm } from 'react-hook-form';

import './contact.css'

const contact = forwardRef((props, ref) => {

  return (
    <section id="contact" ref={ref}>
        <div className="left-side">
            <h1 className='name'>Joshua Ocampo</h1>
            <p>Web Developer</p>
            <p className='rights'>©2023 - Joshua Ocampo. All rights reserved.</p>
        </div>

        <div className="right-side">
            <h1>GET IN TOUCH</h1>
            <p>+63192566902</p>
            <p>cs.joshuakylepocampo@gmail.com</p>
        </div>
    </section>
  )
})

export default contact