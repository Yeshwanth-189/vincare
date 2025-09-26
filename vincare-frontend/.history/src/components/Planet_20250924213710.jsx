import React from "react";

export default function Planet({ src, alt, width = "50%", height = "auto" }) {
  return (
    <div className="image-container">
      <img
        src={src}
        alt={alt}
        style={{
          width: width,
          height: height,
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
    </div>
  );
}
