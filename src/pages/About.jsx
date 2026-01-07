import React from 'react'
import Navbar from '../components/Navbar'
import AboutHero from '../components/About/AboutHero'
import OurSucess from '../components/Home/OurSucess'
import OurTeam from '../components/About/OurTeam'
import OurApp from '../components/OurApp'
import Testimonials from '../components/Home/Testimonials'
import PartnesLoves from '../components/PartnerLoves'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
        <Navbar/>
        <AboutHero/>
        <OurSucess/>
        <OurTeam/>
        <OurApp/>
        <Testimonials/>
        <PartnesLoves/>
        <Footer/>
    </div>
  )
}

export default About