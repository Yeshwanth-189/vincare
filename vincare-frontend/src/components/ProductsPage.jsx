import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ProductsPage.css";
import whyVincareBG from "../assets/whyVincarebg.png";
import vincareproductsbg from "../assets/products/Vincareproductsbg.png";
import { PRODUCTS } from "../data/productsData";

const PRODUCTS_PER_PAGE = 6;

const CATEGORIES = [
  "Disinfectants & Surface Cleaners",
  "Hand Hygiene",
  "Glass & Surface Care",
  "Air Care & Fresheners",
  "Dishwashing & Kitchen Care",
  "Scale Removers & Toilet Cleaners",
  "Fabric & Laundry Care",
  "Vehicle Care",
  "Carpet & Upholstery Care",
];

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);
  const resultsRef = useRef(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return PRODUCTS.filter((product) => {
      const categoryOk =
        activeCategory === "All" ? true : product.category === activeCategory;
      const queryOk =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q);

      return categoryOk && queryOk;
    });
  }, [query, activeCategory]);

  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / PRODUCTS_PER_PAGE),
  );
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  //const endIndex = Math.min(startIndex + PRODUCTS_PER_PAGE, filtered.length);

  const paginatedProducts = useMemo(() => {
    return filtered.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  }, [filtered, startIndex]);

  const pageNumbers = useMemo(() => {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }, [totalPages]);

  useEffect(() => {
    setPage(1);
  }, [query, activeCategory]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const clearFilters = () => {
    setQuery("");
    setActiveCategory("All");
    setPage(1);
  };

  const handlePageChange = (nextPage) => {
    if (nextPage < 1 || nextPage > totalPages || nextPage === currentPage) {
      return;
    }

    setPage(nextPage);
    resultsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
          <div className="productView__grid">
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
                  onChange={(event) => setQuery(event.target.value)}
                />
                {query && (
                  <button
                    type="button"
                    className="productView__clear"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                  >
                    &times;
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
                {CATEGORIES.map((category) => (
                  <CategoryChip
                    key={category}
                    label={category}
                    active={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                  />
                ))}
              </div>
            </aside>

            <main
              ref={resultsRef}
              className="productView__results"
              aria-label="Product results"
            >
              <div className="productView__resultsTop">
                <div className="productView__summaryCard">
                  <p className="productView__eyebrow">Filtered catalog</p>
                </div>

                {filtered.length > 0 ? (
                  <div className="productView__pageBadge" aria-label="Page">
                    <span>Page</span>
                    <strong>{currentPage}</strong>
                    <span>/ {totalPages}</span>
                  </div>
                ) : null}
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
                <>
                  <div
                    key={`${activeCategory}-${query.trim().toLowerCase()}-${currentPage}`}
                    className="productView__cards"
                    role="list"
                  >
                    {paginatedProducts.map((product, index) => (
                      <article
                        key={product.id}
                        className="productCard"
                        role="listitem"
                        style={{ "--card-index": index }}
                      >
                        <div className="productCard__imgWrap">
                          <img
                            className="productCard__img"
                            src={product.image}
                            alt={`${product.name} product image`}
                            loading="lazy"
                          />
                        </div>

                        <div className="productCard__body">
                          <h3 className="productCard__title">{product.name}</h3>
                          <p className="productCard__desc">
                            {product.description}
                          </p>

                          <div
                            className="productCard__category"
                            aria-label="Category"
                          >
                            {product.category}
                          </div>

                          <div className="productCard__actions">
                            <Link
                              className="btn btn--outline"
                              to={`/products/${product.id}`}
                            >
                              View Product
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  {filtered.length > PRODUCTS_PER_PAGE ? (
                    <nav
                      className="productPagination"
                      aria-label="Products pagination"
                    >
                      <p className="productPagination__meta">
                        6 products per page
                      </p>

                      <div className="productPagination__controls">
                        <button
                          type="button"
                          className="productPagination__arrow"
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          Previous
                        </button>

                        <div className="productPagination__pages">
                          {pageNumbers.map((pageNumber) => (
                            <button
                              key={pageNumber}
                              type="button"
                              className={`productPagination__page ${
                                currentPage === pageNumber ? "is-active" : ""
                              }`}
                              onClick={() => handlePageChange(pageNumber)}
                              aria-current={
                                currentPage === pageNumber ? "page" : undefined
                              }
                            >
                              {pageNumber}
                            </button>
                          ))}
                        </div>

                        <button
                          type="button"
                          className="productPagination__arrow"
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          Next
                        </button>
                      </div>
                    </nav>
                  ) : null}
                </>
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
