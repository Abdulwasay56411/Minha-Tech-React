import React from "react";
import Navbar from "../components/Navbar";
import ServicesHero from "../components/Services/ServicesHero";
import Footer from "../components/Footer";
import OurApp from "../components/OurApp";
import Testimonials from "../components/Home/Testimonials";
import PartnesLoves from "../components/PartnerLoves";

const Services = () => {
  return (
    <div>
      <Navbar />
      <ServicesHero />
      <OurApp />
      <Testimonials />
      <PartnesLoves />
      <Footer />
    </div>
  );
};

export default Services;
