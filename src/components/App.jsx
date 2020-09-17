import React from "react";

import Header from "./Header";
import Home from "./Home";

import "./css/app.css";

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Home/>
    </div>
  );
};

export default App;
