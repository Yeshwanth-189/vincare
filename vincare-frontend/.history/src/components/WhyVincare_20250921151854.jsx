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

export default function WhyVincare() { return (
  <section className="why grid-12"> <motion.h2 className="why__title" initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 110, damping: 14 }} > Why Vincare </motion.h2>