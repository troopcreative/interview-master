import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts, rateProduct } from "./store/products/actions";
import Product from "./Product";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.list);

  useEffect(() => {
    dispatch(loadProducts());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="products">
      {Object.values(products).map(product => (
        <Product
          key={product.id}
          product={product}
          onRate={(rating) => dispatch(rateProduct(product.id, rating))}
        />
      ))}
    </div>
  );
}

export default Products;
