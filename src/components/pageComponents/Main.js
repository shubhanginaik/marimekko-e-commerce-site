import React from "react";
import Home from "./home-page/Home";
import SellProduct from "../SellProduct/SellProduct";
import ExploreourCollection from "../exploreitems/ExploreourCollection";
import Register from "./../loginComponents/Register";
import Reset from "./../loginComponents/Reset";
import Cart from "./Cart";
import Login from "../pageComponents/Login";
import { Switch, Route } from "react-router-dom";

const Main = (productItems, cartItems) => {
  return (
    <div>
      <Switch>
        <Route path="/sellproduct" component={SellProduct} />
        <Route path="/" exact component={Home} />
        <Route path="/exploreourcollection" component={ExploreourCollection} />
        <Route path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} />
          
        <Route path="/cart" exact component={Cart} exact />
        <Cart cartItems={cartItems} />
      </Switch>
    </div>
  );
};

export default Main;
