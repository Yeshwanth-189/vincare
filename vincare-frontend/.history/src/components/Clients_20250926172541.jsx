import React, { useState, useEffect, useCallback } from "react";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import "../styles/Clients.css";

// Demo logos (swap with your assets)
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";

// Background image (handshake)
import handshakeBg from "../assets/handshake-bg.png";

/**
 * Props:
 * - title?: string
 * - backgroundImage?: string
 * - logos?: Array<{ src: string, alt?: string }>
 * - autoplayMs?: number  // 0 to disable autoplay
 */
export default function Clients({
  title = "Clients",
  backgroundImage = handshakeBg,
  logos = [
    { src: logo1, alt: "Client 1" },
    { src: logo2, alt: "Client 2" },
    { src: logo3, alt: "Client 3" },
    { src: logo4, alt: "Client 4" },
    { src: logo5, alt: "Client 5" },
    { src: logo6, alt: "Client 6" },
  ],
  autoplayMs = 3500,
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 => next, -1 => prev
  const wrap = useCallback(
    (val) => (val + logos.length) % logos.length,
    [logos.length]
  );

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => wrap(i + 1));
  }, [wrap]);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => wrap(i - 1));
  }, [wrap]);

  // autoplay
  useEffect(() => {
    if (!autoplayMs) return;
    const id = setInterval(next, autoplayMs);
    return () => clearInterval(id);
  }, [next, autoplayMs]);

  // keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // drag/swipe
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 0, 150], [-1.5, 0, 1.5]); // subtle tilt

  const handleDragEnd = (_, info) => {
    const threshold = 80;
    if (info.offset.x < -threshold) next();
    else if (info.offset.x > threshold) prev();
  };

  // duplicate list for smooth infinite perception
  const visible = [
    logos[wrap(index - 1)],
    logos[wrap(index)],
    logos[wrap(index + 1)],
  ];

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 420, damping: 36 },
    },
    exit: (dir) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.25 },
    }),
  };

  return (
    <section
      className="clients"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      aria-label="Clients carousel section"
    >
      <div className="clients__overlay" />

      <div className="clients__inner">
        <motion.h2
          className="clients__title"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {title}
        </motion.h2>

        <div className="clients__rail">
          <button
            className="clients__arrow clients__arrow--left"
            onClick={prev}
            aria-label="Previous clients"
          >
            <ArrowLeftIcon />
          </button>

          <motion.div
            className="clients__glass"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="clients__viewport"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              style={{ x, rotate }}
              onDragEnd={handleDragEnd}
            >
              <AnimatePresence
                custom={direction}
                initial={false}
                mode="popLayout"
              >
                {visible.map((logo, i) => (
                  <motion.div
                    className={`clients__slide ${i === 1 ? "is-active" : ""}`}
                    key={`${logo.src}-${i}`}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <motion.img
                      src={logo.src}
                      alt={logo.alt || "Client logo"}
                      className="clients__logo"
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 28,
                      }}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Dots */}
            <div
              className="clients__dots"
              role="tablist"
              aria-label="Client logo positions"
            >
              {logos.map((_, i) => {
                const active = i === index;
                return (
                  <button
                    key={i}
                    className={`clients__dot ${active ? "is-active" : ""}`}
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    role="tab"
                    aria-selected={active}
                    aria-label={`Go to position ${i + 1}`}
                  />
                );
              })}
            </div>
          </motion.div>

          <button
            className="clients__arrow clients__arrow--right"
            onClick={next}
            aria-label="Next clients"
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d="M15.5 19l-7-7 7-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d="M8.5 5l7 7-7 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
