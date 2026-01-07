import React from "react";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OurSucess from "../components/Home/OurSucess";
import OurAbout from "../components/Home/OurAbout";
import PartnerLoves from "../components/PartnerLoves";
import Planning from "../components/Home/Planning";
import OurApp from "../components/OurApp";
import Testimonials from "../components/Home/Testimonials";
import ContactUs from "../components/Home/ContactUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurSucess />
      <OurAbout />
      <PartnerLoves />
      <Planning />
      <OurApp />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
