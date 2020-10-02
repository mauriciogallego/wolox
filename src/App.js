import React from "react";
import "~/App.scss";
import Router from "router";
import Menu from "~/components/menu/index";

function App() {
  return (
    <div className="App">
      <Menu />
      <Router />
    </div>
  );
}

export default App;
