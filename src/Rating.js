import React from "react";

function Rating({ rating = 0, maxRating = 5, onRate = () => {} }) {
  const generateRating = () => {
    let finalRating = [];
    for (let x = 0; x < maxRating; x += 1) {
      const normalRating = x + 1;
      finalRating.push(
        <div
          key={x}
          className={`rating-pip ${normalRating <= rating ? "active" : ""}`}
          onClick={() => onRate(normalRating)}
        />
      );
    }
    return finalRating;
  };

  return <div className="rating">{generateRating()}</div>;
}

export default Rating;
