import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./SingleItem.css";
import { AppContext } from "../../Context";

const SingleItem = (props) => {
  const match = useRouteMatch();
  const [itemsInCart, setItemsInCart] = useContext(AppContext);

  console.log(itemsInCart);

  return (
    <div className="itemCard">
      <Link to={`${match.url}/${props.name}`}>
      <h2>{props.name}</h2>
      <img className="small" src={props.image} alt="product_picture" />
      <p>{props.price}</p>
      
      <button
        disabled={itemsInCart.some((item) => item.id === props.id)}
        className="add_cart_btn"
        onClick={() => {
          setItemsInCart([...itemsInCart, props]);
        }}
      >
        {" "}
        Add to Cart{" "}
      </button>
      </Link>
    </div>
  );
};

export default SingleItem;
