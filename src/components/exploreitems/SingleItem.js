import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./SingleItem.css";
const SingleItem = (props) => {
  const match = useRouteMatch();
  return (
    <div className="itemCard">
      <h2>{props.name}</h2>
      <img
        className="small"
        src={`https://source.unsplash.com/1600x900/?${props.name}`}
        alt="product_picture"
      />
      <p>{props.price}</p>
      <Link to={`${match.url}/${props.name}`}>Read more</Link>
      <button className="add_cart_btn">Add to Cart </button>
    </div>
  );
};

export default SingleItem;
