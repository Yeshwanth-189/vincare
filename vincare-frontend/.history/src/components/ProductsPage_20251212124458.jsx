import React, { useMemo, useState } from "react";
import "../styles/ProductsPage.css";
import { motion, useReducedMotion } from "framer-motion";

// ---------------------------------------------
// Data
// ---------------------------------------------

export const CATEGORIES = [
  "Disinfectants & Surface Cleaners",
  "Hand Hygiene",
  "Glass & Surface Care",
  "Air Care & Fresheners",
  "Dishwashing & Kitchen Care",
  "Scale Removers & Toilet Cleaners",
  "Fabric & Laundry Care",
  "Vehicle Care",
  "Carpet & Upholstery Care",
  "All in One",
];

const PRODUCTS = [
  {
    id: "V1",
    name: "V1 Germi Check",
    description: "Disinfectant / Cleaner",
    category: "Disinfectants & Surface Cleaners",
    image: "https://via.placeholder.com/640x420?text=V1+Germi+Check",
  },
  {
    id: "V2",
    name: "V2 Multi Clean",
    description: "Multi Purpose Cleaner",
    category: "Disinfectants & Surface Cleaners",
    image: "https://via.placeholder.com/640x420?text=V2+Multi+Clean",
  },
  {
    id: "V7",
    name: "V7 Deep Clean",
    description: "Heavy Duty Surface Cleaner",
    category: "Disinfectants & Surface Cleaners",
    image: "https://via.placeholder.com/640x420?text=V7+Deep+Clean",
  },
  {
    id: "V8",
    name: "V8 Degreaser",
    description: "Oil & Grease Remover",
    category: "Disinfectants & Surface Cleaners",
    image: "https://via.placeholder.com/640x420?text=V8+Degreaser",
  },

  {
    id: "V10",
    name: "V10 Genteel",
    description: "Hand Wash",
    category: "Hand Hygiene",
    image: "https://via.placeholder.com/640x420?text=V10+Genteel",
  },
  {
    id: "V11",
    name: "V11 Genteel Soft",
    description: "Hand Wash",
    category: "Hand Hygiene",
    image: "https://via.placeholder.com/640x420?text=V11+Genteel+Soft",
  },
  {
    id: "V12",
    name: "V12 Genteel Gel",
    description: "Hand Wash",
    category: "Hand Hygiene",
    image: "https://via.placeholder.com/640x420?text=V12+Genteel+Gel",
  },
  {
    id: "V13",
    name: "V13 Bactiwash",
    description: "Anti-Bacterial Hand Wash",
    category: "Hand Hygiene",
    image: "https://via.placeholder.com/640x420?text=V13+Bactiwash",
  },
  {
    id: "V14",
    name: "V14 Hand Cleanzor",
    description: "Sanitizer",
    category: "Hand Hygiene",
    image: "https://via.placeholder.com/640x420?text=V14+Hand+Cleanzor",
  },

  {
    id: "V3",
    name: "V3 Crystal Dew",
    description: "Glass Cleaner",
    category: "Glass & Surface Care",
    image: "https://via.placeholder.com/640x420?text=V3+Crystal+Dew",
  },
  {
    id: "V4",
    name: "V4 V-Shine",
    description: "Surface Polish",
    category: "Glass & Surface Care",
    image: "https://via.placeholder.com/640x420?text=V4+V-Shine",
  },
  {
    id: "V20",
    name: "V20 Steel Clean",
    description: "Stainless Steel Cleaner",
    category: "Glass & Surface Care",
    image: "https://via.placeholder.com/640x420?text=V20+Steel+Clean",
  },

  {
    id: "V5",
    name: "V5 Exotic",
    description: "Room Freshener",
    category: "Air Care & Fresheners",
    image: "https://via.placeholder.com/640x420?text=V5+Exotic",
  },
  {
    id: "V17",
    name: "V17 Toilet Freshener",
    description: "Disinfectant / Freshener",
    category: "Air Care & Fresheners",
    image: "https://via.placeholder.com/640x420?text=V17+Toilet+Freshener",
  },

  {
    id: "V15",
    name: "V15 Dish Dew",
    description: "Vessel Cleaner",
    category: "Dishwashing & Kitchen Care",
    image: "https://via.placeholder.com/640x420?text=V15+Dish+Dew",
  },
  {
    id: "V16",
    name: "V16 Dish Wash",
    description: "Heavy Duty Vessel Cleaner",
    category: "Dishwashing & Kitchen Care",
    image: "https://via.placeholder.com/640x420?text=V16+Dish+Wash",
  },

  {
    id: "V6",
    name: "V6 Scale Buster +",
    description: "De-Scaler & Toilet Bowl Cleaner",
    category: "Scale Removers & Toilet Cleaners",
    image: "https://via.placeholder.com/640x420?text=V6+Scale+Buster+Plus",
  },
  {
    id: "V9",
    name: "V9 Scale Buster",
    description: "De-Scaler",
    category: "Scale Removers & Toilet Cleaners",
    image: "https://via.placeholder.com/640x420?text=V9+Scale+Buster",
  },

  {
    id: "V21",
    name: "V21 Fabricare",
    description: "Washing Machine Application",
    category: "Fabric & Laundry Care",
    image: "https://via.placeholder.com/640x420?text=V21+Fabricare",
  },

  {
    id: "V18",
    name: "V18 Car Wash",
    description: "Vehicle Cleaning Shampoo",
    category: "Vehicle Care",
    image: "https://via.placeholder.com/640x420?text=V18+Car+Wash",
  },

  {
    id: "V19",
    name: "V19 Carpet Clean",
    description: "Carpet & Upholstery Cleaner",
    category: "Carpet & Upholstery Care",
    image: "https://via.placeholder.com/640x420?text=V19+Carpet+Clean",
  },

  {
    id: "KIT",
    name: "Vincare Hygiene Kit",
    description: "All in One",
    category: "All in One",
    image: "https://via.placeholder.com/640x420?text=Vincare+Hygiene+Kit",
  },
];

