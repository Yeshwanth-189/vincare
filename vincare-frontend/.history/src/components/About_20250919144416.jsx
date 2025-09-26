// src/components/WhoWeAreSection.jsx
import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { FaEye } from "react-icons/fa";
import AboutBg from "../assets/about-bg.jpg";
import "../styles/About.css";

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

      {/* Left column: cols 2-7 */}
      <motion.div
        className="who__left"
        style={{ backgroundImage: `url(${storyImg})` }}
        initial={{ y: 28, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.05 }}
      >
        <h3 className="who__sectionTitle">Our Story</h3>
        <p className="who__para">
          Founded in Bangalore, Vincare Hygiene is a leading provider of
          housekeeping and water treatment solutions. With strong focus on
          eco‑friendly, biodegradable, and high‑performance formulations,
          Vincare has become a trusted name in the cleaning and hygiene
          industry. Our diverse product range spans floor care, disinfectants,
          degreasers, and specialized solutions for healthcare, hospitality,
          education, and corporate sectors.
        </p>

        <div className="who__vision">
          <div className="who__visionMedia">
            <FaEye />
          </div>
          <div className="who__visionText">
            <h4>Our Vision</h4>
            <p>
              “To be a global leader in sustainable cleaning and hygiene
              solutions by delivering eco‑friendly, innovative, and high‑quality
              products that create healthier environments and enhance everyday
              living standards.”
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right column: cols 8-11 */}
      <motion.aside
        className="who__right"
        initial={{ y: 32, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.1 }}
      >
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
