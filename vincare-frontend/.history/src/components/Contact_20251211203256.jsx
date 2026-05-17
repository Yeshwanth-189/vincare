import React, { useState } from "react";
import "../styles/Contact.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import backgroundImage from "../assets/Contact.png";
import {
  FiPhone,
  FiMail,
  FiUser,
  FiUserPlus,
  FiType,
  FiMessageSquare,
  FiSend,
  FiClock,
} from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Thanks! We’ll get back to you shortly.");
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      className="contact-section contact--with-bg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      id="contact"
    >
      <motion.h2
        className="who__title contact__heading"
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 110, damping: 14 }}
      >
        Let’s Get in Touch
      </motion.h2>

      <motion.div
        className="contact-grid container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left column — Location Info (transparent glass slab) */}
        <div className="contact-info">
          <h2 className="contact-title">
            <FaMapMarkerAlt className="title-icon" />
            Location
          </h2>

          <div className="info-block">
            <h3 className="org">VINCARE HEAD OFFICE</h3>

            <p className="label">
              <FaMapMarkerAlt /> Address
            </p>
            {/* ✅ remove .email class so it doesn't look like a link */}
            <address>
              #2378, 1ST FLOOR, 1ST MAIN,
              <br />
              RPC LAYOUT VIJAYANAGAR 3RD STAGE
              <br />
              BANGALORE – 560 040.
            </address>

            <p className="label">
              <FiMail /> E-mail
            </p>
            <a className="email" href="mailto:contact@vincare.in">
              contact@vincare.in
            </a>

            <p className="label">
              <FiPhone /> Phone
            </p>
            <a className="email" href="tel:+919448084499">
              +91&nbsp;9448084499
            </a>

            <p className="label label--inline">
              <FiClock /> Mon–Fri, 9:00am–6:00pm
            </p>

            <div
              className="map-wrap"
              aria-label="Google map showing Vincare Head Office"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26471.359421085926!2d-117.31144735968017!3d33.96889752354257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae4687aa9fb3%3A0x10050bdf47721d31!2sUniversity%20of%20California%2C%20Riverside!5e0!3m2!1sen!2sus!4v1765513961530!5m2!1sen!2sus"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right column — Contact Form */}
        <div className="contact-form-wrap">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            "Partner with us today for world-class cleaning and hygiene
            solutions."
          </p>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="row two">
              <div className="field">
                <label htmlFor="firstName">
                  <FiUser /> First Name <span aria-hidden="true">*</span>
                </label>
                <div className="input-icon">
                  <FiUser />
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Jane"
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="lastName">
                  <FiUserPlus /> Last Name
                </label>
                <div className="input-icon">
                  <FiUserPlus />
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>

            <div className="row two">
              <div className="field">
                <label htmlFor="email">
                  <FiMail /> Email <span aria-hidden="true">*</span>
                </label>
                <div className="input-icon">
                  <FiMail />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@company.com"
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="phone">
                  <FiPhone /> Phone
                </label>
                <div className="input-icon">
                  <FiPhone />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 9XXXXXXXXX"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="subject">
                  <FiType /> Subject <span aria-hidden="true">*</span>
                </label>
                <div className="input-icon">
                  <FiType />
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="message">
                  <FiMessageSquare /> Message <span aria-hidden="true">*</span>
                </label>
                <div className="input-icon textarea">
                  <FiMessageSquare />
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Share a few details about your requirement…"
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="btn-primary">
              <FiSend /> Submit
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
