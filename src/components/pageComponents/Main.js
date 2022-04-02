import React from "react";
import Home from "./home-page/Home";
import SellProduct from "../SellProduct/SellProduct";
import ExploreourCollection from "../exploreitems/ExploreourCollection";
import BuyWithFirebase from "../exploreitems/BuyWithFirebase";
import Register from "./../loginComponents/Register";
import Reset from "./../loginComponents/Reset";
import Dashboard from "../loginComponents/Dashboard";
import Cart from "./Cart";
import Login from "../pageComponents/Login";
import { Switch, Route } from "react-router-dom";
import LoginNew from "../loginComponents/LoginNew";
import LogoutRedirect from "../loginComponents/LogoutRedirect";
import Buywith from "../exploreitems/Buywith";
const Main = (productItems, cartItems) => {
  return (
    <div>
      <Switch>
        <Route path="/sellproduct" component={SellProduct} />
        <Route path="/" exact component={Home} />
        <Route path="/exploreourcollection" component={Buywith} />
        <Route path="/login" component={LoginNew} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/reset" component={Reset} />
        <Route exact path="/" component={Dashboard} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/" exact component={LogoutRedirect} />
        <Cart cartItems={cartItems} />
      </Switch>
    </div>
  );
};

export default Main;
