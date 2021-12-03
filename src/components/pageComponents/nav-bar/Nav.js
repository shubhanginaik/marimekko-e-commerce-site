import React, { useContext } from "react";

import { NavLink, Redirect } from "react-router-dom";
import "./Nav.css";
import { ReactComponent as ReactLogo } from "./logo.svg";
import { ReactComponent as ReactIcon1 } from "./shopping-bag.svg";
import { ReactComponent as ReactIcon2 } from "./icons_person.svg";
import { ReactComponent as ReactIcon3 } from "./sell-btn.svg";
import { ReactComponent as ReactIcon4 } from "./buy-btn.svg";
import { AppContext } from "../../../Context";

const Nav = () => {
  const [itemsInCart] = useContext(AppContext);
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
        {/* <ReactLogo style={{ height: 150 }} /> */}
        <ReactLogo className="react-logo" />
      </NavLink>

      <div className="navbar-right">
        <NavLink to="/cart">
          <ReactIcon1 className="cart-icon" />
          <div>{itemsInCart.length}</div>
        </NavLink>
        <NavLink to="/Login">
          <ReactIcon2 className="person-icon" />
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
