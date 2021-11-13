import React from "react";
import Home from "./Home";
import SellProduct from '../SellProduct/SellProduct';
import ExploreourCollection from "../exploreitems/ExploreourCollection";
import Cart from "./Cart";
import Login from "../pageComponents/Login";
import { Switch, Route } from "react-router-dom";

const Main = (productItems, cartItems) => {
  return (
    <div>
      <Switch>
      <Route path="/sellproduct" component={SellProduct}/>
        <Route path="/" exact component={Home} />
        <Route path="/exploreourcollection" component={ExploreourCollection} />
        <Route path="/Login" component={Login} />
        <Route path="/cart" exact component={Cart} exact />
        <Cart cartItems={cartItems} />
      </Switch>
    </div>
  );
};

export default Main;
