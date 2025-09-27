import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../styles/Certifications.css";
import cert1 from "../assets/GreenPRO.png";
import cert2 from "../assets/GMP.png";
import cert3 from "../assets/ISO.png";
import cert4 from "../assets/TUV.png";

/**
 * Props:
 * - title: string (default "Certifications")
 * - items: Array<{ name: string, img: string, alt?: string }>
 *   Exactly 4 recommended; supports any length.
 */
export default function Certifications({
  title = "Certifications",
  items = [
    { name: "GREEN PRO CERTIFICATION", img: cert1 },
    { name: "GMP CERTIFICATION", img: cert2 },
    { name: "ISO QUALITY CERTIFICATION", img: cert3 },
    { name: "TUV ASIA CERTIFICATION", img: cert4 },
  ],
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
    visible: { transition: { staggerChildren: 0.15 } },
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
            <motion.img
              className="certs__img"
              src={it.img}
              alt={it.alt || it.name}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 900px) 100vw, 25vw"
              whileHover={{
                scale: [1, 1.15, 0.95, 1],
                rotate: [0, -6, 3, 0],
                transition: { duration: 0.6, ease: "easeInOut" },
              }}
            />
            <figcaption className="certs__name">{it.name}</figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
