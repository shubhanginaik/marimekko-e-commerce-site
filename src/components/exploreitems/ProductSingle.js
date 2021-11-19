import React from "react";
import { useParams, useHistory } from "react-router";
import { items } from "./clothesdata";
const ProductSingle = () => {
  let { product } = useParams();
  let history = useHistory();
  const itemsFilter = items.filter((item) => {
    console.log("product is", product);
    return item.name.toLowerCase().includes(product.toLowerCase());
  });
  console.log("itemsFilter", itemsFilter);
  return (
    <div className="singleinfo">
      <div className="singleProduct">
        <p className="para"> {product}</p>
      </div>
      <div className="imgdes">
        <img src={`/images/${product}.png`} alt="aproduct_picture" />
        <p className="description">{itemsFilter[0].description}</p>
      </div>
      <div>
        <button onClick={() => history.goBack()}>Back to Products</button>
      </div>
    </div>
  );
};

export default ProductSingle;
