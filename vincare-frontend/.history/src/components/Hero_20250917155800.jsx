import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../styles/hero.css";
import HeroBg from "../assets/gero.png";

/**
 * Props:
 * - title       (string)
 * - subtitle    (string)
 * - text        (string)
 * - primaryCta  ({ label: string, onClick?: fn, href?: string })
 * - secondaryCta({ label: string, onClick?: fn, href?: string })
 * - bgImage     (string) // URL for hero background image
 */
export default function Hero({
  title = "Vincare",
  subtitle = "ONE-STOP-DESTINATION FOR HOUSE KEEPING & WATER TREATMENT SOLUTIONS",
  text = "Vincare Hygiene is a leading provider of housekeeping and water treatment solutions. With a strong focus on eco-friendly, biodegradable, and high-performance formulations, Vincare has become a trusted name in the cleaning and hygiene industry.",
  primaryCta = { label: "View Products", href: "#" },
  secondaryCta = { label: "Contact Us", href: "#" },
  bgImage = HeroBg,
}) {
  // animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const riseUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 14 },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -24 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 90, damping: 16 },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.35 } },
  };

  return (
    <section
      className="hero"
      style={{ ["--hero-bg-image"]: `url(${bgImage})` }}
      aria-label="Intro"
    >
      <div className="hero__inner">
        {/* Column 1 & 12 are gutters by layout rules in CSS */}
        <motion.div
          className="hero__content"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 className="hero__title" variants={riseUp}>
            {title}
          </motion.h1>

          <motion.h2 className="hero__subtitle" variants={fadeIn}>
            {subtitle}
          </motion.h2>

          <motion.p className="hero__text" variants={slideIn}>
            {text}
          </motion.p>

          <motion.div className="hero__actions" variants={fadeIn}>
            {primaryCta?.href ? (
              <a className="btn btn--primary" href={primaryCta.href}>
                {primaryCta.label}
              </a>
            ) : (
              <button
                className="btn btn--primary"
                onClick={primaryCta?.onClick}
              >
                {primaryCta.label}
              </button>
            )}

            {secondaryCta?.href ? (
              <a className="btn btn--ghost" href={secondaryCta.href}>
                {secondaryCta.label}
              </a>
            ) : (
              <button
                className="btn btn--ghost"
                onClick={secondaryCta?.onClick}
              >
                {secondaryCta.label}
              </button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
