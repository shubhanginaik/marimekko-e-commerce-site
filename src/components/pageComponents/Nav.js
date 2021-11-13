import React from "react";

import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <header>
        <h1 className="logo" to="/" exact>
          Marimekko logo
        </h1>
        <div class="header-link">
          <ul>
            <li>
              <NavLink to="/sellproduct">
                Sell your item
              </NavLink>
            </li>
            <li>
              <NavLink class="link-list" to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink class="link-list" to="/exploreourcollection">
                Our collections
              </NavLink>
            </li>

            <li>
              <NavLink class="link-list" to="/Login">
               Login
              </NavLink>
            </li>
            <li>
              <NavLink class="link-list" to="/cart">
                <i class="fas fa-shopping-cart"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Nav;
