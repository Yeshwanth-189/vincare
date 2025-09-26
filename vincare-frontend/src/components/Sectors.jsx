import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../styles/Sectors.css";

import corporateImg from "../assets/corporate.jpg";
import healthcareImg from "../assets/healthcare.png";
import hospitalityImg from "../assets/hospitality.png";
import manufacturingImg from "../assets/manufacturing.png";
import laundryImg from "../assets/laundry.jpeg";
import tailoredImg from "../assets/customised.jpg";

const defaultItems = [
  {
    label: "Corporate",
    img: corporateImg,
    alt: "Corporate offices",
  },
  {
    label: "Healthcare",
    img: healthcareImg,
    alt: "Healthcare facility",
  },
  {
    label: "Hospitality",
    img: hospitalityImg,
    alt: "Hospitality venue",
  },
  {
    label: "Manufacturing",
    img: manufacturingImg,
    alt: "Manufacturing plant",
  },
  {
    label: "Laundry",
    img: laundryImg,
    alt: "Commercial laundry",
  },
  {
    label: "Tailored",
    img: tailoredImg,
    alt: "Tailored solutions",
  },
];

const floatUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const listStagger = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardIn = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Sectors({
  title = "Sectors we serve",
  items = defaultItems,
  introText = `At Vincare, hygiene and cleaning excellence are core to operational reliability and brand trust. 
Every sector faces distinct challenges, so we deliver sector-specific chemistries, advanced equipment, and precision tools 
that raise standards of safety, compliance, and efficiency—helping organizations perform at their best.`,
}) {
  return (
    <section className="sectors">
      <div className="sectors__grid grid-12">
        <motion.h2
          className="sectors__title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={floatUp}
        >
          {title}
        </motion.h2>

        <motion.p
          className="sectors__intro"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={floatUp}
        >
          {introText}
        </motion.p>

        <motion.ul
          className="sectors__list"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={listStagger}
          aria-label="Industries served"
        >
          {items.slice(0, 6).map((it) => (
            <motion.li className="sector" key={it.label} variants={cardIn}>
              <figure className="sector__figure">
                <div className="sector__imgWrap">
                  <img
                    className="sector__img"
                    src={it.img}
                    alt={it.alt || it.label}
                  />
                </div>
                <figcaption className="sector__caption">{it.label}</figcaption>
              </figure>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
