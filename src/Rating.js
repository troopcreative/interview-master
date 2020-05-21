import React, { useState } from "react";

function Rating({ rating = 0, maxRating = 5, onRate = () => {} }) {
  const [hoveredRating, setHoveredRating] = useState(false);

  const generateRating = () => {
    let finalRating = [];
    for (let x = 0; x < maxRating; x += 1) {
      const normalRating = x + 1;
      finalRating.push(
        <div
          key={x}
          className={`rating-pip ${normalRating <= (hoveredRating || rating) ? "active" : ""}`}
          onClick={() => onRate(normalRating)}
          onMouseEnter={() => setHoveredRating(normalRating)}
        />
      );
    }
    return finalRating;
  };

  return (
    <div
      className="rating"
      onMouseLeave={() => setHoveredRating(undefined)}
    >
      {generateRating()}
    </div>
  );
}

export default Rating;
