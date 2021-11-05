import React, { Component } from "react";
import { items } from "./clothesdata";
import SingleItem from "./SingleItem";
class ExploreourCollection extends Component {
  itemsListing = items.map((item) => (
    <SingleItem key={item.name} name={item.name} />
  ));
  render() {
    return <div>{this.itemsListing}</div>;
  }
}

export default ExploreourCollection;
