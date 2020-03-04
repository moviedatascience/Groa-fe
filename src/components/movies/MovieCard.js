import React from "react";
import "./MovieCard.scss";

// more fields will be appearing according to the Figma file
export default function MovieCard({ name, year, rating, image }) {
  return (
    <div data-test="box" className="box">
      <img src={image} alt="Random Movie poster as a placeholder." />
      <div className="text-container">
        {/* changed to p tags because it is more accessible for screen readers */}
        <p>{name}</p>
        <p>{year}</p>
        <p>Average Rating: {rating}</p>
      </div>
    </div>
  );
}
