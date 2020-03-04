import React from "react";

// more fields will be appearing according to the Figma file
export default function MovieCard({ name, year, rating }) {
  return (
    <div data-test="box" className="box">
      <div className="movie-poster"></div>
      <div className="text-container">
        {/* changed to p tags because it is more accessible for screen readers */}
        <p style={{ color: "#0000EE" }}>{name}</p>
        <p>{year}</p>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
}
