import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import "../styles/Navbar.css";
import VincareLogo from "../assets/Vincare-Logo.png";
import VincareWordLogo from "../assets/Vincare-Word-Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    useEffect(() => {
    const mq = window.matchMedia("(min-width: 769px)");
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    // collect every descendant except the root .navbar
    const descendants = Array.from(navbar.querySelectorAll("*"));

    // remember original display so we can restore exactly
    descendants.forEach(el => {
      if (!el.dataset.originalDisplay) {
        el.dataset.originalDisplay = getComputedStyle(el).display || "";
      }
    });

    let lastY = window.scrollY;

    const setAll = (displayNone) => {
      descendants.forEach(el => {
        if (displayNone) {
          el.style.display = "none";
        } else {
          // restore to original
          el.style.display = el.dataset.originalDisplay || "";
        }
      });
    };

    const onScroll = () => {
      if (!mq.matches) return; // desktop-only
      const y = window.scrollY;

      if (y < lastY) {
        // scrolling UP → hide everything inside navbar
        setAll(true);
      } else {
        // scrolling DOWN → show everything back
        setAll(false);
      }
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-grid">
        <div className="col-1" />

        <div className="col-2to11 navbar-content">
          <div className="navbar-logo">
            <img
              alt="logo"
              className="navbar-word-logo-image"
              src={VincareWordLogo}
            />
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
              Products
            </ScrollLink>
            <ScrollLink
              to="courses"
              smooth={true}
              duration={700}
              onClick={() => setIsOpen(false)}
            >
              Sustainability
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
