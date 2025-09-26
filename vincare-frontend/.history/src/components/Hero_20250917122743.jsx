import React from "react";
import "./hero.css";

/**
 * Hero Component
 * Props:
 *  - imageUrl: string (background image for the right-side panel)
 *  - onLearnMore: function (optional click handler)
 *  - onViewProducts: function (optional click handler)
 */
export default function Hero({ imageUrl = "", onLearnMore, onViewProducts }) {
  return (
    <section
      className="hero"
      style={imageUrl ? { "--hero-bg-img": `url(${imageUrl})` } : undefined}
      aria-label="WineCare Technologies hero"
    >
      {/* Column 1 (gutter) is empty by design */}
      <div className="hero__gutter" aria-hidden="true" />

      {/* Left content: columns 2–6 */}
      <div className="hero__content">
        <h1 className="hero__title">WineCare Technologies</h1>
        <p className="hero__subtitle">
          One stop solution for all technical problems
        </p>

        <div className="hero__actions">
          <button
            className="btn btn--primary"
            type="button"
            onClick={onLearnMore}
          >
            Learn More
          </button>
          <button
            className="btn btn--ghost"
            type="button"
            onClick={onViewProducts}
          >
            View Products
          </button>
        </div>
      </div>

      {/* Right background image: columns 7–11 */}
      <div className="hero__image" role="img" aria-label="Brand showcase" />

      {/* Column 12 (gutter) is empty by design */}
      <div className="hero__gutter" aria-hidden="true" />
    </section>
  );
}
