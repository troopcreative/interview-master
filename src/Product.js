import React from "react";
import Rating from "./Rating";

function Product({ product, onRate = () => {} }) {
  return (
    <div className="product">
      <div className="container">
        <h3 className="title">{product.title}</h3>
        <p className="description">{product.description}</p>

        <div className="rating-container">
          <span className="rating-text">
            Rating:
          </span>
          <Rating
            rating={product.rating}
            onRate={onRate}
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
