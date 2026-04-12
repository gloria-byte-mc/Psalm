

import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={scrolled ? 'nav-div scrolled' : 'nav-div'}>

        <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>P<span>S</span>ALM</h1>
      </Link>

      {/* Desktop Links */}
      <div className='nav-links'>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
           <li><NavLink to="/stories">Stories</NavLink></li>
          <li>Testimonies</li>
          <li>Community</li>
          <li><NavLink to="/about">About</NavLink></li>
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