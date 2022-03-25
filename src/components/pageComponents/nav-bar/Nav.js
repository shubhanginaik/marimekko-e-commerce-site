import React, { useContext, useEffect } from "react";

import { NavLink, Redirect } from "react-router-dom";
import "./Nav.css";
import { ReactComponent as ReactLogo } from "./logo.svg";
import { ReactComponent as ReactIcon1 } from "./shopping-bag.svg";
import { ReactComponent as ReactIcon2 } from "./icons_person.svg";
import { ReactComponent as ReactIcon3 } from "./sell-btn.svg";
import { ReactComponent as ReactIcon4 } from "./buy-btn.svg";
import { AppContext } from "../../../Context";
import { auth, db } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Nav = () => {
  
  const [itemsInCart] = useContext(AppContext);
  const [user, loading] = useAuthState(auth);

  useEffect(()=>{
    if (loading) return;
     if(!user) return loading;
  },[user,loading])

  

  // const totalPrice = itemsInCart.map(
  //   ({ price }) => (totalPrice += parseInt(price))
  // );
  // const totalPrice = itemsInCart.reduce(
  //   (prev, cur) => prev + cur.price,
  //   0
  // );

  return (
    <div className="nav-bar">
      <nav>
        <ul>
          <li>
            <NavLink to="/exploreourcollection" exact>
              <ReactIcon4 className="buy-product" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/sellproduct">
              <ReactIcon3 className="sell-product" />
            </NavLink>
          </li>
        </ul>
      </nav>

      <NavLink to="/" exact>
        <ReactLogo className="react-logo" />
      </NavLink>

      <div className="navbar-right">
        <NavLink className="cart" to="/cart">
          <ReactIcon1 className="cart-icon" />
          <div className="items_in_cart">
            <p>{itemsInCart.length}</p>
          </div>
        </NavLink>
        <NavLink to="/login">
          <ReactIcon2 className="person-icon" />
        </NavLink>
      </div>
    {user? <div>{user.displayName}</div>:''}
     
    </div>
  );
};

export default Nav;
