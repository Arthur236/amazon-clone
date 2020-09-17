import React from "react";
import Rating from "@material-ui/lab/Rating";

import "./css/product.css";

const Product = (props) => {
  const { image, price, rating, title } = props;

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          <Rating name="product-rating" precision={0.5} value={rating}/>
        </div>
      </div>

      <img
        src={image}
        alt=""
      />

      <button>Add To Cart</button>
    </div>
  );
};

export default Product;
