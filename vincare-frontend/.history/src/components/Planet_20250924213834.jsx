import React from "react";

export default function Planet({ src, alt, width = "100%", height = "100vh" }) {
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
