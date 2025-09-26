import React from "react";
import "../styles/ProductsIntro.css";
import ProductsbgImage from "../assets/products_intro.jpg";

/**
 * Props:
 * - bgImage (string): URL or imported path for the background image
 * - href    (string): CTA destination (default: "/products")
 */
export default function ProductsIntro({
  bgImage = ProductsbgImage,
  href = "/products",
}) {
  return (
    <section
      className="productsIntro"
      style={{ "--bg-image": `url(${bgImage})` }}
      aria-label="Our Products Introduction"
    >
      <div className="productsIntro__grid">
        <div className="productsIntro__content">
          <h2 className="productsIntro__title">Our Products</h2>

          <p className="productsIntro__text">
            We specialize in delivering comprehensive hygiene and cleaning
            solutions, designed to serve diverse industries with formulations
            that balance performance, safety, and sustainability. Every product
            is developed with precision to meet the unique needs of our clients,
            from healthcare and hospitality to industrial and residential
            applications.
          </p>

          <p className="productsIntro__text">
            Backed by more than decades of expertise, our capabilities span
            across a wide range of formulations including disinfectants,
            degreasers, hand hygiene products, surface cleaners, fresheners, and
            water treatment solutions. With state-of-the-art facilities, we
            ensure stringent quality control at every stage — from raw material
            selection to final packaging. Our processes are engineered to uphold
            best standards, ensuring that each product is eco-friendly,
            effective, and reliable for everyday use.
          </p>

          <div className="productsIntro__cta">
            {/* If you use react-router, swap <a> with <Link to={href}> */}
            <a className="btn btn--outlineWhite" href={href}>
              View Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
