import React from "react";

// more fields will be appearing according to the Figma file
export default function MovieCard({ name, year, image }) {
  return (
    <div data-test="box" className="box">
      <img src={image} alt="Random Movie poster as a placeholder." />
      <div className="text-container">
        <h3>{name}</h3>
        <p>{year}</p>
      </div>
    </div>
  );
}
