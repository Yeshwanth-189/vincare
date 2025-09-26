import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../styles/WhyVincare.css";

import why1 from "../assets/why1.png";
import why2 from "../assets/why2.png";
import why3 from "../assets/why3.jpg";
import why4 from "../assets/why4.png";
import why5 from "../assets/why5.png";

const items = [
  {
    idx: "I",
    title: "Quality Above All",
    text: "We maintain stringent international standards, ensuring every formulation is safe, effective, and reliable across industries.",
    img: why1,
  },
  {
    idx: "II",
    title: "Sustainable by Design",
    text: "Our eco-friendly, biodegradable, and non-hazardous products protect both people and the planet while delivering high performance.",
    img: why2,
  },
  {
    idx: "III",
    title: "Hi-Tech Innovation",
    text: "With advanced R&D and cutting-edge formulations, we deliver next-generation cleaning solutions that evolve with client needs.",
    img: why3,
  },
  {
    idx: "IV",
    title: "On-Time, Every Time",
    text: "We honour commitments with prompt, consistent delivery, helping clients maintain seamless operations without compromise.",
    img: why4,
  },
  {
    idx: "V",
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

      {/* Rows container (for vertical rail) */}
      <div className="why__rows">
        {items.map((it) => (
          <motion.div
            key={it.title}
            className="why__row"
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 110, damping: 16 }}
          >
            {/* Badge (centered on rail) */}
            <div className="why__badgeCol">
              <div className="why__badge">
                <span>{it.idx}</span>
              </div>
            </div>

            {/* Text (ALWAYS left on desktop) */}
            <div className="why__cardWrap left">
              <article className="why__card">
                <div className="why__content">
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </div>
              </article>
            </div>

            {/* Image (ALWAYS right on desktop) */}
            <div className="why__imgCol right">
              <img src={it.img} alt={it.title} loading="lazy" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
