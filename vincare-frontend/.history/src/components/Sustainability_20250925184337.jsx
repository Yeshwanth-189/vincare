import React, { useEffect, useRef } from "react";
import "./sustainability.css";

/**
 * Props (all optional; sensible fallbacks included):
 * - title: string
 * - icon: URL string for the left-of-heading icon inside cards
 * - videoSrc: URL string for the right-column video (mp4/webm/ogg)
 * - poster: poster image for the video
 * - imageSrc: URL string for the image below the video
 */
export default function Sustainability({
  title = "Sustainability",
  icon = "/assets/icons/leaf.svg",
  videoSrc = "/assets/media/sample.mp4",
  poster = "/assets/media/sample-poster.jpg",
  imageSrc = "/assets/media/sample-image.jpg",
}) {
  const headingRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("slide-in--visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="sustainability">
      {/* 12-col grid container */}
      <div className="sust__grid">
        {/* Left gutter (col 1) is intentionally empty */}
        <div className="sust__gutter" aria-hidden="true" />

        {/* Content area spans cols 2–11 */}
        <div className="sust__content">
          {/* Heading */}
          <header className="sust__header">
            <h2 ref={headingRef} className="sust__title slide-in">
              {title}
            </h2>
          </header>

          {/* Two-column content: left (2–6), right (7–11) */}
          <div className="sust__twoCol">
            {/* LEFT: four cards */}
            <div className="sust__left">
              {[0, 1, 2, 3].map((i) => (
                <article key={i} className="sust__card">
                  <div className="sust__cardHead">
                    <img className="sust__cardIcon" src={icon} alt="" />
                    <h3 className="sust__cardTitle">Green Manufacturing</h3>
                  </div>
                  <p className="sust__cardText">
                    Low-waste, energy-efficient production. Reduced emissions
                    &amp; carbon footprint.
                  </p>
                </article>
              ))}
            </div>

            {/* RIGHT: video (first row) + image (second row) */}
            <div className="sust__right">
              <div className="sust__videoWrap">
                <video
                  className="sust__video"
                  src={videoSrc}
                  poster={poster}
                  controls
                  preload="metadata"
                />
              </div>
              <div className="sust__imageWrap">
                <img
                  className="sust__image"
                  src={imageSrc}
                  alt="Sustainability visual"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right gutter (col 12) is intentionally empty */}
        <div className="sust__gutter" aria-hidden="true" />
      </div>
    </section>
  );
}
