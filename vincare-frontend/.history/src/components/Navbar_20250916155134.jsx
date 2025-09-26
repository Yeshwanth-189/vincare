import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "../styles/NavBar.css";
import VincareLogo from "../assets/Vincare-Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-grid">
        <div className="col-1" />

        <div className="col-2to11 navbar-content">
          <div className="navbar-logo">
            <img alt="logo" className="navbar-logo-image" src={VincareLogo} />
            <h2>
              <span className="primary"></span>Spider
              <span className="secondary">OpsNet</span>
            </h2>
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
              <span className={isOpen ? "bar rotate-top" : "bar"}></span>
              <span className={isOpen ? "bar fade" : "bar"}></span>
              <span className={isOpen ? "bar rotate-bottom" : "bar"}></span>
            </div>
          </div>

          {/* Smooth Scrolling Links */}
          <div className={`navbar-links ${isOpen ? "open" : ""}`}>
            <ScrollLink
              to="home"
              smooth={true}
              duration={700}
              onClick={() => setIsOpen(false)}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={700}
              onClick={() => setIsOpen(false)}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="services"
              smooth={true}
              duration={700}
              onClick={() => setIsOpen(false)}
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="courses"
              smooth={true}
              duration={700}
              onClick={() => setIsOpen(false)}
            >
              Courses
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={700}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="blogs"
              smooth={true}
              duration={700}
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={700}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </ScrollLink>
          </div>
        </div>

        <div className="col-12" />
      </div>
    </nav>
  );
}

export default Navbar;
