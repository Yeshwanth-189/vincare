import React from "react";
import "../styles/ProductsIntro.css";
import { motion, useReducedMotion } from "framer-motion";
import ProductsbgImage from "../assets/product-intro-bg.png";

/**
 * Props:
 * - bgImage (string): URL or imported path for the background image
 * - href    (string): CTA destination (default: "/products")
 */
export default function ProductsIntro({
  bgImage = ProductsbgImage,
  href = "/products",
}) {
  const reduce = useReducedMotion();
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduce
        ? { duration: 0 }
        : {
            duration: 0.6,
            ease: [0.2, 0.7, 0.2, 1],
            when: "beforeChildren",
            staggerChildren: 0.16,
          },
    },
  };

  // Children fade-up
  const item = {
    hidden: { opacity: 0, y: 14, filter: "saturate(0.95) contrast(0.98)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "none",
      transition: reduce
        ? { duration: 0 }
        : { duration: 0.52, ease: [0.2, 0.7, 0.2, 1] },
    },
  };

  // Subtle Ken Burns on bg layer
  const kenBurns = reduce
    ? {}
    : {
        initial: { scale: 1 },
        whileInView: { scale: 1.03 },
        transition: { duration: 12, ease: "easeOut" },
        viewport: { once: true, amount: 0.3 },
      };
  return (
    <section
      className="productsIntro"
      style={{ "--bg-image": `url(${bgImage})` }}
      aria-label="Our Products Introduction"
    >
      <motion.div
        className="productsIntro__bg"
        {...kenBurns}
        aria-hidden="true"
      />
      <motion.div
        className="productsIntro__grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
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
      </motion.div>
    </section>
  );
}
