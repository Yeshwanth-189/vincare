import React, { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../styles/hero.css";
import HeroBg from "../assets/hero-of-bg.png";
import SideImage from "../assets/Vincare-Logo.png";
import { IoMdPaperPlane } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

/**
 * Props:
 * - title       (string)
 * - subtitle    (string)
 * - text        (string)
 * - primaryCta  ({ label: string, onClick?: fn, href?: string, to?: string, scrollTo?: string })
 * - secondaryCta({ label: string, onClick?: fn, href?: string, to?: string, scrollTo?: string })
 * - bgImage     (string) // URL for hero background image
 */
export default function Hero({
  title = "VINCARE",
  subtitle = "HYGIENE",
  text = "ONE-STOP DESTINATION FOR SAFE, SUSTAINABLE HYGIENE SOLUTIONS.",
  primaryCta = { label: "View Products", to: "/products" },
  secondaryCta = { label: "Contact Us", scrollTo: "contact" },
  bgImage = HeroBg,
  sideImage = SideImage,
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

  useEffect(() => {
    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.as = "image";
    preloadLink.href = bgImage;
    document.head.appendChild(preloadLink);

    return () => {
      document.head.removeChild(preloadLink);
    };
  }, [bgImage]);

  const renderCta = (cta, className, Icon) => {
    if (cta?.to) {
      return (
        <RouterLink className={className} to={cta.to}>
          <Icon className="btn__icon" />
          {cta.label}
        </RouterLink>
      );
    }

    if (cta?.scrollTo) {
      return (
        <ScrollLink
          className={className}
          to={cta.scrollTo}
          smooth={true}
          duration={700}
        >
          <Icon className="btn__icon" />
          {cta.label}
        </ScrollLink>
      );
    }

    if (cta?.href) {
      return (
        <a className={className} href={cta.href}>
          <Icon className="btn__icon" />
          {cta.label}
        </a>
      );
    }

    return (
      <button className={className} onClick={cta?.onClick}>
        <Icon className="btn__icon" />
        {cta.label}
      </button>
    );
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

          <motion.h1 className="hero__title" variants={fadeIn}>
            {subtitle}
          </motion.h1>

          <motion.p className="hero__text" variants={slideIn}>
            {text}
          </motion.p>

          <motion.div className="hero__actions" variants={fadeIn}>
            {renderCta(primaryCta, "btn btn--primary", MdOutlineShoppingCart)}
            {renderCta(secondaryCta, "btn btn--ghost", IoMdPaperPlane)}
          </motion.div>
        </motion.div>
        <motion.div className="hero__visual">
          <motion.img
            src={sideImage}
            alt="Illustration"
            className="hero__visual-img"
            fetchPriority="high"
            decoding="async"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 1080 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
