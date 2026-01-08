import React from 'react'
import Navbar from '../components/Navbar'
import PortfolioHero from '../components/Portfolio/PortfolioHero'
import Testimonials from '../components/Home/Testimonials'
import PartnesLoves from '../components/PartnerLoves'
import Footer from '../components/Footer'

const Portfolio = () => {
  return (
    <div>
        <Navbar/>
        <PortfolioHero/>
        <Testimonials/>
        <PartnesLoves/>
        <Footer/>
    </div>
  )
}

export default Portfolio