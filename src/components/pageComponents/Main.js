import React from 'react';
import Home from './Home';
import ExploreourCollection from '../exploreitems/ExploreourCollection';
import { Switch, Route } from "react-router-dom"

const Main = () => {
    return (
        <div>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/exploreourcollection" component={ExploreourCollection} />
        </Switch>
        </div>
    );
};

export default Main;