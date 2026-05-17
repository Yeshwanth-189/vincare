import React, { useMemo, useState } from "react";
import "../styles/ProductsPage.css";
import whyVincareBG from "../assets/whyVincarebg.png";
import Germicheck from "../assets/products/germi-check.png";
import MultiClean from "../assets/products/Multi_clean.png";
import DeepClean from "../assets/products/Deep_clean.png";
import Degreaser from "../assets/products/Degreaser.png";
import Genteel from "../assets/products/Genteel.png";
import GenteelSoft from "../assets/products/Genteel_soft.png";
import GenteelGel from "../assets/products/Genteel_gel.png";
import Bactiwash from "../assets/products/Bactiwash.png";
import HandCleanzor from "../assets/products/Hand_cleanzor.png";
import CrystalDew from "../assets/products/Crystal_dew.png";
import VShine from "../assets/products/V-shine.png";
import SteelKlean from "../assets/products/Steel_Klean.png";
import Exotic from "../assets/products/Exotic.png";
import ToiletFreshener from "../assets/products/Toilet_freshner.png";
import DishDew from "../assets/products/Dish_dew.png";
import DishWash from "../assets/products/Dish_wash.png";
import ScalerBusterPlus from "../assets/products/Scale_buster_plus.png";
import ScaleBuster from "../assets/products/Scale_buster.png";
import Fabricare from "../assets/products/Fabricare.png";
import CarWash from "../assets/products/Car_wash.png";
import CarpetClean from "../assets/products/Carpet_clean.png";
import VincareKit from "../assets/products/Vincare-Hygiene-kit.png";
import vincareproductsbg from "../assets/products/vincare-products-bg.png";

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
    image: Germicheck,
  },
  {
    id: "V2",
    name: "V2 Multi Clean",
    description: "Multi Purpose Cleaner",
    category: "Disinfectants & Surface Cleaners",
    image: MultiClean,
  },
  {
    id: "V7",
    name: "V7 Deep Clean",
    description: "Heavy Duty Surface Cleaner",
    category: "Disinfectants & Surface Cleaners",
    image: DeepClean,
  },
  {
    id: "V8",
    name: "V8 Degreaser",
    description: "Oil & Grease Remover",
    category: "Disinfectants & Surface Cleaners",
    image: Degreaser,
  },

  {
    id: "V10",
    name: "V10 Genteel",
    description: "Hand Wash",
    category: "Hand Hygiene",
    image: Genteel,
  },
  {
    id: "V11",
    name: "V11 Genteel Soft",
    description: "Hand Wash",
    category: "Hand Hygiene",
    image: GenteelSoft,
  },
  {
    id: "V12",
    name: "V12 Genteel Gel",
    description: "Hand Wash",
    category: "Hand Hygiene",
    image: GenteelGel,
  },
  {
    id: "V13",
    name: "V13 Bactiwash",
    description: "Anti-Bacterial Hand Wash",
    category: "Hand Hygiene",
    image: Bactiwash,
  },
  {
    id: "V14",
    name: "V14 Hand Cleanzor",
    description: "Sanitizer",
    category: "Hand Hygiene",
    image: HandCleanzor,
  },

  {
    id: "V3",
    name: "V3 Crystal Dew",
    description: "Glass Cleaner",
    category: "Glass & Surface Care",
    image: CrystalDew,
  },
  {
    id: "V4",
    name: "V4 V-Shine",
    description: "Surface Polish",
    category: "Glass & Surface Care",
    image: VShine,
  },
  {
    id: "V20",
    name: "V20 Steel Clean",
    description: "Stainless Steel Cleaner",
    category: "Glass & Surface Care",
    image: SteelKlean,
  },

  {
    id: "V5",
    name: "V5 Exotic",
    description: "Room Freshener",
    category: "Air Care & Fresheners",
    image: Exotic,
  },
  {
    id: "V17",
    name: "V17 Toilet Freshener",
    description: "Disinfectant / Freshener",
    category: "Air Care & Fresheners",
    image: ToiletFreshener,
  },

  {
    id: "V15",
    name: "V15 Dish Dew",
    description: "Vessel Cleaner",
    category: "Dishwashing & Kitchen Care",
    image: DishDew,
  },
  {
    id: "V16",
    name: "V16 Dish Wash",
    description: "Heavy Duty Vessel Cleaner",
    category: "Dishwashing & Kitchen Care",
    image: DishWash,
  },

  {
    id: "V6",
    name: "V6 Scale Buster +",
    description: "De-Scaler & Toilet Bowl Cleaner",
    category: "Scale Removers & Toilet Cleaners",
    image: ScalerBusterPlus,
  },
  {
    id: "V9",
    name: "V9 Scale Buster",
    description: "De-Scaler",
    category: "Scale Removers & Toilet Cleaners",
    image: ScaleBuster,
  },

  {
    id: "V21",
    name: "V21 Fabricare",
    description: "Washing Machine Application",
    category: "Fabric & Laundry Care",
    image: Fabricare,
  },

  {
    id: "V18",
    name: "V18 Car Wash",
    description: "Vehicle Cleaning Shampoo",
    category: "Vehicle Care",
    image: CarWash,
  },

  {
    id: "V19",
    name: "V19 Carpet Clean",
    description: "Carpet & Upholstery Cleaner",
    category: "Carpet & Upholstery Care",
    image: CarpetClean,
  },

  {
    id: "KIT",
    name: "Vincare Hygiene Kit",
    description: "All in One",
    category: "All in One",
    image: VincareKit,
  },
];

