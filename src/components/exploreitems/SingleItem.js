import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./SingleItem.css";
import { AppContext } from "../../Context";

const SingleItem = (props) => {
  const match = useRouteMatch();
  const [itemsInCart, setItemsInCart] = useContext(AppContext);

  return (
    <div className="items-wrapper">
      <div className="itemsCard">
        <Link to={`${match.url}/${props.id}`}>
          <h2>{props.heading}</h2>
          <img src={props.file} alt="product_picture" />
          <p className="price">{props.price}</p>
        </Link>
        <button
          disabled={itemsInCart.some((item) => item.id === props.id)}
          className="add_cart_btn"
          onClick={() => {
            setItemsInCart([...itemsInCart, props]);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
