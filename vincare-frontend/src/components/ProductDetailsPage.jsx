import React, { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import ProductDetails from "../components/ProductDetails"; // adjust path

import { PRODUCTS } from "../data/productsData"; // recommended

const DEFAULT_PRODUCT_DETAILS = {
  description:
    "Professional hygiene and cleaning solution designed for reliable day-to-day use across commercial and institutional environments.",
  formulation: {
    title: "How to Use",
    benefits: [
      "Supports routine cleaning applications",
      "Designed for dependable performance",
      "Suitable for professional hygiene workflows",
    ],
    usage: ["Use as directed for the intended application area."],
    application: "General hygiene and cleaning use",
  },
  availability: ["20 Liters", "10 Liters", "5 Liters"],
  meta: {
    use: "General Hygiene & Cleaning",
    type: "Professional Product",
  },
};

const PRODUCT_DETAIL_CONTENT = {
  V1: {
    description:
      "A neutral cleanser, disinfectant, and deodorizer suitable for washrooms and floors.",
    formulation: {
      title: "How to Use",
      benefits: [
        "Cleans washrooms and floors effectively",
        "Kills bacteria during routine cleaning",
        "Removes bad odour and leaves a pleasant fragrance",
      ],
      usage: [
        "Use the diluted Germi Check to mop the floor with a cloth.",
        "Scrub toilets with a brush after dilution.",
        "Dilution: 10-20 ML per 1 liter of water.",
      ],
      application: "Washrooms and floors",
    },
    meta: {
      use: "Washrooms & Floors",
      type: "Neutral Cleanser",
    },
  },
  V2: {
    description:
      "A neutral cleanser ideal for all types of floors, walls, tabletops, and furniture.",
    formulation: {
      title: "How to Use",
      benefits: [
        "Suitable for floors, walls, tabletops, and furniture",
        "Kills bacteria while cleaning",
        "Removes bad odour and leaves a pleasant fragrance",
      ],
      usage: [
        "Use the diluted Multi Clean to mop floors, walls, and furniture with a cloth.",
        "Dilution: 10-20 ML per 1 liter of water.",
      ],
      application: "Floors, walls, tabletops, and furniture",
    },
    meta: {
      use: "Floors, Walls & Furniture",
      type: "Neutral Cleanser",
    },
  },
  V3: {
    description:
      "A powerful and fast-drying cleaner and brightener for glass, windows, and other surfaces.",
    formulation: {
      title: "How to Use",
      benefits: [
        "Fast-drying cleaning action",
        "Brightens glass, windows, and similar surfaces",
        "Effectively removes oil and grease",
      ],
      usage: [
        "Apply Crystal Dew directly using a sprayer.",
        "Wipe the surface with a clean cloth.",
        "Dilution: Ready to use.",
      ],
      application: "Glass, windows, and other hard surfaces",
    },
    meta: {
      use: "Glass & Windows",
      type: "Fast-Drying Cleaner",
    },
  },
  V4: {
    description:
      "A neutral product designed specifically for cleaning wooden furniture.",
    formulation: {
      title: "How to Use",
      benefits: [
        "Designed for wooden furniture care",
        "Helps achieve a polished shine",
        "Supports surface-safe maintenance when patch tested first",
      ],
      usage: [
        "Apply V-Shine to the surface and rub vigorously with a clean cloth.",
        "Test on a small area first to check for surface compatibility.",
        "Dilution: Ready to use.",
      ],
      application: "Wooden furniture surfaces",
    },
    meta: {
      use: "Wooden Furniture",
      type: "Neutral Product",
    },
  },
  V5: {
    description:
      "A neutral freshening solution for rooms, lobbies, offices, and reception areas.",
    formulation: {
      title: "How to Use",
      benefits: [
        "Freshens enclosed spaces effectively",
        "Eliminates bad odour",
        "Leaves a lasting pleasant fragrance",
      ],
      usage: [
        "Spray Exotic on the desired area.",
        "Use directly wherever odour control and fragrance are needed.",
        "Dilution: Ready to use.",
      ],
      application: "Rooms, lobbies, offices, and reception areas",
    },
    meta: {
      use: "Rooms & Offices",
      type: "Freshening Solution",
    },
  },
  V6: {
    description:
      "A strong and effective scale remover for surfaces prone to heavy scale buildup, such as water closets and urinals.",
    formulation: {
      title: "How to Use",
      benefits: [
        "Removes heavy scale buildup",
        "Suitable for water closets and urinals",
        "Strong descaling action for stubborn deposits",
      ],
      usage: [
        "Apply Scale Buster Plus to the area that needs descaling.",
        "Leave it for 25-30 minutes, then scrub or brush the area.",
        "Flush with water after cleaning.",
        "Dilution: Ready to use.",
      ],
      application: "Water closets, urinals, and scale-prone surfaces",
    },
    meta: {
      use: "Water Closets & Urinals",
      type: "Scale Remover",
    },
  },
  V7: {
    description:
      "An exceptionally deep-acting heavy-duty cleaner formulated to remove organic and hydrocarbon stains from multiple surfaces.",
    formulation: {
      title: "How to Use",
      benefits: [
        "Cleans all types of surfaces and furniture",
        "Suitable for heavy-duty cleaning applications",
        "Helps remove mold, mildew, and stubborn stains",
      ],
      usage: [
        "Dilute Deep Clean before application.",
        "Use on walls, floors, ceilings, doors, counters, cabinets, and furniture as needed.",
        "Dilution: 10-20 ML in 1 liter of water.",
      ],
      application: "Walls, floors, furniture, ceilings, doors, counters, and cabinets",
    },
    meta: {
      use: "Heavy-Duty Surface Cleaning",
      type: "Heavy Duty Surface Cleaner",
    },
  },
  V8: {
    description:
      "A rigorous alkaline-based degreaser with non-foaming action for removing tough grease and grime deposits from non-porous surfaces.",
    formulation: {
      title: "How to Use",
      benefits: [
        "Removes oil, grease, and stubborn grime",
        "Non-foaming action supports manual and machine use",
        "Suitable for heavy-duty floor cleaning",
      ],
      usage: [
        "Dilute the Degreaser before use depending on soil level.",
        "Apply manually or through compatible cleaning equipment.",
        "Dilution Ratio: 20-80 ML in 1 liter of water.",
      ],
      application: "Industrial floors, machines, and chimneys to remove oil and grease",
    },
    meta: {
      use: "Industrial Degreasing",
      type: "Alkaline Degreaser",
    },
  },
  V9: {
    description:
      "An acidic cleaning product formulated for ceramic tiles, wash basins, and toilets.",
    formulation: {
      title: "How to Use",
      benefits: [
        "Removes scale buildup effectively",
        "Works on ceramic tiles, wash basins, and toilets",
        "Can be used directly for stubborn dirt",
      ],
      usage: [
        "Apply diluted Scale Buster to remove scale buildup.",
        "For stubborn dirt, use the product directly.",
        "Wear gloves while cleaning.",
        "Leave it for 25-30 minutes, scrub or brush the area, then flush with water.",
        "Dilution: 400 ML per 1 liter of water.",
      ],
      application: "Ceramic tiles, wash basins, and toilets",
    },
    meta: {
      use: "Tiles, Basins & Toilets",
      type: "Acidic Cleaning Product",
    },
  },
  V12: {
    description: "A luxurious hand lotion, ready for dispenser use.",
    formulation: {
      title: "How to Use",
      benefits: [
        "Ready for dispenser use",
        "Suitable for routine hand cleansing",
        "Simple rinse-off application",
      ],
      usage: [
        "Apply a few drops of Genteel Gel Hand Wash on your hands.",
        "Rub gently and rinse with flowing water.",
        "Dilution: Ready to use.",
      ],
      application: "Hand hygiene",
    },
    meta: {
      use: "Hand Hygiene",
      type: "Hand Lotion",
    },
  },
  V13: {
    description:
      "A neutral product suitable for use in industries, hospitals, hotels, and restaurants.",
    formulation: {
      title: "How to Use",
      benefits: [
        "Suitable for institutional and commercial use",
        "Supports regular hand hygiene routines",
        "Easy rinse-off application",
      ],
      usage: [
        "Apply a few drops of Bactiwash on your hands.",
        "Rub gently and rinse with flowing water.",
        "Dilution: Ready to use.",
      ],
      application: "Industries, hospitals, hotels, and restaurants",
    },
    meta: {
      use: "Institutional Hand Wash",
      type: "Neutral Product",
    },
  },
  V10: {
    description:
      "A low-foam hand wash that keeps hands clean while helping retain the skin's natural moisture.",
    formulation: {
      title: "How to Use",
      benefits: [
        "Cleans hands effectively",
        "Leaves a pleasant fragrance",
        "Soft on hands and suitable for regular use",
      ],
      usage: [
        "Apply a few drops on hands.",
        "Rub gently and rinse with water.",
        "Dilution: Ready to use.",
      ],
      application: "Industries, hospitals, hotels, restaurants, kitchens, and factories",
    },
    meta: {
      use: "Hand Hygiene",
      type: "Low-Foam Hand Wash",
    },
  },
  V11: {
    description:
      "A high-foaming hand wash specially formulated to give smooth lather while remaining soft on hands.",
    formulation: {
      title: "How to Use",
      benefits: [
        "Cleans hands effectively",
        "Leaves a pleasant fragrance",
        "Creates smooth lather and remains soft on hands",
      ],
      usage: [
        "Apply a few drops on hands.",
        "Rub gently for lather and rinse with water.",
        "Dilution: Ready to use.",
      ],
      application: "Industries, hospitals, hotels, and restaurants",
    },
    meta: {
      use: "Hand Hygiene",
      type: "High-Foaming Hand Wash",
    },
  },
  V16: {
    description: "A neutral cleaner for all types of vessels.",
    formulation: {
      title: "How to Use",
      benefits: [
        "Cleans all types of vessels",
        "Effectively removes bad odour",
        "Gentle on hands during use",
      ],
      usage: [
        "Dilute the Dish Wash and apply it to the vessels.",
        "Scrub with a brush and rinse with water.",
        "Dilution: 300 ML per 1 liter of water.",
      ],
      application: "All types of vessels",
    },
    meta: {
      use: "Vessel Cleaning",
      type: "Neutral Cleaner",
    },
  },
  V14: {
    description:
      "An effective hand sanitizer with a fast-evaporating, non-sticky formula for routine hand sanitization.",
    formulation: {
      title: "How to Use",
      benefits: [
        "Sanitizes and disinfects hands",
        "Leaves a pleasant fragrance",
        "Fast-evaporating formula with non-sticky feel",
      ],
      usage: [
        "Apply a few drops on hands.",
        "Rub gently until absorbed.",
        "Dilution: Ready to use.",
      ],
      application: "Industries, hospitals, hotels, and restaurants",
    },
    meta: {
      use: "Hand Sanitization",
      type: "Sanitizer",
    },
  },
  V15: {
    description:
      "A neutral vessel cleaner with abundant foam that removes tough stains while staying gentle on hands.",
    formulation: {
      title: "How to Use",
      benefits: [
        "Cleans all types of vessels",
        "Eliminates bad smell and supports easy rinsing",
        "Soft on hands and pleasantly perfumed",
      ],
      usage: [
        "Use 20-60 ML in 1 liter of water depending on the oil or dirt level.",
        "Apply onto the vessels and scrub with a brush.",
        "Rinse with water after cleaning.",
      ],
      application: "All types of vessels",
    },
    meta: {
      use: "Vessel Cleaning",
      type: "Vessel Cleaner",
    },
  },
  V17: {
    description:
      "A disinfectant cum freshener that freshens toilets while leaving a pleasant fragrance.",
    formulation: {
      title: "How to Use",
      benefits: [
        "Disinfects the area",
        "Leaves a pleasant fragrance",
        "Suitable for regular restroom freshening",
      ],
      usage: [
        "Shake well before use.",
        "Spray in the air using a sprayer.",
        "Dilution: Ready to use.",
      ],
      application: "Toilets, urinals, and wash basins",
    },
    meta: {
      use: "Restroom Freshening",
      type: "Disinfectant Cum Freshener",
    },
  },
  V18: {
    description:
      "A vehicle cleaning shampoo formulated for the automobile industry to remove oils, grease, sticky dirt, and dust.",
    formulation: {
      title: "How to Use",
      benefits: [
        "Cleans vehicle surfaces effectively",
        "Removes oil and dirt",
        "Supports easy rinsing without affecting paint finish",
      ],
      usage: [
        "Use 20-40 ML in 1 liter of water.",
        "Mix well and mop the surface with a clean cloth.",
        "Rinse with plain water.",
      ],
      application: "All types of vehicles and coaches",
    },
    meta: {
      use: "Vehicle Cleaning",
      type: "Vehicle Cleaning Shampoo",
    },
  },
  V19: {
    description:
      "An advanced carpet and upholstery cleaner formulated to generate dry foam and control over-soaking.",
    formulation: {
      title: "How to Use",
      benefits: [
        "Cleans upholstery and carpet surfaces",
        "Adds brightness and freshness to the material",
        "Tough on greasy and stubborn soils without harming fabric color",
      ],
      usage: [
        "Use 40-60 ML in 1 liter of water and mix well.",
        "Generate foam with a foaming machine and rub with a brush.",
        "Remove dirt with a vacuum cleaner.",
        "Dry using a machine or fan until fully dry.",
      ],
      application: "Carpets, upholstery, and rugs",
    },
    meta: {
      use: "Carpet & Upholstery Cleaning",
      type: "Carpet Cleaner",
    },
  },
  V20: {
    description:
      "A powerful non-scratching stainless steel cleaner for removing fingerprints, water spots, oily stains, and casual grime.",
    formulation: {
      title: "How to Use",
      benefits: [
        "Cleans stainless steel surfaces effectively",
        "Removes water spots, oily stains, and fingerprints",
        "No rinsing required after wipe-down",
      ],
      usage: [
        "Spray or rub on the area directly.",
        "Wipe with a clean cloth.",
        "Dilution: Ready to use.",
      ],
      application: "Steel products such as railings, table tops, sinks, tapware, stairs, and elevators",
    },
    meta: {
      use: "Stainless Steel Care",
      type: "Stainless Steel Cleaner",
    },
  },
  V21: {
    description:
      "A fabric-care product for washing machine application that cleans clothes while remaining soft on fabrics.",
    formulation: {
      title: "How to Use",
      benefits: [
        "Cleans clothes effectively",
        "Soft on fabrics",
        "Suitable for both front and top loading machines",
      ],
      usage: [
        "Use 60 ML per wash.",
        "Add 30 ML extra for heavy dirt.",
      ],
      application: "All types of clothes in front and top loading machines",
    },
    meta: {
      use: "Laundry Cleaning",
      type: "Washing Machine Fabric Cleaner",
    },
  },
};

export default function ProductDetailsPage() {
  const { id } = useParams();

  const product = useMemo(() => PRODUCTS.find((p) => p.id === id), [id]);

  if (!product) return <Navigate to="/products" replace />;

  const detailContent =
    PRODUCT_DETAIL_CONTENT[product.id] || DEFAULT_PRODUCT_DETAILS;

  // Build the detailed object ProductDetails expects
  const detailed = {
    name: product.name,
    category: product.category,
    tagline: product.description,
    description: detailContent.description,
    formulation: detailContent.formulation,
    availability: detailContent.availability || DEFAULT_PRODUCT_DETAILS.availability,
    meta: detailContent.meta || DEFAULT_PRODUCT_DETAILS.meta,
    backgroundImage: product.image, // or a separate banner image
    model: {
      type: "image",
      src: product.image,
      alt: `${product.name} product image`,
    },
  };

  return <ProductDetails product={detailed} />;
}
