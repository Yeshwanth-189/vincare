import React from "react";
import ProductDetails from "./ProductDetails";
import ProductModelViewer from "./ProductModelViewer";

const germiCheck = {
  name: "Germi Check",
  category: "House Keeping Chemical – Neutral Product",
  description:
    "A multipurpose germicide that cleans, disinfects, and deodorizes in one step...",
  formulation: {
    title: "Floor & Toilet Care Formulation",
    benefits: [
      "Cleans the area",
      "Kills bacteria & germs",
      "Avoids bad odor",
      "Leaves pleasant fragrance",
    ],
    usage: [
      "Dilution Ratio: 1:50 for toilets",
      "Dilution Ratio: 1:70 for floor",
      "Mop the floor with cloth",
      "Recommended for regular use",
      "Avoid contact with eyes",
      "Not for internal consumption",
    ],
    application: "All types of flooring & toilets",
  },
  availability: ["20 Liters", "10 Liters", "5 Liters", "500 ML"],
  backgroundImage: "/images/products/germi-bg.jpg",
  model: {
    type: "component",
    component: (
      <ProductModelViewer
        glbUrl="/models/germi-check.glb"
        modelScale={1.1}
        modelRotation={[0, Math.PI * 0.15, 0]}
        modelPosition={[0, -0.2, 0]}
      />
    ),
  },
};

export default function Page() {
  return <ProductDetails product={germiCheck} />;
}
