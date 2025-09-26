// src/components/WhyVincare.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../styles/WhyVincare.css";

// Replace with your actual images
import why1 from "../assets/why.png";
import why2 from "../assets/why.png";
import why3 from "../assets/why.png";
import why4 from "../assets/why.png";
import why5 from "../assets/why.png";

const items = [
  {
    title: "Quality That Inspires Trust",
    text: "We maintain stringent international standards, ensuring every formulation is safe, effective, and reliable across industries.",
    img: why1,
  },
  {
    title: "Sustainable by Design",
    text: "Our eco-friendly, biodegradable, and non-hazardous products protect both people and the planet while delivering high performance.",
    img: why2,
  },
  {
    title: "Hi-Tech Innovation",
    text: "With advanced R&D and cutting-edge formulations, we deliver next-generation cleaning solutions that evolve with client needs.",
    img: why3,
  },
  {
    title: "On-Time, Every Time",
    text: "We honour commitments with prompt, consistent delivery, helping clients maintain seamless operations without compromise.",
    img: why4,
  },
  {
    title: "Safety & Transparency",
    text: "From packaging to process, we ensure user safety, clear labeling, and transparent practices, building long-term client confidence.",
    img: why5,
  },
];

export default function WhyVincare() {
  return (
    <section className="wv grid-12">
      <motion.h2
        className="wv__title"
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 110, damping: 14 }}
      >
        Why Vincare
      </motion.h2>

      <div className="wv__rows">
        {items.map((it, idx) => {
          // Row types:
          // - A (odd index 0,2,4...): text left (cols 2–6), image right (7–11)
          // - B (even-numbered visually 2,4,6... i.e., idx 1,3,5...): image left (2–6), text right (7–11)
          const isTypeB = idx % 2 === 1;
          const rowClass = isTypeB
            ? "wv__row wv__row--b"
            : "wv__row wv__row--a";

          return (
            <motion.div
              key={it.title}
              className={rowClass}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ type: "spring", stiffness: 110, damping: 16 }}
            >
              {/* Center badge on the rail */}
              <div className="wv__badgeAnchor">
                <div className="wv__badge">
                  <span>{idx + 1}</span>
                </div>
              </div>

              {/* Card (text) */}
              <article className="wv__card">
                <div className="wv__content">
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </div>
              </article>

              {/* Image */}
              <div className="wv__media">
                <img src={it.img} alt={it.title} loading="lazy" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
