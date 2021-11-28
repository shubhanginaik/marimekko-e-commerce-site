import React, { Component } from "react";
import { items } from "./clothesdata";
import SingleItem from "./SingleItem";
import { Switch, Route } from "react-router";
import ProductDetail from "./ProductDetail";

class ExploreourCollection extends Component {
  state = {
    searchInput: "",
  };
  searchInputHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };
  itemsListing = items.map((item) => (
    <SingleItem key={item.name} name={item.name} price={item.price} />
  ));
  render() {
    const itemsFilter = items.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    });
    const itemsListing = itemsFilter.map((item) => (
      <SingleItem
        key={item.name}
        name={item.name}
        price={item.price}
        image={item.image}
      />
    ));
    return (
      <Switch>
        <Route exact path={this.props.match.path}>
          <div className="searchInput">
            <h2>Search: </h2>
            <input type="text" onChange={this.searchInputHandler}></input>
          </div>
          {itemsListing}
        </Route>
        <Route path={`${this.props.match.path}/:product`}>
          <ProductDetail />
        </Route>
      </Switch>
    );
  }
}

export default ExploreourCollection;
