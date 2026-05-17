import ProductDetails from "./ProductDetails";

const germiCheck = {
  name: "Germi Check",
  category: "House Keeping Chemical – Neutral Product",
  description:
    "A multipurpose germicide that cleans, disinfects, and deodorizes in one step. Safe eco-friendly formulation for hospitals and facilities where controlling cross-contamination is critical. Effective against bacteria, fungi, and viruses while maintaining a neutral reaction suitable for surfaces. Commonly used in hospitals, pharmacies, offices, hostels, homes, hotels, laundry, restaurants, and the food industry—ideal for bathrooms, kitchens, gutters, and pet areas.",
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
  backgroundImage:
    "https://images.unsplash.com/photo-1581092334494-1ee75a09c2c2?auto=format&fit=crop&w=1600&q=80",
  model: {
    type: "iframe",
    src: "https://my-3d-host-or-sketchfab-embed-url",
  },
};

export default function Page() {
  return <ProductDetails product={germiCheck} />;
}
