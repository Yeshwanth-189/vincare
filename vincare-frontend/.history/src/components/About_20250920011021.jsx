// src/components/WhoWeAreSection.jsx
import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { FaEye } from "react-icons/fa";
import AboutBg from "../assets/About-bg-g.png";
import "../styles/About.css";
import {
  FaBullseye,
  FaCogs,
  FaClock,
  FaAward,
  FaLeaf,
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
  FaMedal,
  FaBalanceScale,
} from "react-icons/fa";
import BandBg from "../assets/hands.png";

/**
 * WhoWeAreSection
 * - 12‑column grid with 1 & 12 as gutters
 * - Heading centered with float‑up animation
 * - Left (cols 2‑7): Our Story + Vision block (image + text)
 * - Right (cols 8‑11): Three metric cards with 3D pop + count‑up
 *
 * Props (all optional):
 * - visionImg: string (image URL for the Vision block)
 */
export default function WhoWeAreSection({ storyImg = AboutBg }) {
  const rootRef = useRef(null);
  const inView = useInView(rootRef, { once: true, margin: "-80px" });

  // --- Count‑up hook
  const useCountUp = (
    target,
    opts = { duration: 1800, prefix: "", suffix: "" }
  ) => {
    // eslint-disable-next-line no-unused-vars
    const { duration, prefix, suffix } = opts;
    const [value, setValue] = useState(0);
    const started = useRef(false);
    const raf = useRef(0);

    const start = () => {
      if (started.current) return;
      started.current = true;
      const startTs = performance.now();
      const step = (now) => {
        const t = Math.min(1, (now - startTs) / duration);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        setValue(Math.floor(eased * target));
        if (t < 1) raf.current = requestAnimationFrame(step);
      };
      raf.current = requestAnimationFrame(step);
    };

    useEffect(() => () => cancelAnimationFrame(raf.current), []);

    return [value, start];
  };

  // Metrics
  const [sqft, startSqft] = useCountUp(200_000_000, { duration: 1800 });
  const [partners, startPartners] = useCountUp(20, { duration: 1200 });
  const [clients, startClients] = useCountUp(80, { duration: 1200 });

  useEffect(() => {
    if (inView) {
      startSqft();
      startPartners();
      startClients();
    }
  }, [inView]);

  // Format helpers
  const formatCompact = (n) => {
    if (n >= 1_000_000_000) return `${Math.round(n / 1_000_000_000)}B`;
    if (n >= 1_000_000) return `${Math.round(n / 1_000_000)}M`;
    if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
    return `${n}`;
  };

  return (
    <>
      <section className="who grid-12" ref={rootRef}>
        {/* Centered heading */}
        <motion.h2
          className="who__title"
          initial={{ y: 24, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 110, damping: 14 }}
        >
          Who we are
        </motion.h2>

        <motion.p
          className="who__intro"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 16 }}
        >
          <span className="who__highlight">Vincare</span> Hygiene is a leading
          provider of housekeeping and water treatment solutions. With strong
          focus on eco-friendly, biodegradable, and high-performance
          formulations, Vincare has become trusted name in the cleaning and
          hygiene industry. Our diverse product range spans floor care,
          disinfectants, degreasers, and specialized solutions for healthcare,
          hospitality, education, and corporate sectors. Our diverse product
          range spans floor care, disinfectants, degreasers, and specialized
          solutions for healthcare, hospitality, education, and corporate
          sectors. Today, Vincare products clean and disinfect over 200 million
          sq. ft. daily, supported by 20+ distributors and trusted by 80+
          corporate clients nationwide. At the core of our success is a
          commitment to quality, sustainability, customer satisfaction, and
          innovation. Every formulation is developed under stringent standards,
          ensuring safety, reliability, and international-level performance. As
          a client-centric company, we deliver Hi-Tech services, on-time
          delivery, and customized solutions to meet evolving hygiene needs
          across industries.
        </motion.p>

        {/* Left column: cols 2-7 */}
        <motion.div
          className="who__left"
          initial={{ y: 28, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 16,
            delay: 0.05,
          }}
        >
          <div className="who__storyImage">
            <img src={storyImg} alt="Our Story" loading="lazy" />
          </div>
        </motion.div>

        {/* Right column: cols 8-11 */}
        <motion.aside
          className="who__right"
          initial={{ y: 32, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 16,
            delay: 0.1,
          }}
        >
          <motion.h3
            className="who__right_head"
            initial={{ y: 24, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 110, damping: 14 }}
          >
            Impact At Scale
          </motion.h3>
          <MetricCard
            label="sq ft cleaned each day"
            headline={`${formatCompact(sqft)}+`}
            caption="Operational footprint"
          />
          <MetricCard
            label="channel partners"
            headline={`${formatCompact(partners)}+`}
            caption="Nationwide distribution"
          />
          <MetricCard
            label="enterprise clients"
            headline={`${formatCompact(clients)}+`}
            caption="Trusted relationships"
          />
        </motion.aside>
      </section>
      <motion.section
        className="who__band grid-12"
        style={{ "--band-bg": `url(${BandBg})` }}
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 100, damping: 16 }}
      >
        {/* Left column: 2-6 */}
        <div className="who__bandLeft">
          <h3 className="band__eyeline">
            <FaEye className="band__icon" />
            Our Vision
          </h3>
          <p className="band__para">
            “To be a global leader in sustainable cleaning and hygiene solutions
            by delivering eco-friendly, innovative, and high-quality products
            that create healthier environments and enhance everyday living
            standards.”
          </p>

          <h3 className="band__subhead">
            <FaBullseye className="band__icon" />
            Our Mission
          </h3>
          <ul className="band__bullets">
            <li>
              <FaCogs className="band__bulletIcon" />{" "}
              <strong>Hi-Tech Service</strong> – Advanced, reliable cleaning
              solutions.
            </li>
            <li>
              <FaClock className="band__bulletIcon" />{" "}
              <strong>On-Time Delivery</strong> – Prompt, consistent, and
              efficient.
            </li>
            <li>
              <FaAward className="band__bulletIcon" />{" "}
              <strong>World-Class Quality</strong> – Safe, sustainable, and
              globally benchmarked.
            </li>
          </ul>
        </div>

        {/* Right column: 7-11 */}
        <div className="who__bandRight">
          <h3 className="band__valuesTitle">Our Values</h3>
          <div className="band__valuesGrid">
            <div className="valueItem">
              <FaMedal className="valueIcon" />
              <span>Quality First</span>
            </div>
            <div className="valueItem">
              <FaLeaf className="valueIcon" />
              <span>Sustainability</span>
            </div>
            <div className="valueItem">
              <FaHandshake className="valueIcon" />
              <span>Customer Centricity</span>
            </div>
            <div className="valueItem">
              <FaLightbulb className="valueIcon" />
              <span>Innovation</span>
            </div>
            <div className="valueItem">
              <FaBalanceScale className="valueIcon" />
              <span>Integrity</span>
            </div>
            <div className="valueItem">
              <FaShieldAlt className="valueIcon" />
              <span>Safety</span>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

// Metric card with subtle 3D effect
function MetricCard({ headline, label, caption }) {
  return (
    <motion.div
      className="metric"
      whileHover={{ y: -6, rotateX: 0 }}
      initial={{ rotateX: 12, opacity: 0, y: 12 }}
      whileInView={{ rotateX: 0, opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 110, damping: 12 }}
    >
      <div className="metric__bg" aria-hidden />
      <div className="metric__inner">
        <div className="metric__value">{headline}</div>
        <div className="metric__label">{label}</div>
        <div className="metric__caption">{caption}</div>
      </div>
    </motion.div>
  );
}
