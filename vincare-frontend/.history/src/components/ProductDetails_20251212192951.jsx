import React from "react";
import "../styles/ProductDetails.css";
import whyVincareBG from "../assets/whyVincarebg.png";

/**
 * Generic ProductDetails
 * - Left: product details (cols 1–5)
 * - Right: 3D viewer area (cols 6–12)
 *
 * Props:
 *  product: {
 *    name: string,
 *    category: string,
 *    tagline?: string,
 *    description: string,
 *    formulation: {
 *      title?: string,
 *      benefits?: string[],
 *      usage?: string[],
 *      application?: string
 *    },
 *    availability: string[],
 *    backgroundImage?: string, // url
 *    model?: {
 *      type: "iframe" | "component",
 *      src?: string,          // for iframe (sketchfab, spline, etc.)
 *      component?: ReactNode  // for custom 3D component (three-fiber)
 *    }
 *  }
 */

export default function ProductDetails({ product }) {
  const {
    name,
    category,
    tagline,
    description,
    formulation,
    availability,
    backgroundImage,
    model,
  } = product;

  return (
    <section
      className="productDetails"
      style={{
        "--pd-bg": whyVincareBG ? `url(${backgroundImage})` : "none",
      }}
      aria-label={`${name} details`}
    >
      <div className="productDetails__overlay" />

      <div className="productDetails__container">
        <div className="productDetails__card">
          {/* LEFT */}
          <div className="productDetails__left">
            <div className="productDetails__header">
              <h1 className="productDetails__title">{name}</h1>
              <p className="productDetails__category">{category}</p>
              {tagline ? (
                <p className="productDetails__tagline">{tagline}</p>
              ) : null}
            </div>

            <div className="productDetails__section">
              <h3 className="productDetails__sectionTitle">Description</h3>
              <p className="productDetails__text">{description}</p>
            </div>

            <div className="productDetails__section">
              <h3 className="productDetails__sectionTitle">
                {formulation?.title || "Formulation"}
              </h3>

              {!!formulation?.benefits?.length && (
                <>
                  <p className="productDetails__label">Product Benefits</p>
                  <ul className="productDetails__list">
                    {formulation.benefits.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </>
              )}

              {!!formulation?.usage?.length && (
                <>
                  <p className="productDetails__label">Usage</p>
                  <ul className="productDetails__list">
                    {formulation.usage.map((u, i) => (
                      <li key={i}>{u}</li>
                    ))}
                  </ul>
                </>
              )}

              {formulation?.application && (
                <p className="productDetails__text">
                  <span className="productDetails__labelInline">
                    Application:
                  </span>{" "}
                  {formulation.application}
                </p>
              )}
            </div>

            <div className="productDetails__section">
              <h3 className="productDetails__sectionTitle">Availability</h3>
              <div className="productDetails__chips" role="list">
                {availability.map((size, i) => (
                  <span
                    className="productDetails__chip"
                    role="listitem"
                    key={i}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <div className="productDetails__note" role="note">
              <strong>Safety Note:</strong> Avoid contact with eyes. Not for
              internal consumption.
            </div>
          </div>

          {/* RIGHT */}
          <div className="productDetails__right" aria-label="3D preview">
            <div className="productDetails__viewerFrame">
              <div className="productDetails__viewerTop">
                <span className="productDetails__viewerPill">3D Preview</span>
                <span className="productDetails__viewerHint">
                  Drag to rotate • Scroll to zoom
                </span>
              </div>

              <div className="productDetails__viewer">
                {model?.type === "component" && model.component}

                {model?.type === "iframe" && model.src ? (
                  <iframe
                    className="productDetails__iframe"
                    src={model.src}
                    title={`${name} 3D model`}
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    allowFullScreen
                  />
                ) : null}

                {!model ? (
                  <div className="productDetails__viewerPlaceholder">
                    Add your 3D model here (Sketchfab/Spline/Three.js)
                  </div>
                ) : null}
              </div>
            </div>

            <div className="productDetails__miniInfo">
              <div className="productDetails__miniStat">
                <p className="productDetails__miniLabel">Category</p>
                <p className="productDetails__miniValue">{category}</p>
              </div>
              <div className="productDetails__miniStat">
                <p className="productDetails__miniLabel">Use</p>
                <p className="productDetails__miniValue">Floor & Toilet Care</p>
              </div>
              <div className="productDetails__miniStat">
                <p className="productDetails__miniLabel">Type</p>
                <p className="productDetails__miniValue">Neutral Product</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
