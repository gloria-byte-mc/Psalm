import React from 'react'
import '../styles/hero.css'
import { FiArrowRight } from "react-icons/fi";
import Navbar from './Navbar';
import { useState , useEffect } from 'react';

const HeroSection = () => {


  
return (
    <>
    <div className="hero-div">

     <Navbar />
   

      <div className='hero-content1'>

        <h3>a christian community</h3>
        <h1>Your testimony <span>matters</span></h1>
        <br />
        <h1>Share it with the 
          <span className='span2'>world</span></h1>

        <p>Psalm is a space for believers to share their life stories, testimonies, and faith journeys - share to be moved by stories of others</p>


        <div className='hero-buttons'>

        <button className='btn1'>Start Writing </button>
        <button className='btn2'>Read Stories  <span className='arrow'>→</span></button>

        </div>

      </div>


      <div className='hero-content2'>


     
     <div className="hero-cross">
      ✝
     </div>


        

      </div>


    </div>
    
    </>
  )
}

export default HeroSection