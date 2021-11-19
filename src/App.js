import "./App.css";
import React from "react";
import Header from "./components/pageComponents/Header";
import Main from "./components/pageComponents/Main";
import { AppProvider } from "./Context";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppProvider>
        <div className="max-width">
          <Header />
          <Main />
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;
