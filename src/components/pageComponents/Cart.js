import React, { useContext } from "react";
import { AppContext } from "../../Context";
import "././Cart.css";
import { useParams, useHistory } from "react-router";

const Cart = () => {
  const [itemsInCart, setItemsInCart] = useContext(AppContext);
  let totalPrice = 0;
  let history = useHistory();
  const handleRemoveItem = (e) => {
    const name = e.target.getAttribute("name");
    setItemsInCart(itemsInCart.filter((item) => item.name !== name));
  };

  return (
    <div>
      {itemsInCart.length === 0 ? (
        "no items in the cart"
      ) : (
        <>
          {itemsInCart.map(({ name, image, price, id }) => {
            totalPrice += parseInt(price);
            return (
              <div className="cart_wrapper">
                <div key={id}>
                  <div>
                    <img src={`/images/${image}.png`} alt="a product_picture" />
                  </div>
                  <div>{name}</div>
                </div>
                <div className="cart_price">{price}</div>
              </div>
            );
          })}
          <div className="total_price"> Total Price: {totalPrice}</div>
          <button onClick={() => history.goBack()}>Continue Shopping</button>
        </>
      )}
    </div>
  );
};

export default Cart;
