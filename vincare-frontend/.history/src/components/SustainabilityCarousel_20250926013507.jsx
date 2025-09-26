// src/components/SustainabilityCarousel.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SustainabilityGreenManf from "./SustainabilityGreenManf";
import SustainabilityEcoFriendly from "./SustainabilityEcoFriendly";
import SustainabilitySafety from "./SustainabilitySafety";
import SustainabilityCommit from "./SustainabilityCommit";

const components = [
  <SustainabilityGreenManf key="green" />,
  <SustainabilityEcoFriendly key="eco" />,
  <SustainabilitySafety key="safety" />,
  <SustainabilityCommit key="commit" />,
];

export default function SustainabilityCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % components.length);
    }, 5000); // 5 seconds
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="sustainability-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ width: "100%" }}
        >
          {components[index]}
        </motion.div>
      </AnimatePresence>

      {/* Optional: Dots Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {components.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              border: "none",
              background: i === index ? "#1976D2" : "#ccc",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}
