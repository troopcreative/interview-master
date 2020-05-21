import React from "react";
import Rating from "./Rating";

function Product({ product, onRate = () => {} }) {
  return (
    <div className="product">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <Rating
        rating={product.rating}
        onRate={onRate}
      />
    </div>
  );
}

export default Product;
