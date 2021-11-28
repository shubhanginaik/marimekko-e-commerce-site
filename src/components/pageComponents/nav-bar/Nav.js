import React, { useState } from "react";

import { NavLink, Redirect } from "react-router-dom";
import "./Nav.css";
import { ReactComponent as ReactLogo } from "./2 1.svg";
import { ReactComponent as ReactIcon1 } from "./heart-vector.svg";
import { ReactComponent as ReactIcon2 } from "./icons_person.svg";
import { ReactComponent as ReactIcon3 } from "./sell-your-item-btn.svg";
// import { ReactComponent as ReactLink1 } from "./Clothing.svg";
// import { ReactComponent as ReactLink2 } from "./Bag.svg";
// import { ReactComponent as ReactLink3 } from "./Others.svg";

const Nav = () => {
  return (
    <div className="nav-bar">
      <nav>
        <ul>
          <li>
            <NavLink to="/exploreourcollection" exact>
              {/* <ReactLink1 /> */}
              Clothing
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact>
              {/* <ReactLink2 /> */}
              Bags
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact>
              {/* <ReactLink3 /> */}
              Others
            </NavLink>
          </li>
        </ul>
      </nav>

      <NavLink to="/" exact>
        {/* <ReactLogo style={{ height: 150 }} /> */}
        <ReactLogo className="react-logo" />
      </NavLink>

      <div className="navbar-right">
        <NavLink to="/sellproduct">
          <ReactIcon3 className="sell-product" />
        </NavLink>

        <NavLink to="/cart">
          <ReactIcon1 className="heart-icon" />
        </NavLink>
        <NavLink to="/Login">
          <ReactIcon2 className="person-icon" />
        </NavLink>
      </div>
    </div>

    // <div>
    //   <header>
    //     <h1 className="logo" to="/" exact>
    //       <ReactLogo />
    //     </h1>
    //     <div class="header-link">
    //       <ul>
    //         <li>
    //           <NavLink to="/sellproduct">Sell your item</NavLink>
    //         </li>
    //         <li>
    //           <NavLink class="link-list" to="/" exact>
    //             Home
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink class="link-list" to="/exploreourcollection">
    //             Our collections
    //           </NavLink>
    //         </li>

    //         <li>
    //           <NavLink class="link-list" to="/Login">
    //             Login
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink class="link-list" to="/cart">
    //             <i class="fas fa-shopping-cart"></i>
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </header>
    // </div>
  );
};

export default Nav;
