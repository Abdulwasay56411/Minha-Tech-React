import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ConsulationHero from '../components/Consulation/ConsulationHero'
import OurSucess from '../components/Home/OurSucess'
import OurSupport from '../components/Consulation/OurSupport'
import OurApp from '../components/OurApp'
import Testimonials from '../components/Home/Testimonials'
import PartnesLoves from '../components/PartnerLoves'

const Consulation = () => {
  return (
    <div>
        <Navbar/>
        <ConsulationHero/>
        <OurSucess/>
        <OurSupport/>
        <OurApp/>
        <Testimonials/>
        <PartnesLoves/>
        <Footer/>
    </div>
  )
}

export default Consulation