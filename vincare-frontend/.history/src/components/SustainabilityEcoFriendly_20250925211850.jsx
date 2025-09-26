import React, { useEffect, useRef } from "react";
import "../styles/SustainabilityEcoFriendly.css";
import greenglobewhitebg from "../assets/green-globe-white-bg.mp4";
import sust1 from "../assets/sust1.png";
import green from "../assets/green-manf.png";

export default function SustainabilityEcoFriendly({
  title = "Sustainability",
  icon = green,
  videoSrc = greenglobewhitebg,
  poster = sust1,
  imageSrc = sust1,
}) {
  const headingRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("eco-slideIn--visible");
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
    <section className="eco-root" aria-labelledby="eco-title">
      {/* 12-col grid container */}
      <div className="eco-grid">
        {/* Left gutter (col 1) */}
        <div className="eco-gutter" aria-hidden="true" />

        {/* Content area spans cols 2–11 */}
        <div className="eco-content">
          {/* Heading */}
          <header className="eco-header">
            <h2
              id="eco-title"
              ref={headingRef}
              className="eco-title eco-slideIn"
            >
              {title}
            </h2>
          </header>

          {/* Two-column content: left (2–6), right (7–11) */}
          <div className="eco-twoCol">
            {/* LEFT: intro + callout */}
            <div className="eco-left">
              <p className="eco-intro">
                <span className="eco-highlight">Vincare</span> is dedicated to
                driving sustainability through innovation, responsible sourcing,
                and eco-friendly operations. We focus on expanding the use of
                biodegradable formulations, promoting recyclable and reusable
                packaging, and adopting energy-efficient processes across our
                value chain. Our R&amp;D team continues to pioneer green
                chemistry solutions, while we reinforce strict compliance with
                safety and environmental standards. By engaging with partners,
                clients, and communities, we aim to advance a circular economy
                and minimize ecological impact. In alignment with global
                sustainability goals, we measure progress through transparent
                benchmarks — ensuring our growth remains clean, sustainable, and
                future-ready.
              </p>

              <div className="eco-callout">
                <div className="eco-calloutHead">
                  <img className="eco-calloutIcon" src={icon} alt="" />
                  <h3 className="eco-calloutTitle">Green Manufacturing</h3>
                </div>

                <p className="eco-calloutText">
                  At Vincare, our manufacturing practices are built on the
                  foundation of sustainability and efficiency. By embracing
                  low-waste, energy-efficient production methods, we optimize
                  resources while minimizing operational impact. Our facilities
                  are designed to reduce emissions and lower our overall carbon
                  footprint, ensuring that every product we create contributes
                  not only to cleaner spaces but also to a healthier planet.
                </p>
              </div>
            </div>

            {/* RIGHT: video + image */}
            <div className="eco-right">
              <div className="eco-videoWrap">
                <video
                  className="eco-video"
                  src={videoSrc}
                  poster={poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>

              <div className="eco-imageWrap">
                <img
                  className="eco-image"
                  src={imageSrc}
                  alt="Sustainability visual"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right gutter (col 12) */}
        <div className="eco-gutter" aria-hidden="true" />
      </div>
    </section>
  );
}
