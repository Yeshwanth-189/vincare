import React, { useEffect, useRef } from "react";
import "../styles/Sustainability.css";
import greenglobewhitebg from "../assets/green-globe-white-bg.mp4";
import sust1 from "../assets/sust1.png";

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
              <p className="sust__intro">
                Vincare is dedicated to driving sustainability through
                innovation, responsible sourcing, and eco-friendly operations.
                We focus on expanding the use of biodegradable formulations,
                promoting recyclable and reusable packaging, and adopting
                energy-efficient processes across our value chain. Our R&amp;D
                team continues to pioneer green chemistry solutions, while we
                reinforce strict compliance with safety and environmental
                standards. By engaging with partners, clients, and communities,
                we aim to advance a circular economy and minimize ecological
                impact. In alignment with global sustainability goals, we
                measure progress through transparent benchmarks — ensuring our
                growth remains clean, sustainable, and future-ready.
              </p>
              <article className="sust__card">
                <div className="sust__cardHead">
                  <img
                    className="sust__cardIcon sust__cardIcon--lg"
                    src={icon}
                    alt=""
                  />
                  <h3 className="sust__cardTitle">Green Manufacturing</h3>
                </div>

                <p className="sust__cardPara">
                  At Vincare, our manufacturing practices are built on the
                  foundation of sustainability and efficiency. By embracing
                  low-waste, energy-efficient production methods, we optimize
                  resources while minimizing operational impact. Our facilities
                  are designed to reduce emissions and lower our overall carbon
                  footprint, ensuring that every product we create contributes
                  not only to cleaner spaces but also to a healthier planet.
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
                  autoPlay
                  muted
                  loop
                  playsInline
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
