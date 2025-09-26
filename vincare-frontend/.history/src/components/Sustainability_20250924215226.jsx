import React from "react";
import "../styles/Sustainability.css";
import PlanetImg from "../assets/pla.png";
import Planet from "./Planet";

export default function Sustainability({
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
}) {
  return (
    <>
      <Planet src={PlanetImg} alt="Planet Earth" />
      <section className="planet">
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
    </>
  );
}
