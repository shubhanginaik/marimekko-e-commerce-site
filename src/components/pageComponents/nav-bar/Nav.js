import React from "react";

import { NavLink } from "react-router-dom";
import "./Nav.css";
import { ReactComponent as ReactLogo } from "./2 1.svg";
import { ReactComponent as ReactIcon1 } from "./icons_shopping-bag.svg";
import { ReactComponent as ReactIcon2 } from "./icons_person.svg";

const Nav = () => {
  return (
    <div className="nav-bar">
      <nav>
        <ul>
          <li>
            <NavLink to="/exploreourcollection" exact>
              Clothing
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact>
              Bag
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact>
              Others
            </NavLink>
          </li>
        </ul>
      </nav>

      <NavLink to="/" exact>
        <ReactLogo style={{ height: 150 }} />
      </NavLink>

      <div className="navbar-right">

        <NavLink to="/sellproduct">Sell your item</NavLink>

        <NavLink to="/sellproduct">
          <button>Sell your item</button>
        </NavLink>

        <NavLink to="/cart">
          <ReactIcon1 />
        </NavLink>
        <NavLink to="/Login">
          <ReactIcon2 />
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
