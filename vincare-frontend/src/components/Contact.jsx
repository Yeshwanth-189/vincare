import React, { useRef, useState } from "react";
import "../styles/Contact.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import backgroundImage from "../assets/Contact.png";
import {
  FiClock,
  FiMail,
  FiMessageSquare,
  FiPhone,
  FiSend,
  FiType,
  FiUser,
  FiUserPlus,
} from "react-icons/fi";

const EMPTY_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const CONTACT_FORM_RECIPIENT =
  import.meta.env.VITE_CONTACT_FORM_RECIPIENT?.trim() ||
  "vincarehygiene@gmail.com";

const CONTACT_FORM_ACTION = `https://formsubmit.co/${encodeURIComponent(
  CONTACT_FORM_RECIPIENT,
)}`;

const CONTACT_FORM_TARGET = "contact-form-submit-frame";

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitState, setSubmitState] = useState({
    status: "idle",
    message: "",
  });
  const hasPendingSubmission = useRef(false);
  const hasLoadedSubmitFrame = useRef(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({ ...currentForm, [name]: value }));

    if (submitState.status !== "idle") {
      setSubmitState({ status: "idle", message: "" });
    }
  };

  const handleSubmit = async (event) => {
    const formElement = event.currentTarget;

    if (!formElement.reportValidity()) {
      event.preventDefault();
      return;
    }

    hasPendingSubmission.current = true;
    setSubmitState({
      status: "submitting",
      message: "Sending your message...",
    });
  };

  const handleSubmitFrameLoad = () => {
    if (!hasLoadedSubmitFrame.current) {
      hasLoadedSubmitFrame.current = true;
      return;
    }

    if (!hasPendingSubmission.current) {
      return;
    }

    hasPendingSubmission.current = false;
    setSubmitState({
      status: "success",
      message:
        "Message sent. Please check the recipient inbox for the first FormSubmit activation email if this form has not been confirmed yet.",
    });
    setForm(EMPTY_FORM);
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
        Let&apos;s Get in Touch
      </motion.h2>

      <motion.div
        className="contact-grid container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
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
            <address>
              #2378, 1ST FLOOR, 1ST MAIN,
              <br />
              RPC LAYOUT VIJAYANAGAR 3RD STAGE
              <br />
              BANGALORE - 560 040.
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
            <a className="email" href="tel:08023145499">
              080&nbsp;23145499
            </a>

            <p className="label label--inline">
              <FiClock /> Mon-Fri, 9:00am-6:00pm
            </p>

            <div
              className="map-wrap"
              aria-label="Google map showing Vincare Head Office"
            >
              <iframe
                title="Vincare Head Office Map"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.151567330073!2d77.53491957615509!3d12.962151515083136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e7518811767%3A0x39691bde7c545b15!2sVincare%20Hygiene!5e0!3m2!1sen!2sus!4v1759013447381!5m2!1sen!2sus"
              />
            </div>
          </div>
        </div>

        <div className="contact-form-wrap">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Partner with us today for world-class cleaning and hygiene
            solutions.
          </p>

          <form
            className="contact-form"
            action={CONTACT_FORM_ACTION}
            method="POST"
            target={CONTACT_FORM_TARGET}
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="_subject"
              value={`Vincare contact enquiry: ${form.subject || "Website form submission"}`}
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_replyto" value={form.email} />
            <input
              type="hidden"
              name="name"
              value={`${form.firstName} ${form.lastName}`.trim()}
            />
            <input
              type="hidden"
              name="_url"
              value={
                typeof window !== "undefined"
                  ? window.location.href
                  : "Vincare contact form"
              }
            />
            <input
              className="contact-form__honeypot"
              type="text"
              name="_honey"
              tabIndex="-1"
              autoComplete="off"
            />

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
                    autoComplete="given-name"
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
                    autoComplete="family-name"
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
                    autoComplete="email"
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
                    autoComplete="tel"
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
                    placeholder="Share a few details about your requirement..."
                  />
                </div>
              </div>
            </div>

            {submitState.status !== "idle" ? (
              <p
                className={`contact-form__status is-${submitState.status}`}
                role="status"
                aria-live="polite"
              >
                {submitState.message}
              </p>
            ) : null}

            <button
              type="submit"
              className="btn-primary"
              disabled={submitState.status === "submitting"}
            >
              <FiSend />
              {submitState.status === "submitting" ? "Sending..." : "Submit"}
            </button>
          </form>
          <iframe
            title="Contact form submission"
            name={CONTACT_FORM_TARGET}
            onLoad={handleSubmitFrameLoad}
            style={{ display: "none" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
