import React, { useContext } from "react";

import "./SingleItem.css";
import { AppContext } from "../../Context";

const Product = (props) => {
  
  const [itemsInCart, setItemsInCart] = useContext(AppContext);

  return (
    <div className="items-wrapper">
      <div className="itemsCard">
        
          <h2>{props.heading}</h2>

          <img src={props.file} alt="product_picture" /> 
          <p className="price">{`${props.price}€`}</p>
        
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

export default Product;
