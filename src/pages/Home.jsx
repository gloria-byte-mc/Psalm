import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Versebanner from '../components/Versebanner'
import WhyPsalm from '../components/WhyPsalm'
import Testimonies from '../components/Testimonies'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
   
    <HeroSection />
    <Versebanner />
    <WhyPsalm />
    <Testimonies />
    <CTA />
    <Footer />
    </>
  )
}

export default Home