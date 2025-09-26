// src/components/WhyVincare.jsx
import React from "react";
import { motion } from "framer-motion";

// Replace with your actual images
import why1 from "../assets/why-1.jpg";
import why2 from "../assets/why-2.jpg";
import why3 from "../assets/why-3.jpg";
import why4 from "../assets/why-4.jpg";
import why5 from "../assets/why-5.jpg";

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

const cardVariants = {
  hidden: { y: 24, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 110, damping: 16 },
  },
};

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

      {/* Left lane (cols 2-6) and Right lane (cols 7-11) */}
      <div className="why__col why__col--left">
        {items.map((it, idx) =>
          idx % 2 === 0 ? (
            <motion.article
              key={it.title}
              className="why__item why__item--left"
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="why__card">
                <div className="why__media">
                  <img src={it.img} alt={it.title} loading="lazy" />
                </div>
                <div className="why__content">
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </div>
              </div>
              <Badge index={idx + 1} side="right" />
            </motion.article>
          ) : null
        )}
      </div>

      <div className="why__col why__col--right">
        {items.map((it, idx) =>
          idx % 2 === 1 ? (
            <motion.article
              key={it.title}
              className="why__item why__item--right"
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="why__card why__card--reverse">
                <div className="why__content">
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </div>
                <div className="why__media">
                  <img src={it.img} alt={it.title} loading="lazy" />
                </div>
              </div>
              <Badge index={idx + 1} side="left" />
            </motion.article>
          ) : null
        )}
      </div>
    </section>
  );
}

function Badge({ index, side }) {
  return (
    <motion.div
      className={`why__badge why__badge--${side}`}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 140, damping: 10 }}
    >
      <span>{index}</span>
    </motion.div>
  );
}
