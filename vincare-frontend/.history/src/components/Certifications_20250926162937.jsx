import React from "react";
import { motion } from "framer-motion";
import "../styles/Certifications.css";

/**
 * Props:
 * - title: string (default "Certifications")
 * - items: Array<{ name: string, img: string, alt?: string }>
 *      Exactly 4 recommended; component supports any length.
 */
export default function Certifications({
  title = "Certifications",
  items = [],
}) {
  // Animation variants
  const headingVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const gridVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // one by one
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: -18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section className="certs">
      <motion.h2
        className="certs__title"
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="certs__grid"
        variants={gridVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((it, idx) => (
          <motion.figure
            className="certs__card"
            key={idx}
            variants={cardVariant}
          >
            <img className="certs__img" src={it.img} alt={it.alt || it.name} />
            <figcaption className="certs__name">{it.name}</figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
