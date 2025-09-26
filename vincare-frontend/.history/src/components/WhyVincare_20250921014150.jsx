// src/components/WhyVincare.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/WhyVincare.css";

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
    <section className="why grid-12">
      <motion.h2
        className="why__title"
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 110, damping: 14 }}
      >
        Why Vincare
      </motion.h2>

      <div className="why__rows">
        {items.map((it, idx) => {
          // Swap layout only for 2nd (idx=1) and 4th (idx=3) rows
          const swap = idx === 1 || idx === 3;
          const rowClass = swap ? "why__row why__row--swap" : "why__row";

          return (
            <motion.div
              key={it.title}
              className={rowClass}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ type: "spring", stiffness: 110, damping: 16 }}
            >
              <div className="why__badgeCol">
                <div className="why__badge">
                  <span>{idx + 1}</span>
                </div>
              </div>

              {/* Image */}
              <div className="why__imgCol">
                <img src={it.img} alt={it.title} loading="lazy" />
              </div>

              {/* Text */}
              <article className="why__card">
                <div className="why__content">
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </div>
              </article>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
