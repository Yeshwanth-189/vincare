import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Sectors from "../components/Sectors";
import ProductsIntro from "../components/ProductsIntro";
// import SustainabilityGreenManf from "../components/SustainabilityGreenManf";
// import SustainabilityEcoFriendly from "../components/SustainabilityEcoFriendly";
// import SustainabilitySafety from "../components/SustainabilitySafety";
// import SustainabilityCommit from "../components/SustainabilityCommit";
import SustainabilityCarousel from "../components/SustainabilityCarousel";
import Certifications from "../components/Certifications";
// import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Vincare() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const sectionId = location.hash.slice(1);
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

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
      {/* <section id="Clients">
        <Clients />
      </section> */}
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
