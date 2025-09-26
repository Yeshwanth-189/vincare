import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

// Bring your existing components
import SustainabilityGreenManf from "./SustainabilityGreenManf";
import SustainabilityEcoFriendly from "./SustainabilityEcoFriendly";
import SustainabilitySafety from "./SustainabilitySafety";
import SustainabilityCommit from "./SustainabilityCommit";

import "../styles/SustainabilityCarousel.css";

/**
 * A 3D-tilt carousel that feels like the camera is panning/tilting
 * to the next "side of the room".
 *
 * Features:
 * - Drag, wheel and keyboard navigation
 * - Spring-smoothed, 3D perspective rotates + parallax blur
 * - Snap dots + prev/next buttons
 * - Accessible announcements on slide change
 */
export default function SustainabilityCarousel() {
  const slides = useMemo(
    () => [
      {
        id: "green",
        el: <SustainabilityGreenManf />,
        label: "Green Manufacturing",
      },
      { id: "eco", el: <SustainabilityEcoFriendly />, label: "Eco Friendly" },
      {
        id: "safety",
        el: <SustainabilitySafety />,
        label: "Safety & Responsibility",
      },
      { id: "commit", el: <SustainabilityCommit />, label: "Our Commitment" },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const total = slides.length;

  // Core motion values
  const raw = useMotionValue(index);
  const x = useSpring(raw, { stiffness: 90, damping: 16, mass: 0.9 }); // smooth slide
  const containerRef = useRef(null);
  const announceRef = useRef(null);

  // 3D transforms based on fractional position of each slide relative to x
  const getStyleFor = (i) => {
    const offset = useTransform(x, (v) => i - v); // negative means to the left
    const rotateY = useTransform(
      offset,
      [-2, -1, 0, 1, 2],
      [25, 15, 0, -15, -25]
    ); // “room turn”
    const translateZ = useTransform(
      offset,
      [-2, -1, 0, 1, 2],
      [-240, -120, 0, -120, -240]
    ); // camera depth
    const translateX = useTransform(
      offset,
      [-2, -1, 0, 1, 2],
      ["-55%", "-30%", "0%", "30%", "55%"]
    ); // lateral shift
    const blur = useTransform(
      offset,
      [-2, -1, 0, 1, 2],
      ["3px", "2px", "0px", "2px", "3px"]
    );
    const opacity = useTransform(
      offset,
      [-1.5, -1, 0, 1, 1.5],
      [0.25, 0.6, 1, 0.6, 0.25]
    );

    return { offset, rotateY, translateZ, translateX, blur, opacity };
  };

  // Slide controls
  const clamp = (n) => Math.max(0, Math.min(total - 1, n));
  const goTo = useCallback(
    (n) => {
      const c = clamp(n);
      setIndex(c);
      raw.set(c);
      // Announce for screen readers
      if (announceRef.current) {
        announceRef.current.textContent = `Slide ${c + 1} of ${total}: ${
          slides[c].label
        }`;
      }
    },
    [raw, slides, total]
  );
  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  // Allow drag to navigate
  const dragStartX = useRef(0);
  const onDragStart = (e, info) => {
    dragStartX.current = info.point.x;
  };
  const onDragEnd = (e, info) => {
    const delta = info.point.x - dragStartX.current;
    if (Math.abs(delta) > 60) {
      if (delta < 0) next();
      else prev();
    }
  };

  // Mouse wheel (horizontal intent)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e) => {
      // Prefer horizontal if present, otherwise vertical also pans
      const magnitude =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(magnitude) < 10) return;
      if (magnitude > 0) next();
      else prev();
    };
    el.addEventListener("wheel", onWheel, { passive: true });
    return () => el.removeEventListener("wheel", onWheel);
  }, [next, prev]);

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <section className="sust3d" aria-roledescription="carousel">
      <h2 className="sust3d__visuallyHidden">Sustainability Carousel</h2>
      <div className="sust3d__viewport" ref={containerRef}>
        <motion.div
          className="sust3d__stage"
          drag="x"
          dragElastic={0.03}
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        >
          <AnimatePresence initial={false}>
            {slides.map((s, i) => {
              const { rotateY, translateZ, translateX, blur, opacity } =
                getStyleFor(i);
              return (
                <motion.article
                  key={s.id}
                  className="sust3d__panel"
                  style={{
                    transformStyle: "preserve-3d",
                    rotateY,
                    x: translateX,
                    z: translateZ,
                    filter: useTransform(blur, (b) => `blur(${b})`),
                    opacity,
                  }}
                  aria-hidden={i !== index}
                >
                  {/* A subtle panel chrome so the tilt is visible even if child is flat */}
                  <div className="sust3d__panelChrome">
                    <header className="sust3d__panelHeader">
                      <span className="sust3d__badge">{i + 1}</span>
                      <h3 className="sust3d__title">{s.label}</h3>
                    </header>
                    <div className="sust3d__content">{s.el}</div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="sust3d__controls">
        <button
          className="sust3d__navBtn"
          onClick={prev}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <ul
          className="sust3d__dots"
          role="tablist"
          aria-label="Sustainability sections"
        >
          {slides.map((s, i) => (
            <li key={s.id} role="presentation">
              <button
                role="tab"
                aria-selected={i === index}
                aria-controls={`sust-tabpanel-${s.id}`}
                className={`sust3d__dot ${i === index ? "is-active" : ""}`}
                onClick={() => goTo(i)}
                title={s.label}
              />
            </li>
          ))}
        </ul>
        <button
          className="sust3d__navBtn"
          onClick={next}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      {/* SR-only live region */}
      <div
        className="sust3d__visuallyHidden"
        aria-live="polite"
        aria-atomic="true"
        ref={announceRef}
      />
    </section>
  );
}