// ---------------------------------------------
// Animations
// ---------------------------------------------

const listVariants = {
  hidden: { opacity: 0, y: 8 },
  show: (reduce) => ({
    opacity: 1,
    y: 0,
    transition: reduce
      ? { duration: 0 }
      : { duration: 0.45, ease: [0.2, 0.7, 0.2, 1], staggerChildren: 0.06 },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.995 },
  show: (reduce) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: reduce
      ? { duration: 0 }
      : { duration: 0.38, ease: [0.2, 0.7, 0.2, 1] },
  }),
};

// ---------------------------------------------
// Component
// ---------------------------------------------

export default function ProductsPage() {
  const reduce = useReducedMotion();

  const [query, setQuery] = useState("");
  // ✅ multi select categories
  const [selectedCategories, setSelectedCategories] = useState([]); // array of category strings

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return PRODUCTS.filter((p) => {
      // if none selected => show all categories
      const categoryOk =
        selectedCategories.length === 0
          ? true
          : selectedCategories.includes(p.category);

      const queryOk =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);

      return categoryOk && queryOk;
    });
  }, [query, selectedCategories]);

  const clearFilters = () => {
    setQuery("");
    setSelectedCategories([]);
  };

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) => {
      if (prev.includes(cat)) return prev.filter((x) => x !== cat);
      return [...prev, cat];
    });
  };

  return (
    <section className="productView" aria-label="Products">
      <div className="productView__container">
        <div className="productView__grid">
          {/* LEFT */}
          <aside className="productView__filters" aria-label="Product filters">
            <h2 className="productView__heading">Find Products</h2>

            <label className="productView__label" htmlFor="productSearch">
              Search
            </label>

            <div className="productView__searchWrap">
              <input
                id="productSearch"
                className="productView__search"
                type="search"
                placeholder="Search by name, description, or category..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />

              {query && (
                <button
                  type="button"
                  className="productView__clear"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="productView__catHeader">
              <h3 className="productView__subheading">Categories</h3>
              <button
                type="button"
                className="productView__reset"
                onClick={clearFilters}
              >
                Reset
              </button>
            </div>

            <div className="productView__cats" role="list">
              {/* ✅ All clears multi selection */}
              <CategoryChip
                label="All"
                active={selectedCategories.length === 0}
                onClick={() => setSelectedCategories([])}
              />

              {CATEGORIES.map((c) => (
                <CategoryChip
                  key={c}
                  label={c}
                  active={selectedCategories.includes(c)}
                  onClick={() => toggleCategory(c)}
                />
              ))}
            </div>
          </aside>

          {/* RIGHT */}
          <main className="productView__results" aria-label="Product results">
            <div className="productView__resultsTop">
              <p className="productView__count">
                Showing <strong>{filtered.length}</strong> product
                {filtered.length === 1 ? "" : "s"}
                {selectedCategories.length > 0 ? (
                  <>
                    {" "}
                    in <strong>{selectedCategories.join(", ")}</strong>
                  </>
                ) : null}
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="productView__empty">
                <p>
                  No products match your search. Try a different keyword or
                  reset filters.
                </p>
                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={clearFilters}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <motion.div
                className="productView__cards"
                role="list"
                variants={listVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                custom={reduce}
              >
                {filtered.map((p) => (
                  <motion.article
                    key={p.id}
                    className="productCard"
                    role="listitem"
                    variants={cardVariants}
                    custom={reduce}
                    whileHover={
                      reduce
                        ? {}
                        : {
                            y: -10,
                            boxShadow:
                              "0 26px 52px rgba(23, 119, 188, 0.18), 0 12px 20px rgba(0,0,0,0.08)",
                          }
                    }
                    whileTap={reduce ? {} : { scale: 0.99 }}
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 260, damping: 22 }
                    }
                  >
                    <motion.div
                      className="productCard__imgWrap"
                      whileHover={reduce ? {} : { scale: 1.01 }}
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 200, damping: 22 }
                      }
                    >
                      <motion.img
                        className="productCard__img"
                        src={p.image}
                        alt={`${p.name} product image`}
                        loading="lazy"
                        whileHover={reduce ? {} : { scale: 1.05 }}
                        transition={
                          reduce
                            ? { duration: 0 }
                            : { duration: 0.25, ease: "easeOut" }
                        }
                      />
                    </motion.div>

                    <div className="productCard__body">
                      <h3 className="productCard__title">{p.name}</h3>
                      <p className="productCard__desc">{p.description}</p>

                      <div
                        className="productCard__category"
                        aria-label="Category"
                      >
                        {p.category}
                      </div>

                      <div className="productCard__actions">
                        <motion.button
                          type="button"
                          className="btn btn--primary"
                          whileHover={reduce ? {} : { y: -2 }}
                          whileTap={reduce ? {} : { scale: 0.98 }}
                          transition={
                            reduce
                              ? { duration: 0 }
                              : { type: "spring", stiffness: 320, damping: 22 }
                          }
                          onClick={() => console.log("View product", p.id)}
                        >
                          View Product
                        </motion.button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}

function CategoryChip({ label, active, onClick }) {
  return (
    <button
      type="button"
      className={`productView__chip ${active ? "is-active" : ""}`}
      onClick={onClick}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}
