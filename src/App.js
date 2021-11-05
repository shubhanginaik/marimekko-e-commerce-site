import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ExploreourCollection from "./components/exploreitems/ExploreourCollection";
function App() {
  return (
    <Router>
      <h1>hello world</h1>
      <ExploreourCollection />
    </Router>
  );
}

export default App;
