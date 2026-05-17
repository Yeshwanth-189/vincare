import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  FaLinkedin,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import logo from "../assets/FooterVincare.png";
import "../styles/Footer.css";

const Footer = () => {
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT — Logo + Social */}
        <div className="footer-section left-col">
          <div className="brand">
            <img src={logo} alt="Vincare logo" className="brand__logo" />
            <h3 className="vincare__brand__name">Vincare Hygiene</h3>
          </div>

          <div className="brand__desc">Clean Solutions. Clear Standards.</div>

          <div className="social-icons social-icons--grid">
            <a
              href="https://www.facebook.com/VincareHygiene"
              aria-label="Facebook"
              className="social-btn"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/vincare_hygiene/"
              aria-label="Instagram"
              className="social-btn"
            >
              <FaInstagram />
            </a>
            <a href="#" aria-label="X (Twitter)" className="social-btn">
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/vincare-hygiene/"
              aria-label="LinkedIn"
              className="social-btn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* MIDDLE — Quick Links (kept as-is, refined styles) */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <ScrollLink
                to="home"
                smooth
                duration={700}
                onClick={() => setIsOpen(false)}
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth
                duration={700}
                onClick={() => setIsOpen(false)}
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="products-intro"
                smooth
                duration={700}
                onClick={() => setIsOpen(false)}
              >
                Products
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="sustainability"
                smooth
                duration={700}
                onClick={() => setIsOpen(false)}
              >
                Sustainability
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth
                duration={700}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* RIGHT — Address/Email/Phone with icons */}
        <div className="footer-section contact-col">
          <h4>Contact</h4>

          <div className="contact-item">
            <FiMapPin />
            <address>
              #2378, 1ST FLOOR, 1ST MAIN,
              <br />
              RPC LAYOUT VIJAYANAGAR 3RD STAGE
              <br />
              BANGALORE – 560 040.
            </address>
          </div>

          <div className="contact-item">
            <FiMail />
            <a href="mailto:contact@vincare.in">contact@vincare.in</a>
          </div>

          <div className="contact-item">
            <FiPhone />
            <a href="tel:+919448084499">+91&nbsp;9448084499</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Vincare Hygiene. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
