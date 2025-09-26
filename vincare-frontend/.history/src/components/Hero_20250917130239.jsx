import React from "react";
import "../styles/hero.css";

/**
 * Hero Component
 * Props:
 *  - imageUrl: string (background image for the right-side panel)
 *  - onLearnMore: function (optional click handler)
 *  - onViewProducts: function (optional click handler)
 */
export default function Hero() {
  return (
    <section className="grid-container">
      <div className="col col-1"></div> {/* Left gutter */}
      {/* Main content spans 10 columns */}
      <div className="col col-2-11">
        <h1>Your Content Here</h1>
        <p>This is inside the 10-column wide main grid.</p>
      </div>
      <div className="col col-12"></div> {/* Right gutter */}
    </section>
  );
}
