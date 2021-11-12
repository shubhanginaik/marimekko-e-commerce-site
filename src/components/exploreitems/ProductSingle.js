import React from "react";
import { useParams, useHistory } from "react-router";
const ProductSingle = () => {
  let { product } = useParams();
  let history = useHistory();
  return (
    <div className="singleinfo">
      <div className="singleProduct">
        <p className="para"> {product}</p>
      </div>
      <img src={`/images/${product}.png`} alt="aproduct_picture" />
      <div>
        <button onClick={() => history.goBack()}>Back to Products</button>
      </div>
    </div>
  );
};

export default ProductSingle;
