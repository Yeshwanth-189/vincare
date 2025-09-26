import React from "react";
import "../styles/Sustainability.css";
import PlanetImg from "../assets/planet.png";

export default function Sustainability({
  imageSrc = PlanetImg,
  heading = "Planet First",
  cards = [
    {
      title: "Sustainable Chemistry",
      text: "Biodegradable, eco‑friendly formulations designed to reduce environmental impact without compromising performance.",
    },
    {
      title: "Water‑Wise Processes",
      text: "Optimized processes that minimize water usage and promote responsible resource management across the lifecycle.",
    },
    {
      title: "Clean Supply Chain",
      text: "Ethical sourcing, traceability, and quality checks from raw materials to final packaging and distribution.",
    },
    {
      title: "Safe for People",
      text: "Products engineered with safety in mind—compliant with standards and gentle for everyday environments.",
    },
  ],
  /** percentage of the circle to crop from the bottom (25 shows ~75% of the circle) */
  cropBottomPercent = 25,
}) {
  return (
    <section className="planet">
      {/* Top cropped circle (columns 2-11) */}
      <div className="planet__circleWrap">
        <div
          className="planet__circle"
          style={{ clipPath: `inset(0 0 ${cropBottomPercent}% 0)` }}
          aria-hidden
        >
          <img
            src={imageSrc}
            alt=""
            className="planet__img"
            draggable={false}
          />
        </div>
      </div>

      {/* Heading (4rem) */}
      <h2 className="planet__heading">{heading}</h2>

      {/* Cards */}
      <div className="planet__cards">
        {cards.slice(0, 4).map((c, i) => (
          <article key={i} className="planet__card">
            <h3 className="planet__cardTitle">{c.title}</h3>
            <p className="planet__cardText">{c.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
