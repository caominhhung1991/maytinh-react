import React, { Component } from "react";
import ReactDOM from "react-dom";
import MayTinh from "./app/maytinh/MayTinh";

const App = () => {
  return (
    <MayTinh />
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("robot"));
