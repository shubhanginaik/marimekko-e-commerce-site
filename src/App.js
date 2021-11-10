import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
import ExploreourCollection from "./components/exploreitems/ExploreourCollection";
function App() {
  const Home = () => {
    return (
      <div>
        <h3>this is home page</h3>
      </div>
    );
  };
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/exploreourcollection">Explore our Collection</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/exploreourcollection" component={ExploreourCollection} />
      </Switch>
    </Router>
  );
}

export default App;
