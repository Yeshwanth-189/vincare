import React from "react";

/**
 * PlanetFirstSection
 *
 * 12‑column grid layout where columns 1 & 12 act as gutters.
 * Top shape: a circle cropped to show ~75% height (flat bottom), containing an image.
 * Heading below (4rem): "Planet First".
 * Below: 4 cards arranged as 2 per row (on >= md), with even spacing.
 *
 * TailwindCSS is used for layout/styling.
 */
export default function PlanetFirstSection({
  imageSrc = "/assets/planet-hero.jpg",
  heading = "Planet First",
  cards = [
    {
      title: "Sustainable Chemistry",
      text:
        "Biodegradable, eco‑friendly formulations designed to reduce environmental impact without compromising performance.",
    },
    {
      title: "Water‑Wise Processes",
      text:
        "Optimized processes that minimize water usage and promote responsible resource management across the lifecycle.",
    },
    {
      title: "Clean Supply Chain",
      text:
        "Ethical sourcing, traceability, and quality checks from raw materials to final packaging and distribution.",
    },
    {
      title: "Safe for People",
      text:
        "Products engineered with safety in mind—compliant with standards and gentle for everyday environments.",
    },
  ],
  /** percentage of the circle to crop from the bottom (25 shows ~75% of the circle) */
  cropBottomPercent = 25,
}) {
  return (
    <section className="w-full grid grid-cols-12 gap-x-4 gap-y-10 py-12">
      {/* Top cropped circle (columns 2-11) */}
      <div className="col-span-10 col-start-2 flex justify-center">
        <div
          className="relative w-full max-w-[720px] aspect-square rounded-full overflow-hidden mx-auto shadow-xl"
          style={{
            // Show only the top 75% of the circle by cropping 25% off the bottom
            clipPath: `inset(0 0 ${cropBottomPercent}% 0)`,
          }}
          aria-hidden
        >
          {/* Background image inside the circle */}
          <img
            src={imageSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />
        </div>
      </div>

      {/* Heading (4rem) */}
      <h2 className="col-span-10 col-start-2 text-center font-bold leading-none text-[4rem]">
        {heading}
      </h2>

      {/* Cards grid: 2 per row from md up, equal widths, even spacing */}
      <div className="col-span-10 col-start-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.slice(0, 4).map((c, i) => (
          <article
            key={i}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
            <p className="text-base/relaxed opacity-80">{c.text}</p>
          </article>
        ))}
      </div>
    </section>
  );