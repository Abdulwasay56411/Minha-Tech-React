import React from "react";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OurSucess from "../components/Home/OurSucess";
import OurAbout from "../components/Home/OurAbout";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurSucess/>
      <OurAbout/>
      <Footer />
    </div>
  );
};

export default Home;
