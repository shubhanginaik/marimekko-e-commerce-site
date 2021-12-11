import React, {Component} from "react";
import {items} from "./clothesdata";
import SingleItem from "./SingleItem";
import {Switch, Route} from "react-router";
import ProductDetail from "./ProductDetail";
import './explore-our-collection.css'

class ExploreOurCollection extends Component {
    state = {
        searchInput: "",
    };
    searchInputHandler = (event) => {
        this.setState({
            searchInput: event.target.value,
        });
    };
    itemsListing = items.map((item) => <SingleItem key={item.name} {...item} />);


    render() {
        const itemsFilter = items.filter((item) => {
            return item.name
                .toLowerCase()
                .includes(this.state.searchInput.toLowerCase());
        });
        const itemsListing = itemsFilter.map((item) => (
            <SingleItem key={item.name} {...item} />
        ));
        return (
            <Switch>
                <Route  exact path={this.props.match.path}>
                    <div className="explore-our-collection">
                    <div className="searchInput">
                        <input type="text" className="search" placeholder="Search" onChange={this.searchInputHandler}></input>
                    </div>
                    <div className="product-page">
                    {itemsListing}
                    </div>
                    </div>
                </Route>
                <Route path={`${this.props.match.path}/:product`}>
                    <ProductDetail/>
                </Route>
            </Switch>
        );
    }
}

export default ExploreOurCollection;
