import React, { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import ProductDetails from "../components/ProductDetails"; // adjust path
import ProductModelViewer from "../components/ProductModelViewer"; // adjust path

import { PRODUCTS } from "../data/productsData"; // recommended

export default function ProductDetailsPage() {
  const { id } = useParams();

  const product = useMemo(() => PRODUCTS.find((p) => p.id === id), [id]);

  if (!product) return <Navigate to="/products" replace />;

  // Build the detailed object ProductDetails expects
  const detailed = {
    name: product.name,
    category: product.category,
    tagline: product.description,
    description:
      "Replace this with your real long description per product. (You can store it in PRODUCTS as `longDescription`.)",
    formulation: {
      title: "Floor & Toilet Care Formulation",
      benefits: [
        "Cleans the area",
        "Kills bacteria & germs",
        "Avoids bad odor",
      ],
      usage: ["Dilution Ratio: 1:50 toilets", "Dilution Ratio: 1:70 floor"],
      application: "All types of flooring & toilets",
    },
    availability: ["20 Liters", "10 Liters", "5 Liters", "500 ML"],
    backgroundImage: product.image, // or a separate banner image
    model: {
      type: "component",
      component: (
        <ProductModelViewer
          glbUrl={`/models/${product.id}.glb`} // example mapping
          modelScale={1.1}
          modelPosition={[0, -0.2, 0]}
          modelRotation={[0, Math.PI * 0.15, 0]}
        />
      ),
    },
  };

  return <ProductDetails product={detailed} />;
}
