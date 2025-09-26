import React from "react";
import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
// import About from "../components/About";
// import Services from "../components/Services";
// import Projects from "../components/Projects";
// import Courses from "../components/Courses";
// import Blogs from "../components/Blogs";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";

function Vincare() {
  return (
    <>
      <NavBar />
      <section id="home">
        <Hero />
      </section>
      {/* <section id="about">
        <About />
      </section>
      <section id="services">
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
