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
        className="certs__carousel"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="certs__marquee">
          <div className="certs__track">
            <div className="certs__group">
              {items.map((it, idx) => (
                <figure className="certs__card" key={`primary-${idx}`}>
                  <motion.img
                    className="certs__img"
                    src={it.img}
                    alt={it.alt || it.name}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 900px) 60vw, 22vw"
                    whileHover={{
                      y: -4,
                      scale: 1.03,
                      transition: { duration: 0.24, ease: "easeOut" },
                    }}
                  />
                  <figcaption className="certs__name">{it.name}</figcaption>
                </figure>
              ))}
            </div>

            <div className="certs__group" aria-hidden="true">
              {items.map((it, idx) => (
                <figure className="certs__card" key={`duplicate-${idx}`}>
                  <img
                    className="certs__img"
                    src={it.img}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 900px) 60vw, 22vw"
                  />
                  <figcaption className="certs__name">{it.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
