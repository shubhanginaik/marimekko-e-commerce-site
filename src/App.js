import "./App.css";
import Header from "./components/pageComponents/Header";
import Main from "./components/pageComponents/Main";
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Main />
      
    </Router>
  );
}

export default App;
