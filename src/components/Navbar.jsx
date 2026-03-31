{/* 

import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
  return (
   <>

   <div className='nav-div'>
    <h1>P<span>S</span>ALM</h1>


    <div className='nav-links'>


   <ul>
    <li>Stories</li>
    <li>Testimonies</li>
    <li>Community</li>
    <li>About</li>


   </ul>


    </div>


    <div className='nav-cta'>

      <button>Sign In</button>

    </div>


   </div>
   
   </>
  )
}

export default Navbar

*/}


import React, { useState } from 'react'
import '../styles/navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='nav-div'>

      <h1>P<span>S</span>ALM</h1>

      {/* Desktop Links */}
      <div className='nav-links'>
        <ul>
          <li>Stories</li>
          <li>Testimonies</li>
          <li>Community</li>
          <li>About</li>
        </ul>
      </div>

      {/* Desktop CTA */}
      <div className='nav-cta'>
        <button>Sign In</button>
      </div>

      {/* Hamburger Icon */}
      <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='mobile-menu'>
          <ul>
            <li onClick={() => setMenuOpen(false)}>Stories</li>
            <li onClick={() => setMenuOpen(false)}>Testimonies</li>
            <li onClick={() => setMenuOpen(false)}>Community</li>
            <li onClick={() => setMenuOpen(false)}>About</li>
          </ul>
          <button onClick={() => setMenuOpen(false)}>Sign In</button>
        </div>
      )}

    </div>
  )
}

export default Navbar