import React from "react";
import NavBar from "../components/Navbar";

import Footer from "../components/Footer";

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
      <section id="certifications">
        <Certifications />
      </section>
      <section id="Clients">
        <Clients />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />

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
