import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import "../styles/Navbar.css";
import VincareLogo from "../assets/Vincare-Logo.png";
import VincareWordLogo from "../assets/Vincare-Word-Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 769px)"); // desktop breakpoint
    const navbar = document.querySelector(".navbar");
    const descendants = navbar ? Array.from(navbar.querySelectorAll("*")) : [];

    // remember original display for each child so we can restore it
    descendants.forEach((el) => {
      if (!el.dataset.originalDisplay) {
        el.dataset.originalDisplay = getComputedStyle(el).display || "";
      }
    });

    const setChildrenDisplay = (hide) => {
      if (!navbar) return;
      descendants.forEach((el) => {
        el.style.display = hide ? "none" : el.dataset.originalDisplay || "";
      });
    };

    const closeMobileMenu = () => {
      const links = document.querySelector(".navbar-links");
      const bars = document.querySelectorAll(".hamburger .bar");
      if (links?.classList.contains("open")) {
        links.classList.remove("open");
        bars[0]?.classList.remove("rotate-top");
        bars[1]?.classList.remove("fade");
        bars[2]?.classList.remove("rotate-bottom");
      }
    };

    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      const y = window.scrollY;

      const run = () => {
        if (mq.matches) {
          // DESKTOP: hide all navbar children on scroll UP, show on scroll DOWN
          if (y < lastY) {
            setChildrenDisplay(true); // UP -> hide
          } else {
            setChildrenDisplay(false); // DOWN -> show
          }
        } else {
          // MOBILE: your original behavior — close menu when scrolling UP
          if (y < lastY) {
            closeMobileMenu();
          }
        }
        lastY = y;
        ticking = false;
      };

      if (!ticking) {
        requestAnimationFrame(run);
        ticking = true;
      }
    };

    // Ensure correct state if viewport crosses the breakpoint
    const onMQChange = () => setChildrenDisplay(false);

    window.addEventListener("scroll", onScroll, { passive: true });
    if (mq.addEventListener) mq.addEventListener("change", onMQChange);
    else mq.addListener(onMQChange); // older Safari

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (mq.removeEventListener) mq.removeEventListener("change", onMQChange);
      else mq.removeListener(onMQChange);
    };
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
