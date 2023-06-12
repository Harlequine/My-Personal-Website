import React, { useState, useEffect, useRef, forwardRef  } from 'react'
import { ChevronRightIcon, ChevronLeftIcon, LinkIcon, CodeBracketIcon } from '@heroicons/react/24/solid'


import scient from '../../assets/scient/scient'
import escafe from '../../assets/escafe/escafe'

import './portfolio.css'

const portfolio = forwardRef((porps, ref) => {

    const [ currScient, setCurrScient ] = useState({});//current sc on display
    const [ scientCtr, setScientCtr ] = useState(0);//indexx or scient sc

    const [ currEscafe, setCurrEscafe ] = useState({});
    const [ escafeCtr, setEscafeCtr ] = useState(0);

    useEffect(() => {
        setCurrScient(scient[0])
        setCurrEscafe(escafe[0])
    },[])   

    const scientLeft = () => {
        if(scientCtr === 0)
            return;
        setScientCtr(scientCtr - 1)
    }
    
    const scientRight = () => {
        if(scientCtr === 4)
            return;

        setScientCtr(scientCtr + 1)
    }

    useEffect(() => {
        setCurrScient(scient[scientCtr])
    },[scientCtr])

    const escafeLeft = () => {
        if(escafeCtr === 0){
            return;
        }
        setEscafeCtr(escafeCtr - 1)
    }

    const escafeRight = () => {
        if(escafeCtr === 3){
            return;
        }
        setEscafeCtr(escafeCtr + 1)
    }

    useEffect(() => {
        setCurrEscafe(escafe[escafeCtr])
    },[escafeCtr])
    

  return (
    <section id='portolio' ref={ref}>
        <h1>Portfolio</h1>
        <div className="projects">
            <h2>ScienT</h2>
            <div className='carousel-container'>
                <img src={currScient.image} alt="" />
                <div className="btn">
                    <div className='left'>
                        <a onClick={() => scientLeft()}><ChevronLeftIcon className='icons' fill='#46B3A5'/></a>
                    </div>
                    <div className='right'>
                        <a onClick={() => scientRight()}><ChevronRightIcon className='icons' fill='#46B3A5'/></a>
                    </div>
                </div>
                <div className="caption">
                    <p>{currScient.caption}</p>
                </div>
            </div>
            <div className="paragraph">
                <p>ScienT is a game-based learning platform developed as part of our college thesis project. ScienT aims to provide a more interactive and engaging approach to learning the periodic table. Through this platform, students can explore the elements in a virtual environment that combines education and entertainment. With ScienT, we seek to redefine the traditional methods of studying the periodic table by incorporating gamification techniques. Join us on this journey as we strive to enhance the learning experience and make it more accessible and enjoyable for college students.</p>
                <p>Technologies: JavaScript, ReactJS, Node.js, Express, MongoDB</p>
            </div>
            <div className="external-links">
                <div className='btn-external-links'>
                    <a href="https://scien-t.onrender.com/" target="_blank">Try Demo <LinkIcon className='icons'/></a>
                </div>
                <div className='btn-external-links'>
                    <a href="https://github.com/gnahhr/Scien-T" target="_blank">View Code <CodeBracketIcon className='icons'/></a>
                </div>
                
            </div>
        </div>
        <div className="projects">
            <h2>Escafe</h2>
            <div className='carousel-container'>
                <img src={currEscafe.image} alt="" />
                <div className="btn">
                    <div className='left'>
                        <a onClick={() => escafeLeft()}><ChevronLeftIcon className='icons' fill='#46B3A5'/></a>
                    </div>
                    <div className='right'>
                        <a onClick={() => escafeRight()}><ChevronRightIcon className='icons' fill='#46B3A5'/></a>
                    </div>
                </div>
                <div className="caption">
                    <p>{currEscafe.caption}</p>
                </div>
            </div>
            <div className="paragraph">
                <p>Escafe is a Point of Sale (POS) system designed specifically for the coffee industry. With Escafe, you can effortlessly handle buying and selling coffee products thanks to its basic CRUD (Create, Read, Update, Delete) features. This user-friendly system allows coffee shop owners and baristas to manage inventory, process orders, track sales, and provide good customer service without any hassle. Whether you're running a busy cafe or a small specialty coffee shop, Escafe is here to simplify your transactions so that you can focus on your core business. </p>
                <p>Technologies: PHP, Xampp, MySQL</p>
            </div>
            <div className="external-links">
                <div className='btn-external-links'>
                    <a href="https://github.com/gnahhr/websys-php-finals" target="_blank">View Code <CodeBracketIcon className='icons'/></a>
                </div>
                
            </div>
        </div>
    </section>
  )
})

export default portfolio