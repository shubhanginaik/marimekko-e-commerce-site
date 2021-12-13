import React, { useContext } from "react";
import { AppContext } from "../../Context";
import trash from "./trash.svg";
import findMore from "./Find-more-items.svg"
import "././Cart.css";
import { items } from "../exploreitems/clothesdata";
import { useParams, useHistory } from "react-router";

const Cart = () => {
  const [itemsInCart, setItemsInCart] = useContext(AppContext);
  let totalPrice = 0;
  let history = useHistory();
  const removeItemHandle = (name) => {
    const newList = itemsInCart.filter((item) => item.name !== name);

    setItemsInCart(newList);
  };

  return (
    <div className="message_empty_cart">
      <h1 className="title">Shopping Cart</h1>
      {itemsInCart.length === 0 ? (
        <h1 className="empty_cart_msg">"No items in the cart!"</h1>
      ) : (
        <>
          {itemsInCart.map(({ name, image, price, id }) => {
            totalPrice += parseInt(price);
            return (
              <div className="container">
                <div></div>
                <div key={id}>
                  <div className="cart">
                    <div className="product">
                      <img
                        className="thumbnail"
                        src={`/images/${name}.png`}
                        alt="a product_picture"
                      />
                      <div className="product-info">
                        <h3 className="product-name">{name}</h3>
                        <div className="price-trash">
                        <h2 className="product-price">{price}</h2>

                        <button
                          className="product_remove"
                          type="button"
                          onClick={() => removeItemHandle(name)}
                        >
                          {" "}
                          <img className="trush_icon"  src={trash} alt="trash-button"/>{" "}
                        </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          
          <div className="continue-total">
          <div className="cart_total"> Total Price: {totalPrice}€</div>

          <button
            className="back_shopping_btn"
            onClick={() => history.goBack("/")}
          >
            <img className="find-more"  src={findMore} alt="findMore-button"/>
          </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
