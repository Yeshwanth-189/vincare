import React, { useEffect, useRef } from "react";
import "../styles/SustainabilitySafety.css";
import blueglobewhitebg from "../assets/blue-globe-white-bg.mp4";
import sustcommit from "../assets/sust_commit.png";

import protect from "../assets/protect.png";

/**
 * Props (all optional; sensible fallbacks included):
 * - title: string
 * - icon: URL string for the left-of-heading icon inside cards
 * - videoSrc: URL string for the right-column video (mp4/webm/ogg)
 * - poster: poster image for the video
 * - imageSrc: URL string for the image below the video
 */
export default function SustainabilityCommit({
  title = "Sustainability",
  icon = sustcommit,
  videoSrc = blueglobewhitebg,
  poster = sustcommit,
  imageSrc = protect,
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
      <div className="sust__com__grid">
        {/* Left gutter (col 1) is intentionally empty */}
        <div className="sust__gutter" aria-hidden="true" />

        {/* Content area spans cols 2–11 */}
        <div className="sust__content">
          {/* Heading */}
          <header className="sust__header">
            <h2
              ref={headingRef}
              className="sust__safe__title slide_safe-in slide_safe-in--visible "
            >
              {title}
            </h2>
          </header>

          {/* Two-column content: left (2–6), right (7–11) */}
          <div className="sust__twoCol">
            {/* LEFT: four cards */}
            <div className="sust__left">
              <p className="sust__safe__intro">
                <span className="sust__safe__highlight">Vincare</span> is
                dedicated to driving sustainability through innovation,
                responsible sourcing, and eco-friendly operations. We focus on
                expanding the use of biodegradable formulations, promoting
                recyclable and reusable packaging, and adopting energy-efficient
                processes across our value chain. Our R&amp;D team continues to
                pioneer green chemistry solutions, while we reinforce strict
                compliance with safety and environmental standards. By engaging
                with partners, clients, and communities, we aim to advance a
                circular economy and minimize ecological impact. In alignment
                with global sustainability goals, we measure progress through
                transparent benchmarks — ensuring our growth remains clean,
                sustainable, and future-ready.
              </p>
              <div className="sust__safe__callout">
                <div className="sust__safe__calloutHead">
                  <img className="sust__safe__calloutIcon" src={icon} alt="" />
                  <h3 className="sust__safe__safe__calloutTitle">
                    Safety & Responsibility
                  </h3>
                </div>

                <p className="sust__safe__calloutText">
                  At Vincare, our commitment to sustainability extends beyond
                  products to the way we innovate and collaborate. Through
                  ongoing research and development in green chemistry, we
                  continuously create advanced, eco-conscious formulations that
                  set new standards in hygiene and cleaning. We also build
                  strong partnerships with industry leaders and stakeholders,
                  ensuring that sustainable practices are integrated across our
                  supply chain and operations. This dual focus on innovation and
                  collaboration reflects our promise to deliver solutions that
                  are not only effective today but also responsible for the
                  future.
                </p>
              </div>
            </div>

            {/* RIGHT: video (first row) + image (second row) */}
            <div className="sust__right">
              <div className="sust__safe__videoWrap">
                <video
                  className="sust__safe__video"
                  src={videoSrc}
                  poster={poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <div className="sust__imageWrap">
                <img
                  className="sust__safe__image"
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