// ---------------------------------------------
// Component
// ---------------------------------------------

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return PRODUCTS.filter((p) => {
      const categoryOk =
        activeCategory === "All" ? true : p.category === activeCategory;

      const queryOk =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);

      return categoryOk && queryOk;
    });
  }, [query, activeCategory]);

  const clearFilters = () => {
    setQuery("");
    setActiveCategory("All");
  };

  return (
    <>
      <section
        className="productsBanner"
        style={{ backgroundImage: `url(${vincareproductsbg})` }}
        aria-label="Products Banner"
      >
        <div className="productsBanner__overlay">
          <div className="productsBanner__content">
            <h1>Our Products</h1>
            <p>
              Professional hygiene & cleaning solutions designed for
              performance, safety, and sustainability.
            </p>
          </div>
        </div>
      </section>
      <section
        className="productView"
        aria-label="Products"
        style={{ backgroundImage: `url(${whyVincareBG})` }}
      >
        <div className="productView__container">
          {/* 12-col grid: col-1 & col-12 are gutters */}
          <div className="productView__grid">
            {/* LEFT: col 2-5 */}
            <aside
              className="productView__filters"
              aria-label="Product filters"
            >
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
                <CategoryChip
                  label="All"
                  active={activeCategory === "All"}
                  onClick={() => setActiveCategory("All")}
                />
                {CATEGORIES.map((c) => (
                  <CategoryChip
                    key={c}
                    label={c}
                    active={activeCategory === c}
                    onClick={() => setActiveCategory(c)}
                  />
                ))}
              </div>
            </aside>

            {/* RIGHT: col 6-11 */}
            <main className="productView__results" aria-label="Product results">
              <div className="productView__resultsTop">
                <p className="productView__count">
                  Showing <strong>{filtered.length}</strong> product
                  {filtered.length === 1 ? "" : "s"}
                  {activeCategory !== "All" ? (
                    <>
                      {" "}
                      in <strong>{activeCategory}</strong>
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
                <div className="productView__cards" role="list">
                  {filtered.map((p) => (
                    <article key={p.id} className="productCard" role="listitem">
                      <div className="productCard__imgWrap">
                        <img
                          className="productCard__img"
                          src={p.image}
                          alt={`${p.name} product image`}
                          loading="lazy"
                        />
                      </div>

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
                          {/* Hook this to your ProductDetails route/modal */}
                          <button
                            type="button"
                            className="btn btn--outline"
                            onClick={() => {
                              // Example: navigate(`/products/${p.id}`)
                              console.log("View product", p.id);
                            }}
                          >
                            View Product
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </>
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
