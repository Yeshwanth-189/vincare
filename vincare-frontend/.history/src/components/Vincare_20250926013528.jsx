import React from "react";
import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Sectors from "../components/Sectors";
import ProductsIntro from "../components/ProductsIntro";
import SustainabilityGreenManf from "../components/SustainabilityGreenManf";
import SustainabilityEcoFriendly from "../components/SustainabilityEcoFriendly";
import SustainabilitySafety from "../components/SustainabilitySafety";
import SustainabilityCommit from "../components/SustainabilityCommit";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";

function Vincare() {
  return (
    <>
      <NavBar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="sectors">
        <Sectors />
      </section>
      <section id="products-intro">
        <ProductsIntro />
      </section>
      <section id="sustainability">
        <SustainabilityCarousel />
      </section>

      {/* <section id="services">
        <Services />
      </section>
      <section id="courses">
        <Courses />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="blogs">
        <Blogs />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer /> */}
    </>
  );
}

export default Vincare;
