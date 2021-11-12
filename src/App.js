import "./App.css";
import React, { useState } from "react";
import Header from "./components/pageComponents/Header";
import Main from "./components/pageComponents/Main";
import { items } from "./components/exploreitems/clothesdata";
import Login from "./components/pageComponents/Login";


import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const { productItems } = items;
  const [cartItems, setCartItems] = useState([]);
  return (
    <Router>
      <Header />
      <Main productItems={productItems} cartItems={cartItems} />

    </Router>
  );
}

export default App;
